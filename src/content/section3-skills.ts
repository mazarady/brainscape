import { many, one, tf, type CourseModule } from './types';

export const skills3: CourseModule = {
  id: 's3-skills',
  section: 'Section Three',
  name: 'Your Skills as a Diver III',
  // Where each topic's questions start (in question order).
  topics: [
    ['sk3-01', 'Deep Water Entry – Seated Back Roll'],
    ['sk3-04', 'Remove and Replace Weights at the Surface'],
    ['sk3-08', 'Cramp Release'],
    ['sk3-11', 'Neutral Buoyancy – Hovering'],
    ['sk3-14', 'Fine-Tuning Your Trim'],
    ['sk3-15', 'Air Depletion/Alternate Air Source Combined Exercise'],
    ['sk3-18', 'Controlled Emergency Swimming Ascent'],
  ],
  notes: [
    {
      heading: 'Entries and weights',
      points: [
        'Seated back roll: used close to the water (small boats, low docks) or if you can’t stand in gear. BCD partly inflated, hold your mask, breathe from the regulator, tuck your chin, lean back and roll in. Then signal OK and clear the area.',
        'Removing/replacing weights at the surface: don’t drop them; hand them to someone, put them on a platform or clip to a line. Be buoyant and on your regulator before taking weights back. Buddies do it one at a time.',
        'Tilting back almost face up helps weight pockets slide in. With a nylon belt, hold the FREE end and release the buckle end so weights can’t slide off.',
      ],
    },
    {
      heading: 'Cramps, hovering and trim',
      points: [
        'Cramp: signal your buddy and stop, rest the muscle, gently stretch and massage it, then rest a few minutes and continue more slowly.',
        'Causes of cramps: dehydration, cold, restricted circulation, and working a muscle beyond its fitness.',
        'Hovering: neutral, push gently about 1 m off the bottom and hold depth without hands or fins. Rising? Exhale and breathe with slightly less air in your lungs. Sinking? Breathe with slightly more. Never hold your breath. Aim for 30 seconds or more.',
        'Trim: relax in midwater, aim for a normal swimming position that feels balanced side to side and front to back; your instructor helps move gear and weights.',
      ],
    },
    {
      heading: 'Out-of-air practice',
      points: [
        'Air depletion + alternate air source: when breathing gets hard, signal “out of air” and “share air”, take your buddy’s alternate and breathe from it. Swim together sharing air for at least a minute, then ascend.',
        'At the surface, inflate your BCD ORALLY (you’re simulating an empty cylinder) and keep breathing from the alternate until buoyant.',
        'CESA practice: done horizontally first (imagine “ahead” is up), holding your BCD deflator and looking ahead. One breath, continuous loud “ahhhh”, no faster than 18 m / 60 ft per minute, for at least 9 m / 30 ft (about 30 seconds). Then diagonally, and vertically on open water dives.',
      ],
    },
  ],
  questions: [
    one('sk3-01', 'When is the seated back roll entry typically used?', ['Close to the water, like small boats or low docks', 'From high platforms or the decks of large boats', 'From a sandy beach, when entering through surf', 'Only for night dives, from any kind of boat'], 0, 'It suits low entry points where you can sit at the edge, and people who can’t stand in scuba gear.'),
    many('sk3-02', 'Which are correct for a seated back roll?', ['BCD partly inflated', 'Hold your mask and breathe from your regulator', 'Tuck your chin toward your chest', 'Jump backward as far as possible'], [0, 1, 2], 'You don’t need to jump — just lean back until your weight rolls you in.'),
    one('sk3-03', 'After a seated back roll entry, what should you do?', ['Signal OK and clear the area for your buddy', 'Descend straight away to the bottom', 'Take off your mask and clear it', 'Wait where you landed for your buddy'], 0, 'Your buddy needs the space you landed in to make their own entry safely.'),
    one('sk3-04', 'Why learn to remove and replace weights at the surface?', ['To adjust weighting in the water and for some entries and exits', 'Because it’s the same skill as an emergency weight drop', 'To make yourself sink faster when you descend', 'To pass spare weights to your buddy if needed'], 0, 'It lets you fine-tune weighting in the water and is needed for some entries and exits. Take care not to drop the weights.'),
    one('sk3-05', 'Before taking weights handed to you at the surface, you should…', ['Make sure you’re buoyant and breathing from your regulator', 'Deflate your BCD fully so the weights go on easily', 'Take off your mask so it doesn’t get knocked', 'Swim a little way away from the boat or platform'], 0, 'Weights pull you down, so be floating and able to breathe before you take them. Buddies should do it one at a time.'),
    one('sk3-06', 'When removing a standard nylon weight belt, which end do you hold?', ['The free end, releasing the buckle end', 'The buckle end, releasing the free end', 'The middle, with both ends hanging', 'Neither — just let it drop away'], 0, 'Holding the free end stops the weights from sliding off the open end of the belt.'),
    one('sk3-07', 'Putting an integrated weight pocket back in at the surface is often easier if you…', ['Tilt back almost face up', 'Stay upright and vertical', 'Fully deflate your BCD', 'Hold your breath'], 0, 'Tilted back, the pocket tends to slide into place in its holder.'),
    one('sk3-08', 'You start getting a leg cramp. What should you do first?', ['Signal your buddy and stop', 'Kick harder to work through it', 'Ascend to the surface right away', 'Take off the fin on that leg'], 0, 'Stopping lets the muscle rest and your buddy can help. Then gently stretch and massage it.'),
    many('sk3-09', 'Which can cause cramps while diving?', ['Dehydration', 'Cold', 'Restricted circulation', 'Working a muscle beyond its fitness level'], [0, 1, 2, 3], 'All four can cause cramps, which are also more common if you haven’t been diving for a while.'),
    one('sk3-10', 'After relieving a cramp, you should…', ['Rest a few minutes, then continue more slowly', 'Carry on at the same pace right away', 'End the dive and get out of the water', 'Swim faster to warm up the muscle'], 0, 'The muscle needs time to recover, and a slower pace makes the cramp less likely to return.'),
    one('sk3-11', 'While hovering, you start to rise slightly. What should you do?', ['Exhale and breathe with slightly less air', 'Take a deep breath and hold it briefly', 'Kick downward to stay at the same depth', 'Quickly dump all the air from your BCD'], 0, 'Less air in your lungs makes you slightly less buoyant. If you start to sink, breathe with slightly more air.'),
    tf('sk3-12', 'Holding your breath is a good way to fine-tune your hover.', false, 'Never hold your breath while scuba diving — adjust your normal breathing volume instead.'),
    one('sk3-13', 'To pass the hover skill you should hold neutral buoyancy without hands or fins for at least…', ['30 seconds', '5 seconds', '5 minutes', '1 second'], 0, 'Thirty seconds shows you can stay neutral with breathing control. If breathing alone doesn’t work, make small BCD adjustments.'),
    one('sk3-14', 'What trim do you usually want?', ['Horizontal, balanced side to side and front to back', 'Head slightly down, with your feet raised', 'Upright, as if you were standing in the water', 'Rolled slightly toward your stronger side'], 0, 'A balanced, normal swimming position is the most efficient. Your instructor helps you reposition gear and weights to get there.'),
    one('sk3-15', 'In the combined air depletion/alternate air source exercise, when breathing becomes hard you…', ['Signal “out of air”/“share air” and use your buddy’s alternate', 'Make a Controlled Emergency Swimming Ascent to the surface', 'Reach back and reopen your own cylinder valve yourself', 'Drop your weights and make a buoyant emergency ascent'], 0, 'The exercise practises the real out-of-air response of sharing air. Your instructor reopens your valve so air is there if needed.'),
    one('sk3-16', 'At the end of the air-sharing exercise, how do you inflate your BCD at the surface?', ['Orally, while still breathing from the alternate', 'With your own low-pressure inflator', 'You don’t; you kick to stay up', 'Your buddy uses their low-pressure inflator'], 0, 'You’re simulating an empty cylinder, so your own inflator wouldn’t work.'),
    one('sk3-17', 'In a real out-of-air emergency, after starting to share air you would usually…', ['Ascend to the surface together', 'Keep swimming for at least a minute', 'Finish the rest of the planned dive', 'Wait together on the bottom'], 0, 'The swim in training is only practice for sharing air while moving; in a real emergency you head up.'),
    one('sk3-18', 'How is the CESA first practised in confined water?', ['Swimming horizontally, imagining that ahead is up', 'Swimming vertically from the deepest point', 'At the surface only, floating face down', 'Swimming with your mask removed'], 0, 'Practising horizontally lets you learn the technique safely; then you do it diagonally, and vertically in open water.'),
    one('sk3-19', 'During CESA practice, how fast and how far do you swim?', ['At most 18 m / 60 ft per minute, for at least 9 m / 30 ft', 'As fast as you comfortably can, for about 3 m / 10 ft', 'About 10 m / 33 ft per minute, for 50 m / 165 ft', 'At any comfortable speed, for at least 1 full minute'], 0, 'That matches a safe ascent rate from a realistic CESA depth — about a 30-second swim.'),
    one('sk3-20', 'How should you be able to complete the CESA practice swim?', ['On a single breath, exhaling with a continuous “ahhhh”', 'Taking small breaths from your regulator as needed', 'Holding one full breath in until you finish', 'Breathing from your buddy’s alternate air source'], 0, 'It simulates having no air, so you use one breath and exhale continuously the whole way. Keep all your equipment in place.'),
    one('sk3-21', 'During CESA practice, what do you hold and where do you look?', ['Hold your BCD deflator out and look ahead, as if up', 'Hold your mask on and look down at the bottom', 'Hold your buddy’s arm and look back at them', 'Hold your weight belt buckle and look to the side'], 0, 'It’s the position you’d use in a real CESA, ready to vent the BCD and looking toward the surface.'),
  ],
};
