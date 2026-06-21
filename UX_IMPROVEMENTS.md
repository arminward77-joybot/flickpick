# FlickPick — UX Improvement List

_Prioritized from a full review of the current build (June 21, 2026). Each item: **what**, **why it matters**, and rough **effort**._

---

## ⭐ Top 5 to do first
The highest impact-to-effort wins, grounded in gaps found in the current app.

1. **Fail gracefully when movies don't load** _(S)_ — A failed TMDB fetch only logs to the console; the user sits on "Loading movies…" forever. Add an error card with a **Try Again** button + offline detection.
2. **Finish profile personalization** _(S)_ — The `@handle` is hardcoded (`@armin_picks`) and guest mode shows "Armin". Derive the handle from the name, add an editable display name/avatar, and a real guest state.
3. **First-run onboarding / taste picker** _(M)_ — New users drop straight into a generic popularity deck. A 20-second "pick a few genres + your streaming services" intro warms up the deck and recommendations immediately. **Biggest single UX lever.**
4. **Fix the Discover tab icon** _(XS)_ — It's currently a gear (⚙), which universally reads as "settings." Swap for a compass/flame/cards icon so the primary tab is legible.
5. **Wire up or hide placeholder settings** _(S)_ — Notifications, Region, Account, and About are dead rows. Rows that do nothing erode trust — either make them work or remove them. (Region especially: streaming is hardcoded to US.)

---

## 🟢 Polish & friction fixes (quick wins)

- **Empty states everywhere** _(S)_ — First-time Watchlist, Profile, and recommendations all start empty. Add friendly prompts ("Save 5 movies to unlock recommendations," "Your top films will show here").
- **Confirm destructive actions** _(S)_ — "Start Over" wipes the whole deck, Sign Out, and list removals happen instantly. Add a confirm step or an "Undo" toast.
- **Loading skeletons over spinners** _(S)_ — Replace the single "Loading movies…" spinner with a card skeleton, and preload the next card's poster so swipes feel instant.
- **Make undo discoverable** _(S)_ — The ↩ rewind button is easy to miss. Show a brief "Skipped — Undo?" toast after each swipe.
- **Surface the streak on Discover** _(S)_ — The daily streak is computed but buried in Profile. A small flame counter on the discover header reinforces the habit.

## 🔵 Discovery & recommendations

- **Search on Discover** _(M)_ — Let users find a specific title/actor instead of only swiping. (Search exists in Watchlist; reuse it.)
- **Show "why this movie"** _(S)_ — The rec engine already computes a reason ("Action movies you love") — surface it as a badge on recommended cards to build trust.
- **Region selector** _(M)_ — Streaming availability is US-only today; a region setting makes providers correct for international users.
- **Streaming logos instead of text badges** _(M)_ — Faster recognition and a more premium feel than colored text chips.
- **Recommendation v2** _(L)_ — Learn from left-swipes (not just ratings) and inject occasional deep cuts / cult classics to avoid an all-popular feed.

## 🟣 Engagement & retention

- **Notifications** _(L)_ — Even local ones: "Your party matched a movie," movie-night reminders (the countdown exists but never pings), new releases in a favorite genre.
- **Richer party results** _(M)_ — Celebrate the match more (poster hero, "X of Y agreed"), and let the group jump straight to the trailer or schedule from results.
- **Watchlist polish** _(M)_ — Sort/filter by genre, runtime, or rating; mark "watched" directly from the list.

## ⚙️ Foundational (UX via reliability)

- **Deploy & connect the proxy** _(M)_ — Removes the exposed API key and adds caching → faster loads and fewer rate-limit failures. The backend is already written; this is mostly deploy + a one-line URL swap.
- **Accessibility pass** _(M)_ — Keyboard controls for swiping (←/→/↑), honor `prefers-reduced-motion` for swipe/confetti animations, trap focus when sheets/panels open, and `aria-live` on toasts.

## 🚀 Bigger bets (later)

- **People / filmography pages** _(L)_ — Tap an actor or director to see their bio and films.
- **Social reviews + feed** _(XL)_ — Public reviews, follows, a discovery feed of friends' picks.
- **Timestamped comments** _(XL)_ — Scrubber-anchored notes, Crunchyroll/SoundCloud style.

---

**Effort key:** XS = minutes · S = an hour or two · M = 1–3 days · L = ~1 week · XL = multi-week
