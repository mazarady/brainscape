import type { Course, CourseQuestion } from './content/types';
import { COURSES } from './content';
import type { AppState, Card, Deck, StudyClass } from './types';

const cardId = (courseId: string, q: CourseQuestion) => `${courseId}:${q.id}`;
export const deckIdFor = (courseId: string, moduleId: string) => `${courseId}:${moduleId}`;

/** Flashcard back: the correct option(s) followed by the explanation. */
export function answerText(q: CourseQuestion): string {
  const right = q.correct.map((i) => q.options[i]);
  const head = right.length === 1 ? right[0] : right.map((r) => `• ${r}`).join('\n');
  return `${head}\n\n${q.explain}`;
}

/**
 * Makes sure the user's state contains the built-in course, up to date with the
 * bundled content, while keeping their progress on every existing card.
 * Returns the same object when nothing changed.
 */
export function syncCourse(state: AppState, course: Course): AppState {
  const existing = state.classes.find((c) => c.courseId === course.id);
  const base: StudyClass = existing ?? {
    id: course.id,
    courseId: course.id,
    name: course.name,
    description: course.description,
    color: course.color,
    icon: course.icon,
    decks: [],
    selectedDeckIds: [],
    order: 'progressive',
    step: 0,
    totalStudySeconds: 0,
    quizHistory: [],
  };

  const builtInDecks: Deck[] = course.modules.map((m) => {
    const id = deckIdFor(course.id, m.id);
    const prev = base.decks.find((d) => d.id === id);
    const prevCards = new Map((prev?.cards ?? []).map((c) => [c.id, c]));
    const cards: Card[] = m.questions.map((q) => {
      const id = cardId(course.id, q);
      const old = prevCards.get(id);
      const content = {
        question: q.q,
        answer: answerText(q),
        mc: { options: q.options, correct: q.correct, explain: q.explain },
        builtIn: true,
      };
      return old ? { ...old, ...content } : { id, rating: 0, dueStep: 0, timesSeen: 0, ...content };
    });
    // Keep any cards the user added to a built-in deck.
    const userCards = (prev?.cards ?? []).filter((c) => !c.builtIn);
    return { id, name: m.name, section: m.section, notes: m.notes, builtIn: true, cards: [...cards, ...userCards] };
  });

  const builtInIds = new Set(builtInDecks.map((d) => d.id));
  const customDecks = base.decks.filter((d) => !builtInIds.has(d.id) && !d.builtIn);
  const newDeckIds = builtInDecks.filter((d) => !base.decks.some((x) => x.id === d.id)).map((d) => d.id);

  const next: StudyClass = {
    ...base,
    name: course.name,
    description: course.description,
    decks: [...builtInDecks, ...customDecks],
    // Newly released modules are selected for study automatically.
    selectedDeckIds: [...base.selectedDeckIds.filter((id) => builtInIds.has(id) || customDecks.some((d) => d.id === id)), ...newDeckIds],
  };

  if (existing && JSON.stringify(existing) === JSON.stringify(next)) return state;
  return {
    ...state,
    classes: existing ? state.classes.map((c) => (c === existing ? next : c)) : [next, ...state.classes],
  };
}

export const syncAllCourses = (state: AppState): AppState => COURSES.reduce((st, c) => syncCourse(st, c), state);
