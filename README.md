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
- Data is saved in your browser (localStorage); export/import a JSON backup from the sidebar
- Works on phones

## Run it

```bash
npm install
npm run dev
```

`npm test` runs the scheduler tests; `npm run build` produces a static site in `dist/` that can be hosted anywhere.

## How scheduling works

Each class keeps a step counter that advances with every card you rate. Rating a card sets it due again after 2, 4, 8, 16 or 32 steps for ratings 1–5. The next card is the lowest-confidence card that is due; if nothing is due, a new card is introduced; if there are no new cards, the card due soonest is shown. See `src/scheduler.ts`.
