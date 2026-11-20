import type { Course } from './types';
import { beingADiver1 } from './section1-being-a-diver';
import { equipment1 } from './section1-equipment';
import { skills1 } from './section1-skills';
import { beingADiver2 } from './section2-being-a-diver';
import { equipment2 } from './section2-equipment';
import { skills2 } from './section2-skills';
import { beingADiver3 } from './section3-being-a-diver';
import { problemManagement } from './section3-problem-management';
import { equipment3 } from './section3-equipment';
import { skills3 } from './section3-skills';
import { equipment4 } from './section4-equipment';
import { beingADiver4 } from './section4-being-a-diver';
import { computers1 } from './section4-computers';
import { ambassador } from './section4-ambassador';
import { skills4 } from './section4-skills';
import { computers2 } from './section5-computers';
import { beingADiver5 } from './section5-being-a-diver';
import { skills5 } from './section5-skills';
import { finalQuiz } from './final-quiz';

export const PADI_OPEN_WATER: Course = {
  id: 'padi-ow',
  name: 'PADI Open Water Diver',
  description:
    'Study notes, flashcards and multiple-choice practice for the Open Water Diver knowledge reviews. Written from the course material in our own words — not official PADI content.',
  icon: '🤿',
  color: '#0b7fab',
  examQuestions: 25,
  modules: [beingADiver1, equipment1, skills1, beingADiver2, equipment2, skills2, beingADiver3, problemManagement, equipment3, skills3, equipment4, beingADiver4, computers1, ambassador, skills4, computers2, beingADiver5, skills5, finalQuiz],
};

export const COURSES = [PADI_OPEN_WATER];
