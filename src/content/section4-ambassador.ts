import { many, one, tf, type CourseModule } from './types';

export const ambassador: CourseModule = {
  id: 's4-ambassador',
  section: 'Section Four',
  name: 'The Underwater World’s Ambassador',
  topics: [['amb-01', 'Your Role as a Diver']],
  notes: [
    {
      heading: 'Your role as a diver',
      points: [
        'Divers are NOT a significant threat to the overall health of the aquatic environment — but environmentally friendly skills still matter.',
        'Why: damage destroys natural beauty for you and other divers; stressed ecosystems may not recover (a scrape can become a foothold for disease); and good habits also protect you and your gear.',
        'As an ambassador you can influence non-divers — but only if divers don’t look damaging or hypocritical.',
        'Take part: report observations and surveys, add your voice and vote, join underwater clean-ups, remove invasive species where allowed, volunteer for ecotourism and science.',
      ],
    },
  ],
  questions: [
    one('amb-01', 'Are divers a significant threat to the overall health of the underwater environment?', ['No', 'Yes'], 0, 'But diver damage can still destroy natural beauty and harm stressed ecosystems.'),
    tf('amb-02', 'One reason to use environmentally friendly dive skills is to preserve natural beauty for other divers.', true, 'Leave places beautiful for your next visit and for others.'),
    tf('amb-03', 'Your influence as a diver lets you be part of the solution to problems facing aquatic ecosystems.', true, 'You see the underwater world first-hand.'),
    one('amb-04', 'A console drags across a coral head in a stressed environment. What could happen?', ['The groove may become a foothold for disease that kills the whole coral head', 'Nothing — coral always repairs', 'The coral grows back stronger', 'Only the console is damaged'], 0, 'In healthy conditions it might heal in months; stressed reefs may not recover.'),
    many('amb-05', 'How do environmentally friendly skills also help you?', ['Less damage to your gear', 'You save energy', 'Lower risk of aquatic life injuries', 'You descend faster'], [0, 1, 2], 'Stay streamlined, control buoyancy and swim above the bottom.'),
    many('amb-06', 'Which are direct actions divers can take to help the aquatic world?', ['Underwater clean-ups', 'Removing invasive species where allowed', 'Volunteering for ecotourism and science projects', 'Collecting coral souvenirs'], [0, 1, 2], 'Also take part in surveys and support conservation initiatives.'),
    one('amb-07', 'Why would divers lose their influence if diving were seen as damaging?', ['Divers would appear hypocritical', 'Dive sites would close', 'Gear would cost more', 'It wouldn’t matter'], 0, 'Your credibility depends on diving without damaging.'),
    one('amb-08', 'What is an invasive species?', ['An organism not native to an area that took hold after being moved there by human activity', 'Any dangerous animal', 'A species that eats coral', 'A protected species'], 0, 'In some places divers help remove them.'),
  ],
};
