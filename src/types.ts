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
}

export interface Deck {
  id: string;
  name: string;
  cards: Card[];
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
}

export interface AppState {
  version: 1;
  classes: StudyClass[];
}
