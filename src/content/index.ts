import type { Course } from './types';
import { beingADiver1 } from './section1-being-a-diver';
import { equipment1 } from './section1-equipment';
import { skills1 } from './section1-skills';
import { beingADiver2 } from './section2-being-a-diver';
import { equipment2 } from './section2-equipment';
import { skills2 } from './section2-skills';

export const PADI_OPEN_WATER: Course = {
  id: 'padi-ow',
  name: 'PADI Open Water Diver',
  description:
    'Study notes, flashcards and multiple-choice practice for the Open Water Diver knowledge reviews. Written from the course material in our own words — not official PADI content.',
  icon: '🤿',
  color: '#0b7fab',
  examQuestions: 25,
  modules: [beingADiver1, equipment1, skills1, beingADiver2, equipment2, skills2],
};

export const COURSES = [PADI_OPEN_WATER];
