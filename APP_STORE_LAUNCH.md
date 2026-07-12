# FlickPick → App Store: the complete path

_From "working web app on GitHub Pages" to "people downloading it from the App Store." Researched June 2026._

## The one thing to understand first

FlickPick is a **web app** (a single HTML page). The App Store only distributes **native iOS apps**. So you can't upload your website — you have to ship a native app. Two routes:

- **Wrap the existing web app with Capacitor** (recommended) — Capacitor packages your HTML/JS into a real iOS app you can submit. You keep your codebase. You'll need your Mac (you have a Mac mini) + Xcode.
- **Rebuild natively** (Swift or React Native) — best long-term feel, but essentially a rewrite. Not worth it yet.

**The catch that trips up most people:** Apple's **Guideline 4.2 ("minimum functionality")** rejects apps that are just a website in a shell. A bare wrapper *will* get rejected. To pass, the app must do native things a website can't — push notifications, offline handling, a device feature. So the real work isn't the wrapping (that's a day); it's making it "app-worthy" and clearing Apple's rules. Budget **~3–5 weeks**.

---

## Phase 0 — Legal & data prerequisites (do these first; they can block everything)

1. **Sort out TMDB licensing.** TMDB's API is free **only for non-commercial use**. If FlickPick ever earns money (ads, subscriptions, in-app purchases), you need a **written commercial agreement with TMDB** (commercial licensing runs ~$149/mo). A free app with zero revenue is usually fine, but it's a gray area — email TMDB to confirm your use case before launch. Either way you **must** add their attribution: the line *"This product uses the TMDB API but is not endorsed or certified by TMDB"* plus the TMDB logo, shown less prominently than your own branding.
2. **Write a real Privacy Policy and Terms of Service**, hosted at public URLs. Apple requires a privacy policy URL to submit. (Your current Terms/Privacy links are empty.) You collect emails, ratings, and identifiers, so this is mandatory.
3. **Secure the TMDB key + lock Firebase rules** (from your launch-readiness doc). Deploy the proxy, rotate the exposed key, and confirm your Firestore/Realtime DB rules aren't open. A shipped app makes the exposed key far more attractive to abuse.
4. **Add in-app account deletion.** Apple **Guideline 5.1.1(v)** requires any app with account sign-up to let users delete their account (and data) *from inside the app* — not just disable it. FlickPick has accounts but no delete option today. This is a hard requirement; build it into Profile → Account.

---

## Phase 1 — Make it pass Guideline 4.2 (the rejection risk)

Add native capabilities so it's not a "lazy wrapper." You need at least a couple of these, and they happen to overlap with your roadmap:

- **Push notifications** — via Capacitor's Push Notifications plugin + Firebase Cloud Messaging. (Ties to your "notification system" roadmap item: party matches, movie-night reminders, watchlist nudges.)
- **Offline handling** — never show a white screen when the network drops. Cache the shell and show a friendly offline state. (Your poster-load fallback already helps.)
- **A native device feature** — e.g., native share sheet, haptics on swipe, or biometric lock. Even haptic feedback on swipes helps demonstrate "app-like."
- **Native splash screen + app icon** (Phase 3).

Document these in your reviewer notes so Apple sees the native value.

---

## Phase 2 — Apple account & tools

5. **Update Xcode** on your Mac mini (free from the Mac App Store). This is required to build and upload — iOS apps can only be built on a Mac.
6. **Enroll in the Apple Developer Program — $99/year.** ([developer.apple.com/programs](https://developer.apple.com/programs/whats-included/)) Enroll as an **Individual** (fast, your name shows as seller) or **Organization** (needs a D-U-N-S number for your business, takes longer). Approval is usually 24–48 hours.

---

## Phase 3 — Wrap the app with Capacitor

7. In your project, add Capacitor and the iOS platform: `npm install @capacitor/core @capacitor/cli`, `npx cap init`, `npm install @capacitor/ios`, `npx cap add ios`. Point Capacitor's web directory at your built site, then `npx cap copy`.
8. **Set your Bundle ID** (e.g., `com.yourname.flickpick`) and app display name.
9. **Generate icon + splash screen** with `@capacitor/assets` from a single 1024×1024 source image.
10. **Add the native plugins** from Phase 1 (push notifications, etc.) and any required **Info.plist usage strings** (e.g., notification permission text).
11. `npx cap open ios` to open the project in Xcode, then under **Signing & Capabilities** pick your Developer Team so the app is signed.

---

## Phase 4 — Create the App Store Connect listing

In [App Store Connect](https://appstoreconnect.apple.com):

12. **Create the app record** — name ("FlickPick"; must be unique on the Store), primary language, your Bundle ID, an SKU.
13. **Category** (Entertainment), **age rating** (fill the content questionnaire), **price** (Free).
14. **App Privacy "nutrition labels"** — declare what you collect: Contact Info (email), User Content (watchlist/ratings/reviews), Identifiers (Firebase), Usage Data. Required to submit. ([App privacy details](https://developer.apple.com/app-store/app-privacy-details/))
15. **Privacy Policy URL + Support URL** (from Phase 0).
16. **Screenshots** — at minimum the **6.9-inch iPhone** size (1290×2796 or 1320×2868), 1–10 images. Add **13-inch iPad** shots only if you support iPad. ([Screenshot specs](https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications/))
17. Write the **description, keywords, promo text**.

---

## Phase 5 — Build, upload, and beta test

18. In Xcode: **Product → Archive**, then **Distribute App → App Store Connect → Upload**. (Or use the Transporter app.) Wait for it to finish "processing" in App Store Connect.
19. **TestFlight** — invite yourself and a handful of friends as beta testers and actually run it on real iPhones. This is where you'll catch device-specific issues (including the Safari/WebKit quirks, since iOS uses WebKit). Fix and re-upload as needed.

---

## Phase 6 — Submit for review

20. Attach the build to your listing, finish all metadata, and **Submit for Review**.
21. **Provide a demo account** in the reviewer notes — your app requires login, and reviewers must be able to get in. Also note the native features (Phase 1) so they see you clear 4.2.
22. **Review takes ~1–3 days.** Expect possible rejection (4.2 is the usual one) — read Apple's note, address it, resubmit. This back-and-forth is normal.

---

## Phase 7 — Launch and beyond

23. Once approved, **release** (immediately, scheduled, or phased).
24. **After launch:** monitor crashes/analytics, respond to App Store reviews, and ship updates — every update is a new build + another (usually faster) review.

---

## Cost summary

| Item | Cost |
|---|---|
| Apple Developer Program | $99 / year |
| Mac + Xcode | already have it / free |
| TMDB commercial license (only if you monetize) | ~$149 / month |
| Backend proxy hosting | ~free–$5/mo to start |
| Firebase | free tier is plenty at first |

---

## Faster alternatives to consider

- **Ship a PWA now.** With a web manifest + icons, users can "Add to Home Screen" and get an app-like icon/experience today — no $99, no review, no wrapper. It won't appear in App Store search or count as "downloads," but it's a zero-friction way to get people using it while you do the App Store work.
- **Android too.** The same Capacitor project builds for Google Play (one-time $25 fee, more lenient review) — often a good first store to launch on.

---

## The honest critical path

The four things most likely to actually block you, in order: **(1) TMDB commercial licensing** if you monetize, **(2) Guideline 4.2** if you submit a bare wrapper, **(3) the missing account-deletion feature**, and **(4) a real privacy policy**. Clear those four and the rest is mostly mechanical.

---

_Sources: Apple Developer Program, App Review Guidelines (4.2, 5.1.1), App Store Connect help, Capacitor docs, TMDB API Terms of Use — linked inline above._
