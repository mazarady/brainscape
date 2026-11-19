import { many, one, tf, type CourseModule } from './types';

export const skills5: CourseModule = {
  id: 's5-skills',
  section: 'Section Five',
  name: 'Your Skills as a Diver V',
  topics: [
    ['sk5-01', 'Remove and Replace the Scuba Kit Underwater'],
    ['sk5-09', 'Remove and Replace Weight System Underwater'],
    ['sk5-14', 'Descents and Ascents Without Reference'],
    ['sk5-20', 'Minidive'],
  ],
  notes: [
    {
      heading: 'Removing gear underwater',
      points: [
        'Remove and replace your scuba kit underwater for rare situations like freeing an entanglement, or to adjust gear.',
        'One of the few skills where being NEGATIVELY buoyant helps, so you can kneel — on insensitive bottom if you have the choice.',
        'Deflate the BCD and kneel with your LEFT knee down, RIGHT knee up. (With lots of weight, e.g. a dry suit, keep a little air in the BCD.)',
        'Take the kit off LEFT arm first and put it back on RIGHT arm first, so the regulator stays in your mouth.',
        'Keep the kit upright, never let go of it, and rest it on your right knee. Check no hoses are trapped before fastening the straps.',
        'Remove/replace your weight system to adjust trim, leave weight to retrieve later, replace a dislodged pouch or untwist a belt. Deflate, kneel and rest the weights on your knee for balance. Weight belt: pull it from behind with the buckle (left) end free.',
      ],
    },
    {
      heading: 'No-reference descents/ascents and the minidive',
      points: [
        'Without a visual reference: focus on your buddy and computer, equalize regularly, control buoyancy, go slowly, stay within your computer’s ascent rate.',
        'Make your safety stop by hovering in midwater at 5 m / 15 ft (practised about halfway up in confined water).',
        'If you must navigate, one buddy navigates while the other controls depth and descent/ascent rate.',
        'Minidive = a whole dive under supervision: planning, predive check, entry, five-point descent, buoyancy, skills, air management, ending on SPG pressure or time, five-point ascent with safety stop, exit.',
        'Avoid simulated “sensitive bottom” areas. Respond to a simulated out-of-air with an ALTERNATE AIR SOURCE ascent — not a CESA.',
      ],
    },
  ],
  questions: [
    one('sk5-01', 'Why practise removing and replacing your scuba kit underwater?', ['For rare situations like freeing an entanglement, or to adjust equipment', 'To swap kits with your buddy', 'To save air', 'It’s required on every dive'], 0, 'It’s very rare to actually need it.'),
    one('sk5-02', 'For removing and replacing your scuba kit underwater, what kind of buoyancy usually helps?', ['Negative, so you can kneel', 'Positive', 'Neutral', 'It doesn’t matter'], 0, 'It’s one of the few skills where being negative helps.'),
    one('sk5-03', 'How do you kneel to remove your scuba kit underwater?', ['Left knee down, right knee up', 'Both knees down', 'Right knee down, left knee up', 'Sitting on the bottom'], 0, 'You rest the kit on your right knee.'),
    one('sk5-04', 'Which arm comes out first when removing your scuba kit underwater?', ['Left arm', 'Right arm', 'Either', 'Both together'], 0, 'That keeps the regulator in your mouth (it comes over your right shoulder).'),
    one('sk5-05', 'Which arm goes in first when putting your scuba kit back on underwater?', ['Right arm', 'Left arm', 'Either', 'Both together'], 0, 'Again, so the regulator stays in your mouth.'),
    many('sk5-06', 'Which are correct while your scuba kit is off underwater?', ['Keep it upright', 'Never let go of it', 'Rest it on your right knee', 'Let it float beside you'], [0, 1, 2], 'You may keep your right arm partly through the harness for control.'),
    one('sk5-07', 'Before fastening the straps after putting your kit back on, check that…', ['No hoses or accessories are trapped', 'Your BCD is fully inflated', 'Your mask is off', 'Your fins are loose'], 0, 'Trapped hoses can cause problems later in the dive.'),
    one('sk5-08', 'Where should you do this skill in open water, if you have a choice?', ['On insensitive bottom away from fragile life', 'On a coral head', 'In midwater', 'At the surface'], 0, 'In a real entanglement you may not have a choice.'),

    many('sk5-09', 'Why might you remove and replace your weight system underwater?', ['To adjust trim', 'To leave weight to retrieve later', 'To replace a dislodged weight pouch', 'To untwist a weight belt'], [0, 1, 2, 3], 'You practise this kneeling on the bottom.'),
    one('sk5-10', 'When removing your weight system underwater, where do you rest the weights?', ['On your knee', 'On the bottom', 'In your BCD pocket', 'On your buddy'], 0, 'It helps you keep your balance.'),
    one('sk5-11', 'How do you remove a weight belt underwater?', ['Release it and pull it from behind your back with the buckle (left) end free, then drape it over your knee', 'Drop it on the bottom', 'Pull it over your head', 'Twist it off sideways'], 0, 'Holding the right end keeps the weights from sliding off.'),
    one('sk5-12', 'Before removing your weights underwater, you should…', ['Deflate your BCD and kneel', 'Inflate your BCD fully', 'Ascend to the surface', 'Remove your fins'], 0, 'Being negative and on the bottom keeps you stable.'),
    tf('sk5-13', 'The two skills where it often helps to be negatively buoyant are removing your scuba kit and removing your weight system underwater.', true, 'Do them on insensitive bottom.'),

    one('sk5-14', 'When practising descents and ascents without a reference in confined water, what do you focus on?', ['Your buddy and your dive computer', 'The pool wall', 'The bottom', 'The surface'], 0, 'Ignore what you can see around you.'),
    many('sk5-15', 'Which are correct for descending and ascending without a reference?', ['Equalize regularly on the way down', 'Control your buoyancy', 'Go slowly — it’s easier to control', 'Ascend as fast as your BCD allows'], [0, 1, 2], 'Stay within your computer’s ascent rate.'),
    one('sk5-16', 'With no reference to hold or see, how do you make your safety stop?', ['Hover neutrally in midwater at 5 m / 15 ft', 'Skip it', 'Hold on to your buddy at the surface', 'Stop on the bottom'], 0, 'Use your computer to hold the depth.'),
    one('sk5-17', 'When ascending without a reference, how do you control your speed?', ['Watch your computer and stay within its ascent rate', 'Ascend as fast as possible', 'Follow your bubbles only', 'Count to ten'], 0, 'No faster than 18 m / 60 ft per minute, or slower if your computer requires.'),
    one('sk5-18', 'You need to navigate while descending or ascending without a reference. How do buddies split the job?', ['One navigates; the other controls depth and rate', 'Both navigate', 'Both watch depth', 'Surface first, then navigate'], 0, 'Stay together throughout.'),
    one('sk5-19', 'In confined water, where do you practise the no-reference safety stop?', ['About halfway to the surface', 'At the bottom', 'At the surface', 'You don’t practise it'], 0, 'In open water you hover at 5 m / 15 ft.'),

    one('sk5-20', 'What is a minidive?', ['Practising a whole dive from planning to exit under instructor supervision', 'A very short dive in open water', 'A snorkel', 'A dive with no buddy'], 0, 'It brings all your skills together.'),
    many('sk5-21', 'What does a minidive include?', ['Dive planning and predive safety check', 'Five-point descent and ascent', 'Air supply awareness and management', 'Ending the dive based on SPG pressure or time'], [0, 1, 2, 3], 'Plus entry, neutral buoyancy, skills with your buddy and exit.'),
    one('sk5-22', 'During a minidive your instructor signals a simulated out-of-air. How should you respond?', ['With an alternate air source ascent', 'With a Controlled Emergency Swimming Ascent', 'By dropping your weights', 'By ignoring it'], 0, 'Do not make a CESA during the minidive.'),
    one('sk5-23', 'Your instructor marks areas as “sensitive bottom” during the minidive. What do you do?', ['Avoid contact, just as you would with fragile life in open water', 'Kneel on them', 'Ignore them', 'Pick up the objects'], 0, 'It makes the practice realistic.'),
    one('sk5-24', 'When do you end a minidive?', ['When you reach the planned time or someone reaches their turn pressure', 'When the instructor leaves', 'After 10 minutes exactly', 'When your computer beeps'], 0, 'Then make a five-point ascent with a safety stop.'),
    one('sk5-25', 'At the end of the minidive ascent, what do you do at about halfway to the surface?', ['Become neutral and practise a safety stop', 'Drop your weights', 'Remove your mask', 'Swim fast to the surface'], 0, 'Finish the ascent after the stop, then get positively buoyant at the surface.'),
    tf('sk5-26', 'Games and objectives during a minidive — like buoyancy challenges — still require you to watch your air and stay with your buddy.', true, 'Just like a real open water dive.'),
  ],
};
