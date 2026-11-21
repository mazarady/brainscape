export type Rating = 0 | 1 | 2 | 3 | 4 | 5; // 0 = never studied

export interface Card {
  id: string;
  question: string;
  answer: string;
  rating: Rating;
  /** Study step (per class) at which this card is due to be shown again. */
  dueStep: number;
  timesSeen: number;
  lastStudiedAt?: number;
  /** Multiple-choice data for built-in course questions. */
  mc?: { options: string[]; correct: number[]; explain: string; source?: string; image?: string; rdpTable?: boolean };
  /** Card comes from a built-in course and is kept in sync with it. */
  builtIn?: boolean;
  quizSeen?: number;
  quizCorrect?: number;
  /** Whether the most recent quiz attempt was wrong. */
  quizLastWrong?: boolean;
}

export interface Deck {
  id: string;
  name: string;
  cards: Card[];
  builtIn?: boolean;
  section?: string;
  notes?: { heading: string; points: string[] }[];
}

export type StudyOrder = 'progressive' | 'random';

export interface StudyClass {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
  decks: Deck[];
  /** Deck ids currently selected for study. */
  selectedDeckIds: string[];
  order: StudyOrder;
  /** Monotonic counter of cards reviewed in this class; drives scheduling. */
  step: number;
  totalStudySeconds: number;
  /** Set when this class mirrors a built-in course. */
  courseId?: string;
  quizHistory?: QuizResult[];
  /** Harder quizzes: every question is select-all-that-apply and clues are hidden. */
  hardMode?: boolean;
  /** Study and quizzes only use cards never studied or quizzed before. */
  newOnly?: boolean;
}

export interface QuizResult {
  at: number;
  mode: 'practice' | 'exam';
  correct: number;
  total: number;
  deckIds: string[];
  hard?: boolean;
}

export interface AppState {
  version: 1;
  classes: StudyClass[];
}
