import { many, one, tf, type CourseModule } from './types';

export const equipment2: CourseModule = {
  id: 's2-equipment',
  section: 'Section Two',
  name: 'Equipment II',
  // Where each topic's questions start (in question order).
  topics: [
    ['eq2-01', 'Exposure Suits I'],
    ['eq2-17', 'Cutting Tools'],
    ['eq2-23', 'Dive Gear Bags'],
    ['eq2-26', 'Dive Instruments'],
  ],
  notes: [
    {
      heading: 'Exposure suits',
      points: [
        'Two reasons to wear one: warmth and protection (stings, scrapes, cuts).',
        'Three types: wet suit, dry suit, skin suit.',
        'Wet suit: neoprene traps a thin layer of water your body warms. Must fit snugly — too loose and water flushes heat away; too tight is uncomfortable. Used about 10–30°C / 50–86°F.',
        'Dry suit: keeps you dry with seals and a watertight zipper; most insulation. Used below ~18°C / 65°F, and the main choice below 10°C / 50°F. You add air on descent and vent on ascent — needs special training.',
        'Skin suit: little or no insulation; protects from cuts, stings and sunburn in warm water.',
        'Thicker wet suits (5–7 mm) are warmer; 3 mm suits suit warmer water and are less buoyant. Shorties are popular in warm water.',
        'Wear a hood below about 21°C / 70°F. Hoods and dry suit neck seals must not be too tight — that can restrict blood flow and cause fainting.',
        'Gloves below ~18°C / 65°F, warmest to least: dry gloves > three-finger mitts > wet suit gloves. Wet suit boots go with open-heel fins whatever the temperature.',
        'Avoid overheating: set up gear first, suit on last, stay in shade, hood back and suit unzipped until the last moment. Cool off in the water if needed.',
        'Suits don’t make you reef-proof: stay off the reef, stay neutral and trim, turn sideways under ledges, secure hoses, avoid touching life.',
      ],
    },
    {
      heading: 'Cutting tools and gear bags',
      points: [
        'You carry a cutting tool for safety (entanglement) and convenience (e.g. cutting away fishing line) — NOT as a weapon.',
        'Four types: dive knife, dive tool (pry tip instead of a point), shears (great for line and net), z-knife (bladed hook for line/net).',
        'Wear at least one where EITHER hand can reach it.',
        'Dive gear bags are built for salt water and rough handling; buy one slightly bigger than you need now.',
      ],
    },
    {
      heading: 'Dive instruments',
      points: [
        'Three primary instruments: SPG, dive computer and compass.',
        'The dive computer tracks depth and time and uses a decompression model to keep dissolved nitrogen within limits.',
        'Optional: depth gauge and timer (needed if using dive tables instead of a computer), dive watch, thermometer.',
        'Care: rinse, protect from knocks, keep out of sun and heat (cover them), replace batteries as the manufacturer says.',
      ],
    },
  ],
  questions: [
    one('eq2-01', 'What are the two main reasons to wear an exposure suit?', ['Warmth and protection', 'Streamlining and protection', 'Streamlining and warmth', 'Buoyancy and warmth'], 0, 'A suit keeps you warm and protects your skin from stings, scrapes and cuts.'),
    one('eq2-02', 'Which type of exposure suit loses much of its warmth if it fits too loosely?', ['Wet suit', 'Dry suit', 'Skin suit'], 0, 'A wet suit traps a thin layer of water that your body warms. If it’s loose, cold water keeps flushing that warmth away.'),
    one('eq2-03', 'Which exposure suit requires special training?', ['Dry suit', 'Wet suit', 'Skin suit', 'Shorty wet suit'], 0, 'You add air to a dry suit as you descend and vent it as you ascend, so it affects your buoyancy. Ask about the PADI Dry Suit Diver course.'),
    tf('eq2-04', 'A hood is important when diving in water cooler than about 21°C / 70°F.', true, 'You lose a lot of heat through an uninsulated head, so wear a hood in cooler water.'),
    one('eq2-05', 'It’s hot and sunny, the water is 21°C / 70°F, you’re in a dry suit and your buddy in a full wet suit, both with hoods. What’s the main issue to avoid before the dive?', ['Overheating', 'Hypothermia', 'Being underweighted', 'Cold hands'], 0, 'Out of the water, a full suit and hood stop your body from cooling itself, so in hot sun you can overheat before you even get in.'),
    one('eq2-06', 'How does a wet suit keep you warm?', ['A thin layer of water gets in and your body warms it', 'It seals water out and keeps you completely dry', 'A reflective lining bounces body heat back to you', 'Small air pockets inflate around you as you descend'], 0, 'The neoprene slows the loss of heat from the water layer your body has warmed, which is why a snug fit matters so much.'),
    one('eq2-07', 'Below about what temperature are dry suits the primary option?', ['10°C / 50°F', '21°C / 70°F', '24°C / 75°F', '30°C / 86°F'], 0, 'Dry suits extend comfort below about 18°C / 65°F and become the main choice below about 10°C / 50°F.'),
    one('eq2-08', 'What does a skin suit mainly provide?', ['Protection from cuts, stings and sunburn', 'More insulation than any other suit', 'Extra buoyancy for surface swimming', 'A dry layer of air against your skin'], 0, 'A skin suit gives little or no insulation, so it’s for warm water where you mainly need protection for your skin.'),
    one('eq2-09', 'Which wet suit thickness gives the most insulation?', ['7 mm', '5 mm', '3 mm', '1 mm'], 0, 'Thicker neoprene insulates more, so 5–7 mm suits are warmest. 3 mm suits suit warmer water and are less buoyant.'),
    one('eq2-10', 'A hood or dry suit neck seal that is too tight can…', ['Restrict blood flow and make you faint', 'Make your mask fog up more often', 'Let more cold water flush in', 'Make you more buoyant at depth'], 0, 'Too much pressure around the neck can restrict blood flow, causing light-headedness or fainting. It should be snug, not tight.'),
    one('eq2-11', 'From least to most insulation, which order of gloves is correct?', ['Wet suit gloves, three-finger mitts, dry gloves', 'Dry gloves, three-finger mitts, wet suit gloves', 'Three-finger mitts, wet suit gloves, dry gloves', 'Wet suit gloves, dry gloves, three-finger mitts'], 0, 'Dry gloves are warmest, mitts come next and wet suit gloves insulate least. Gloves become important below about 18°C / 65°F.'),
    one('eq2-12', 'When do you wear wet suit boots with open-heel fins?', ['At any water temperature', 'Only in cold water', 'Only on boat dives', 'Never — boots go with full-foot fins'], 0, 'Open-heel fins are worn with boots whatever the temperature, because the boots protect your feet from the fins and when walking.'),
    many('eq2-13', 'Which help you avoid overheating before a dive?', ['Set up the rest of your gear before putting on your suit', 'Stay out of the sun and limit activity once suited', 'Leave your hood back and suit unzipped as long as possible', 'Put your suit on first so you’re ready early'], [0, 1, 2], 'The aim is to spend as little time as possible fully suited in the heat. If you do overheat, get in the water, get hosed down or take the suit partly off.'),
    tf('eq2-14', 'Since an exposure suit protects you, it’s fine to touch or kneel on coral.', false, 'Your suit may protect you, but contact can injure or kill the coral — and suits don’t stop every sting or spine.'),
    one('eq2-15', 'You want to look under a ledge. How can you avoid hitting it with your cylinder?', ['Turn sideways', 'Go in head first, angled down', 'Add a little air to your BCD', 'Take a deep breath and hold it'], 0, 'Your cylinder adds height to your profile; turning sideways makes you lower so it clears the ledge. Never hold your breath while scuba diving.'),
    one('eq2-16', 'Why might divers wear a skin suit under a wet suit?', ['Extra protection, and the wet suit slides on more easily', 'It seals water out, turning the wet suit into a dry suit', 'It adds buoyancy, so you need to carry less weight', 'It replaces the need for a hood in cooler water'], 0, 'With a partial wet suit in moderately warm water, a skin suit covers the skin the wet suit leaves bare and helps it slide on.'),

    tf('eq2-17', 'The main reason to carry a cutting tool is to defend yourself against sharks and other animals.', false, 'You carry a cutting tool for safety, such as freeing an entanglement, and convenience, like cutting fishing line — not as a weapon.'),
    one('eq2-18', 'Which cutting tool is a bladed hook for cutting fishing line or net?', ['Z-knife', 'Dive shears', 'Dive knife', 'Dive tool'], 0, 'A z-knife’s hook catches line or net against the blade, and its shape lowers the risk of cutting yourself or your gear.'),
    one('eq2-19', 'Where should you wear at least one cutting tool?', ['Where either hand can reach it', 'Where only your dominant hand can reach it', 'Inside a BCD pocket that’s zipped closed', 'Clipped to the back of your cylinder'], 0, 'If one arm gets entangled, you can still reach the tool with the other hand.'),
    one('eq2-20', 'What is a dive tool?', ['A dive knife with a prying tip instead of a point', 'A pair of dive shears for cutting line and net', 'A bladed hook for cutting fishing line or net', 'A compass and dive knife combined in one unit'], 0, 'Apart from the blunt prying tip, a dive tool has the same options as a dive knife.'),
    many('eq2-21', 'Which are the four basic types of cutting tool?', ['Dive knife', 'Dive tool', 'Shears', 'Z-knife', 'Spear'], [0, 1, 2, 3], 'The four types are dive knife, dive tool, shears and z-knife; a spear isn’t a cutting tool. Some areas regulate the type and size you may carry.'),
    one('eq2-22', 'What is a cutting tool’s main safety role?', ['Freeing you from a severe entanglement', 'Defending you against aquatic animals', 'Collecting marine life to bring up', 'Prying open a stuck cylinder valve'], 0, 'Its key safety job is cutting you free if you get badly tangled. More often you’ll use it for convenience, like removing fishing line.'),

    tf('eq2-23', 'You need a gear bag designed specifically to survive the stresses of diving.', true, 'A dive bag stands up to salt water and rough handling, so its zippers keep working and the material won’t rot.'),
    one('eq2-24', 'What size gear bag should you choose?', ['Slightly larger than you need now', 'Just big enough for your current gear', 'The smallest bag your gear will fit in', 'Size doesn’t matter for a gear bag'], 0, 'You’ll likely add gear as you gain experience, so leave some room.'),
    one('eq2-25', 'A dive gear bag is meant to carry all your gear except…', ['Weights, cylinders and dry suits', 'Masks, fins and snorkels', 'Regulators and gauges', 'Wet suits, hoods and boots'], 0, 'Weights, cylinders and dry suits are carried separately; most of your other gear goes in the bag.'),

    one('eq2-26', 'Which three are the primary instruments you normally dive with?', ['SPG, dive computer, compass', 'Dive watch, compass, dive computer', 'Thermometer, compass, SPG', 'Dive computer, depth gauge, dive watch'], 0, 'The SPG tracks your air, the computer tracks depth and time, and the compass gives direction. They may be combined into one instrument.'),
    tf('eq2-27', 'If you use dive tables instead of a dive computer, you need a timer and depth gauge.', true, 'Without a computer you need a depth gauge and timer to measure your depth and time for tables such as the RDP Table or eRDPML.'),
    tf('eq2-28', 'On a sunny boat with no shade, it’s a good idea to cover your gear and instruments with a towel.', true, 'Sun and heat are hard on instruments, especially electronics, so keep them covered.'),
    one('eq2-29', 'What does a dive computer do?', ['Tracks depth and time to keep nitrogen within limits', 'Shows only the air pressure left in your cylinder', 'Points north so you can follow a course', 'Measures how far you can see underwater'], 0, 'It applies your depth and time to a decompression model to keep dissolved nitrogen within limits, and shows how much time you have left.'),
    one('eq2-30', 'What is a thermometer useful for?', ['Deciding how much exposure protection to wear', 'Tracking the dissolved nitrogen in your body', 'Navigating back to your exit point', 'Measuring how much air you have left'], 0, 'Knowing the water temperature helps you choose the right suit. Thermometers are commonly built into computers and gauges.'),
    one('eq2-31', 'What does the compass do?', ['Shows the direction to follow to find your exit', 'Measures your current depth and maximum depth', 'Tracks how much air is left in your cylinder', 'Times how long you’ve been underwater on a dive'], 0, 'A compass is your navigation reference, letting you follow a course and find your way back. Dive compasses are pressure resistant with clear markings.'),
  ],
};
