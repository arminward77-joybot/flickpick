# FlickPick Roadmap

_Last updated: June 21, 2026 — reconciled against the current `index.html` build._

---

## ✅ Shipped (already in the app)

**Core discovery & swiping**
- Live TMDB integration — discover feed, full details, images, trailers, watch providers
- Swipe deck with gesture physics: right = Save, left = Nope, up = Watched
- Rewind / undo last swipe
- Daily swipe streak tracking
- Horizontally scrollable mood/genre pills
- Filter panel — genre chips + dual-handle year range _(legacy streaming filter removed)_
- "For Digital Rent or Purchase" fallback when no streaming providers
- Photo gallery tap-through on each card (Tinder-style)
- Share button repositioned onto the poster

**Lists & ratings**
- Watchlist with To Watch / Watched tabs, search, and sort
- Slide-to-rate star rating + optional written review
- Share a single movie or your whole watchlist (Web Share API + clipboard fallback)

**Detail & trailers**
- Full movie detail panel — synopsis, genres, cast
- Inline trailer playback (floating ▶ button → fullscreen YouTube)

**Profile**
- Stats: swiped, saved, avg rating, total watch time, films logged
- Swipe Insights: streak, save rate, favorite genre, pickiest genre
- Top 3 movies + taste-profile genre chart
- Dark / light theme toggle

**Recommendations / learning (v2)**
- Taste model built from saves, star ratings, and NOPEs (left-swipes) — biases the discover feed toward your favorite genres and away from disliked ones
- Blends in "deep cuts" pulled from TMDB recommendations seeded by your top-rated films
- Balanced re-ranking keeps variety; personalization kicks in after a few swipes (cold start stays broad, no labels)
- Still surfaces a periodic spotlight pick with a "because" reason

**Accounts & sync**
- Firebase email/password auth + Google & Apple social login
- Firestore cloud sync across devices
- "Skip for now" guest mode

**Party Mode (real-time, Firebase Realtime DB)**
- Create / join 6-digit room codes
- Group swiping with live member list & reactions
- Match results + "Schedule Movie Night" countdown

---

## 🚧 Built but not finished / needs wiring

- **Backend proxy not connected** — `flickpick-api/` is written (TMDB proxy + caching) but the frontend still calls TMDB directly with the API key exposed in `index.html`. Switching is a one-line URL change + a deploy.
- **Profile partially hardcoded** — display name & avatar update on login, but the `@handle` and the guest/skip default ("Armin") are still static.
- **Placeholder settings rows** — Notifications, Region, Account, About are visual-only (no action wired).
- **Region locked to US** — streaming availability uses `watch_region: 'US'` everywhere.

---

## 📋 Remaining features (still open)

### 🟡 Medium effort
- **Search bar on Discover** — jump to a specific title (search only exists in Watchlist today)
- **Streaming logos/bugs** instead of colored text badges
- **Specific Actor filter** — TMDB person search wired into discover
- **People database** — actor/director pages with bio, photos, filmography
- **Start Session from a movie** — seed a recommendation run from one title
- **Onboarding flow** — welcome + genre/service setup so the first deck isn't cold-start

### 🟠 Significant effort
- **5-question mood survey** — map answers to TMDB discover params
- **Notification system** — types, storage, badges, movie-night reminders

### 🔴 Major features
- **Social reviews + feed** — public reviews, follow system, moderation
- **Timestamped comments** (Crunchyroll/SoundCloud-style scrubber)
- **Production infrastructure** — deploy the proxy, secure keys, scale Firebase rules

---

_See `UX_IMPROVEMENTS.md` for the prioritized polish + UX enhancement list._
