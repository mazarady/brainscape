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
    ['fq-20', 'Problem Management & Conditions'],
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
        'Share air: fingers pointing back and forth at your mouth.',
      ],
    },
    {
      heading: 'Problem management & conditions',
      points: [
        'Buddy separation: search for no more than one minute, then surface and reunite.',
        'You’re most likely to lose track of up and down in midwater, where you can’t see the bottom or surface.',
        'Mild current: start the dive swimming into it, so it carries you back at the end.',
        'Out of air with your buddy close by: use their alternate air source and ascend together.',
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
    signal(one('fq-17', SHOWN, ['Low on air', 'Look at me', 'Share air', 'Go up'], 0, 'A fist held against your chest means low on air: time to end the dive. Out of air is a flat hand across the throat.'), 'low-on-air'),
    one('fq-18', 'At the surface, which signal means distress, “I need help”?', ['Waving an arm over your head', 'Both arms over your head, fingertips touching', 'One hand placed on top of your head', 'Thumb and finger making a circle'], 0, 'Waving an arm (or both) means distress. The arms-overhead circle and hand on head both mean OK at the surface.'),
    signal(one('fq-19', SHOWN, ['Share air', 'Turn the dive', 'I’m thirsty', 'I’ve lost my regulator'], 0, 'Fingers pointing back and forth at your mouth means share air. It usually follows the out-of-air signal.'), 'share-air'),
    one('fq-20', 'You get separated from your buddy. What is the general procedure?', ['Search for no more than a minute, then surface to reunite', 'Surface right away, wait a minute, then go back down', 'Surface right away and get out of the water', 'Find your buddy’s bubbles and follow them'], 0, 'Look around for up to a minute. If you don’t find each other, both surface, reunite and continue together.'),
    one('fq-21', 'Where are you most likely to get confused about which way is up?', ['In midwater', 'At the surface', 'Near the surface', 'On the bottom'], 0, 'In midwater, especially in poor visibility, you can’t see the bottom or the surface to orient yourself. Use a line, your computer or your bubbles.'),
    one('fq-22', 'You feel a mild current at the start of your dive. How should you begin?', ['Swim against (into) the current', 'Swim with the current', 'Swim across the current', 'Swim at an angle to the current'], 0, 'Swimming into the current first means it helps carry you back to your exit at the end of the dive, when you’re more tired and lower on air.'),
    one('fq-23', 'You are close to your buddy and realise you are out of air. What is the best response?', ['Switch to your buddy’s alternate air source and ascend', 'Make a controlled emergency swimming ascent', 'Drop your weights for a buoyant emergency ascent', 'Switch to your buddy’s alternate and finish the dive'], 0, 'With a buddy nearby, an alternate air source ascent is the best option. End the dive: don’t carry on sharing air.'),
  ],
};
