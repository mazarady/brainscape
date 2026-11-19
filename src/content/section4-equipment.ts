import { many, one, tf, type CourseModule } from './types';

export const equipment4: CourseModule = {
  id: 's4-equipment',
  section: 'Section Four',
  name: 'Equipment IV',
  topics: [
    ['eq4-01', 'Mesh Utility Bag'],
    ['eq4-05', 'Slates and Wet Books'],
    ['eq4-10', 'Dive Lights'],
    ['eq4-14', 'Log Books and eLogs'],
    ['eq4-18', 'Dive Planning Software'],
    ['eq4-21', 'Spare Parts Kit'],
  ],
  notes: [
    {
      heading: 'Bags, slates and lights',
      points: [
        'Mesh utility bags drain and carry bulky items: litter on a cleanup, small accessories, gear to and from the boat. Options: style (drawstring or framed), material, size, straps/handles.',
        'Be careful clipping a mesh bag to your gear — in an emergency you must be able to drop anything heavy or draggy, and it can snag.',
        'Carry a slate or wet book for four reasons: communication, noting limits/backup info, recording information, and the unexpected.',
        'Slate = rigid, erasable, reusable; main choice is size (fits a pocket). Wet book = waterproof pages you keep; more writing space; replace when used up.',
        'Dive lights are watertight and pressure-proof. Use them at night, and by day to look into holes and cracks.',
        'Light choices: size, brightness and power source. Larger lights are brighter with wider beams; compact lights stow easily and make good backups. Use a clip and a wrist lanyard.',
      ],
    },
    {
      heading: 'Logs, planning software and spares',
      points: [
        'Log your dives for reference, documentation (training requirements), showing experience to operators, sharing, and keeping related info (contacts, GPS, serial numbers).',
        'Minimum to log: date, dive site, buddy, depth and duration, objective/description.',
        'Paper logs or eLogs (apps, computer downloads) — many divers keep both.',
        'Dive planning software helps estimate how long your air will last and how much time your dive computer will allow. You still turn the dive on actual air use.',
        'A spare parts (“save-a-dive”) kit holds USER-replaceable items: straps, buckles, cable ties, tools, mouthpiece, clip, pencil, o-rings, suit cement, sunscreen. Keep it in your gear bag; choose a box with room to grow.',
      ],
    },
  ],
  questions: [
    tf('eq4-01', 'A mesh utility bag can be a good way to carry several small slates and measuring tools on a naturalist dive.', true, 'They’re all-purpose containers for bulky or awkward items.'),
    tf('eq4-02', 'You would probably choose a larger mesh bag for carrying a wet exposure suit.', true, 'Mesh bags range from hand-sized to big enough for most of your gear.'),
    one('eq4-03', 'During an underwater clean-up you fill a mesh bag with several kilograms of litter. How should you carry it?', ['In your hands', 'Clipped to your BCD', 'Tied to your weight belt', 'Tucked under your cylinder band'], 0, 'You must be able to drop anything heavy instantly in an emergency, and attached bags can snag.'),
    many('eq4-04', 'Common uses for a mesh utility bag include…', ['Holding litter during a clean-up', 'Carrying small accessories', 'Moving gear to and from the boat', 'Replacing your BCD pockets in an emergency'], [0, 1, 2], 'Mesh drains, so it suits wet gear.'),

    many('eq4-05', 'Why carry a slate or wet book?', ['Communication', 'Recording information', 'Noting limits and backup information', 'The unexpected'], [0, 1, 2, 3], 'Make one a standard part of your kit.'),
    one('eq4-06', 'When choosing a slate, the main option you usually consider is…', ['Size', 'Weight', 'Color', 'Pencil type'], 0, 'Pick one that fits easily in a pocket.'),
    one('eq4-07', 'What is the main advantage of a slate over a wet book?', ['It’s reusable — you erase it after the dive', 'It has more writing space', 'You can keep the pages', 'It needs no pencil'], 0, 'Wet books have more space and keepable pages, but you replace them.'),
    one('eq4-08', 'What is a wet book?', ['A compact notebook with waterproof pages', 'A logbook kept on the boat', 'An electronic slate', 'A waterproof dive manual'], 0, 'It fits in a wet suit thigh pocket.'),
    tf('eq4-09', 'Some newer systems let divers talk or text underwater, but slates and hand signals remain important.', true, 'Communication technology is improving but hasn’t replaced the basics.'),

    tf('eq4-10', 'One use for a dive light during the day is to look into holes and cracks where shy animals hide.', true, 'You also use lights for night diving.'),
    one('eq4-11', 'Wide-beam dive lights tend to be…', ['Larger lights', 'Compact lights', 'Disposable-battery lights', 'Only for daytime'], 0, 'Compact lights stow easily but have narrower beams.'),
    many('eq4-12', 'What are the main choices when selecting a dive light?', ['Size', 'Brightness', 'Power source', 'Frame color'], [0, 1, 2], 'LEDs are making bright lights smaller every year.'),
    one('eq4-13', 'Why attach a wrist lanyard to a larger dive light?', ['So you can let go of it without losing it', 'To make it brighter', 'To charge it', 'To use it as a signal'], 0, 'Most divers also clip the light off when not using it.'),

    many('eq4-14', 'Why log your dives?', ['As a reference tool', 'To document training and experience', 'To share information', 'To keep related information'], [0, 1, 2, 3], 'Logs also help dive operators understand your experience.'),
    many('eq4-15', 'What is the minimum information you would typically log?', ['Dive time', 'Your buddy’s name', 'The depth', 'The dive site name', 'Your SPG serial number'], [0, 1, 2, 3], 'Plus the date and the objective/description.'),
    one('eq4-16', 'Why is a logbook useful when you haven’t dived in fresh water in a while?', ['You can look up how much weight you needed before', 'It tells you the water temperature', 'It replaces a weight check', 'It shows the tide times'], 0, 'Logged dives make planning later dives easier.'),
    tf('eq4-17', 'You must choose between a paper log and an eLog — you can’t keep both.', false, 'Many divers keep both; some computers download dive data automatically.'),

    many('eq4-18', 'Dive planning software can help you estimate…', ['Your air use', 'Your computer’s allowed dive time', 'The water temperature'], [0, 1], 'You still turn the dive on actual air use and plan a reserve.'),
    tf('eq4-19', 'You can choose from basic recreational planning software or software for much more complex diving.', true, 'Tablet apps are the most popular.'),
    tf('eq4-20', 'Once planning software estimates how long your air will last, you no longer need to check your SPG.', false, 'Software only estimates — you turn the dive based on your actual air use.'),

    one('eq4-21', 'A spare parts kit contains…', ['User-replaceable items', 'Parts that need professional installation', 'Spare regulators', 'Emergency oxygen'], 0, 'It’s sometimes called a save-a-dive kit.'),
    many('eq4-22', 'Which might you keep in a spare parts kit?', ['Spare mask and fin straps', 'Weight belt/harness buckle', 'Cable ties and tools', 'O-rings and a regulator mouthpiece', 'A spare first stage'], [0, 1, 2, 3], 'A first stage needs professional servicing — not a kit item.'),
    one('eq4-23', 'Why have a spare parts kit?', ['So a lost o-ring or broken strap doesn’t make you miss a dive', 'Because dive shops require it', 'To service your regulator yourself', 'To replace your cylinder valve'], 0, 'Keep it in your gear bag.'),
    one('eq4-24', 'What size box should you choose for your spare parts kit?', ['Somewhat larger than you need now', 'Exactly the size of your current parts', 'The smallest possible', 'One that fits in your BCD pocket'], 0, 'You tend to add to it over time.'),
  ],
};
