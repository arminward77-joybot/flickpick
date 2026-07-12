# FlickPick Roadmap

_Last updated: July 12, 2026 (evening) — after the 35-fix review batch **and** the feature batch (onboarding, search, people pages, provider logos & deep links, party hero results, streak chip, skeletons, cloud-sync hardening, auth fixes)._

---

## ✅ Shipped (already in the app)

**Core discovery & swiping**
- Live TMDB integration — discover feed, full details, images, trailers, watch providers
- Swipe deck with gesture physics: right = Save, left = Nope, up = Watched
- Rewind / undo last swipe
- Daily swipe streak — tracked **and shown as a 🔥 chip in the Discover header**
- Horizontally scrollable mood/genre pills
- Filter panel — genre chips + dual-handle year range (genres merge with the active mood pill)
- **First-run onboarding taste picker** — genres + streaming services + region seed the very first deck (cold-start bias until real swipe signal takes over)
- **Search on Discover** — movies *and* people via TMDB search, straight from the header 🔍
- Photo gallery tap-through on each card, near-duplicate stills filtered
- **Loading skeletons** on the deck + next-poster preload so swipes feel instant

**Streaming availability**
- **Real provider logos** on cards and in the detail panel (was colored text chips)
- **"Where to watch" deep links** — tapping a provider badge or the ↗ link opens TMDB's regional watch page (JustWatch data) for that movie
- Region setting (Profile → Settings) drives all provider lookups; also set during onboarding
- "For Digital Rent or Purchase" fallback links to the same watch page

**Lists & ratings**
- Watchlist with To Watch / Watched tabs, search, and sort (recent / rating / title / year / **runtime**)
- Tap any saved movie → full detail panel; ✓ mark-watched-and-rate from the list
- Slide-to-rate star rating + optional written review — reviews now display on watched rows
- Share a single movie or your whole watchlist
- Watchlist check-in — stale saves resurface between swipes ("watched yet?")

**Detail panel & people**
- Full detail panel — synopsis, genres, cast, provider logos, **Save / Trailer action row**
- **People pages** — tap any cast member or the director for photo, bio, and a filmography grid; filmography opens movie details; people are searchable too
- Inline trailer playback (FAB on deck, button in detail, button on party results)

**Profile**
- Stats, Swipe Insights, Top 3 movies, taste-profile genre chart, streaming services
- Dark / light theme toggle
- Region selector
- **Sign Out (wired!)** — doubles as "Sign In or Create Account" for guests
- In-app account deletion; guest data clear

**Recommendations / learning (v2)**
- Taste model from saves, star ratings, and NOPEs; deep cuts from TMDB recommendations
- Onboarding genres bias the cold-start feed until the model has signal
- Periodic "Because You Liked" spotlight

**Accounts & sync**
- Firebase email/password auth + Google & Apple social login
- **Password reset** ("Forgot password?" on the Log In tab)
- **Hardened Firestore cloud sync** — merges by movie id (union, newest wins), a conflict guard pulls+merges before every save (no more second-device clobbers), distinguishes "no cloud doc" from "read error", and flushes pending saves when the tab closes
- Guest mode; guest data merges (not wipes) when logging into an account

**Party Mode (real-time, Firebase Realtime DB)**
- Create / join 6-digit rooms, live member list, reactions, ghost-member cleanup
- **Results hero card** — top match celebrated with poster banner, "N of M said yes," and jump-to **Trailer / Details / Schedule** buttons
- **Schedule Movie Night sheet** — proper date/time pickers (was `prompt()` dialogs) + countdown
- Member ids are now Firebase auth uids, so the tightened security rules can verify identity

---

## ⚠️ Action needed (one manual step)

- **Deploy the new Realtime Database rules** — `database.rules.json` was rewritten so only room members can write votes/reactions, only hosts can manage rooms, and stale rooms are deletable. The repo file is NOT live until you publish it in the Firebase console. **Steps: see `FIREBASE_RULES_DEPLOY.md`.**

---

## 🚧 Built but not finished / needs wiring

- **Backend proxy not connected** — `flickpick-api/` is written but the frontend still calls TMDB directly with the API key exposed in `index.html`. Switching = one URL change + a deploy. (Add `/search` and `/person` routes to the proxy first — Discover search and people pages call those endpoints directly.)

---

## 📋 Remaining features (still open)

### 🟡 Medium effort
- **Specific Actor filter** — TMDB person search wired into discover (`with_cast`)
- **Start Session from a movie** — seed a recommendation run from one title

### 🟠 Significant effort
- **5-question mood survey** — map answers to TMDB discover params
- **Push notifications** — needs an FCM VAPID key + APNs certs (App Store build) and a small sender backend; also the in-app notification center groundwork

### 🔴 Major features
- **Social layer** — public reviews, follow system, activity feed, moderation
- **Timestamped comments** (Crunchyroll/SoundCloud-style scrubber)
- **Production infrastructure** — deploy the proxy, secure keys, Firebase App Check

---

_`UX_IMPROVEMENTS.md` and `LAUNCH_READINESS.md` are historical planning docs from June — trust this file and the Flickpick Review Roadmap artifact over them where they disagree._
