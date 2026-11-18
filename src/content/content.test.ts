import { describe, expect, it } from 'vitest';
import { COURSES } from '.';
import { syncAllCourses } from '../course';
import { buildExam, buildPractice, isCorrect } from '../quiz';

describe('course content', () => {
  for (const course of COURSES) {
    const qs = course.modules.flatMap((m) => m.questions);
    it(`${course.name}: question ids are unique`, () => {
      expect(new Set(qs.map((q) => q.id)).size).toBe(qs.length);
    });
    it(`${course.name}: every module's topic list starts at its first question and names real ids in order`, () => {
      for (const m of course.modules) {
        const ids = m.questions.map((q) => q.id);
        expect(m.topics[0]?.[0], m.id).toBe(ids[0]);
        const idx = m.topics.map(([id]) => ids.indexOf(id));
        expect(idx.every((i) => i >= 0), m.id).toBe(true);
        expect(idx, m.id).toEqual([...idx].sort((a, b) => a - b));
      }
    });
    it(`${course.name}: every question has a valid answer key`, () => {
      for (const q of qs) {
        expect(q.options.length, q.id).toBeGreaterThanOrEqual(2);
        expect(new Set(q.options).size, `${q.id} duplicate options`).toBe(q.options.length);
        expect(q.correct.length, q.id).toBeGreaterThan(0);
        for (const i of q.correct) expect(i >= 0 && i < q.options.length, q.id).toBe(true);
        expect(q.explain.length, q.id).toBeGreaterThan(5);
      }
    });
  }
});

describe('course sync and quizzes', () => {
  const state = syncAllCourses({ version: 1, classes: [] });
  const cls = state.classes[0];

  it('gives every question a full source path', () => {
    for (const c of cls.decks.flatMap((d) => d.cards)) expect(c.mc!.source, c.id).toMatch(/^Section \w+ → .+ → .+$/);
  });

  it('adds the course and is idempotent', () => {
    expect(cls.courseId).toBe('padi-ow');
    expect(syncAllCourses(state)).toBe(state);
  });

  it('keeps progress when content is re-synced', () => {
    const card = cls.decks[0].cards[0];
    const edited = { ...state, classes: [{ ...cls, decks: [{ ...cls.decks[0], cards: [{ ...card, rating: 4 as const, quizSeen: 3 }, ...cls.decks[0].cards.slice(1)] }, ...cls.decks.slice(1)] }] };
    const again = syncAllCourses(edited);
    expect(again.classes[0].decks[0].cards[0].rating).toBe(4);
    expect(again.classes[0].decks[0].cards[0].quizSeen).toBe(3);
  });

  it('builds a 25-question exam spread across every section', () => {
    const exam = buildExam(cls, cls.selectedDeckIds, 25);
    expect(exam).toHaveLength(25);
    expect(new Set(exam.map((e) => e.card.id)).size).toBe(25);
    for (const d of cls.decks) expect(exam.some((e) => e.deckId === d.id)).toBe(true);
  });

  it('practice favours questions answered wrong last time', () => {
    const target = cls.decks[1].cards[5];
    const marked = { ...cls, decks: cls.decks.map((d) => ({ ...d, cards: d.cards.map((c) => ({ ...c, quizSeen: 1, quizCorrect: 1, quizLastWrong: c.id === target.id })) })) };
    expect(buildPractice(marked, marked.selectedDeckIds, 10)[0].card.id).toBe(target.id);
  });

  it('grades multi-answer questions exactly', () => {
    const multi = cls.decks.flatMap((d) => d.cards).find((c) => c.mc!.correct.length > 1)!;
    expect(isCorrect(multi, multi.mc!.correct)).toBe(true);
    expect(isCorrect(multi, multi.mc!.correct.slice(1))).toBe(false);
  });
});
