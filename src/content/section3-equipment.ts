import { many, one, tf, type CourseModule } from './types';

export const equipment3: CourseModule = {
  id: 's3-equipment',
  section: 'Section Three',
  name: 'Equipment III',
  // Where each topic's questions start (in question order).
  topics: [
    ['eq3-01', 'Surface Signaling Devices'],
    ['eq3-08', 'Dive Floats and Flags'],
  ],
  notes: [
    {
      heading: 'Surface signaling devices',
      points: [
        'Carry at least two: one AUDIBLE (to attract attention) and one VISUAL (so people can see where you are).',
        'Audible: whistle (most common, on the BCD inflator); low-pressure horn (much louder, uses cylinder air — keep a whistle too).',
        'Visual: inflatable signal tube (stands over 1 m above the water), signal mirror (can signal aircraft), DSMB (deployed from depth on a line and reel), dive lights/flashers (best at night).',
      ],
    },
    {
      heading: 'Floats and flags',
      points: [
        'Five uses for a surface float: resting, marking a site, carrying items, helping another diver, holding up a dive flag.',
        'Float line: at least 15 m / 50 ft, carried on a reel or line caddy. Tow by hand — don’t attach it to your gear.',
        'A dive flag warns boaters that divers are below. Make it visible from 100 m.',
        'Traditional dive flag: red with a white diagonal stripe — divers below, keep clear.',
        'Alpha flag: blue and white pennant — the vessel has divers down and can’t manoeuvre (usually boats only).',
        'Only fly a flag when divers are actually in the water.',
        'Without local laws: stay within 15 m / 50 ft of your flag; boats should stay 30–60 m / 100–200 ft away. If a boat sounds close, stay down.',
      ],
    },
  ],
  questions: [
    one('eq3-01', 'At a minimum, how many surface signaling devices should you carry?', ['One visual and one audible', 'One visual and two audible', 'Two visual and two audible', 'Two visual and one audible'], 0, 'An audible device attracts attention and a visual one shows where you are, so you need at least one of each.'),
    one('eq3-02', 'Which visual signaling device could you use to signal an aircraft?', ['Signal mirror', 'Dive flag', 'DSMB', 'Dive light'], 0, 'A mirror reflects sunlight over long distances, so it can catch a pilot’s eye, and it fits in your pocket.'),
    one('eq3-03', 'Which is the most common audible signaling device?', ['Whistle', 'Low-pressure horn', 'Signal mirror', 'Dive light'], 0, 'Whistles are simple and usually attached to the BCD inflator. A horn is louder but less common, and mirrors and lights are visual.'),
    one('eq3-04', 'Why carry a whistle even if you have a low-pressure horn?', ['The horn won’t work if your cylinder is empty', 'A whistle can be heard much farther away', 'Horns are banned at many popular dive sites', 'The horn only works while you’re underwater'], 0, 'A low-pressure horn runs on air from your cylinder, so a whistle is your backup if the air runs out.'),
    one('eq3-05', 'How does a DSMB differ from an inflatable signal tube?', ['It can be sent up on a line from depth', 'It makes a loud sound as well', 'It’s designed only for night diving', 'It can’t be seen at all in waves'], 0, 'Both do the same visual job, but a DSMB is deployed on a line and reel from the bottom or midwater, before you surface.'),
    one('eq3-06', 'What is the best visual signaling device for night diving?', ['A dive light or flasher', 'A signal mirror', 'A dive flag on a float', 'An inflatable signal tube'], 0, 'A light is easy to see in the dark, when a mirror, flag or tube is hard to spot.'),
    many('eq3-07', 'Which are visual surface signaling devices?', ['Inflatable signal tube', 'Signal mirror', 'DSMB', 'Whistle'], [0, 1, 2], 'Tubes, mirrors and DSMBs help people see you; a whistle is an audible device.'),
    tf('eq3-08', 'One possible use for a surface float is to help another diver.', true, 'A float gives a tired or distressed diver something to hold on to, acting as a flotation aid.'),
    many('eq3-09', 'Which are uses for a surface float?', ['Resting', 'Marking a dive site', 'Carrying accessories', 'Supporting a dive flag'], [0, 1, 2, 3], 'All four are uses of a float; the fifth is assisting another diver.'),
    one('eq3-10', 'How should you carry the line you’ll use to tow a surface float?', ['On a line caddy or reel', 'Clipped to your BCD', 'Wrapped around the float', 'Coiled loosely in one hand'], 0, 'A caddy or reel keeps the line under control; loose line can tangle around you.'),
    one('eq3-11', 'Why tow a float by hand instead of attaching it to your gear?', ['So you can let go if it snags or a boat catches it', 'So it’s easier to swim while you’re towing it', 'So the flag stays upright and easy to see', 'So you need less line to reach the float'], 0, 'If the float or line is caught by a boat or a snag, you can simply let go instead of being dragged.'),
    tf('eq3-12', 'You use a dive flag so boaters know divers are below and should keep clear.', true, 'The flag warns boats that divers are in the water nearby, and many areas require one by law.'),
    one('eq3-13', 'Which flag shows that a vessel has divers in the water and can’t manoeuvre?', ['The Alpha flag', 'The traditional dive flag', 'A plain red flag', 'A plain yellow flag'], 0, 'The Alpha flag is a blue and white pennant, usually flown from boats. The traditional dive flag just means divers below.'),
    one('eq3-14', 'What does the traditional dive flag look like?', ['Red rectangle with a white diagonal stripe', 'Blue and white swallow-tailed pennant', 'Orange square with a black circle', 'White rectangle with a red cross'], 0, 'The red flag with a white diagonal stripe means divers below — keep clear. The blue and white pennant is the Alpha flag.'),
    one('eq3-15', 'Without specific local laws, how close should you stay to your dive flag?', ['Within 15 m / 50 ft', 'Within 60 m / 200 ft', 'Within 30 m / 100 ft', 'Within 8 m / 25 ft'], 0, 'Boats expect divers to be near the flag; if you stray farther away, you can’t expect them to avoid you.'),
    one('eq3-16', 'As a rule of thumb, how far should boats stay from a dive flag?', ['30–60 m / 100–200 ft', '5–10 m / 15–30 ft', '15 m / 50 ft', '300 m / 1000 ft'], 0, 'This gives room for divers within 15 m / 50 ft of the flag — but don’t assume boaters know what the flag means.'),
    one('eq3-17', 'A dive flag should be visible from about…', ['100 m / 330 ft', '10 m / 33 ft', '1 km / 0.6 mi', '30 m / 100 ft'], 0, 'Boaters need to see it in time to steer clear; most flags have a wire extender so they show even without wind.'),
    tf('eq3-18', 'You can leave your dive flag flying after everyone is out of the water.', false, 'Only display a flag when divers are actually in the water; otherwise boaters learn to ignore it.'),
    one('eq3-19', 'You hear a boat approaching close by while underwater near your flag. What should you do?', ['Stay deep enough to be safe until it passes', 'Surface right away and wave to the driver', 'Swim toward your flag so the boat sees it', 'Hold your breath until the boat has gone'], 0, 'Never assume boats will see or respect the flag; staying deep keeps you clear of the hull and propeller.'),
  ],
};
