import { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import { saveData } from './api';
import type { AppState, Card, Deck, QuizResult, Rating, StudyClass, StudyOrder } from './types';
import { rateCard } from './scheduler';
import { newCard, newClass, newDeck } from './seed';

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
  | { type: 'resetProgress'; classId: string; deckId?: string }
  | { type: 'quizAnswer'; classId: string; deckId: string; cardId: string; correct: boolean }
  | { type: 'recordQuiz'; classId: string; result: QuizResult };

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

const resetCard = (c: Card): Card => ({ ...c, rating: 0, dueStep: 0, timesSeen: 0, lastStudiedAt: undefined, quizSeen: 0, quizCorrect: 0, quizLastWrong: false });

export function reducer(s: AppState, a: Action): AppState {
  switch (a.type) {
    case 'replace':
      return a.state;
    case 'quizAnswer':
      return mapClass(s, a.classId, (c) =>
        mapDeck(c, a.deckId, (d) =>
          mapCard(d, a.cardId, (card) => ({
            ...card,
            quizSeen: (card.quizSeen ?? 0) + 1,
            quizCorrect: (card.quizCorrect ?? 0) + (a.correct ? 1 : 0),
            quizLastWrong: !a.correct,
          })),
        ),
      );
    case 'recordQuiz':
      return mapClass(s, a.classId, (c) => ({ ...c, quizHistory: [...(c.quizHistory ?? []), a.result].slice(-100) }));
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

export function isValidState(x: unknown): x is AppState {
  const s = x as AppState;
  return !!s && s.version === 1 && Array.isArray(s.classes) && s.classes.every((c) => Array.isArray(c.decks));
}

export type SaveStatus = 'saved' | 'saving' | 'offline' | 'conflict' | 'signed-out' | 'too-large';

const SAVE_DELAY_MS = 800;

/**
 * App state held in memory and saved to the server (debounced). Saves are sent one at a
 * time with the last known revision, so a stale tab gets a conflict instead of
 * overwriting newer data.
 */
export function useAppStore(initial: AppState, initialRev: number) {
  const [state, dispatch] = useReducer(reducer, initial);
  const [status, setStatus] = useState<SaveStatus>('saved');
  const rev = useRef(initialRev);
  const saved = useRef(initial);
  const latest = useRef(state);
  const inFlight = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const stopped = useRef(false);
  latest.current = state;

  const flush = useCallback(async () => {
    if (inFlight.current || stopped.current || latest.current === saved.current) return;
    inFlight.current = true;
    const sending = latest.current;
    setStatus('saving');
    let offline = false;
    try {
      const r = await saveData(sending, rev.current);
      if (r.ok) {
        rev.current = r.rev;
        saved.current = sending;
        setStatus(latest.current === sending ? 'saved' : 'saving');
      } else {
        if (r.reason === 'offline') offline = true;
        else stopped.current = true;
        setStatus(r.reason);
      }
    } finally {
      inFlight.current = false;
    }
    if (!stopped.current && latest.current !== saved.current) {
      clearTimeout(timer.current);
      timer.current = setTimeout(flush, offline ? 5000 : SAVE_DELAY_MS);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (state === saved.current || stopped.current) return;
    clearTimeout(timer.current);
    timer.current = setTimeout(flush, SAVE_DELAY_MS);
  }, [state, flush]);

  // Warn before closing the tab with unsaved changes, and try one last save.
  useEffect(() => {
    const onUnload = (e: BeforeUnloadEvent) => {
      if (latest.current === saved.current || stopped.current) return;
      flush();
      e.preventDefault();
      e.returnValue = '';
    };
    window.addEventListener('beforeunload', onUnload);
    return () => window.removeEventListener('beforeunload', onUnload);
  }, [flush]);

  return [state, dispatch, status] as const;
}
