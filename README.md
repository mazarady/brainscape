# Recall — confidence-based flashcards

A flashcard study app built around **confidence-based repetition**: after revealing each answer you rate how well you knew it from 1 (not at all) to 5 (perfectly). Cards you're unsure about come back quickly; cards you know well are spaced further and further apart.

## Features

- **Classes → decks → cards** with icons, colors and descriptions
- **Study rounds** of 10 cards with a confidence-gained gauge, per-card progress dots and a round timer
- **Mastery** per class and per deck, with a colored breakdown of your confidence ratings
- Choose which decks to study, or study a single deck with its ▶ button
- **Progressive** (new cards in deck order) or **random** order
- Deck editor: add, edit, search and delete cards, plus **bulk import** (tab, ` :: ` or ` | ` separated)
- Keyboard shortcuts while studying: `Space`/`Enter` to reveal, `1`–`5` to rate, `Esc` to leave
- **Accounts**: email + password sign-in; your flashcards are saved to your account in Netlify Database (Postgres) and follow you across devices
- Export/import a JSON backup from the sidebar
- Works on phones

## Run it

The app is a Vite + React frontend with one Netlify Function (`netlify/functions/api.mjs`) for auth and data, backed by Netlify Database.

```bash
npm install
npm install -g netlify-cli
netlify link        # connect this folder to your Netlify project
npm run dev         # runs `netlify dev`: frontend + functions + database connection
```

Deploys build with `npm run build` and publish `dist/` (see `netlify.toml`). The database tables are created automatically the first time the function runs, including on deploy-preview database branches, so you don't need a migration step.

`npm test` runs the scheduler tests and the API tests (against an in-process Postgres via PGlite, so no database is needed).

## Security

- Passwords are hashed with **scrypt** (N=2^17, r=8, p=1, random 16-byte salt per user); plaintext is never stored or logged.
- Sessions are random 256-bit tokens in an **HttpOnly, SameSite=Lax, Secure** cookie (`__Host-` prefixed on HTTPS). Only a SHA-256 hash of the token is stored, so a database leak can't be used to hijack sessions. Sessions last 30 days (sliding) and are deleted on sign-out.
- Login always runs a full password hash, even for unknown emails, and returns one generic error, so it doesn't reveal which emails have accounts. Signup does say when an email is already registered.
- **Rate limiting** (stored in the database so it works across serverless instances): 30 auth attempts per IP and 8 failed logins per email every 15 minutes.
- **CSRF**: state-changing requests must be `application/json` and same-origin (`Origin` checked); cookies are SameSite=Lax.
- Strict security headers (CSP, HSTS, `frame-ancestors 'none'`, nosniff, no-referrer) are set in `netlify.toml`.
- Every data query is parameterised and scoped to the signed-in user. Saves use a revision number, so a stale tab or device can't overwrite newer changes.

- Deleting your account (sidebar → Delete account) requires your password and removes all of your data.

Not included yet: password reset, email verification and changing your password.

## How scheduling works

Each class keeps a step counter that advances with every card you rate. Rating a card sets it due again after 2, 4, 8, 16 or 32 steps for ratings 1–5. The next card is the lowest-confidence card that is due; if nothing is due, a new card is introduced; if there are no new cards, the card due soonest is shown. See `src/scheduler.ts`.
