# FlickPick — native wrapper & Firebase setup (run on your Mac)

These are the commands you run yourself; `capacitor.config.json` is already in the repo.

## 1. Firebase: apply the security rules (do this first — it's a live security gap)

In the [Firebase Console](https://console.firebase.google.com) for project **flickpick-project**:

- **Firestore Database → Rules** → paste the contents of `firestore.rules` → **Publish**.
- **Realtime Database → Rules** → paste the contents of `database.rules.json` → **Publish**.
- **Authentication → Sign-in method → Anonymous → Enable** (lets guests use Party Mode; without this, Party requires login — which the app already handles gracefully).

Or, with the Firebase CLI: `firebase deploy --only firestore:rules,database`.

## 2. Wrap the app with Capacitor

From the project root on your Mac (you need Node + Xcode installed):

```bash
# 1. Put the web app where Capacitor expects it
mkdir -p www
cp index.html www/
cp -R privacy-policy.html terms.html www/ 2>/dev/null || true

# 2. Install Capacitor
npm init -y
npm install @capacitor/core @capacitor/cli @capacitor/ios
npm install @capacitor/haptics @capacitor/app @capacitor/splash-screen

# 3. Initialize (capacitor.config.json already exists, so this just links it)
npx cap add ios
npx cap copy

# 4. Generate app icon + splash from a 1024x1024 source image at ./assets/icon.png
npm install @capacitor/assets --save-dev
npx capacitor-assets generate --ios

# 5. Open in Xcode to set your signing team and run on a device/simulator
npx cap open ios
```

Whenever you change `index.html`, re-run `cp index.html www/ && npx cap copy`.

## 3. In Xcode

- Select the project → **Signing & Capabilities** → choose your Apple Developer **Team**.
- Set the **Bundle Identifier** to your own (e.g., `com.yourname.flickpick`) and match it in `capacitor.config.json` (`appId`).
- Build & run on a simulator, then a real iPhone, to test before submitting.

## Notes
- `webDir` is `www` — keep the wrapped copy of `index.html` there.
- The app already includes a Capacitor-aware haptics hook (`navigator.vibrate` fallback when the native plugin isn't present), so haptics work in the wrapper once `@capacitor/haptics` is installed.
- For push notifications later: add `@capacitor/push-notifications` + Firebase Cloud Messaging.
