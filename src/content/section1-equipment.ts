import { many, one, tf, type CourseModule } from './types';

export const equipment1: CourseModule = {
  id: 's1-equipment',
  section: 'Section One',
  name: 'Equipment I',
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
    one('eq1-01', 'The three most important considerations when choosing scuba equipment are suitability, fit and…', ['Comfort', 'Color and style', 'Cost and features', 'Manufacturer'], 0, 'Comfort matters because uncomfortable gear can distract you — and only you can judge it.'),
    tf('eq1-02', 'Whether you can get your gear serviced is a consideration when choosing equipment.', true, 'Serviceability is one of the four secondary considerations. Dive shops usually service the brands they sell.'),
    one('eq1-03', 'Before each use, you should ___ your equipment.', ['Inspect', 'Wash', 'Warm', 'Dry'], 0, 'Check it for proper operation, wear and damage. Don’t dive with anything that isn’t working properly.'),
    many('eq1-04', 'Which of these are secondary considerations when choosing gear?', ['Cost and features', 'Serviceability', 'Color and style', 'Accessories'], [0, 1, 2, 3], 'Once gear is suitable, fits and is comfortable, these four come next.'),
    one('eq1-05', 'After diving in salt or chlorinated water, how should you care for your gear?', ['Rinse it in fresh water and dry it out of the sun', 'Leave it in the sun to dry quickly', 'Store it wet in a sealed bag', 'Only rinse it once a month'], 0, 'Then store it in a cool, dry place. Thorough cleaning also reduces the risk of moving organisms between environments.'),
    one('eq1-06', 'Where is a good place to mark your initials on your gear?', ['Where you can see them when not wearing it, like inside fin pockets', 'Large on the front of your mask', 'Only on your cylinder', 'You shouldn’t mark gear'], 0, 'Marking reduces confusion and loss without making your gear ugly.'),

    // Masks
    one('eq1-07', 'Why do you need a mask to see clearly underwater?', ['Your eyes must be in air to focus', 'It stops you inhaling water', 'It keeps your face warm', 'It magnifies objects'], 0, 'The mask gives your eyes an air space so they can focus.'),
    one('eq1-08', 'Why must a dive mask enclose your nose?', ['So you can equalize it', 'So you can suck it into place', 'To stop you breathing through your nose', 'To keep it from fogging'], 0, 'You blow air in through your nose to equalize the mask.'),
    tf('eq1-09', 'Among masks that fit, you should choose one that sits as far from your face as possible.', false, 'A low-profile mask that sits close gives a wider view and needs less air to clear and equalize.'),
    one('eq1-10', 'Where should your mask strap rest?', ['Above your ears, over the crown of your head', 'Below your ears, above your neck', 'Over your ears', 'Across your forehead'], 0, 'Snug but not overly tight.'),
    one('eq1-11', 'How do you check if a mask fits?', ['Hold it gently on your face and inhale slightly through your nose — it should stay on', 'Put the strap on very tight and see if it leaks', 'Blow out through your nose', 'Try it on underwater only'], 0, 'It should stay in place with light suction without pushing or twisting.'),
    one('eq1-12', 'Why might you scrub the inside of a new mask lens with mask cleaner?', ['To remove protective chemicals that make it fog', 'To make it waterproof', 'To tint the glass', 'To loosen the strap'], 0, 'Some manufacturers apply chemicals that increase fogging. Check the manufacturer’s recommendations.'),
    many('eq1-13', 'If you wear glasses or contact lenses, what are your options?', ['Go without correction if your vision is mildly affected', 'Wear contact lenses', 'Get a prescription mask', 'Have small “reader” lenses bonded into the mask'], [0, 1, 2, 3], 'Your dive center can recommend the best choice.'),

    // Snorkel
    tf('eq1-14', 'Snorkels are standard scuba equipment because they let you breathe with your face in the water at the surface without using your scuba air.', true, 'Especially useful when you surface low on air with a swim back, or in choppy water.'),
    tf('eq1-15', 'Some divers prefer a snorkel with a flexible lower section so it drops out of the way when not in use.', true, 'Other options include a self-drain valve and a splash guard.'),
    one('eq1-16', 'With the snorkel in your mouth, where should its tip be?', ['Over the crown of your head', 'Above your forehead', 'At the base of your skull', 'Beside your ear'], 0, 'That puts it at the highest point when you’re face-down in the water.'),
    one('eq1-17', 'Which side of your mask strap does the snorkel normally go on?', ['Left — because the regulator comes from the right', 'Right', 'Either side', 'It clips to your BCD instead'], 0, 'Your regulator second stage comes over your right shoulder, so the snorkel goes on the left.'),

    // Fins
    tf('eq1-18', 'Fins give your legs a large surface area to push against the water.', true, 'That lets your powerful leg muscles move you efficiently.'),
    one('eq1-19', 'What are the two basic fin styles?', ['Adjustable (open heel) and full-foot', 'Large blade and small blade', 'Vented and split', 'Fresh water and salt water'], 0, 'Adjustable fins are usually worn with wet suit boots; full-foot fins with bare feet or fin socks.'),
    one('eq1-20', 'Your primary considerations when choosing fins are fit and…', ['Blade size', 'Material', 'Splits', 'Vents'], 0, 'Larger, stiffer blades give more thrust but need more strength.'),
    tf('eq1-21', 'You should adjust the straps on adjustable fins while wearing your wet suit boots.', true, 'That’s how you’ll wear them on the dive.'),
    one('eq1-22', 'Full-foot fins are generally intended for…', ['Warm water, with bare feet or thin fin socks', 'Cold water with thick boots', 'Walking on rocky shores', 'Divers with leg injuries'], 0, 'They enclose the heel and fit like snug shoes.'),

    // Scuba kit
    many('eq1-23', 'Which four systems make up a scuba kit?', ['BCD', 'Regulator', 'Cylinder', 'Weight system', 'Snorkel'], [0, 1, 2, 3], 'The snorkel is standard equipment but not part of the scuba kit itself.'),
    tf('eq1-24', 'There’s no real benefit to choosing your scuba kit as an integrated package.', false, 'The parts integrate, so choosing them together helps make sure the kit suits you best.'),
    one('eq1-25', 'What does the regulator do?', ['Delivers air at the surrounding pressure when you inhale', 'Holds your kit together', 'Stores high-pressure air', 'Adjusts your buoyancy'], 0, 'It also directs your exhaled air into the water.'),
    one('eq1-26', 'Which is a benefit of sidemount diving?', ['It can suit people with lower-back issues because cylinders go on in the water', 'It is the only way to use nitrox', 'It needs no BCD', 'It removes the need for a buddy'], 0, 'Smaller cylinders are also easier to carry, and two cylinders help with air supply emergencies.'),

    // BCD
    tf('eq1-27', 'The low-pressure inflator (LPI) fills your BCD with air from your scuba cylinder.', true, 'It works at the push of a button; another button deflates or lets you inflate orally.'),
    tf('eq1-28', 'Your BCD should have enough capacity to easily float you and all your equipment at the surface.', true, 'This is sometimes called “lift” capacity.'),
    one('eq1-29', 'How should your BCD fit?', ['Snug, but not restricting your breathing when fully inflated', 'Very tight, even if it restricts breathing when inflated', 'Loose so it can move freely', 'Tight only around the waist'], 0, 'After adjusting, fully inflate it — if it restricts breathing, it’s too tight.'),
    one('eq1-30', 'Your buddy partly fills a BCD bladder with fresh water while rinsing it. Is that correct BCD care?', ['Yes — you rinse the inside of the bladder too', 'No — water should never go inside a BCD', 'Only if the BCD is new', 'Only with salt water'], 0, 'Fill about ⅓ with water, the rest with air, slosh and drain through the LPI and dump valves.'),
    one('eq1-31', 'Why do you store most BCDs partially inflated?', ['To keep the bladder from sticking together inside', 'To keep them ready for the next dive', 'So the valves don’t rust', 'To keep the air fresh'], 0, 'It is one of the two extra BCD maintenance steps.'),
    one('eq1-32', 'What do the overpressure valves on a BCD do?', ['Vent air automatically so the bladder doesn’t rupture if overfilled', 'Inflate the BCD from your cylinder', 'Release your weights', 'Lock the cylinder band'], 0, 'Some BCDs also have quick-dump valves you can pull to release air.'),
    one('eq1-33', 'Where should you attach a whistle?', ['Near the low-pressure inflator, where you can reach it easily', 'Inside a zipped pocket', 'On your fins', 'You don’t need one'], 0, 'It’s part of preparing your BCD.'),

    // Regulator
    one('eq1-34', 'What is the most important consideration when choosing a regulator?', ['Ease of breathing', 'Color', 'An adjustable second stage', 'A dive/predive switch'], 0, 'All modern regulators from reputable makers meet recreational breathing requirements; higher-end models breathe easiest.'),
    one('eq1-35', 'When choosing an alternate air source, the main decision is between…', ['Simplicity and independence', 'Letting it dangle or not', 'Left or right side', 'Whether you need one at all'], 0, 'Octopus/alternate inflator regulators are simplest; pony bottles and ascent bottles give independence.'),
    tf('eq1-36', 'Your SPG is always built into your dive computer.', false, 'It can be a separate mechanical gauge, part of a console, or part of an air-integrated computer.'),
    tf('eq1-37', 'A dive professional will usually attach your regulator components when you get your regulator.', true, 'They connect each hose to the correct port.'),
    one('eq1-38', 'Where do you secure your alternate air source?', ['In the triangle between your chin and lower rib cage, with a quick release', 'Let it dangle so it’s easy to grab', 'In a pocket on your left', 'Behind your head'], 0, 'Your buddy must be able to find it quickly. Many are brightly colored.'),
    tf('eq1-39', 'Regulators need professional overhauls, typically every one to two years.', true, 'Even if it seems to be working fine.'),
    one('eq1-40', 'Which regulator component is the “hub” that supplies air to everything else?', ['First stage', 'Primary second stage', 'Alternate air source', 'SPG'], 0, 'It attaches to the cylinder valve and reduces cylinder pressure to intermediate pressure.'),
    one('eq1-41', 'What seals the first stage to the cylinder valve?', ['An o-ring', 'A rubber gasket on the cylinder', 'Thread tape', 'The burst disk'], 0, 'This is true for both yoke and DIN connections.'),
    one('eq1-42', 'Which is true about yoke and DIN regulators?', ['Yoke clamps over the valve; DIN screws into it and has a higher pressure rating', 'DIN is older and more widely used than yoke', 'Yoke screws into the valve', 'They can never be adapted to each other'], 0, 'A DIN regulator with a yoke adapter works on either type of valve.'),
    one('eq1-43', 'While rinsing your regulator you should NOT…', ['Press the purge button', 'Keep the dust cap on', 'Run water through the second stages', 'Use fresh water'], 0, 'Pressing the purge can let water flow up the hose into the first stage.'),
    one('eq1-44', 'What does the dive/predive switch do?', ['Reduces free-flow when the second stage isn’t in your mouth', 'Turns your computer on', 'Locks the first stage', 'Adjusts your buoyancy'], 0, 'An adjustable second stage knob is a different option that fine-tunes breathing.'),
    one('eq1-45', 'Where does your primary second stage come from?', ['Over your right shoulder', 'Over your left shoulder', 'From the triangle at your chest', 'From under your left arm'], 0, 'It isn’t secured because it’s in your mouth.'),
    one('eq1-46', 'A hose-mounted SPG is normally…', ['Routed under your left arm and clipped where you can read it', 'Left to dangle by your knees', 'Clipped to your right shoulder', 'Stored in a pocket'], 0, 'A dangling SPG can be damaged, harm the environment and create drag.'),
    one('eq1-47', 'You should have your SPG checked if…', ['It doesn’t read zero when unpressurized', 'It reads in bar instead of psi', 'It is more than a month old', 'Your buddy uses a different brand'], 0, 'Or if you have any other reason to doubt its accuracy.'),

    // Cylinders
    one('eq1-48', 'What is the safety device that ruptures to release air if a cylinder is accidentally over-pressurized?', ['Burst disk', 'DIN valve', 'Cylinder alloy', 'Reserve valve'], 0, 'It releases air well before the cylinder itself would fail.'),
    tf('eq1-49', 'A cylinder with a higher working pressure always holds more air than one with a lower working pressure.', false, 'How much it holds depends on its internal capacity AND working pressure.'),
    one('eq1-50', 'At a dive resort some rental cylinders have green and yellow “Nitrox” bands. As a new Open Water Diver with no other training, can you use them?', ['No — you need Enriched Air Diver certification (or instructor supervision)', 'Yes, anyone can', 'Yes, but only for shallow dives', 'Yes, if the resort says it’s fine'], 0, 'Enriched air has extra oxygen, which needs special training to use safely.'),
    one('eq1-51', 'You bring a cylinder aboard a dive boat. What should you normally do with it?', ['Secure it in a rack', 'Lay it on the deck', 'Stand it on the deck', 'Hold it until the dive'], 0, 'Use the restraining cord, even if you step away only for a moment.'),
    one('eq1-52', 'Scuba cylinders need pressure (hydrostatic) testing ___ and visual inspection ___.', ['every 2–5 years; every year', 'every year; every year', 'every year; every 2–5 years', 'every 2–5 years; every 2–5 years'], 0, 'Hydro test intervals vary by region. Never get a cylinder filled without a current inspection.'),
    one('eq1-53', 'Where should you get your cylinder filled?', ['Only at a reputable scuba air station', 'From any compressed air source', 'With pure oxygen', 'With pure nitrogen'], 0, 'Scuba air must be specially filtered — contaminants harmless at the surface can be toxic at depth.'),
    one('eq1-54', 'Why should you never completely empty a scuba cylinder?', ['To keep moisture from getting in', 'It makes the cylinder lighter', 'The valve will lock', 'It voids the warranty'], 0, 'Keep about 20 bar / 300 psi in it. If it drains completely, have it visually inspected.'),
    one('eq1-55', 'Why is a cylinder stored standing upright?', ['So any moisture collects at the bottom, the thickest part', 'So the valve stays dry', 'To save space', 'So it stays cool'], 0, 'Store it where it can’t be knocked over.'),
    one('eq1-56', 'What does a reserve (“J”) valve do?', ['Warns you of low air by restricting flow — it gives no extra air', 'Gives you an extra 50 bar of air', 'Prevents overfilling', 'Replaces the SPG'], 0, 'Even with a reserve valve you manage your air with your SPG.'),
    many('eq1-57', 'Which cylinder markings are you mainly interested in?', ['Serial number', 'Working pressure', 'Hydrostatic test date', 'Cylinder alloy code'], [0, 1, 2], 'The serial number helps if it’s lost or stolen; working pressure is the maximum fill; the test date shows it’s in date.'),
    one('eq1-58', 'Why are aluminum cylinders common in tropical locations?', ['They resist corrosion', 'They hold more air', 'They are always smaller', 'They don’t need inspections'], 0, 'Steel cylinders usually hold the same air in a smaller size and/or at lower pressure.'),
    one('eq1-59', 'Why should you keep a cylinder out of high heat?', ['Heat raises the pressure and can blow the burst disk or weaken the metal', 'Heat makes the air taste bad', 'Heat empties the cylinder', 'It’s fine to leave it in heat'], 0, 'A cylinder that has been in a fire must be professionally tested — aluminum ones are usually condemned.'),
    one('eq1-60', 'What is enriched air nitrox?', ['Air with extra oxygen added, so it has less nitrogen', 'Pure oxygen', 'Air with extra nitrogen', 'Compressed helium'], 0, 'Less nitrogen can allow longer dives, but extra oxygen needs special training.'),

    // Weights
    one('eq1-61', 'What is the most important feature of a weight system?', ['A quick release', 'Comfort', 'Size', 'Trim pockets'], 0, 'In an emergency you must be able to drop enough weight to float.'),
    tf('eq1-62', 'In an emergency you must be able to quickly drop enough weight to float, but not necessarily all of it.', true, 'In a full wet suit or dry suit, dropping part of your weight is usually enough.'),
    one('eq1-63', 'Trim means having the right ___ of weight.', ['Distribution', 'Amount', 'Shape', 'Color'], 0, 'Good trim is a natural horizontal position with your feet level or slightly raised.'),
    tf('eq1-64', 'One reason to wear more than one weight system is that it can be easier than handling one heavy system.', true, 'At least one system must still let you drop enough weight to float.'),
    one('eq1-65', 'Accessory weights…', ['Help you adjust your trim', 'Must have quick releases', 'Require special training', 'Replace your main weight system'], 0, 'They’re small and usually don’t quick-release, so they should be only a small part of your weight.'),
    one('eq1-66', 'How much weight should you wear?', ['Just enough to offset your positive buoyancy', 'As much as possible for stability', 'Twice your body weight', 'None if you have a BCD'], 0, 'Proper weighting is the right amount AND the right distribution.'),
  ],
};
