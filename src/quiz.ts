import type { Card, StudyClass } from './types';
import { isNewCard } from './scheduler';

export interface QuizItem {
  deckId: string;
  card: Card;
  /** Option indexes (into card.mc.options) in the order they're shown. */
  order: number[];
}

const shuffle = <T,>(arr: T[], rand = Math.random): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const isTrueFalse = (opts: string[]) => opts.length === 2 && opts[0] === 'True' && opts[1] === 'False';

/** Small seeded PRNG so a card's flashcard option order is stable between sessions. */
function seeded(seed: string): () => number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

/** Fixed A–D layout for a card in flashcard mode (true/false stays in order). */
export function flashcardOrder(card: Card): number[] {
  return optionOrder(card, seeded(card.id));
}

export const LETTERS = 'ABCDEFGH';

function optionOrder(card: Card, rand: () => number, shuffleTrueFalse = false): number[] {
  const idx = card.mc!.options.map((_, i) => i);
  return isTrueFalse(card.mc!.options) && !shuffleTrueFalse ? idx : shuffle(idx, rand);
}

export function quizPool(cls: StudyClass, deckIds: string[], newOnly = false) {
  return cls.decks
    .filter((d) => deckIds.includes(d.id))
    .flatMap((d) => d.cards.filter((c) => c.mc && (!newOnly || isNewCard(c))).map((card) => ({ deckId: d.id, card })));
}

/**
 * Practice: favour questions you got wrong last time, then ones you haven't seen,
 * then ones with the lowest accuracy — with some randomness so sets vary.
 */
export interface QuizOptions {
  /** Hard mode: shuffle true/false too, and lean harder on weak questions in practice. */
  hard?: boolean;
  /** Only questions never studied or quizzed before. */
  newOnly?: boolean;
  rand?: () => number;
}

export function buildPractice(cls: StudyClass, deckIds: string[], count: number, { hard = false, newOnly = false, rand = Math.random }: QuizOptions = {}): QuizItem[] {
  const scored = quizPool(cls, deckIds, newOnly).map((e) => {
    const seen = e.card.quizSeen ?? 0;
    const acc = seen ? (e.card.quizCorrect ?? 0) / seen : 0;
    const priority = hard
      ? (e.card.quizLastWrong ? 4 : 0) + (1 - acc) * 3 + rand()
      : (e.card.quizLastWrong ? 3 : 0) + (seen === 0 ? 2 : 0) + (1 - acc) + rand() * 1.5;
    return { e, priority };
  });
  return scored
    .sort((a, b) => b.priority - a.priority)
    .slice(0, count)
    .map(({ e }) => ({ ...e, order: optionOrder(e.card, rand, hard) }));
}

/** Exam: a random spread across all selected modules, in proportion to their size. */
export function buildExam(cls: StudyClass, deckIds: string[], count: number, { hard = false, newOnly = false, rand = Math.random }: QuizOptions = {}): QuizItem[] {
  const byDeck = deckIds
    .map((id) => shuffle(quizPool(cls, [id], newOnly), rand))
    .filter((l) => l.length);
  const total = byDeck.reduce((n, l) => n + l.length, 0);
  const want = Math.min(count, total);
  // At least one question from every part when there's room, then share the rest
  // proportionally, then top up round-robin.
  const base = want >= byDeck.length ? 1 : 0;
  const rest = want - base * byDeck.length;
  const take = byDeck.map((l) => Math.min(l.length, base + Math.floor(((l.length - base) / (total - base * byDeck.length || 1)) * rest)));
  let given = take.reduce((a, b) => a + b, 0);
  for (let i = 0; given < want; i = (i + 1) % byDeck.length) {
    if (take[i] < byDeck[i].length) {
      take[i]++;
      given++;
    }
  }
  const picked = byDeck.flatMap((l, i) => l.slice(0, take[i]));
  return shuffle(picked, rand).map((e) => ({ ...e, order: optionOrder(e.card, rand, hard) }));
}

export function isCorrect(card: Card, chosen: number[]): boolean {
  const right = card.mc!.correct;
  return chosen.length === right.length && right.every((i) => chosen.includes(i));
}
