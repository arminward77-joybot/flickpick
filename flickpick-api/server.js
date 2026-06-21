const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;
const TMDB_API_KEY = process.env.TMDB_API_KEY || 'c8da188ad93375d4287057f21f67b9b8';
const TMDB_BASE = 'https://api.themoviedb.org/3';

// ---------------------------------------------------------------------------
// CORS — allow your GitHub Pages frontend (and localhost for dev)
// ---------------------------------------------------------------------------
const allowedOrigins = [
  'https://arminward77-joybot.github.io',
  'http://localhost:3000',
  'http://localhost:5500',
  'http://127.0.0.1:5500',
];

app.use(cors({
  origin: (origin, cb) => {
    // Allow requests with no origin (mobile apps, curl, etc.)
    if (!origin) return cb(null, true);
    if (allowedOrigins.some(o => origin.startsWith(o))) return cb(null, true);
    cb(null, true); // Open during early development — tighten later
  },
}));

app.use(express.json());

// ---------------------------------------------------------------------------
// In-memory cache with TTL
// ---------------------------------------------------------------------------
const cache = new Map();

function cacheGet(key) {
  const entry = cache.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expires) {
    cache.delete(key);
    return null;
  }
  return entry.data;
}

function cacheSet(key, data, ttlSeconds) {
  cache.set(key, { data, expires: Date.now() + ttlSeconds * 1000 });
}

// Periodic cleanup of expired entries (every 10 minutes)
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of cache) {
    if (now > entry.expires) cache.delete(key);
  }
}, 10 * 60 * 1000);

// ---------------------------------------------------------------------------
// TMDB fetch helper with built-in rate-limit retry
// ---------------------------------------------------------------------------
async function tmdbFetch(path, queryParams = {}) {
  const params = new URLSearchParams({ api_key: TMDB_API_KEY, ...queryParams });
  const url = `${TMDB_BASE}${path}?${params}`;

  let resp = await fetch(url);

  // TMDB returns 429 if rate-limited — wait and retry once
  if (resp.status === 429) {
    const retryAfter = parseInt(resp.headers.get('retry-after') || '2', 10);
    await new Promise(r => setTimeout(r, retryAfter * 1000));
    resp = await fetch(url);
  }

  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`TMDB ${resp.status}: ${text}`);
  }

  return resp.json();
}

// ---------------------------------------------------------------------------
// ROUTES
// ---------------------------------------------------------------------------

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'flickpick-api', cached_entries: cache.size });
});

// GET /api/genres — cached for 24 hours
app.get('/api/genres', async (req, res) => {
  try {
    const cacheKey = 'genres';
    const cached = cacheGet(cacheKey);
    if (cached) return res.json(cached);

    const data = await tmdbFetch('/genre/movie/list', { language: 'en-US' });
    cacheSet(cacheKey, data, 86400); // 24 hours
    res.json(data);
  } catch (err) {
    console.error('Genre fetch error:', err.message);
    res.status(502).json({ error: 'Failed to fetch genres' });
  }
});

// GET /api/discover?page=1&with_genres=28,12&... — cached for 15 minutes
app.get('/api/discover', async (req, res) => {
  try {
    // Pass through all query params the frontend sends (minus api_key)
    const { api_key, ...userParams } = req.query;
    const cacheKey = `discover:${JSON.stringify(userParams)}`;
    const cached = cacheGet(cacheKey);
    if (cached) return res.json(cached);

    const data = await tmdbFetch('/discover/movie', { language: 'en-US', ...userParams });
    cacheSet(cacheKey, data, 900); // 15 minutes
    res.json(data);
  } catch (err) {
    console.error('Discover fetch error:', err.message);
    res.status(502).json({ error: 'Failed to fetch movies' });
  }
});

// GET /api/movie/:id — full details, cached for 6 hours
app.get('/api/movie/:id', async (req, res) => {
  try {
    const movieId = req.params.id;
    const cacheKey = `movie:${movieId}`;
    const cached = cacheGet(cacheKey);
    if (cached) return res.json(cached);

    const data = await tmdbFetch(`/movie/${movieId}`, {
      language: 'en-US',
      append_to_response: 'credits,watch/providers',
    });
    cacheSet(cacheKey, data, 21600); // 6 hours
    res.json(data);
  } catch (err) {
    console.error('Movie detail fetch error:', err.message);
    res.status(502).json({ error: 'Failed to fetch movie details' });
  }
});

// GET /api/movie/:id/images — cached for 24 hours
app.get('/api/movie/:id/images', async (req, res) => {
  try {
    const movieId = req.params.id;
    const cacheKey = `images:${movieId}`;
    const cached = cacheGet(cacheKey);
    if (cached) return res.json(cached);

    const data = await tmdbFetch(`/movie/${movieId}/images`, {
      include_image_language: 'en,null',
    });
    cacheSet(cacheKey, data, 86400); // 24 hours
    res.json(data);
  } catch (err) {
    console.error('Images fetch error:', err.message);
    res.status(502).json({ error: 'Failed to fetch images' });
  }
});

// GET /api/movie/:id/videos — cached for 24 hours
app.get('/api/movie/:id/videos', async (req, res) => {
  try {
    const movieId = req.params.id;
    const cacheKey = `videos:${movieId}`;
    const cached = cacheGet(cacheKey);
    if (cached) return res.json(cached);

    const data = await tmdbFetch(`/movie/${movieId}/videos`, { language: 'en-US' });
    cacheSet(cacheKey, data, 86400); // 24 hours
    res.json(data);
  } catch (err) {
    console.error('Videos fetch error:', err.message);
    res.status(502).json({ error: 'Failed to fetch videos' });
  }
});

// GET /api/movie/:id/recommendations — "more like this", cached for 6 hours
app.get('/api/movie/:id/recommendations', async (req, res) => {
  try {
    const movieId = req.params.id;
    const cacheKey = `recs:${movieId}`;
    const cached = cacheGet(cacheKey);
    if (cached) return res.json(cached);

    const data = await tmdbFetch(`/movie/${movieId}/recommendations`, { language: 'en-US' });
    cacheSet(cacheKey, data, 21600); // 6 hours
    res.json(data);
  } catch (err) {
    console.error('Recommendations fetch error:', err.message);
    res.status(502).json({ error: 'Failed to fetch recommendations' });
  }
});

// ---------------------------------------------------------------------------
// START
// ---------------------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`FlickPick API running on port ${PORT}`);
  console.log(`Cache TTLs: genres=24h, discover=15m, details=6h, images=24h, videos=24h`);
});
