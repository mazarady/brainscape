import { one, tf, type CourseModule, type CourseQuestion } from './types';

const signal = (q: CourseQuestion, image: string): CourseQuestion => ({ ...q, image: `/signals/${image}.webp` });
const SHOWN = 'What does the hand signal shown mean?';

export const handSignals: CourseModule = {
  id: 'hand-signals',
  section: 'Hand Signals',
  name: 'Hand Signals',
  topics: [
    ['fq-12', 'Signals in Pictures'],
    ['hs-01', 'Underwater Signals'],
    ['hs-12', 'Surface Signals'],
  ],
  notes: [
    {
      heading: 'Emergencies and air',
      points: [
        'Out of air: flat hand slicing across your throat.',
        'Share air: fingers pointing back and forth at your mouth (usually right after “out of air”).',
        'Low on air: fist held against your chest.',
        'Something is wrong: flat hand rocked side to side, then point to the problem (e.g. your ear).',
        'Stop / hold it / stay there: flat palm facing your buddy.',
      ],
    },
    {
      heading: 'Underwater',
      points: [
        'OK? / OK!: thumb and index finger make a circle, other fingers straight. Ask it and answer it.',
        '⭐ Go up: thumb pointing UP. It does NOT mean OK underwater.',
        'Go down: thumb pointing down.',
        'Level off / stay at this depth: flat hand, palm down, moved side to side.',
        'Slow down: flat hand, palm down, patting downward.',
        'Look at me / watch me: point two fingers at your eyes, then at your buddy.',
        'Stay together / buddy up: two index fingers held side by side.',
        'Go that way: point a flat hand in the direction.',
        'Come here: beckon with your hand.',
        'I’m cold: arms crossed, rubbing your upper arms.',
        'Check your air: point to your gauge (or tap two fingers on your palm).',
        'Ear problem / can’t equalize: “something is wrong”, then point to your ear.',
      ],
    },
    {
      heading: 'At the surface',
      points: [
        'OK at the surface: both arms over your head with fingertips touching, or one hand on top of your head (if the other is busy).',
        'Distress / help: wave an arm (or both arms) over your head.',
        'Get attention underwater: rap on your cylinder with something hard, then signal.',
      ],
    },
  ],
  questions: [
    signal(one('fq-12', SHOWN, ['Stop, hold it, stay there', 'Go back the way we came', 'Please be quiet', 'Go up to the surface'], 0, 'A flat palm facing your buddy means stop, hold it or stay there.'), 'stop'),
    signal(one('fq-13', SHOWN, ['Something is wrong', 'Stop, hold it, stay there', 'I’m cold', 'Slow down'], 0, 'A flat hand rocked side to side means something is wrong. Follow it by pointing to the problem, such as your ear.'), 'problem'),
    signal(one('fq-14', SHOWN, ['OK? / OK!', 'Out of air', 'Look at your gauge', 'Something is wrong'], 0, 'Thumb and index finger in a circle, other fingers straight, asks or answers “OK?” underwater.'), 'ok'),
    signal(one('fq-15', SHOWN, ['OK at the surface', 'I need help at the surface', 'Go down now', 'Stay where you are'], 0, 'Both arms over your head with fingertips touching (or one hand on your head) signals OK at the surface where a hand signal is hard to see.'), 'surface-ok'),
    signal(one('fq-16', SHOWN, ['Out of air', 'Stay at this depth', 'Go this way', 'Which way to the boat?'], 0, 'A flat hand slicing across your throat means out of air. Follow it with the “share air” signal.'), 'out-of-air'),
    signal(one('fq-17', SHOWN, ['Low on air', 'Look at me', 'Share air', 'Go up'], 0, 'A fist held against your chest means low on air: time to end the dive. Out of air is a flat hand across the throat.'), 'low-on-air'),
    one('fq-18', 'At the surface, which signal means distress, “I need help”?', ['Waving an arm over your head', 'Both arms over your head, fingertips touching', 'One hand placed on top of your head', 'Thumb and finger making a circle'], 0, 'Waving an arm (or both) means distress. The arms-overhead circle and hand on head both mean OK at the surface.'),
    signal(one('fq-19', SHOWN, ['Share air', 'Turn the dive', 'I’m thirsty', 'I’ve lost my regulator'], 0, 'Fingers pointing back and forth at your mouth means share air. It usually follows the out-of-air signal.'), 'share-air'),
    one('hs-01', 'Underwater, your buddy points their thumb UP. What does it mean?', ['Go up / end the dive', 'I’m OK', 'Good job', 'Look above you'], 0, 'Thumb up means go up. It does NOT mean OK underwater: OK is the thumb-and-finger circle.'),
    one('hs-02', 'Underwater, your buddy points their thumb DOWN. What does it mean?', ['Go down', 'Something is wrong', 'I don’t like this', 'Low on air'], 0, 'Thumb down is the signal to go down (descend).'),
    tf('hs-03', 'A thumbs-up underwater means “I’m OK”.', false, 'Thumb up means go up. To say OK underwater, make a circle with your thumb and index finger.'),
    one('hs-04', 'Which signal means “level off” or “stay at this depth”?', ['Flat hand, palm down, moved side to side', 'Flat palm facing your buddy', 'Thumb pointing down', 'Fist held against your chest'], 0, 'A flat, palm-down hand moved side to side means level off. A flat palm facing your buddy means stop.'),
    one('hs-05', 'Which signal means “slow down”?', ['Flat hand, palm down, patting downward', 'Flat hand rocked side to side', 'Thumb pointing up', 'Hand slicing across the throat'], 0, 'Patting downward with a flat, palm-down hand means slow down.'),
    one('hs-06', 'Your buddy points two fingers at their own eyes, then at you. What does it mean?', ['Look at me / watch me', 'I can’t see well', 'Check your mask', 'Something is wrong with your eyes'], 0, 'Fingers to the eyes, then at you, means look at me or watch me.'),
    one('hs-07', 'Your buddy holds two index fingers side by side. What does it mean?', ['Stay together / buddy up', 'Two minutes left', 'Share air', 'Go up together now'], 0, 'Two fingers side by side means stay together, buddy up.'),
    one('hs-08', 'Your buddy crosses their arms and rubs their upper arms. What does it mean?', ['I’m cold', 'Something is wrong', 'Hug me', 'Stay still'], 0, 'Crossed arms rubbing the upper arms means I’m cold. It’s usually a reason to end the dive.'),
    one('hs-09', 'You can’t equalize your ears. How do you tell your buddy?', ['Signal “something is wrong”, then point to your ear', 'Signal “out of air”, then point to your ear', 'Give a thumbs-down', 'Signal “stop”, then go up alone'], 0, 'Use “something is wrong” (flat hand rocked side to side), then point to the problem. Then ascend a little and try again.'),
    one('hs-10', 'You want to know how much air your buddy has. What do you do?', ['Point to your gauge (or tap two fingers on your palm)', 'Give the OK signal and wait', 'Signal “low on air” at them', 'Signal “out of air” at them'], 0, 'Point to your gauge (or tap two fingers on your palm) to ask “how much air?”. Your buddy answers by showing the pressure or signalling it.'),
    one('hs-11', 'Which signal comes right after “out of air” in an air-sharing emergency?', ['Share air: fingers pointing back and forth at your mouth', 'Go up: thumb pointing up', 'Low on air: fist against your chest', 'Stop: flat palm facing your buddy'], 0, 'Out of air (hand across the throat), then share air (fingers pointing at your mouth). Then you breathe from your buddy’s alternate and ascend together.'),
    one('hs-12', 'At the surface, how do you signal OK if one of your hands is busy?', ['Put your free hand on top of your head', 'Give a thumbs-up', 'Wave your free hand', 'Make the OK circle with your fingers'], 0, 'One hand on top of your head means OK at the surface when you can’t use both arms.'),
    one('hs-13', 'Why use a big arm signal for OK at the surface, not the small finger circle?', ['It’s easy to see from a distance, like a boat', 'The finger circle means “help” at the surface', 'Your fingers are too cold to use at the surface', 'It also tells the boat to come and pick you up'], 0, 'The arms-over-the-head circle (or hand on head) is big enough to see from a boat or the shore.'),
    one('hs-14', 'You see a diver at the surface waving an arm over their head. What should you think?', ['They’re in distress and need help', 'They’re OK and saying hello', 'They want the boat to wait', 'They’re signalling to descend'], 0, 'Waving is the distress signal. Divers signal OK with arms over the head or a hand on the head, never by waving.'),
    one('hs-15', 'How can you get your buddy’s attention underwater?', ['Rap on your cylinder with something hard', 'Shout into your regulator', 'Flash your light in their eyes', 'Pull hard on their fin'], 0, 'Sound travels well underwater, so a rap on your cylinder gets attention. Then use hand signals.'),
  ],
};
