import type { Card, Deck, Rating, StudyClass, StudyOrder } from './types';

/**
 * Confidence-based repetition.
 *
 * Every card rated by the learner gets pushed back in the queue by a number of
 * "study steps" that grows with confidence: a card you rated 1 comes back
 * almost immediately, a card rated 5 waits a long time. New cards are mixed in
 * whenever nothing is due, in deck order (progressive) or shuffled (random).
 */
export const REPEAT_GAP: Record<Exclude<Rating, 0>, number> = {
  1: 2,
  2: 4,
  3: 8,
  4: 16,
  5: 32,
};

/** Weight each confidence level contributes towards mastery. */
const MASTERY_WEIGHT: Record<Rating, number> = { 0: 0, 1: 0, 2: 0.25, 3: 0.5, 4: 0.75, 5: 1 };

export function mastery(cards: Card[]): number {
  if (cards.length === 0) return 0;
  const total = cards.reduce((sum, c) => sum + MASTERY_WEIGHT[c.rating], 0);
  return (total / cards.length) * 100;
}

export function studiedCount(cards: Card[]): number {
  return cards.filter((c) => c.rating > 0).length;
}

export function ratingBreakdown(cards: Card[]): Record<Rating, number> {
  const out: Record<Rating, number> = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  for (const c of cards) out[c.rating]++;
  return out;
}

export interface QueueEntry {
  deckId: string;
  card: Card;
  order: number;
}

export function studyPool(cls: StudyClass): QueueEntry[] {
  const out: QueueEntry[] = [];
  let order = 0;
  for (const deck of cls.decks) {
    if (!cls.selectedDeckIds.includes(deck.id)) continue;
    for (const card of deck.cards) out.push({ deckId: deck.id, card, order: order++ });
  }
  return out;
}

/** Deterministic-ish hash used to "shuffle" new cards in random mode without storing an order. */
function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function pickNext(
  pool: QueueEntry[],
  step: number,
  order: StudyOrder,
  avoidCardId?: string,
  seed = 0,
): QueueEntry | undefined {
  if (pool.length === 0) return undefined;
  const candidates = pool.length > 1 && avoidCardId ? pool.filter((e) => e.card.id !== avoidCardId) : pool;

  // 1. Seen cards that are due — lowest confidence first, then most overdue.
  const due = candidates
    .filter((e) => e.card.rating > 0 && e.card.dueStep <= step)
    .sort((a, b) => a.card.rating - b.card.rating || a.card.dueStep - b.card.dueStep);
  if (due.length) return due[0];

  // 2. Introduce a new card.
  const fresh = candidates.filter((e) => e.card.rating === 0);
  if (fresh.length) {
    if (order === 'progressive') return fresh.reduce((a, b) => (b.order < a.order ? b : a));
    return fresh.reduce((a, b) => (hash(b.card.id + seed) < hash(a.card.id + seed) ? b : a));
  }

  // 3. Everything seen and nothing due — take whatever is due soonest (weakest wins ties).
  return [...candidates].sort(
    (a, b) => a.card.dueStep - b.card.dueStep || a.card.rating - b.card.rating,
  )[0];
}

export function rateCard(card: Card, rating: Exclude<Rating, 0>, step: number): Card {
  return {
    ...card,
    rating,
    dueStep: step + REPEAT_GAP[rating],
    timesSeen: card.timesSeen + 1,
    lastStudiedAt: Date.now(),
  };
}

export function allCards(decks: Deck[]): Card[] {
  return decks.flatMap((d) => d.cards);
}
