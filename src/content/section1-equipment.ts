import { many, one, tf, type CourseModule } from './types';

export const equipment1: CourseModule = {
  id: 's1-equipment',
  section: 'Section One',
  name: 'Equipment I',
  // Where each topic's questions start (in question order).
  topics: [
    ['eq1-01', 'Choosing and Caring for Scuba Equipment'],
    ['eq1-07', 'Dive Masks'],
    ['eq1-14', 'Snorkels'],
    ['eq1-18', 'Fins'],
    ['eq1-23', 'Scuba Kit'],
    ['eq1-27', 'BCD – Buoyancy Control Device'],
    ['eq1-34', 'Regulators'],
    ['eq1-48', 'Cylinders'],
    ['eq1-61', 'Weight Systems'],
  ],
  notes: [
    {
      heading: 'Choosing and caring for gear',
      points: [
        'Three most important: suitability, fit and comfort (only you can judge comfort).',
        'Four secondary: cost & features, serviceability, color & style, accessories.',
        'Mark your gear with initials where you can see them when not wearing it (e.g. inside fin pockets).',
        'Inspect before every use. Rinse in fresh water after salt, chlorinated or silty water; dry out of the sun; store cool and dry.',
        'Keep gear out of long direct sun, get periodic professional servicing, follow the manufacturer’s requirements.',
      ],
    },
    {
      heading: 'Mask, snorkel and fins',
      points: [
        'You need a mask because your eyes must be in air to focus. It must enclose your nose so you can equalize it.',
        'Fit test: hold it on your face, inhale gently through your nose — it should stay on by light suction.',
        'New mask: scrub the inside of the lens with mask cleaner (if the manufacturer recommends). Strap goes over the crown of the head, above the ears.',
        'Low-profile masks give a wider view and need less air to clear and equalize.',
        'Glasses wearers: go without, wear contacts, get prescription lenses, or bonded “readers”.',
        'Snorkel saves scuba air at the surface. Worn on the LEFT side (regulator is on the right); tip over the crown of your head.',
        'Snorkel options: flexible lower section, self-drain valve, splash guard, bright color.',
        'Two fin styles: adjustable strap (open heel, worn with boots) and full-foot (bare feet/fin socks, warm water).',
        'Primary fin considerations: fit and blade size. Adjust straps while wearing your boots.',
      ],
    },
    {
      heading: 'Scuba kit and BCD',
      points: [
        'Scuba kit = 4 systems: BCD, regulator, cylinder, weight system. Choose it as an integrated package.',
        'BCD components: bladder, cylinder band & harness/jacket, low-pressure inflator (LPI), overpressure/quick-dump valves, weight system.',
        'BCD must have enough lift to easily float you and your gear at the surface.',
        'Fit snug but not tight — fully inflate it to check it doesn’t restrict breathing. Attach a whistle near the LPI.',
        'Extra BCD care: rinse the inside of the bladder (⅓ water, slosh, drain); store it partly inflated.',
      ],
    },
    {
      heading: 'Regulator',
      points: [
        'Five parts: first stage, primary second stage, alternate air source, LPI hose, SPG/computer.',
        'First stage = the hub; attaches by yoke (clamp) or DIN (screw-in); an o-ring seals it; reduces to intermediate pressure.',
        'Second stage delivers air on demand at surrounding pressure; purge button releases air manually.',
        'Most important regulator choice: ease of breathing.',
        'Alternate air source choice: simplicity (octopus / alternate inflator) vs independence (pony bottle / ascent bottle).',
        'Primary second stage over the right shoulder. Alternate secured in the triangle between chin and lower rib cage. SPG under the left arm, clipped. Nothing dangles.',
        'Regulator care: dust cap on when rinsing, never press the purge while rinsing, professional service every 1–2 years.',
      ],
    },
    {
      heading: 'Cylinders',
      points: [
        'Two components: cylinder and valve. The burst disk relieves accidental overpressure before the cylinder would fail.',
        'Aluminum resists corrosion (common in the tropics); steel holds the same air in a smaller/lower-pressure cylinder.',
        'Higher working pressure doesn’t always mean more air — capacity matters too.',
        'A reserve (J) valve is only a warning; it gives no extra air.',
        'Key stamped markings: serial number, working pressure, hydrostatic test date. Visual inspection sticker must be current.',
        'Nitrox (green/yellow band) needs Enriched Air Diver certification.',
        'Handling: never leave one standing unattended, secure for transport, keep it secured on boats.',
        'Care: hydro test every 2–5 years, visual inspection every year, open valve gently, never drain completely (keep ~20 bar/300 psi), store upright, keep out of heat.',
        'Fill only at reputable scuba air stations, and only with air.',
      ],
    },
    {
      heading: 'Weight systems',
      points: [
        'Most important feature: a quick release so you can drop enough weight to float.',
        'You don’t always need to drop ALL your weight — just enough to float.',
        'Proper weighting = right amount + right distribution (trim: horizontal, feet level or slightly up).',
        'More than one weight system can be easier than one heavy one, as long as one can drop enough to float.',
        'Accessory weights fine-tune trim; they usually don’t quick-release.',
      ],
    },
  ],
  questions: [
    // Choosing & care
    one('eq1-01', 'The three most important considerations when choosing scuba equipment are suitability, fit and…', ['Comfort', 'Color and style', 'Cost and features', 'Brand name'], 0, 'Uncomfortable gear distracts you from the dive, and only you can judge whether something is comfortable.'),
    tf('eq1-02', 'Whether you can get your gear serviced is a consideration when choosing equipment.', true, 'Serviceability is one of the four secondary considerations, because gear needs regular servicing. Dive shops usually service the brands they sell.'),
    one('eq1-03', 'What should you do with your equipment before each use?', ['Inspect it for wear and damage', 'Rinse it in fresh water', 'Warm it up in the sun', 'Dry it off with a towel'], 0, 'Checking for proper operation, wear and damage catches problems before the dive. Don’t dive with anything that isn’t working properly.'),
    many('eq1-04', 'Which of these are secondary considerations when choosing gear?', ['Cost and features', 'Serviceability', 'Color and style', 'Accessories', 'Comfort'], [0, 1, 2, 3], 'Once gear is suitable, fits and is comfortable, these four come next. Comfort is one of the three most important considerations, not a secondary one.'),
    one('eq1-05', 'After diving in salt or chlorinated water, how should you care for your gear?', ['Rinse it in fresh water and dry it out of the sun', 'Leave it in direct sun so it dries quickly', 'Store it while still wet in a sealed bag', 'Rinse it only about once a month'], 0, 'Fresh water removes salt and chlorine, and sunlight can damage gear over time. Then store it somewhere cool and dry.'),
    one('eq1-06', 'Where is a good place to mark your initials on your gear?', ['Somewhere visible when it’s off, like inside fin pockets', 'In large letters across the front of your mask', 'On your cylinder only, since that’s what gets mixed up', 'Nowhere, because marking gear damages it'], 0, 'You can spot your gear easily when it isn’t on you, which reduces mix-ups and loss without spoiling how it looks.'),

    // Masks
    one('eq1-07', 'Why do you need a mask to see clearly underwater?', ['Your eyes need an air space to focus', 'It stops water getting up your nose', 'It keeps your face and eyes warm', 'It magnifies objects so they look clear'], 0, 'Your eyes can’t focus properly in water. The mask puts a pocket of air in front of them so they can.'),
    one('eq1-08', 'Why must a dive mask enclose your nose?', ['So you can equalize it by exhaling', 'So it seals by suction against your face', 'So you can’t breathe in through your nose', 'So the lens doesn’t fog up as much'], 0, 'The mask is an air space that gets squeezed as you descend. Covering your nose lets you blow air into it to equalize.'),
    tf('eq1-09', 'Among masks that fit, you should choose one that sits as far from your face as possible.', false, 'A low-profile mask that sits close to your face gives a wider view and needs less air to clear and equalize.'),
    one('eq1-10', 'Where should your mask strap rest?', ['Above your ears, over the crown of your head', 'Below your ears, at the base of your neck', 'Directly over the tops of your ears', 'Low across your forehead'], 0, 'Over the crown, the strap holds the mask securely without slipping. Keep it snug but not overly tight.'),
    one('eq1-11', 'How do you check if a mask fits?', ['Hold it on your face and inhale gently through your nose', 'Pull the strap very tight and check for leaks', 'Hold it on your face and exhale through your nose', 'Wait and try it on for the first time underwater'], 0, 'A mask that fits stays in place with light suction, without the strap and without pushing or twisting it.'),
    one('eq1-12', 'Why might you scrub the inside of a new mask lens with mask cleaner?', ['To remove a coating that can make it fog', 'To make the lens fully waterproof', 'To give the glass a light tint', 'To soften the strap so it fits better'], 0, 'Some manufacturers leave chemicals on new lenses that increase fogging. Check the manufacturer’s recommendations first.'),
    many('eq1-13', 'If you wear glasses or contact lenses, what are your options?', ['Go without correction if your vision is mildly affected', 'Wear contact lenses', 'Get a prescription mask', 'Have small “reader” lenses bonded into the mask', 'Wear your regular glasses inside the mask'], [0, 1, 2, 3], 'These four all work underwater, and your dive center can help you choose. Regular glasses won’t fit inside a mask or let it seal.'),

    // Snorkel
    tf('eq1-14', 'Snorkels are standard scuba equipment because they let you breathe with your face in the water at the surface without using your scuba air.', true, 'Saving cylinder air is especially useful when you surface low on air with a swim back, or in choppy water.'),
    tf('eq1-15', 'Some divers prefer a snorkel with a flexible lower section so it drops out of the way when not in use.', true, 'A flexible section keeps the mouthpiece out of your way while you breathe from the regulator. Other options include a self-drain valve and a splash guard.'),
    one('eq1-16', 'With the snorkel in your mouth, where should its tip be?', ['Over the crown of your head', 'Out in front of your forehead', 'Down at the base of your skull', 'Level with the side of your ear'], 0, 'That puts the opening at the highest point when you’re face-down in the water, so it stays clear of the surface.'),
    one('eq1-17', 'Which side of your mask strap does the snorkel normally go on?', ['On the left, opposite the regulator', 'On the right, next to the regulator', 'Either side, as it makes no difference', 'Neither, as it clips to your BCD instead'], 0, 'Your regulator second stage comes over your right shoulder, so the snorkel goes on the left to keep them out of each other’s way.'),

    // Fins
    tf('eq1-18', 'Fins give your legs a large surface area to push against the water.', true, 'That lets your powerful leg muscles move you through the water efficiently.'),
    one('eq1-19', 'What are the two basic fin styles?', ['Open heel and full-foot', 'Long blade and short blade', 'Vented blade and split blade', 'Fresh water and salt water'], 0, 'Adjustable fins have an open heel and are usually worn with wet suit boots; full-foot fins are worn with bare feet or fin socks.'),
    one('eq1-20', 'Your primary considerations when choosing fins are fit and…', ['Blade size', 'Blade color', 'Number of vents', 'Brand name'], 0, 'Blade size decides how much thrust you get: larger, stiffer blades push more water but need more leg strength.'),
    tf('eq1-21', 'You should adjust the straps on adjustable fins while wearing your wet suit boots.', true, 'That’s how you’ll wear them on the dive, so that’s when the fit needs to be right.'),
    one('eq1-22', 'Full-foot fins are generally intended for…', ['Warm water, with bare feet or thin fin socks', 'Cold water, worn over thick boots', 'Walking over rocky shore entries', 'Strong divers who want maximum thrust'], 0, 'They enclose the heel and fit like snug shoes, so there’s no room for thick boots — they suit warm water.'),

    // Scuba kit
    many('eq1-23', 'Which four systems make up a scuba kit?', ['BCD', 'Regulator', 'Cylinder', 'Weight system', 'Snorkel'], [0, 1, 2, 3], 'The BCD, regulator, cylinder and weight system work together as the scuba kit. The snorkel is standard equipment but not part of the kit itself.'),
    tf('eq1-24', 'There’s no real benefit to choosing your scuba kit as an integrated package.', false, 'The four systems connect and work together, so choosing them as a package helps make sure the whole kit suits you.'),
    one('eq1-25', 'What does the regulator do?', ['Delivers air at the surrounding pressure when you inhale', 'Holds all the parts of your scuba kit together', 'Stores high-pressure air for you to use on the dive', 'Adds or vents air to control your buoyancy'], 0, 'It reduces the cylinder’s high-pressure air so you can breathe it on demand, and it directs your exhaled air into the water.'),
    one('eq1-26', 'Which is a benefit of sidemount diving?', ['It can suit divers with lower-back issues', 'It is the only way to dive with nitrox', 'It removes the need for a BCD', 'It removes the need for a buddy'], 0, 'Sidemount cylinders can be put on in the water, so there’s less heavy lifting. Smaller cylinders are easier to carry, and having two helps in an air supply emergency.'),

    // BCD
    tf('eq1-27', 'The low-pressure inflator (LPI) fills your BCD with air from your scuba cylinder.', true, 'Press one button and air flows in from the cylinder; another button deflates the BCD or lets you inflate it by mouth.'),
    tf('eq1-28', 'Your BCD should have enough capacity to easily float you and all your equipment at the surface.', true, 'This “lift” capacity is what keeps you comfortably afloat at the surface with all your gear on.'),
    one('eq1-29', 'How should your BCD fit?', ['Snug, but not restricting your breathing when fully inflated', 'Very tight, even if it restricts breathing when inflated', 'Loose, so it can shift around freely on your body', 'Tight around the waist and loose everywhere else'], 0, 'After adjusting it, fully inflate it. If it squeezes your chest and restricts breathing, it’s too tight.'),
    one('eq1-30', 'While rinsing a BCD, your buddy puts some fresh water inside the bladder. Is this correct BCD care?', ['Yes, the inside of the bladder needs rinsing too', 'No, water should never go inside the bladder', 'Only when the BCD is brand new', 'Only if salt water is used instead'], 0, 'Salt and debris get inside the bladder too. Fill it about ⅓ with fresh water and the rest with air, slosh it around, then drain it through the LPI and dump valves.'),
    one('eq1-31', 'Why do you store most BCDs partially inflated?', ['To keep the bladder from sticking together inside', 'To keep it ready to use on the next dive', 'To stop the valves from corroding', 'To keep the air inside it fresh'], 0, 'A little air keeps the inside walls of the bladder apart so they can’t stick together. It’s one of the two extra BCD care steps.'),
    one('eq1-32', 'What do the overpressure valves on a BCD do?', ['Vent air automatically if the bladder is overfilled', 'Inflate the BCD with air from your cylinder', 'Release your weights in an emergency', 'Lock the cylinder band in place'], 0, 'They let excess air out so the bladder doesn’t rupture. Some BCDs also have quick-dump valves you can pull to release air.'),
    one('eq1-33', 'Where should you attach a whistle?', ['Near the low-pressure inflator, within easy reach', 'Inside a zipped pocket, out of the way', 'On a fin strap, where it won’t snag', 'Nowhere, because divers don’t need one'], 0, 'Attaching it near the LPI, which you handle often, means you can find and use it quickly. It’s part of preparing your BCD.'),

    // Regulator
    one('eq1-34', 'What is the most important consideration when choosing a regulator?', ['Ease of breathing', 'Color and style', 'An adjustable second stage', 'A dive/predive switch'], 0, 'How easily it breathes affects every breath you take. All modern regulators from reputable makers meet recreational requirements; higher-end models breathe easiest.'),
    one('eq1-35', 'When choosing an alternate air source, the main decision is between…', ['Simplicity and independence', 'A short hose and a long hose', 'The left side and the right side', 'Having one and not having one'], 0, 'Octopus and alternate inflator regulators are simplest; pony bottles and ascent bottles give you an independent air supply.'),
    tf('eq1-36', 'Your SPG is always built into your dive computer.', false, 'It can be a separate mechanical gauge, part of a gauge console, or part of an air-integrated computer.'),
    tf('eq1-37', 'A dive professional will usually attach your regulator components when you get your regulator.', true, 'They connect each hose to the correct port on the first stage.'),
    one('eq1-38', 'Where do you secure your alternate air source?', ['Between your chin and lower rib cage', 'Hanging loose so it’s easy to grab', 'In a zipped pocket on your left side', 'Clipped behind your head near the valve'], 0, 'Your buddy must be able to find it and pull it free quickly, so secure it there with a quick release. Many are brightly colored.'),
    tf('eq1-39', 'Regulators need professional overhauls, typically every one to two years.', true, 'Regular servicing keeps your regulator reliable, even if it seems to be working fine.'),
    one('eq1-40', 'Which regulator component is the “hub” that supplies air to everything else?', ['First stage', 'Primary second stage', 'Alternate air source', 'SPG'], 0, 'The first stage attaches to the cylinder valve, reduces cylinder pressure to intermediate pressure and feeds all the hoses.'),
    one('eq1-41', 'What seals the first stage to the cylinder valve?', ['An o-ring', 'Thread tape', 'The burst disk', 'A metal washer'], 0, 'A small rubber o-ring makes the airtight seal, for both yoke and DIN connections.'),
    one('eq1-42', 'Which is true about yoke and DIN regulators?', ['Yoke clamps over the valve; DIN screws into it', 'DIN clamps over the valve; yoke screws into it', 'DIN is older and more widely used than yoke', 'Yoke and DIN can never be adapted to each other'], 0, 'A yoke clamps on, while a DIN screws in and has a higher pressure rating. With a yoke adapter, a DIN regulator works on either type of valve.'),
    one('eq1-43', 'Which of these should you avoid while rinsing your regulator?', ['Pressing the purge button', 'Keeping the dust cap in place', 'Running water through the second stages', 'Rinsing it with fresh water'], 0, 'Pressing the purge opens the valve, which can let water flow up the hose into the first stage.'),
    one('eq1-44', 'What does the dive/predive switch do?', ['Reduces free-flow when the second stage isn’t in your mouth', 'Switches your dive computer on before the dive', 'Locks the first stage onto the cylinder valve', 'Shuts off air to your alternate air source'], 0, 'In the predive setting the second stage is less likely to free-flow at the surface. An adjustable knob is a different option that fine-tunes breathing.'),
    one('eq1-45', 'Where does your primary second stage come from?', ['Over your right shoulder', 'Over your left shoulder', 'From the triangle at your chest', 'From under your left arm'], 0, 'The primary second stage is routed over the right shoulder. It doesn’t need securing because it’s in your mouth.'),
    one('eq1-46', 'A hose-mounted SPG is normally…', ['Routed under your left arm and clipped', 'Left hanging freely near your knees', 'Clipped up high on your right shoulder', 'Tucked away inside a BCD pocket'], 0, 'Clipped under your left arm it’s easy to read and doesn’t dangle, where it could be damaged, harm the environment and create drag.'),
    one('eq1-47', 'You should have your SPG checked if…', ['It doesn’t read zero when unpressurized', 'It reads in bar instead of psi', 'It is more than a month old', 'It’s a different brand from your buddy’s'], 0, 'A gauge that shows pressure when there’s none may not be accurate. Have it checked if you have any other reason to doubt it too.'),

    // Cylinders
    one('eq1-48', 'What is the safety device that ruptures to release air if a cylinder is accidentally over-pressurized?', ['Burst disk', 'DIN valve', 'O-ring', 'Reserve valve'], 0, 'The burst disk is designed to fail first, releasing air well before the cylinder itself could fail.'),
    tf('eq1-49', 'A cylinder with a higher working pressure always holds more air than one with a lower working pressure.', false, 'How much air a cylinder holds depends on its internal capacity as well as its working pressure.'),
    one('eq1-50', 'At a dive resort some rental cylinders have green and yellow “Nitrox” bands. As a new Open Water Diver with no other training, can you use them?', ['No, not without Enriched Air Diver training', 'Yes, any certified diver can use them', 'Yes, but only for shallow dives', 'Yes, as long as the resort allows it'], 0, 'Enriched air has extra oxygen, which needs special training to use safely. You need Enriched Air Diver certification, or to be under instructor supervision.'),
    one('eq1-51', 'You bring a cylinder aboard a dive boat. What should you normally do with it?', ['Secure it in a rack or with a restraint', 'Lay it down flat on the deck', 'Stand it upright on the open deck', 'Keep holding it until you dive'], 0, 'A boat moves, so a loose cylinder can fall or roll. Use the restraining cord even if you step away only for a moment.'),
    one('eq1-52', 'Scuba cylinders need pressure (hydrostatic) testing ___ and visual inspection ___.', ['every 2–5 years; every year', 'every year; every year', 'every year; every 2–5 years', 'every 2–5 years; every 2–5 years'], 0, 'Hydro test intervals vary by region, but visual inspections are yearly. Never get a cylinder filled without a current inspection.'),
    one('eq1-53', 'Where should you get your cylinder filled?', ['At a reputable scuba air station', 'At any garage with an air compressor', 'From any source of compressed gas', 'From a medical oxygen supplier'], 0, 'Scuba air must be specially filtered, because contaminants that are harmless at the surface can be toxic at depth. Fill cylinders only with air.'),
    one('eq1-54', 'Why should you never completely empty a scuba cylinder?', ['To keep moisture from getting inside', 'Because an empty cylinder is too light', 'Because the valve will lock shut', 'Because it voids the warranty'], 0, 'Leftover pressure keeps moist air out. Keep about 20 bar / 300 psi in it; if it drains completely, have it visually inspected.'),
    one('eq1-55', 'Why is a cylinder stored standing upright?', ['So moisture collects at the thick bottom', 'So the inside of the valve stays dry', 'Because it saves storage space', 'So the air inside stays cool'], 0, 'Any moisture inside settles at the bottom, the thickest part of the cylinder. Store it where it can’t be knocked over.'),
    one('eq1-56', 'What does a reserve (“J”) valve do?', ['It warns you of low air but gives no extra air', 'It holds back an extra 50 bar of air for you', 'It stops the cylinder from being overfilled', 'It replaces the need for an SPG on the dive'], 0, 'When about 20–40 bar / 300–500 psi is left, a spring restricts your air so breathing gets harder; you pull a lever to release the rest. It’s only a warning — you still manage your air with your SPG.'),
    many('eq1-57', 'Which cylinder markings are you mainly interested in?', ['Serial number', 'Working pressure', 'Hydrostatic test date', 'Cylinder alloy code'], [0, 1, 2], 'The serial number helps if it’s lost or stolen, working pressure is the maximum fill, and the test date shows it’s in date.'),
    one('eq1-58', 'Why are aluminum cylinders common in tropical locations?', ['They resist corrosion', 'They hold more air than steel', 'They are smaller than steel', 'They need fewer inspections'], 0, 'Warm, salty conditions encourage corrosion, which aluminum resists. Steel cylinders usually hold the same air in a smaller size and/or at lower pressure.'),
    one('eq1-59', 'Why should you keep a cylinder out of high heat?', ['Heat raises the pressure inside it', 'Heat makes the air taste stale', 'Heat slowly leaks air out of it', 'Heat lowers the pressure inside it'], 0, 'Higher pressure can blow the burst disk, and heat can weaken the metal. A cylinder that has been in a fire must be professionally tested — aluminum ones are usually condemned.'),
    one('eq1-60', 'What is enriched air nitrox?', ['Air with extra oxygen, so it has less nitrogen', 'Pure oxygen in a scuba cylinder', 'Air with extra nitrogen added to it', 'A mix of compressed air and helium'], 0, 'Less nitrogen can allow longer dives, but the extra oxygen means you need special training to use it.'),

    // Weights
    one('eq1-61', 'What is the most important feature of a weight system?', ['A quick release', 'Comfortable padding', 'A compact size', 'Trim weight pockets'], 0, 'In an emergency you must be able to drop enough weight to float, quickly and easily.'),
    tf('eq1-62', 'In an emergency you must be able to quickly drop enough weight to float, but not necessarily all of it.', true, 'The goal is to float, not to shed everything. In a full wet suit or dry suit, dropping part of your weight is usually enough.'),
    one('eq1-63', 'In weighting, what does “trim” refer to?', ['How your weight is distributed', 'How much weight you wear in total', 'The shape of the weights you use', 'How quickly you can drop your weights'], 0, 'Good trim puts you in a natural horizontal position, with your feet level or slightly raised.'),
    tf('eq1-64', 'One reason to wear more than one weight system is that it can be easier than handling one heavy system.', true, 'Splitting the weight makes each part lighter to handle, but at least one system must still let you drop enough weight to float.'),
    one('eq1-65', 'Accessory weights…', ['Help you fine-tune your trim', 'Must always have quick releases', 'Require special training to use', 'Replace your main weight system'], 0, 'They’re small and usually don’t quick-release, so they should be only a small part of your total weight.'),
    one('eq1-66', 'How much weight should you wear?', ['Just enough to offset your positive buoyancy', 'As much as possible, for extra stability', 'Enough to sink quickly to the bottom', 'None, as long as you wear a BCD'], 0, 'You only need enough to cancel out the extra buoyancy of you and your gear. Proper weighting is the right amount AND the right distribution.'),
  ],
};
