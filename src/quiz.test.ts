import { describe, expect, it } from 'vitest';
import { buildExam, buildPractice } from './quiz';
import type { Card, StudyClass } from './types';

const card = (id: string, extra: Partial<Card> = {}): Card => ({
  id, question: id, answer: 'A', rating: 0, dueStep: 0, timesSeen: 0,
  mc: { options: ['a', 'b', 'c', 'd'], correct: [0], explain: '' }, ...extra,
});
const cls = {
  id: 'c', name: 'c', description: '', color: '', icon: '', selectedDeckIds: ['d'], order: 'progressive', step: 0, totalStudySeconds: 0,
  decks: [{ id: 'd', name: 'd', cards: [card('new1'), card('new2'), card('studied', { rating: 3, timesSeen: 1 }), card('quizzed', { quizSeen: 1, quizCorrect: 1 })] }],
} as StudyClass;

describe('new cards only', () => {
  it('limits practice and exams to cards never studied or quizzed', () => {
    for (const items of [buildPractice(cls, ['d'], 10, { newOnly: true }), buildExam(cls, ['d'], 25, { newOnly: true })])
      expect(items.map((i) => i.card.id).sort()).toEqual(['new1', 'new2']);
    expect(buildExam(cls, ['d'], 25)).toHaveLength(4);
  });
});
