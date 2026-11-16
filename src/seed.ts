import type { AppState, Card, Deck, StudyClass } from './types';

export const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);

export const newCard = (question: string, answer: string): Card => ({
  id: uid(),
  question,
  answer,
  rating: 0,
  dueStep: 0,
  timesSeen: 0,
});

export const newDeck = (name: string, pairs: [string, string][] = []): Deck => ({
  id: uid(),
  name,
  cards: pairs.map(([q, a]) => newCard(q, a)),
});

export const CLASS_COLORS = ['#2f80ed', '#9b51e0', '#eb5757', '#f2994a', '#27ae60', '#00a3a3', '#d6336c'];
export const CLASS_ICONS = ['📚', '🤿', '🧪', '🌍', '🧮', '🎵', '💻', '🩺', '🗣️', '⚖️'];

export const newClass = (name: string, decks: Deck[] = [], icon = '📚', color = CLASS_COLORS[0]): StudyClass => ({
  id: uid(),
  name,
  description: '',
  color,
  icon,
  decks,
  selectedDeckIds: decks.map((d) => d.id),
  order: 'progressive',
  step: 0,
  totalStudySeconds: 0,
});

export function emptyState(): AppState {
  return { version: 1, classes: [] };
}
