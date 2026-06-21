# FlickPick — Launch Readiness

_What stands between the current build and a public launch, ordered by urgency. Assessed against the code on June 21, 2026._

The app is genuinely feature-rich — discovery, learning feed, watchlist, ratings, party mode, auth, cloud sync. The gaps below are mostly about **security, legal, and resilience**, not features.

---

## 🔴 Hard blockers — fix before letting strangers in

1. **Secure the TMDB API key.** The key is hardcoded in `index.html`, which is public on GitHub and GitHub Pages. At any real scale it will be scraped and abused, and TMDB can revoke it — breaking the app for everyone. _Fix:_ deploy the `flickpick-api` proxy (it's already written), point `FLICKPICK_API` at it, then **rotate the exposed key** (the old one is already compromised). _Effort: M._

2. **Lock down Firebase security rules.** ⚠️ I can't see these from the code — they live in the Firebase console. If Firestore / Realtime DB are still in "test mode" (`allow read, write: if true`), **anyone can read, modify, or wipe every user's data and every party room.** This is the single most dangerous unknown. _Fix:_ scope rules so users only read/write their own document, and party rooms require membership. _Effort: M — but verify TODAY._

3. **Real Terms of Service + Privacy Policy.** You collect emails and passwords (Firebase auth) and store user data. The auth screen's "Terms" and "Privacy Policy" links are empty (`<a>` with no destination). Publishing account-collection without these is a legal exposure (GDPR/CCPA). _Fix:_ write both, link them. _Effort: S–M (mostly copy)._

4. **TMDB attribution.** TMDB's API terms require visible attribution + their logo ("This product uses the TMDB API but is not endorsed or certified by TMDB"). The app shows "TMDB" as a rating label but has no proper attribution. _Fix:_ add the statement + logo (e.g., on the profile/about screen and auth footer). _Effort: XS._

---

## 🟠 Important — should fix for a real user base

5. **Password reset (and ideally email verification).** Auth is signup/login only — there's no "Forgot password?". Real users will lock themselves out. Firebase makes this a few lines (`sendPasswordResetEmail`). _Effort: S._

6. **Error + retry for failed movie loads.** The *initial* connect shows a "Could not connect to TMDB" message, but mid-session page loads (`loadMoreMovies`) fail silently to the console — on a flaky phone connection the deck just stops with no feedback. _Fix:_ user-facing error card + Retry. _Effort: S._

7. **Finish or hide placeholder UI.** Settings rows (Notifications, Region, Account, About) do nothing, and the profile `@handle` is hardcoded. Dead-ends read as "unfinished" to new users. _Fix:_ wire them or remove them. _Effort: S–M._

8. **Region support.** Streaming availability is hardcoded to the US (`watch_region: 'US'`). For a global audience, providers will be wrong or empty. _Fix:_ a region setting (ties into #7's Region row). _Effort: M._

9. **Analytics + error monitoring.** There's no analytics and no crash/error reporting. Once strangers are using it you'll be blind to usage and breakage. _Fix:_ a lightweight analytics tool + error reporting. _Effort: S._

10. **Onboarding / taste picker.** New users land in a generic feed and the learning engine has no signal yet. A 20-second genre/service intro warms up the feed from swipe one — big retention lever. _Effort: M._

---

## 🟡 Polish — fine to do shortly after launch

11. **Make it a PWA.** There's no manifest, service worker, app icon, or theme-color — so no "Add to Home Screen," no offline, no real app feel. For a mobile swipe app this is a high-value add. _Effort: S–M._

12. **Favicon + social meta.** No favicon, no `og:`/`twitter:` tags — shared links show no preview, and browser tabs show a blank icon. _Fix:_ favicon + Open Graph image/description. _Effort: XS–S._

13. **Accessibility pass.** Keyboard swipe controls, `prefers-reduced-motion`, focus management for sheets/panels, alt text. Matters for inclusivity (and some legal regimes). _Effort: M._

14. **Cross-browser / device QA.** The aspect-ratio bug showed Safari quirks exist — test the real flow on iOS Safari and Android Chrome before launch. _Effort: M._

15. **Consistent tab icons + custom domain.** Convert all tab icons to one line-icon set (only Discover is updated), and consider a real domain over `github.io/flickpick`. _Effort: S each._

---

## Can't be checked from the code (verify externally)
- **Firebase security rules** (Firebase console) — see #2.
- **Whether the exposed TMDB key has already been abused/flagged** (TMDB account).
- **Whether Google/Apple social login are fully configured** (OAuth consent screens, Apple Developer setup) — the code is wired, but the provider config lives outside the repo.

## The realistic "minimum to launch" set
If you want the shortest safe path: **#1 (proxy + rotate key), #2 (Firebase rules), #3 (Terms/Privacy), #4 (TMDB attribution), #5 (password reset), #6 (error/retry).** Everything else can follow.
