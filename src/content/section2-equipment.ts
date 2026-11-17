import { many, one, tf, type CourseModule } from './types';

export const equipment2: CourseModule = {
  id: 's2-equipment',
  section: 'Section Two',
  name: 'Equipment II',
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
    one('eq2-01', 'You wear an exposure suit for ___ and ___.', ['Warmth and protection', 'Streamlining and protection', 'Streamlining and warmth', 'Buoyancy and warmth'], 0, 'Protection from stings, abrasions and cuts.'),
    one('eq2-02', 'Which exposure suit needs a snug fit, or else water carries heat away (or it’s uncomfortable)?', ['Wet suit', 'Dry suit', 'Skin suit', 'All of them equally'], 0, 'A wet suit works by trapping a layer of water that your body warms.'),
    one('eq2-03', 'Which exposure suit requires special training?', ['Dry suit', 'Wet suit', 'Skin suit', 'Shorty wet suit'], 0, 'You must equalize it and control buoyancy with it. Ask about the PADI Dry Suit Diver course.'),
    tf('eq2-04', 'A hood is important when diving in water cooler than about 21°C / 70°F.', true, 'You lose a lot of heat through an uninsulated head.'),
    one('eq2-05', 'It’s hot and sunny, the water is 21°C / 70°F, you’re in a dry suit and your buddy in a full wet suit, both with hoods. What’s the main issue to avoid before the dive?', ['Overheating', 'Hypothermia', 'Improper weighting', 'Hand protection'], 0, 'Exposure suits stop your body cooling itself on land.'),
    one('eq2-06', 'How does a wet suit keep you warm?', ['Water seeps in, your body warms it and the neoprene slows heat loss', 'It keeps you completely dry', 'It reflects heat back to your body', 'Air pockets inflate around you'], 0, 'That’s why fit matters so much.'),
    one('eq2-07', 'Below about what temperature are dry suits the primary option?', ['10°C / 50°F', '21°C / 70°F', '24°C / 75°F', '30°C / 86°F'], 0, 'They extend comfort in water below about 18°C / 65°F.'),
    one('eq2-08', 'What does a skin suit mainly provide?', ['Protection from minor cuts, stings and sunburn', 'Most insulation of any suit', 'Extra buoyancy', 'A dry layer of air'], 0, 'It gives little or no insulation — it’s for comfortably warm water.'),
    one('eq2-09', 'Which wet suit thickness gives the most insulation?', ['7 mm', '5 mm', '3 mm', '1 mm'], 0, '5–7 mm for more warmth; 3 mm suits suit warmer water and are less buoyant.'),
    one('eq2-10', 'A hood or dry suit neck seal that is too tight can…', ['Restrict blood flow and cause light-headedness or fainting', 'Make your mask fog', 'Make you more buoyant', 'Cause an ear squeeze only'], 0, 'It should be snug, but not too tight.'),
    one('eq2-11', 'From least to most insulation, which order is correct?', ['Wet suit gloves, three-finger mitts, dry gloves', 'Dry gloves, mitts, wet suit gloves', 'Mitts, wet suit gloves, dry gloves', 'Reef gloves, dry gloves, mitts'], 0, 'Gloves become important below about 18°C / 65°F.'),
    one('eq2-12', 'When do you wear wet suit boots with open-heel fins?', ['Regardless of water temperature', 'Only in cold water', 'Only on boat dives', 'Never — they’re for full-foot fins'], 0, 'They protect your feet from the fins and when walking.'),
    many('eq2-13', 'Which help you avoid overheating before a dive?', ['Set up the rest of your gear before putting on your suit', 'Stay out of the sun and limit activity once suited', 'Leave your hood back and suit unzipped as long as possible', 'Put your suit on first so you’re ready early'], [0, 1, 2], 'If you do overheat, get in the water, get hosed down or take the suit partly off.'),
    tf('eq2-14', 'Since an exposure suit protects you, it’s fine to touch or kneel on coral.', false, 'You may be protected, but the coral isn’t — contact can injure or kill it. Suits also don’t stop every sting or spine.'),
    one('eq2-15', 'You want to look under a ledge. How can you avoid hitting it with your cylinder?', ['Turn sideways', 'Swim in head-down', 'Inflate your BCD', 'Hold your breath'], 0, 'Your cylinder adds height to your profile.'),
    one('eq2-16', 'Why might divers wear a skin suit under a wet suit?', ['For protection where the wet suit doesn’t cover, and it slides on more easily', 'To make it a dry suit', 'To add buoyancy', 'To replace the hood'], 0, 'Useful with a partial wet suit in moderately warm water.'),

    tf('eq2-17', 'The main reason to carry a cutting tool is to defend yourself against sharks and other animals.', false, 'Cutting tools are for safety (entanglement) and convenience — not weapons.'),
    one('eq2-18', 'Which cutting tool is a bladed hook for cutting fishing line or net?', ['Z-knife', 'Dive shears', 'Dive knife', 'Dive tool'], 0, 'Its shape lowers the risk of cutting yourself or your gear.'),
    one('eq2-19', 'Where should you wear at least one cutting tool?', ['Where either hand can reach it', 'On your wrist', 'Under your BCD hose', 'On your lower leg'], 0, 'If one arm is entangled you can still reach it with the other.'),
    one('eq2-20', 'What is a dive tool?', ['A dive knife with a prying tip instead of a sharp point', 'A pair of shears', 'A bladed hook', 'A compass and knife combined'], 0, 'Otherwise it has the same options as a dive knife.'),
    many('eq2-21', 'Which are the four basic types of cutting tool?', ['Dive knife', 'Dive tool', 'Shears', 'Z-knife', 'Spear'], [0, 1, 2, 3], 'Some areas regulate the type and size you may carry.'),
    one('eq2-22', 'What is a cutting tool’s main safety role?', ['Handling severe entanglement', 'Protecting you from animals', 'Collecting marine life', 'Opening your cylinder valve'], 0, 'More often you’ll use it for convenience, like removing fishing line.'),

    tf('eq2-23', 'You need a gear bag designed specifically to survive the stresses of diving.', true, 'Salt water won’t ruin its zippers and the material won’t rot.'),
    one('eq2-24', 'What size gear bag should you choose?', ['Slightly larger than you need now', 'Just big enough for your current gear', 'The smallest that will close', 'Size doesn’t matter'], 0, 'You’ll add gear as you gain experience.'),
    one('eq2-25', 'A gear bag carries everything except…', ['Weights, cylinders and dry suits', 'Masks and fins', 'Regulators', 'Wet suits'], 0, 'Those are carried separately.'),

    one('eq2-26', 'Which three are the primary instruments you normally dive with?', ['SPG, dive computer, compass', 'Dive watch, compass, dive computer', 'Thermometer, compass, SPG', 'Dive computer, depth gauge, dive watch'], 0, 'They may be combined into one multifunction instrument.'),
    tf('eq2-27', 'If you use dive tables instead of a dive computer, you need a timer and depth gauge.', true, 'For example with the RDP Table or eRDPML.'),
    tf('eq2-28', 'On a sunny boat with no shade, it’s a good idea to cover your gear and instruments with a towel.', true, 'Sun and heat are hard on electronics.'),
    one('eq2-29', 'What does a dive computer do?', ['Tracks depth and time and keeps dissolved nitrogen within limits', 'Shows only how much air you have', 'Points north', 'Measures water visibility'], 0, 'It applies depth and time to a decompression model and shows how much time you have left.'),
    one('eq2-30', 'What is a thermometer useful for?', ['Deciding how much exposure protection to wear', 'Tracking dissolved nitrogen', 'Navigating', 'Measuring your air'], 0, 'It’s commonly built into computers and gauges.'),
    one('eq2-31', 'What does the compass do?', ['Gives a navigation reference to follow a course and find your exit', 'Measures depth', 'Tracks your air', 'Times your dive'], 0, 'Dive compasses are pressure resistant with clear markings.'),
  ],
};
