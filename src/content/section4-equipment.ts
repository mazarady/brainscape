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
    tf('eq4-01', 'A mesh utility bag can be a good way to carry several small slates and measuring tools on a naturalist dive.', true, 'Mesh bags are all-purpose containers for bulky or awkward items, and the mesh lets water drain out.'),
    tf('eq4-02', 'You would probably choose a large mesh bag to carry a wet exposure suit.', true, 'Mesh bags range from hand-sized to big enough for most of your gear, so a bulky suit calls for a large one.'),
    one('eq4-03', 'During an underwater clean-up you fill a mesh bag with several kilograms of litter. How should you carry it?', ['In your hand, so you can let go of it instantly', 'Clipped to your BCD, so your hands stay free', 'Tied to your weight belt, so it stays low', 'Tucked under your cylinder band, so it can’t swing'], 0, 'In an emergency you must be able to drop anything heavy or draggy at once, and a bag attached to your gear can snag.'),
    many('eq4-04', 'Common uses for a mesh utility bag include…', ['Holding litter during a clean-up', 'Carrying small accessories', 'Moving gear to and from the boat', 'Carrying your lead in place of a weight system'], [0, 1, 2], 'Mesh drains water and holds bulky items like litter, accessories and wet gear. Weights belong in a proper weight system you can drop quickly.'),

    many('eq4-05', 'Why carry a slate or wet book?', ['Communication', 'Recording information', 'Noting limits and backup information', 'The unexpected'], [0, 1, 2, 3], 'All four are reasons: a slate or wet book helps you communicate, note limits, record information and handle surprises, so make one standard kit.'),
    one('eq4-06', 'When choosing a slate, the main option you usually consider is its…', ['Size', 'Weight', 'Color', 'Pencil type'], 0, 'Slates are simple, rigid and erasable, so size is the main choice — pick one that fits easily in a pocket.'),
    one('eq4-07', 'What is the main advantage of a slate over a wet book?', ['You can erase and reuse it after each dive', 'It has more writing space on each page', 'You can keep the pages as a record', 'It works without a pencil or marker'], 0, 'A slate is rigid and erasable, so you reuse it. Wet books have more space and pages you keep, but you replace them when used up.'),
    one('eq4-08', 'What is a wet book?', ['A compact notebook with waterproof pages', 'A logbook that stays dry on the boat', 'An electronic slate with a touch screen', 'A waterproof copy of your dive manual'], 0, 'A wet book has waterproof pages you can write on and keep, and it fits in a wet suit thigh pocket.'),
    tf('eq4-09', 'Some newer systems let divers talk or text underwater, but slates and hand signals remain important.', true, 'Communication technology is improving but hasn’t replaced the basics, so you still need a slate and hand signals.'),

    tf('eq4-10', 'One use for a dive light during the day is to look into holes and cracks where shy animals hide.', true, 'Lights aren’t only for night dives — by day they let you see into dark holes and cracks.'),
    one('eq4-11', 'Dive lights with wide beams tend to be…', ['Larger, brighter lights', 'Compact backup lights', 'Lights with disposable batteries', 'Lights meant only for daytime'], 0, 'Larger lights are generally brighter with wider beams. Compact lights stow easily and make good backups, but their beams are narrower.'),
    many('eq4-12', 'What are the main choices when selecting a dive light?', ['Size', 'Brightness', 'Power source', 'Housing color'], [0, 1, 2], 'Size, brightness and power source decide how a light performs; color is just a matter of taste.'),
    one('eq4-13', 'Why attach a wrist lanyard to a larger dive light?', ['So you can let go of it without losing it', 'So the beam stays steadier and brighter', 'So the battery charges as you swim', 'So it can double as an emergency signal'], 0, 'A lanyard keeps the light with you if you need both hands or drop it. Most divers also clip it off when not using it.'),

    many('eq4-14', 'Why log your dives?', ['As a reference tool', 'To document training and experience', 'To share information', 'To keep related information'], [0, 1, 2, 3], 'All four apply: a log is a reference, proves your training and experience to operators, lets you share dives and stores details like contacts and GPS points.'),
    many('eq4-15', 'What is the minimum information you would typically log?', ['Dive time', 'Your buddy’s name', 'The depth', 'The dive site name', 'Your SPG serial number'], [0, 1, 2, 3], 'The minimum is date, dive site, buddy, depth and duration, plus an objective or description. Serial numbers are optional extras.'),
    one('eq4-16', 'You haven’t dived in fresh water for a while. Why is your logbook useful?', ['You can look up how much weight you needed last time', 'It tells you today’s water temperature at the site', 'It lets you skip the buoyancy check before the dive', 'It shows you the local tide times for the day'], 0, 'Your log records details like the weight you used, which makes planning a similar dive easier. It doesn’t replace a weight check.'),
    tf('eq4-17', 'You must choose between a paper log and an eLog — you can’t keep both.', false, 'Many divers keep both, and some computers download dive data to an eLog automatically.'),

    many('eq4-18', 'Dive planning software can help you estimate…', ['Your air use', 'Your computer’s allowed dive time', 'The water temperature'], [0, 1], 'Planning software estimates how long your air will last and how much time your computer will allow. You still turn the dive based on actual air use.'),
    tf('eq4-19', 'You can choose from basic recreational planning software or software for much more complex diving.', true, 'Options range from simple recreational planners to tools for complex diving; tablet apps are the most popular.'),
    tf('eq4-20', 'Once planning software estimates how long your air will last, you no longer need to check your SPG.', false, 'Software only estimates. Your real air use can differ, so you turn the dive based on your SPG.'),

    one('eq4-21', 'A spare parts kit contains…', ['Small items you can replace yourself', 'Parts that a technician must install', 'A complete spare regulator set', 'Emergency oxygen and first aid'], 0, 'A spare parts (save-a-dive) kit holds user-replaceable items like straps, buckles and o-rings. Anything needing professional work doesn’t belong in it.'),
    many('eq4-22', 'Which might you keep in a spare parts kit?', ['Spare mask and fin straps', 'Weight belt/harness buckle', 'Cable ties and tools', 'O-rings and a regulator mouthpiece', 'A spare first stage'], [0, 1, 2, 3], 'Straps, buckles, cable ties, tools, o-rings and mouthpieces are all things you can replace yourself. A first stage needs professional servicing.'),
    one('eq4-23', 'Why have a spare parts kit?', ['So a lost o-ring or broken strap doesn’t cost you a dive', 'Because dive shops won’t fill cylinders without one', 'So you can fully service your own regulator', 'So you can swap out a faulty cylinder valve'], 0, 'Small failures like a broken strap can end a dive; a kit kept in your gear bag lets you fix them on the spot.'),
    one('eq4-24', 'What size box should you choose for your spare parts kit?', ['A bit larger than you need right now', 'Exactly the size of your current parts', 'The smallest box that will close', 'One small enough for a BCD pocket'], 0, 'You tend to add items to the kit over time, so choose a box with room to grow.'),
  ],
};
