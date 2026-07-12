# Deploying the tightened Party Mode security rules

The repo's `database.rules.json` was rewritten (Jul 12, 2026) to close the review's #1 critical finding: any signed-in visitor could read/overwrite/delete **any** party room. The new rules only take effect once you publish them in the Firebase console — the file in the repo does nothing on its own.

## What the new rules enforce

- Only a room's **members** can cast votes or send reactions — and only as themselves (member ids are now Firebase auth uids, which the app already uses as of today's build).
- Only the **host** can create the room, change its settings/movie list, clear votes for a new round, or start the party. Any member may mark it finished (that's how results trigger) or schedule movie night.
- Host handoff stays possible: a member can claim `hostId` only when the current host has actually left.
- Anyone may delete a room **older than 24 hours** (that's how stale rooms get swept), and hosts can delete their own room.
- Room enumeration/listing is blocked at the top level. Knowing a 6-digit code still lets a signed-in user read that room — codes act as the room capability, same as today. (A server-side join flow could close that later; not worth it pre-launch.)
- Everything else in the database stays locked (`.read`/`.write: false`).

## Deploy steps (2 minutes)

1. Open [console.firebase.google.com](https://console.firebase.google.com) and pick the **flickpick-project** project.
2. In the left sidebar: **Build → Realtime Database**, then the **Rules** tab.
3. Select everything in the editor and replace it with the full contents of `database.rules.json` from the project folder.
4. Click **Publish**.
5. While you're there: **Build → Firestore Database → Rules** — confirm it matches `firestore.rules` (each user can only touch `users/{their-own-uid}`). If it doesn't, paste that file in and publish too.

## Timing / compatibility notes

- **Publish any time after today's site update is live.** Today's build writes member ids as auth uids, which is what the rules check. (Old rules + new build also work fine — the rules only ever get stricter.)
- Rooms created **before** today's build (random `mb_…` member ids) won't accept votes under the new rules — they're throwaway rooms with a 24-hour life anyway.
- If Party Mode ever shows "Log in to use Party Mode" after deploying, check that **Anonymous** sign-in is still enabled: **Build → Authentication → Sign-in method → Anonymous**.

## Quick smoke test after publishing

1. Create a party on your phone, join it from a second browser — both should work as before (vote, react, see results).
2. In a third browser, sign in to the app, then try to write to that room via the console REST API or a hand-crafted request — it should fail with `PERMISSION_DENIED` unless that user has joined the room.
