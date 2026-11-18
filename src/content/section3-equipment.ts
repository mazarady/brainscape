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
    one('eq3-01', 'At a minimum, you should carry ___ visual and ___ audible surface signaling device(s).', ['1 and 1', '1 and 2', '2 and 2', '2 and 1'], 0, 'Make them a standard part of your kit.'),
    one('eq3-02', 'Which visual signaling device could you use to signal an aircraft?', ['Signal mirror', 'Aircraft flag', 'DSMB', 'Inflatable signal tube'], 0, 'It reflects sunlight and fits in your pocket.'),
    one('eq3-03', 'Which is the most common audible signaling device?', ['Whistle', 'Signal mirror', 'Inflatable signal tube', 'Dive light'], 0, 'Usually attached to the BCD inflator.'),
    one('eq3-04', 'Why carry a whistle even if you have a low-pressure horn?', ['The horn won’t work if your cylinder is empty', 'Whistles are louder', 'Horns are illegal in some places', 'The horn only works underwater'], 0, 'Horns use air from your cylinder.'),
    one('eq3-05', 'How does a DSMB differ from an inflatable signal tube?', ['You can deploy it on a line and reel from the bottom or midwater', 'It makes a sound', 'It’s only for night diving', 'It can’t be seen in waves'], 0, 'They do the same visual job; DSMBs can be sent up before you surface.'),
    one('eq3-06', 'What is the best visual signaling device for night diving?', ['A signal light or flasher', 'A signal mirror', 'A whistle', 'An inflatable tube'], 0, 'They fit in a pocket or strap to your arm.'),
    many('eq3-07', 'Which are visual surface signaling devices?', ['Inflatable signal tube', 'Signal mirror', 'DSMB', 'Whistle'], [0, 1, 2], 'A whistle is audible.'),
    tf('eq3-08', 'One possible use for a surface float is to help another diver.', true, 'It can act as a flotation aid.'),
    many('eq3-09', 'Which are uses for a surface float?', ['Resting', 'Marking a dive site', 'Carrying accessories', 'Supporting a dive flag'], [0, 1, 2, 3], 'Plus assisting another diver.'),
    one('eq3-10', 'How should you carry the line you’ll use to tow a surface float?', ['On a line caddy or reel', 'Clipped to your BCD', 'Wrapped around the float', 'Coiled in one hand'], 0, 'Loose line can tangle.'),
    one('eq3-11', 'Why tow a float by hand instead of attaching it to your gear?', ['So you can simply let go if it snags or a boat catches it', 'It’s easier to swim', 'It keeps the flag upright', 'It saves line'], 0, 'Use at least 15 m / 50 ft of line.'),
    tf('eq3-12', 'You use a dive flag so boaters know divers are below and should keep clear.', true, 'Many areas require one by law.'),
    one('eq3-13', 'Which flag shows that a vessel has divers in the water and can’t manoeuvre?', ['The Alpha flag', 'The traditional dive flag', 'A red flag', 'A yellow flag'], 0, 'The Alpha flag is a blue and white pennant, usually flown from boats.'),
    one('eq3-14', 'What does the traditional dive flag look like?', ['Red rectangle with a white diagonal stripe', 'Blue and white pennant', 'Orange with a black circle', 'White with a red cross'], 0, 'It means divers below — keep clear.'),
    one('eq3-15', 'Without specific local laws, you should stay within ___ of your dive flag.', ['15 m / 50 ft', '60 m / 200 ft', '30 m / 100 ft', '8 m / 25 ft'], 0, 'Stay close or you can’t expect boats to avoid you.'),
    one('eq3-16', 'As a rule of thumb, how far should boats stay from a dive flag?', ['30–60 m / 100–200 ft', '5–10 m / 15–30 ft', '15 m / 50 ft', '500 m'], 0, 'Don’t assume boaters know what the flag means.'),
    one('eq3-17', 'A dive flag should be visible from about…', ['100 m / yards', '10 m', '1 km', '30 m'], 0, 'Most have a wire extender so they show without wind.'),
    tf('eq3-18', 'You can leave your dive flag flying after everyone is out of the water.', false, 'Only display a flag when divers are actually in the water.'),
    one('eq3-19', 'You hear a boat approaching close by while underwater near your flag. What should you do?', ['Stay down, deep enough to be safe, until it clears', 'Surface immediately to wave', 'Swim toward it', 'Hold your breath'], 0, 'Never assume boats will see or respect the flag.'),
  ],
};
