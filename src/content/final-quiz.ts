import { one, type CourseModule } from './types';

export const finalQuiz: CourseModule = {
  id: 'final-quiz',
  section: 'Final Quiz',
  name: 'Final Quiz Review',
  topics: [
    ['fq-01', 'Equipment'],
    ['fq-04', 'Being a Diver'],
    ['fq-08', 'Air Use at Depth'],
    ['fq-20', 'Problem Management & Conditions'],
    ['fq-25', 'Dive Computers & DCS'],
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
      heading: 'Problem management & conditions',
      points: [
        'Buddy separation: search for no more than one minute, then surface and reunite.',
        'You’re most likely to lose track of up and down in midwater, where you can’t see the bottom or surface.',
        'Mild current: start the dive swimming into it, so it carries you back at the end.',
        'Out of air with your buddy close by: use their alternate air source and ascend together.',
        'DCS risk goes up when you dive tired, cold, sick, dehydrated or injured; also with poor fitness, high body fat, age, alcohol, and hard exercise around the dive.',
      ],
    },
    {
      heading: 'Dive computers & DCS',
      points: [
        '⭐ Suspected DCS: lie down, breathe 100% emergency oxygen, contact emergency medical care. Almost all cases need a recompression chamber. Never go back in the water.',
        'Plan mode / no stop scroll: shows the no stop time at each depth in 3 m / 10 ft steps.',
        'Went past the no stop limit: follow your computer’s emergency decompression instructions.',
        'Cold water or hard work: add a safety margin and stay well within limits.',
        'Computer fails, no backup: ascend, make a safety stop and end the dive.',
        'Flying: after repetitive or multiday dives wait 18 hours (12 after a single dive), or longer if your computer says so.',
        'Depth limits: new Open Water Divers 18 m / 60 ft (or training depth if shallower); all recreational divers 40 m / 130 ft.',
        'Altitude diving: from 300 m / 1000 ft, follow altitude procedures and set your computer if it doesn’t adjust automatically.',
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
    one('fq-20', 'You get separated from your buddy. What is the general procedure?', ['Search for no more than a minute, then surface to reunite', 'Surface right away, wait a minute, then go back down', 'Surface right away and get out of the water', 'Find your buddy’s bubbles and follow them'], 0, 'Look around for up to a minute. If you don’t find each other, both surface, reunite and continue together.'),
    one('fq-21', 'Where are you most likely to get confused about which way is up?', ['In midwater', 'At the surface', 'Near the surface', 'On the bottom'], 0, 'In midwater, especially in poor visibility, you can’t see the bottom or the surface to orient yourself. Use a line, your computer or your bubbles.'),
    one('fq-22', 'You feel a mild current at the start of your dive. How should you begin?', ['Swim against (into) the current', 'Swim with the current', 'Swim across the current', 'Swim at an angle to the current'], 0, 'Swimming into the current first means it helps carry you back to your exit at the end of the dive, when you’re more tired and lower on air.'),
    one('fq-23', 'You are close to your buddy and realise you are out of air. What is the best response?', ['Switch to your buddy’s alternate air source and ascend', 'Make a controlled emergency swimming ascent', 'Drop your weights for a buoyant emergency ascent', 'Switch to your buddy’s alternate and finish the dive'], 0, 'With a buddy nearby, an alternate air source ascent is the best option. End the dive: don’t carry on sharing air.'),
    one('fq-24', 'Which of these is likely to increase your risk of decompression sickness (DCS)?', ['Diving while tired, cold, sick, thirsty or injured', 'Diving in poor visibility, currents or rough seas', 'Not looking after your equipment properly', 'Using a dive computer to plan your dive'], 0, 'Fatigue, cold, illness, dehydration and injury all affect how your body releases nitrogen. Other factors include poor fitness, high body fat, age, alcohol, and hard exercise before, during or right after a dive.'),
    one('fq-25', 'You think you have decompression sickness. What should you do?', ['Breathe 100% oxygen and contact emergency medical care', 'Stop diving and wait until you feel better', 'Go back in the water to recompress yourself', 'See a doctor when it is convenient'], 0, 'Lie down, breathe emergency oxygen and get emergency medical care right away. Almost all cases need a recompression chamber, so never wait or go back in the water.'),
    one('fq-26', 'What does the “plan” or “no stop scroll” mode on your computer show?', ['The no stop time limit at each depth, usually in 3 m / 10 ft steps', 'The maximum depth you reached on your previous dive', 'Whether your computer works with your buddy’s computer', 'The best settings to use on your backup computer'], 0, 'Scroll through the depths to see the maximum time allowed at each, then agree a maximum depth and time with your buddy.'),
    one('fq-27', 'You accidentally go past your computer’s no stop limit. What should you do?', ['Follow the computer’s instructions for emergency decompression', 'Make a three-minute safety stop at 5 m / 15 ft and surface', 'Surface immediately, then breathe oxygen and report it', 'Ascend and check the manual for decompression procedures'], 0, 'Your computer switches to decompression mode and shows the stop depth and how long to stay there before you can surface.'),
    one('fq-28', 'You’re diving in cold water or working hard on the dive. What should you do?', ['Add a safety margin and stay well within your computer’s limits', 'Stay longer, because nitrogen is absorbed more slowly', 'Use tables, as your computer probably won’t work', 'Nothing special, since your computer allows for it'], 0, 'Cold and hard work increase your DCS risk, and your computer can’t measure them, so stay well inside its limits (or use a conservative setting).'),
    one('fq-29', 'Your computer fails during a dive and you have no backup. What should you do?', ['Ascend, make a safety stop and end the dive', 'Borrow your buddy’s computer and keep diving', 'Continue until you’re low on air, then end the dive', 'Surface immediately, skipping the safety stop'], 0, 'You can’t track your profile, so signal your buddy, ascend slowly, make a safety stop and end the dive. If you stayed well within limits you should be fine.'),
    one('fq-30', 'You make two dives in one day and then fly home. Wait until your computer says you can fly, or how many hours, whichever is longer?', ['18 hours', '12 hours', '24 hours', '48 hours'], 0, 'For repetitive dives or multiple days of diving, wait at least 18 hours before flying. After a single dive, the minimum is 12 hours.'),
    one('fq-31', 'As a new Open Water Diver, what is your recommended maximum depth (or your training depth, if shallower), and what is the limit for all recreational divers?', ['18 metres / 60 feet, and 40 metres / 130 feet', '10 metres / 30 feet, and 18 metres / 60 feet', '12 metres / 40 feet, and 30 metres / 100 feet', '24 metres / 80 feet, and 58 metres / 190 feet'], 0, 'New Open Water Divers should stay within 18 m / 60 ft, or the depth reached in training if shallower. No recreational diver should go deeper than 40 m / 130 ft.'),
    one('fq-32', 'What applies when you dive at an altitude above 300 metres / 1000 feet?', ['You need special procedures and may need to set your computer for altitude', 'You don’t need special procedures, but may need to set your computer', 'You don’t need any special procedures at all', 'You can’t use a dive computer at altitude'], 0, 'You surface to lower atmospheric pressure, so altitude procedures apply from 300 m / 1000 ft. Many computers adjust automatically; others need an altitude setting.'),
  ],
};
