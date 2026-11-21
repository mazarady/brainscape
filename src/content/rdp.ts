import { many, one, tf, type CourseModule } from './types';

export const rdp: CourseModule = {
  id: 'rdp',
  section: 'RDP (Dive Tables)',
  name: 'Using the Recreational Dive Planner',
  topics: [
    ['rdp-01', 'Reading the Tables'],
    ['rdp-09', 'Repetitive Dives'],
    ['rdp-15', 'No Stop Limits'],
    ['rdp-21', 'Rules and Special Procedures'],
  ],
  notes: [
    {
      heading: 'Reading the RDP',
      points: [
        '⭐ Always round UP: depth to the next deeper row, time to the next longer listed time. If your exact number is on the table, use it.',
        'Your pressure group (PG) is a letter, A to Z, that shows how much theoretical nitrogen is left in your body. Further along the alphabet means more nitrogen.',
        'Table 1 (no stop limits and PGs): find your depth row, move along to your bottom time, read your PG at the top of the column.',
        'Table 2 (surface interval credit): starting from your PG, find your surface interval to get your NEW, lower PG. Nitrogen leaves your body while you’re on the surface.',
        'Table 3 (repetitive dive timetable): your new PG and the next dive’s depth give your residual nitrogen time (RNT) and adjusted no stop limit (ANDL).',
        'Bottom time: from the start of your descent until you start your final ascent.',
        'Total bottom time (TBT) = residual nitrogen time (RNT) + actual bottom time (ABT). Use TBT to find your PG after a repetitive dive.',
        'Adjusted no stop limit = no stop limit − RNT. Your actual bottom time on the repeat dive must not exceed it.',
      ],
    },
    {
      heading: 'No stop limits (metric RDP)',
      points: [
        '10 m: 219 min · 12 m: 147 · 14 m: 98 · 16 m: 72 · 18 m: 56 · 20 m: 45 · 22 m: 37 · 25 m: 29 · 30 m: 20 · 35 m: 14 · 40 m: 9 · 42 m: 8',
        'Imperial: 40 ft: 140 min · 50 ft: 80 · 60 ft: 55 · 70 ft: 40 · 80 ft: 30 · 90 ft: 25 · 100 ft: 20 · 110 ft: 16 · 120 ft: 13 · 130 ft: 10 · 140 ft: 8',
        'The deeper you go, the shorter your no stop limit.',
      ],
    },
    {
      heading: 'Rules',
      points: [
        'Plan your deepest dive first; make each repetitive dive the same depth or shallower.',
        'Safety stop: 3 minutes at 5 m / 15 ft after every dive. Required when you dove to 30 m / 100 ft or deeper, came within 3 pressure groups of a limit, or reached any limit.',
        'Accidentally over a no stop limit by 5 minutes or less: 8-minute stop at 5 m / 15 ft. Over by more than 5 minutes: at least 15 minutes at 5 m / 15 ft, air permitting. No diving for at least 6 hours afterwards.',
        'Cold or strenuous dive: plan it as if it were 4 m / 10 ft deeper.',
        'Three or more dives in a day: from the third dive, if you end with PG W or X, wait at least 1 hour between dives; with Y or Z, wait at least 3 hours.',
        'The RDP is for no stop diving only, at sea level up to 300 m / 1000 ft altitude; above that you need altitude procedures.',
        'Flying: wait at least 12 hours after a single dive, 18 hours after repetitive or multiday dives.',
      ],
    },
  ],
  questions: [
    one('rdp-01', 'Your dive depth falls between two rows on the RDP. Which row do you use?', ['The next deeper row', 'The next shallower row', 'Whichever row is closer', 'The average of the two rows'], 0, 'Always round depth up to the next deeper row. Rounding down would understate the nitrogen you absorbed.'),
    one('rdp-02', 'Your bottom time falls between two times listed on the row. Which do you use?', ['The next longer time', 'The next shorter time', 'Whichever time is closer', 'The exact time, worked out by hand'], 0, 'Round time up to the next longer listed time, so you always err on the safe side.'),
    one('rdp-03', 'You dive to 11 m / 36 ft. Which depth row of the metric RDP do you use?', ['12 metres', '10 metres', '11 metres', '14 metres'], 0, '11 m isn’t on the table, so round up to the next deeper row, 12 m.'),
    one('rdp-04', 'What does your pressure group (PG) letter represent?', ['How much theoretical nitrogen is left in your body', 'How deep you are allowed to dive next', 'How much air is left in your cylinder', 'How long you must wait before flying'], 0, 'The PG is a letter from A to Z. Further along the alphabet means more theoretical nitrogen in your body.'),
    one('rdp-05', 'Your PG is J. Compared with PG C, you have…', ['More theoretical nitrogen in your body', 'Less theoretical nitrogen in your body', 'The same amount of nitrogen, but less air', 'A deeper depth limit for your next dive'], 0, 'Letters further along the alphabet mean more nitrogen, so J has more than C.'),
    one('rdp-06', 'On the RDP, bottom time is measured from…', ['The start of your descent to the start of your final ascent', 'The moment you reach the bottom until you surface', 'Entering the water until you climb out', 'The start of your descent until you surface'], 0, 'Bottom time runs from when you begin descending until you begin your final ascent to the surface.'),
    one('rdp-07', 'What does Table 2 (the surface interval credit table) give you?', ['Your new, lower pressure group after time on the surface', 'Your no stop limit for the next dive', 'Your residual nitrogen time for the next dive', 'How long to wait before you fly'], 0, 'Nitrogen leaves your body during the surface interval, so your PG moves to a lower letter. Table 2 shows the new letter.'),
    one('rdp-08', 'Where do you read your pressure group on Table 1?', ['At the top of the column for your depth and time', 'At the far left of your depth row', 'At the bottom of the table, below your time', 'Where your depth row meets the no stop limit'], 0, 'Find your depth row, move along to your (rounded-up) time, then follow that column up to the letter at the top.'),

    one('rdp-09', 'What is residual nitrogen time (RNT)?', ['Time representing nitrogen still in your body from earlier dives', 'Time you must spend on the surface between dives', 'Time you can still spend at depth on this dive', 'Time you must wait at the safety stop'], 0, 'RNT is the nitrogen left from previous dives, expressed as minutes at the depth of your next dive. You add it to your actual bottom time.'),
    one('rdp-10', 'How do you work out total bottom time (TBT) for a repetitive dive?', ['Residual nitrogen time + actual bottom time', 'Actual bottom time − residual nitrogen time', 'No stop limit − actual bottom time', 'Surface interval + actual bottom time'], 0, 'TBT = RNT + ABT. You use TBT on Table 1 to find your pressure group after the repetitive dive.'),
    one('rdp-11', 'What is your adjusted no stop limit on a repetitive dive?', ['The no stop limit minus your residual nitrogen time', 'The no stop limit plus your residual nitrogen time', 'The no stop limit minus your surface interval', 'The same as the no stop limit for that depth'], 0, 'Nitrogen from earlier dives uses up part of your limit, so ANDL = NDL − RNT. Your actual bottom time must stay within it.'),
    one('rdp-12', 'Your RNT for a repetitive dive is 20 minutes and your actual bottom time is 25 minutes. What is your total bottom time?', ['45 minutes', '25 minutes', '20 minutes', '5 minutes'], 0, 'TBT = RNT + ABT = 20 + 25 = 45 minutes.'),
    one('rdp-13', 'The no stop limit at a depth is 56 minutes and your RNT is 16 minutes. What is your adjusted no stop limit?', ['40 minutes', '56 minutes', '72 minutes', '16 minutes'], 0, 'ANDL = NDL − RNT = 56 − 16 = 40 minutes.'),
    many('rdp-14', 'Which do you need from Table 3 (the repetitive dive timetable)?', ['Residual nitrogen time', 'Adjusted no stop limit', 'Your new pressure group after the surface interval', 'Your safety stop depth'], [0, 1], 'Table 3 gives RNT and the adjusted no stop limit for your next dive’s depth. Your new PG after the interval comes from Table 2.'),

    one('rdp-15', 'What is the no stop limit for 18 m / 60 ft on the RDP?', ['56 / 55 minutes', '45 / 40 minutes', '72 / 80 minutes', '20 / 25 minutes'], 0, 'On the RDP the 18 m limit is 56 minutes (60 ft: 55 minutes).'),
    one('rdp-16', 'What is the no stop limit for 12 m / 40 ft on the RDP?', ['147 / 140 minutes', '219 / 205 minutes', '98 / 80 minutes', '72 / 55 minutes'], 0, 'On the RDP the 12 m limit is 147 minutes (40 ft: 140 minutes).'),
    one('rdp-17', 'What is the no stop limit for 30 m / 100 ft on the RDP?', ['20 minutes', '29 minutes', '14 minutes', '45 minutes'], 0, 'At 30 m / 100 ft the RDP no stop limit is 20 minutes.'),
    one('rdp-18', 'What is the no stop limit for 40 m / 130 ft on the RDP?', ['9 / 10 minutes', '20 minutes', '14 / 13 minutes', '5 minutes'], 0, 'At 40 m the limit is 9 minutes (130 ft: 10 minutes) — very short, which is one reason deep dives need careful planning.'),
    tf('rdp-19', 'The deeper you dive, the shorter your no stop limit.', true, 'You absorb nitrogen faster at greater depth, so you reach the limit sooner.'),
    one('rdp-20', 'You plan three dives today. In what order should you plan the depths?', ['Deepest first, then the same or shallower', 'Shallowest first, then deeper each time', 'Any order, as long as each is within limits', 'Deepest last, to finish with the best dive'], 0, 'Plan the deepest dive first and make each repetitive dive the same depth or shallower. It keeps nitrogen loading manageable.'),

    many('rdp-21', 'When is a safety stop REQUIRED (not just recommended) on the RDP?', ['After diving to 30 m / 100 ft or deeper', 'When you came within 3 pressure groups of a no stop limit', 'When you reached any limit on the RDP', 'Only after the last dive of the day'], [0, 1, 2], 'A 3-minute stop at 5 m / 15 ft is recommended after every dive, and required in these three cases.'),
    one('rdp-22', 'You accidentally go over a no stop limit by 5 minutes or less. What does the RDP require?', ['An 8-minute stop at 5 m / 15 ft', 'A 3-minute stop at 5 m / 15 ft', 'A 15-minute stop at 5 m / 15 ft', 'No stop, just a slow ascent'], 0, 'Over by 5 minutes or less: stop for 8 minutes at 5 m / 15 ft. Then no diving for at least 6 hours.'),
    one('rdp-23', 'You accidentally go over a no stop limit by more than 5 minutes. What does the RDP require?', ['At least 15 minutes at 5 m / 15 ft, air permitting', 'An 8-minute stop at 5 m / 15 ft', 'A 3-minute safety stop at 5 m / 15 ft', 'A 15-minute stop at 10 m / 30 ft'], 0, 'Over by more than 5 minutes: stop for at least 15 minutes at 5 m / 15 ft if your air allows. Then no diving for at least 6 hours.'),
    one('rdp-24', 'After an emergency decompression stop, how long must you wait before diving again?', ['At least 6 hours', 'At least 1 hour', 'At least 12 hours', 'At least 18 hours'], 0, 'The RDP requires at least 6 hours out of the water before your next dive.'),
    one('rdp-25', 'You’ll be cold or working hard on a dive. How do you plan it with the RDP?', ['As if it were 4 m / 10 ft deeper', 'As if it were 4 m / 10 ft shallower', 'Using a shorter surface interval', 'Exactly as normal'], 0, 'Cold and exertion raise your DCS risk, so plan as if the dive were 4 m / 10 ft deeper.'),
    one('rdp-26', 'You make three or more dives in a day. From the third dive on, you end a dive in PG W or X. What is your minimum surface interval?', ['1 hour', '10 minutes', '3 hours', '6 hours'], 0, 'With PG W or X, wait at least 1 hour between subsequent dives. With Y or Z, wait at least 3 hours.'),
    one('rdp-27', 'You make three or more dives in a day. From the third dive on, you end a dive in PG Y or Z. What is your minimum surface interval?', ['3 hours', '1 hour', '6 hours', '12 hours'], 0, 'With PG Y or Z, wait at least 3 hours between subsequent dives. With W or X, at least 1 hour.'),
    one('rdp-28', 'What kind of diving is the RDP designed for?', ['No stop diving, from sea level up to 300 m / 1000 ft altitude', 'Decompression diving to any depth', 'Any diving, at any altitude', 'Only single dives, not repetitive ones'], 0, 'The RDP is for no stop recreational diving. Above 300 m / 1000 ft altitude you need special procedures.'),
  ],
};
