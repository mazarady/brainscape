import { useEffect, useReducer } from 'react';
import type { AppState, Card, Deck, Rating, StudyClass, StudyOrder } from './types';
import { rateCard } from './scheduler';
import { newCard, newClass, newDeck, seedState } from './seed';

const STORAGE_KEY = 'recall-flashcards-v1';

export type Action =
  | { type: 'replace'; state: AppState }
  | { type: 'addClass'; id: string; name: string; icon: string; color: string; description: string }
  | { type: 'updateClass'; classId: string; patch: Partial<Pick<StudyClass, 'name' | 'icon' | 'color' | 'description'>> }
  | { type: 'deleteClass'; classId: string }
  | { type: 'addDeck'; classId: string; name: string }
  | { type: 'renameDeck'; classId: string; deckId: string; name: string }
  | { type: 'deleteDeck'; classId: string; deckId: string }
  | { type: 'moveDeck'; classId: string; deckId: string; dir: -1 | 1 }
  | { type: 'toggleDeck'; classId: string; deckId: string }
  | { type: 'selectAllDecks'; classId: string; selected: boolean }
  | { type: 'setOrder'; classId: string; order: StudyOrder }
  | { type: 'addCards'; classId: string; deckId: string; pairs: [string, string][] }
  | { type: 'updateCard'; classId: string; deckId: string; cardId: string; question: string; answer: string }
  | { type: 'deleteCard'; classId: string; deckId: string; cardId: string }
  | { type: 'rate'; classId: string; deckId: string; cardId: string; rating: Exclude<Rating, 0> }
  | { type: 'addStudyTime'; classId: string; seconds: number }
  | { type: 'resetProgress'; classId: string; deckId?: string };

const mapClass = (s: AppState, id: string, fn: (c: StudyClass) => StudyClass): AppState => ({
  ...s,
  classes: s.classes.map((c) => (c.id === id ? fn(c) : c)),
});

const mapDeck = (c: StudyClass, id: string, fn: (d: Deck) => Deck): StudyClass => ({
  ...c,
  decks: c.decks.map((d) => (d.id === id ? fn(d) : d)),
});

const mapCard = (d: Deck, id: string, fn: (c: Card) => Card): Deck => ({
  ...d,
  cards: d.cards.map((c) => (c.id === id ? fn(c) : c)),
});

const resetCard = (c: Card): Card => ({ ...c, rating: 0, dueStep: 0, timesSeen: 0, lastStudiedAt: undefined });

export function reducer(s: AppState, a: Action): AppState {
  switch (a.type) {
    case 'replace':
      return a.state;
    case 'addClass': {
      const c = newClass(a.name, [], a.icon, a.color);
      c.id = a.id;
      c.description = a.description;
      return { ...s, classes: [...s.classes, c] };
    }
    case 'updateClass':
      return mapClass(s, a.classId, (c) => ({ ...c, ...a.patch }));
    case 'deleteClass':
      return { ...s, classes: s.classes.filter((c) => c.id !== a.classId) };
    case 'addDeck':
      return mapClass(s, a.classId, (c) => {
        const d = newDeck(a.name);
        return { ...c, decks: [...c.decks, d], selectedDeckIds: [...c.selectedDeckIds, d.id] };
      });
    case 'renameDeck':
      return mapClass(s, a.classId, (c) => mapDeck(c, a.deckId, (d) => ({ ...d, name: a.name })));
    case 'deleteDeck':
      return mapClass(s, a.classId, (c) => ({
        ...c,
        decks: c.decks.filter((d) => d.id !== a.deckId),
        selectedDeckIds: c.selectedDeckIds.filter((id) => id !== a.deckId),
      }));
    case 'moveDeck':
      return mapClass(s, a.classId, (c) => {
        const i = c.decks.findIndex((d) => d.id === a.deckId);
        const j = i + a.dir;
        if (i < 0 || j < 0 || j >= c.decks.length) return c;
        const decks = [...c.decks];
        [decks[i], decks[j]] = [decks[j], decks[i]];
        return { ...c, decks };
      });
    case 'toggleDeck':
      return mapClass(s, a.classId, (c) => ({
        ...c,
        selectedDeckIds: c.selectedDeckIds.includes(a.deckId)
          ? c.selectedDeckIds.filter((id) => id !== a.deckId)
          : [...c.selectedDeckIds, a.deckId],
      }));
    case 'selectAllDecks':
      return mapClass(s, a.classId, (c) => ({ ...c, selectedDeckIds: a.selected ? c.decks.map((d) => d.id) : [] }));
    case 'setOrder':
      return mapClass(s, a.classId, (c) => ({ ...c, order: a.order }));
    case 'addCards':
      return mapClass(s, a.classId, (c) =>
        mapDeck(c, a.deckId, (d) => ({ ...d, cards: [...d.cards, ...a.pairs.map(([q, ans]) => newCard(q, ans))] })),
      );
    case 'updateCard':
      return mapClass(s, a.classId, (c) =>
        mapDeck(c, a.deckId, (d) => mapCard(d, a.cardId, (card) => ({ ...card, question: a.question, answer: a.answer }))),
      );
    case 'deleteCard':
      return mapClass(s, a.classId, (c) =>
        mapDeck(c, a.deckId, (d) => ({ ...d, cards: d.cards.filter((card) => card.id !== a.cardId) })),
      );
    case 'rate':
      return mapClass(s, a.classId, (c) => {
        const updated = mapDeck(c, a.deckId, (d) => mapCard(d, a.cardId, (card) => rateCard(card, a.rating, c.step)));
        return { ...updated, step: c.step + 1 };
      });
    case 'addStudyTime':
      return mapClass(s, a.classId, (c) => ({ ...c, totalStudySeconds: c.totalStudySeconds + a.seconds }));
    case 'resetProgress':
      return mapClass(s, a.classId, (c) => ({
        ...c,
        decks: c.decks.map((d) => (!a.deckId || d.id === a.deckId ? { ...d, cards: d.cards.map(resetCard) } : d)),
      }));
  }
}

function load(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as AppState;
      if (parsed && parsed.version === 1 && Array.isArray(parsed.classes)) return parsed;
    }
  } catch {
    /* fall through to seed */
  }
  return seedState();
}

export function isValidState(x: unknown): x is AppState {
  const s = x as AppState;
  return !!s && s.version === 1 && Array.isArray(s.classes) && s.classes.every((c) => Array.isArray(c.decks));
}

export function useAppStore() {
  const [state, dispatch] = useReducer(reducer, undefined, load);
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* storage full or unavailable — keep working in memory */
    }
  }, [state]);
  return [state, dispatch] as const;
}
