# FlickPick Roadmap (ranked easiest → hardest)

## 🟢 Quick Wins (hours)
1. **Remove progress bar/number** from top of Discover — delete a few lines of HTML/CSS
2. **Remove streaming service filter** — delete the section from filter panel
3. **Change "+" button to "Seen"** — relabel + restyle one button
4. **"For Digital Rent or Purchase" fallback** — one conditional check when no streaming providers
5. **Full poster visible / no title overlay** — CSS restructure: move title below poster instead of overlaying
6. **Move share button to bottom-right of poster** — reposition one element
7. **Swipeable genre pills row** — add horizontal scroll + touch momentum to existing mood row

## 🟡 Medium Effort (1–3 days each)
8. **Search button at top of Discover** — add search bar + wire to TMDB search endpoint
9. **Replace streaming text with logos/bugs** — source SVG icons for each service, render inline
10. **Hinge-style filter redesign** — restyle filter panel (layout, typography, animations)
11. **Add "Specific Actor" filter** — TMDB person search endpoint + wire into discover
12. **More refined profile section** — redesign layout, better stats, taste visualization, avatar
13. **Tinder-style image gallery** — fetch TMDB movie images endpoint, build swipeable photo carousel on card
14. **People database (actors/directors)** — TMDB person endpoint, filmography page, bio, photos
15. **Start Session button** — UI + logic to seed a recommendation session from a specific movie
16. **Onboarding flow** — welcome screens, account setup prompts, taste quiz before first swipe

## 🟠 Significant Effort (1–2 weeks each)
17. **Trailer inline playback** — fetch TMDB videos endpoint (YouTube links), embed player on card
18. **5-question mood survey** — design survey UX, map answers to TMDB discover params
19. **Notification system** — design notification types, storage, UI section, badge counts
20. **AI recommendation engine** — track swipe/rating patterns, build preference model, surface deep pulls and cult classics
21. **User auth + accounts** — Firebase/Supabase auth, cross-device sync, migrate localStorage to cloud

## 🔴 Major Features (weeks–months)
22. **Social reviews + feed** — user-generated reviews, public feed, follow system, moderation
23. **Timestamped comments (Crunchyroll/SoundCloud style)** — timeline scrubber UI, comment anchoring to timecodes, real-time updates
24. **Party Mode backend** — WebSocket/Firebase real-time group swiping, room management
25. **Backend proxy + production infra** — API key security, server, hosting, scaling
