import { describe, expect, it } from 'vitest';
import { mastery, pickNext, rateCard, type QueueEntry } from './scheduler';
import type { Card } from './types';

const card = (id: string, extra: Partial<Card> = {}): Card => ({
  id,
  question: id,
  answer: id,
  rating: 0,
  dueStep: 0,
  timesSeen: 0,
  ...extra,
});
const pool = (cards: Card[]): QueueEntry[] => cards.map((c, i) => ({ deckId: 'd', card: c, order: i }));

describe('scheduler', () => {
  it('introduces new cards in deck order in progressive mode', () => {
    expect(pickNext(pool([card('a'), card('b')]), 0, 'progressive')?.card.id).toBe('a');
  });

  it('prefers due cards with the lowest confidence', () => {
    const p = pool([card('new'), card('ok', { rating: 4, dueStep: 3 }), card('bad', { rating: 1, dueStep: 5 })]);
    expect(pickNext(p, 5, 'progressive')?.card.id).toBe('bad');
  });

  it('does not repeat the card just shown when alternatives exist', () => {
    const p = pool([card('a', { rating: 1, dueStep: 0 }), card('b', { rating: 5, dueStep: 99 })]);
    expect(pickNext(p, 1, 'progressive', 'a')?.card.id).toBe('b');
  });

  it('low ratings come back sooner than high ratings', () => {
    expect(rateCard(card('x'), 1, 10).dueStep).toBeLessThan(rateCard(card('x'), 5, 10).dueStep);
  });

  it('computes mastery', () => {
    expect(mastery([card('a', { rating: 5 }), card('b')])).toBe(50);
    expect(mastery([])).toBe(0);
  });
});
