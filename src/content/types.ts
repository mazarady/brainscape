export interface CourseQuestion {
  id: string;
  q: string;
  options: string[];
  /** Indexes into `options`. More than one means "choose all that apply". */
  correct: number[];
  explain: string;
}

export interface CourseModule {
  id: string;
  /** e.g. "Section One" */
  section: string;
  name: string;
  /** [first question id, topic name] pairs, in question order — gives each question its source page. */
  topics: [string, string][];
  /** Key points to read before practising, one per bullet. */
  notes: { heading: string; points: string[] }[];
  questions: CourseQuestion[];
}

export interface Course {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  examQuestions: number;
  modules: CourseModule[];
}

/** Helper: single-answer question. */
export const one = (id: string, q: string, options: string[], correct: number, explain: string): CourseQuestion => ({
  id,
  q,
  options,
  correct: [correct],
  explain,
});

/** Helper: "choose all that apply". */
export const many = (id: string, q: string, options: string[], correct: number[], explain: string): CourseQuestion => ({
  id,
  q: `${q} (Choose all that apply.)`,
  options,
  correct,
  explain,
});

/** Helper: true/false. */
export const tf = (id: string, q: string, answer: boolean, explain: string): CourseQuestion => ({
  id,
  q,
  options: ['True', 'False'],
  correct: [answer ? 0 : 1],
  explain,
});
