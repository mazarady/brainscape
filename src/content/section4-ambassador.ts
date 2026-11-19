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
    one('amb-01', 'Are divers a significant threat to the overall health of the underwater environment?', ['No', 'Yes'], 0, 'Divers aren’t a major threat overall, but careless contact can still destroy natural beauty and harm stressed ecosystems.'),
    tf('amb-02', 'One reason to use environmentally friendly dive skills is to preserve natural beauty for other divers.', true, 'Damage you cause spoils the site for you on your next visit and for every diver after you.'),
    tf('amb-03', 'Your influence as a diver lets you be part of the solution to problems facing aquatic ecosystems.', true, 'Divers see the underwater world first-hand, so they can influence non-divers and take part in conservation.'),
    one('amb-04', 'A console drags across a coral head in a stressed environment. What could happen?', ['The scrape may let in disease that kills the coral head', 'Nothing — coral repairs minor scrapes within days', 'The coral grows back stronger where it was hit', 'Only the console is damaged, not the coral'], 0, 'In healthy conditions a scrape might heal in months, but in a stressed reef it can become a foothold for disease.'),
    many('amb-05', 'How do environmentally friendly skills also help you?', ['Less damage to your gear', 'You save energy', 'Lower risk of aquatic life injuries', 'You descend faster'], [0, 1, 2], 'Staying streamlined, controlling buoyancy and keeping off the bottom protects your gear, saves effort and avoids cuts and stings. It doesn’t change descent speed.'),
    many('amb-06', 'Which are direct actions divers can take to help the aquatic world?', ['Underwater clean-ups', 'Removing invasive species where allowed', 'Volunteering for ecotourism and science projects', 'Collecting coral souvenirs'], [0, 1, 2], 'Clean-ups, invasive species removal and volunteering all help; taking coral damages the reef.'),
    one('amb-07', 'Why would divers lose their influence if diving were seen as damaging?', ['Divers would appear hypocritical', 'Dive sites would all be closed', 'Dive gear would cost much more', 'Dive sites would become crowded'], 0, 'People won’t take conservation advice from divers who seem to cause damage themselves.'),
    one('amb-08', 'What is an invasive species?', ['A non-native organism spread by humans', 'Any animal that is dangerous to divers', 'Any native species that feeds on coral', 'A species protected by local law'], 0, 'Invasive species aren’t native and took hold after human activity moved them; in some places divers help remove them.'),
  ],
};
