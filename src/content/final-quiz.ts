import { one, type CourseModule, type CourseQuestion } from './types';

const signal = (q: CourseQuestion, image: string): CourseQuestion => ({ ...q, image: `/signals/${image}.webp` });
const SHOWN = 'What does the hand signal shown mean?';

export const finalQuiz: CourseModule = {
  id: 'final-quiz',
  section: 'Final Quiz',
  name: 'Final Quiz Review',
  topics: [
    ['fq-01', 'Equipment'],
    ['fq-04', 'Being a Diver'],
    ['fq-08', 'Air Use at Depth'],
    ['fq-12', 'Hand Signals'],
  ],
  notes: [
    {
      heading: 'Equipment',
      points: [
        'Secure your alternate air source in the triangle between your chin and the lower corners of your rib cage, so you and your buddy can find it fast. Never let it dangle.',
        'DIN valves have a threaded opening the regulator screws into. Yoke valves clamp the first stage over the valve.',
        'First stage: attaches to the cylinder and drops cylinder pressure to an intermediate pressure. Second stage: the part in your mouth that delivers air at the surrounding pressure when you inhale.',
      ],
    },
    {
      heading: 'Being a diver',
      points: [
        'Sound travels about four times faster in water than in air, so it is hard to tell where a sound comes from.',
        'Unless local laws say otherwise, stay within 15 metres / 50 feet of your dive flag.',
        'As you descend your wet suit compresses (gets thinner): you lose buoyancy and warmth. Add small amounts of air to your BCD as you go down.',
        'Proper weighting: with an empty BCD and a normal breath held, you float at eye level and sink slowly when you exhale.',
      ],
    },
    {
      heading: 'Air use at depth',
      points: [
        'You use air faster the deeper you go, in proportion to the absolute pressure: 1 bar at the surface, plus 1 bar for every 10 metres / 33 feet.',
        'Time at depth = time at the surface ÷ absolute pressure. Air that lasts 60 minutes at the surface lasts 30 at 10 m (2 bar), 20 at 20 m (3 bar) and 15 at 30 m (4 bar).',
      ],
    },
    {
      heading: 'Hand signals',
      points: [
        'Stop / hold it / stay there: flat palm facing your buddy.',
        'Something is wrong: flat hand rocked side to side, then point to the problem.',
        'OK underwater: thumb and finger make a circle, other fingers straight.',
        'OK at the surface: both arms over your head with fingertips touching, or one hand on top of your head.',
        'Out of air: flat hand slicing across your throat.',
        'Low on air: fist held against your chest.',
        'Distress / help at the surface: wave an arm (or both) over your head.',
      ],
    },
  ],
  questions: [
    one('fq-01', 'Where is the best place to secure your alternate air source?', ['In the triangle between your chin and the lower corners of your rib cage', 'Loose by your side so you can find it quickly', 'At the base of your cylinder, clipped to the cylinder band', 'On the back of your BCD between your shoulder blades and waist'], 0, 'Clipped in the triangle from your chin to the lower corners of your rib cage, you and your buddy can find it fast. A dangling alternate gets damaged and clogged.'),
    one('fq-02', 'What is the difference between DIN valves and yoke valves?', ['DIN valves have a threaded opening the regulator screws into', 'DIN valves are made from a light, durable plastic', 'DIN valves have a spring shutoff held open by pressure', 'DIN valves are the only kind that have an O-ring'], 0, 'With DIN, the first stage screws into the valve. With yoke, a clamp holds the first stage over the valve opening.'),
    one('fq-03', 'The regulator ____ connects to your cylinder, and the regulator ____ is the part you put in your mouth.', ['first stage / second stage', 'second stage / first stage', 'alternate air source / first stage', 'low pressure inflator / second stage'], 0, 'The first stage reduces cylinder pressure to an intermediate pressure. The second stage, in your mouth, delivers air at the pressure around you when you inhale.'),
    one('fq-04', 'What travels faster in water than in air, making it hard to tell which direction it comes from?', ['Sound', 'Light', 'Current', 'Heat'], 0, 'Sound travels about four times faster in water, so it seems to come from all around or from overhead.'),
    one('fq-05', 'Unless local laws say otherwise, how close to your dive flag should you stay?', ['Within 15 metres / 50 feet', 'Within 30 metres / 100 feet', 'Within 60 metres / 200 feet', 'Within 5 metres / 15 feet'], 0, 'Boats are expected to keep clear of the flag, so stay within about 15 metres / 50 feet of it unless local rules set a different distance.'),
    one('fq-06', 'What happens to your wet suit as you descend?', ['It compresses, so you lose buoyancy and warmth', 'It expands, so you gain buoyancy and warmth', 'It stays the same, so nothing changes', 'It expands, so you lose buoyancy and warmth'], 0, 'Water pressure squeezes the gas bubbles in the neoprene, making the suit thinner. You become less buoyant and less insulated, so add small bursts of air to your BCD as you go down.'),
    one('fq-07', 'How do you know you are properly weighted?', ['With an empty BCD and a normal breath held, you float at eye level', 'With a half-full BCD and a normal breath held, you float at neck level', 'With an empty BCD and a normal breath held, you sink slowly', 'With a partly filled BCD, you sink easily to the bottom'], 0, 'Floating at eye level with an empty BCD and a normal breath, and sinking slowly when you exhale, means you carry just enough weight.'),
    one('fq-08', 'Your air would last 60 minutes at the surface. About how long would it last at 10 metres / 33 feet?', ['30 minutes', '60 minutes', '45 minutes', '20 minutes'], 0, 'At 10 m the absolute pressure is 2 bar, double the surface, so each breath uses twice as much air: 60 ÷ 2 = 30 minutes.'),
    one('fq-09', 'Your air would last 60 minutes at the surface. About how long would it last at 20 metres / 66 feet?', ['20 minutes', '30 minutes', '40 minutes', '15 minutes'], 0, 'At 20 m the absolute pressure is 3 bar: 60 ÷ 3 = 20 minutes.'),
    one('fq-10', 'Your air would last 60 minutes at the surface. About how long would it last at 30 metres / 99 feet?', ['15 minutes', '20 minutes', '30 minutes', '10 minutes'], 0, 'At 30 m the absolute pressure is 4 bar: 60 ÷ 4 = 15 minutes.'),
    one('fq-11', 'If your air lasts X minutes at the surface, how do you work out how long it lasts at depth?', ['Divide X by the absolute pressure at that depth', 'Multiply X by the absolute pressure at that depth', 'Subtract the depth in metres from X', 'Divide X by the depth in metres'], 0, 'Absolute pressure is 1 bar plus 1 bar per 10 m / 33 ft. Each breath at depth takes that many times more air, so time = X ÷ absolute pressure.'),
    signal(one('fq-12', SHOWN, ['Stop, hold it, stay there', 'Go back the way we came', 'Please be quiet', 'Go up to the surface'], 0, 'A flat palm facing your buddy means stop, hold it or stay there.'), 'stop'),
    signal(one('fq-13', SHOWN, ['Something is wrong', 'Stop, hold it, stay there', 'I’m cold', 'Slow down'], 0, 'A flat hand rocked side to side means something is wrong. Follow it by pointing to the problem, such as your ear.'), 'problem'),
    signal(one('fq-14', SHOWN, ['OK? / OK!', 'Out of air', 'Look at your gauge', 'Something is wrong'], 0, 'Thumb and index finger in a circle, other fingers straight, asks or answers “OK?” underwater.'), 'ok'),
    signal(one('fq-15', SHOWN, ['OK at the surface', 'I need help at the surface', 'Go down now', 'Stay where you are'], 0, 'Both arms over your head with fingertips touching (or one hand on your head) signals OK at the surface where a hand signal is hard to see.'), 'surface-ok'),
    signal(one('fq-16', SHOWN, ['Out of air', 'Stay at this depth', 'Go this way', 'Which way to the boat?'], 0, 'A flat hand slicing across your throat means out of air. Follow it with the “share air” signal.'), 'out-of-air'),
    one('fq-17', 'Underwater, a diver holds a closed fist against their chest. What does this mean?', ['Low on air', 'Out of air', 'I’m cold', 'Something is wrong'], 0, 'A fist on the chest means low on air: it’s time to end the dive. Out of air is a flat hand across the throat.'),
    one('fq-18', 'At the surface, which signal means distress, “I need help”?', ['Waving an arm over your head', 'Both arms over your head, fingertips touching', 'One hand placed on top of your head', 'Thumb and finger making a circle'], 0, 'Waving an arm (or both) means distress. The arms-overhead circle and hand on head both mean OK at the surface.'),
  ],
};
