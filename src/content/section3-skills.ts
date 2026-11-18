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
    one('sk3-01', 'When is the seated back roll entry typically used?', ['When you’re close to the water, like on small boats or low docks', 'From high platforms', 'From a beach through surf', 'Only at night'], 0, 'It’s also used by people who can’t stand in scuba gear.'),
    many('sk3-02', 'Which are correct for a seated back roll?', ['BCD partly inflated', 'Hold your mask and breathe from your regulator', 'Tuck your chin toward your chest', 'Jump backward as far as possible'], [0, 1, 2], 'Just lean back until your weight rolls you in.'),
    one('sk3-03', 'After a seated back roll entry, what should you do?', ['Signal OK and clear the area for your buddy', 'Descend immediately', 'Remove your mask', 'Wait right where you landed'], 0, 'Your buddy needs room to enter.'),
    one('sk3-04', 'Why learn to remove and replace weights at the surface?', ['To adjust your weighting in the water and for some entries and exits', 'Because it’s the same as an emergency weight drop', 'To make yourself sink faster', 'To share weights with your buddy'], 0, 'Take care not to drop them.'),
    one('sk3-05', 'Before taking weights handed to you at the surface, you should…', ['Make sure you’re buoyant and breathing from your regulator', 'Deflate your BCD fully', 'Take off your mask', 'Swim away from the boat'], 0, 'Buddies should put weights back on one at a time.'),
    one('sk3-06', 'When removing a standard nylon weight belt, which end do you hold?', ['The free end, releasing the buckle end', 'The buckle end', 'The middle', 'Neither — let it drop'], 0, 'That stops the weights sliding off.'),
    one('sk3-07', 'Putting an integrated weight pocket back in at the surface is often easier if you…', ['Tilt back almost face up', 'Go vertical, head down', 'Fully deflate your BCD', 'Hold your breath'], 0, 'The pockets tend to slide into place.'),
    one('sk3-08', 'You start getting a leg cramp. What should you do first?', ['Signal your buddy and stop', 'Kick harder through it', 'Ascend immediately', 'Remove your fin'], 0, 'Then rest and gently stretch and massage the muscle.'),
    many('sk3-09', 'Which can cause cramps while diving?', ['Dehydration', 'Cold', 'Restricted circulation', 'Working a muscle beyond its fitness level'], [0, 1, 2, 3], 'Cramps are more common if you haven’t been diving for a while.'),
    one('sk3-10', 'After relieving a cramp, you should…', ['Rest a few minutes, then continue at a slower pace', 'Continue at the same pace immediately', 'End the dive every time', 'Swim faster to warm the muscle'], 0, 'Let the muscle recover.'),
    one('sk3-11', 'While hovering, you start to rise slightly. What should you do?', ['Exhale and breathe with slightly less air in your lungs', 'Inhale deeply and hold it', 'Kick downward', 'Dump all the air from your BCD'], 0, 'If you start to sink, breathe with slightly more air in your lungs.'),
    tf('sk3-12', 'Holding your breath is a good way to fine-tune your hover.', false, 'Never hold your breath — adjust your normal breathing volume instead.'),
    one('sk3-13', 'To pass the hover skill you should hold neutral buoyancy without hands or fins for at least…', ['30 seconds', '5 seconds', '5 minutes', '1 second'], 0, 'If breathing alone doesn’t work, make small BCD adjustments.'),
    one('sk3-14', 'What trim do you usually want?', ['A normal swimming position, balanced side to side and front to back', 'Head down and feet up', 'Upright and vertical', 'Rolled to one side'], 0, 'Your instructor helps you reposition gear and weights.'),
    one('sk3-15', 'In the combined air depletion/alternate air source exercise, when breathing becomes hard you…', ['Signal “out of air” and “share air”, then breathe from your buddy’s alternate', 'Make a CESA', 'Open your own valve', 'Drop your weights'], 0, 'Your instructor reopens your valve so it’s there if needed.'),
    one('sk3-16', 'At the end of the air-sharing exercise, how do you inflate your BCD at the surface?', ['Orally, while still breathing from the alternate', 'With your low-pressure inflator', 'You don’t — just kick', 'Your buddy inflates it with their LPI'], 0, 'You’re simulating an empty cylinder.'),
    one('sk3-17', 'In a real out-of-air emergency, after starting to share air you would usually…', ['Ascend to the surface', 'Keep swimming for a minute', 'Finish the planned dive', 'Wait on the bottom'], 0, 'The swim is only practice for sharing air while moving.'),
    one('sk3-18', 'How is the CESA first practised in confined water?', ['Swimming horizontally, imagining that ahead is up', 'From the deepest point straight up', 'At the surface only', 'With your mask off'], 0, 'Then diagonally, and vertically in open water.'),
    one('sk3-19', 'During CESA practice, how fast and how far do you swim?', ['No faster than 18 m / 60 ft per minute, for at least 9 m / 30 ft', 'As fast as possible for 3 m', '10 m per minute for 50 m', 'Any speed for 1 minute'], 0, 'About a 30-second swim.'),
    one('sk3-20', 'How should you be able to complete the CESA practice swim?', ['On a single breath, exhaling with a continuous “ahhhh”', 'Taking breaths from your regulator', 'Holding your breath', 'Breathing from your buddy'], 0, 'Keep all your equipment in place.'),
    one('sk3-21', 'During CESA practice, what do you hold and where do you look?', ['Hold your BCD deflator out and look ahead (as if looking up)', 'Hold your mask and look down', 'Hold your buddy and look back', 'Hold your weights and look sideways'], 0, 'That’s the position you’d use reaching and looking up toward the surface.'),
  ],
};
