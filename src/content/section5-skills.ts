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
    one('sk5-01', 'Why practise removing and replacing your scuba kit underwater?', ['For rare situations like freeing an entanglement, or to adjust gear', 'So you can swap kits with your buddy partway through a dive', 'So you can save air by resting your kit on the bottom', 'Because it’s a required step on every open water dive'], 0, 'You’ll rarely need it, but it lets you deal with an entanglement or fix your gear without surfacing.'),
    one('sk5-02', 'For removing and replacing your scuba kit underwater, what kind of buoyancy usually helps?', ['Negative, so you can kneel', 'Positive, so the kit floats up', 'Neutral, so you can hover', 'Any, since it makes no difference'], 0, 'Being negative keeps you stable on the bottom while the kit is off; it’s one of the few skills where that helps.'),
    one('sk5-03', 'How do you kneel to remove your scuba kit underwater?', ['Left knee down, right knee up', 'Both knees down', 'Right knee down, left knee up', 'Sitting on the bottom, legs crossed'], 0, 'Your raised right knee gives you a place to rest the kit while it’s off.'),
    one('sk5-04', 'Which arm comes out first when removing your scuba kit underwater?', ['Left arm', 'Right arm', 'Either arm', 'Both arms together'], 0, 'The regulator hose comes over your right shoulder, so taking the left arm out first keeps the regulator in your mouth.'),
    one('sk5-05', 'Which arm goes in first when putting your scuba kit back on underwater?', ['Right arm', 'Left arm', 'Either arm', 'Both arms together'], 0, 'The regulator hose is on your right side, so the right arm goes in first to keep the regulator in your mouth.'),
    many('sk5-06', 'Which are correct while your scuba kit is off underwater?', ['Keep it upright', 'Never let go of it', 'Rest it on your right knee', 'Lay it on the bottom beside you'], [0, 1, 2], 'Holding the kit upright on your knee keeps it under control; you may keep your right arm partly through the harness.'),
    one('sk5-07', 'Before fastening the straps after putting your kit back on, check that…', ['No hoses or accessories are trapped', 'Your BCD is fully inflated', 'Your weight belt has been removed', 'Your low pressure inflator is disconnected'], 0, 'A hose trapped under a strap can cause problems later in the dive, so free it before fastening.'),
    one('sk5-08', 'If you have a choice, where should you remove and replace your scuba kit in open water?', ['On insensitive bottom, away from fragile life', 'On a flat coral head for steady footing', 'Hovering in midwater above the bottom', 'At the surface before you descend'], 0, 'Kneeling can damage fragile life, so pick insensitive bottom; in a real entanglement you may not have a choice.'),

    many('sk5-09', 'Why might you remove and replace your weight system underwater?', ['To adjust trim', 'To leave weight to retrieve later', 'To replace a dislodged weight pouch', 'To untwist a weight belt'], [0, 1, 2, 3], 'All of these can require taking weights off underwater; you practise it kneeling on the bottom.'),
    one('sk5-10', 'When removing your weight system underwater, where do you rest the weights?', ['On your knee', 'On the bottom beside you', 'In your BCD pocket', 'On your buddy’s knee'], 0, 'Resting the weights on your knee helps you keep your balance.'),
    one('sk5-11', 'How do you remove a weight belt underwater?', ['Release it and pull it from behind by the right end, buckle (left) end free', 'Release it and let it drop to the bottom, then pick it up', 'Release it and slide it up over your head, holding the buckle', 'Release it and twist it to the front, then lift it off sideways'], 0, 'Holding the right end with the buckle end free keeps the weights from sliding off; then drape it over your knee.'),
    one('sk5-12', 'Before removing your weights underwater, you should…', ['Deflate your BCD and kneel on the bottom', 'Inflate your BCD so you stay off the bottom', 'Ascend a little to give yourself more room', 'Remove your fins so you can kneel easily'], 0, 'Being negative and on the bottom keeps you stable while the weights are off.'),
    tf('sk5-13', 'The two skills where it often helps to be negatively buoyant are removing your scuba kit and removing your weight system underwater.', true, 'Both are done kneeling, so being negative keeps you stable; do them on insensitive bottom.'),

    one('sk5-14', 'When practising descents and ascents without a reference in confined water, what do you focus on?', ['Your buddy and your dive computer', 'The pool wall beside you', 'The pool bottom below you', 'The surface above you'], 0, 'The drill simulates open water with nothing to see, so you rely on your buddy and computer, not your surroundings.'),
    many('sk5-15', 'Which are correct for descending and ascending without a reference?', ['Equalize regularly on the way down', 'Control your buoyancy', 'Go slowly — it’s easier to control', 'Ascend as fast as your BCD allows'], [0, 1, 2], 'Going slowly with good buoyancy control keeps you in charge; stay within your computer’s ascent rate.'),
    one('sk5-16', 'With no reference to hold or see, how do you make your safety stop?', ['Hover neutrally in midwater at 5 m / 15 ft', 'Skip it and ascend straight to the surface', 'Hover at whatever depth feels comfortable', 'Sink back to the bottom and wait there'], 0, 'Without a line or bottom to use, you hold the stop by staying neutral and using your computer to keep the depth.'),
    one('sk5-17', 'When ascending without a reference, how do you control your speed?', ['Watch your computer and stay within its ascent rate', 'Ascend at whatever speed feels comfortable', 'Match your buddy’s speed without checking', 'Add a little air to your BCD every few seconds'], 0, 'With nothing to see, only your computer shows your rate: no faster than 18 m / 60 ft per minute, or slower if it requires.'),
    one('sk5-18', 'You need to navigate while descending or ascending without a reference. How do buddies split the job?', ['One navigates; the other controls depth and rate', 'Both navigate and compare their compasses', 'Both watch depth and skip navigating', 'Surface first, then navigate from there'], 0, 'Splitting the tasks means neither job gets neglected; stay together throughout.'),
    one('sk5-19', 'In confined water, where do you practise the no-reference safety stop?', ['About halfway to the surface', 'Near the bottom of the pool', 'Just below the surface', 'At exactly 5 m / 15 ft'], 0, 'In confined water you practise the stop about halfway up; in open water you hover at 5 m / 15 ft.'),

    one('sk5-20', 'What is a minidive?', ['A whole dive, from planning to exit, under supervision', 'A very short dive made in open water', 'A snorkel session between scuba dives', 'A short dive made without a buddy'], 0, 'It brings all your skills together in one practice dive, just like a real dive.'),
    many('sk5-21', 'What does a minidive include?', ['Dive planning and predive safety check', 'Five-point descent and ascent', 'Air supply awareness and management', 'Ending the dive based on SPG pressure or time'], [0, 1, 2, 3], 'All of these are part of it, plus entry, neutral buoyancy, skills with your buddy and exit.'),
    one('sk5-22', 'During a minidive your instructor signals a simulated out-of-air. How should you respond?', ['With an alternate air source ascent', 'With a Controlled Emergency Swimming Ascent', 'By dropping your weights and ascending', 'By making a fast ascent to the surface'], 0, 'The minidive response to out-of-air is an alternate air source ascent with your buddy; do not make a CESA.'),
    one('sk5-23', 'Your instructor marks areas as “sensitive bottom” during the minidive. What do you do?', ['Avoid contact, as you would with fragile life', 'Kneel on them to practise stability', 'Ignore them, since they’re only simulated', 'Pick up the markers to clear the area'], 0, 'Treating them like real fragile life makes the practice realistic.'),
    one('sk5-24', 'When do you end a minidive?', ['At the planned time or when someone reaches turn pressure', 'When the instructor leaves the water', 'After exactly 10 minutes underwater', 'As soon as you finish the first skill'], 0, 'Like a real dive, you end on time or air pressure, then make a five-point ascent with a safety stop.'),
    one('sk5-25', 'At the end of the minidive ascent, what do you do at about halfway to the surface?', ['Become neutral and practise a safety stop', 'Drop your weights for a faster ascent', 'Remove and replace your mask', 'Speed up to reach the surface sooner'], 0, 'This is the confined water version of a safety stop; after it, finish the ascent and get positively buoyant at the surface.'),
    tf('sk5-26', 'Games and objectives during a minidive — like buoyancy challenges — still require you to watch your air and stay with your buddy.', true, 'The minidive practises real diving habits, so air checks and buddy contact still apply.'),
  ],
};
