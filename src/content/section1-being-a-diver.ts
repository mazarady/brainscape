import { many, one, tf, type CourseModule } from './types';

export const beingADiver1: CourseModule = {
  id: 's1-being-a-diver',
  section: 'Section One',
  name: 'Being a Diver I',
  // Where each topic's questions start (in question order).
  topics: [
    ['bd1-01', 'Water Pressure and Air Volume Effects'],
    ['bd1-13', 'The Effects of Increasing Pressure on Body Air Spaces'],
    ['bd1-27', 'The Effects of Decreasing Pressure on Body Air Spaces'],
    ['bd1-36', 'Breathing Underwater'],
    ['bd1-42', 'Buoyancy and Controlling Buoyancy'],
    ['bd1-52', 'The Buddy System'],
  ],
  notes: [
    {
      heading: 'Pressure, volume and density',
      points: [
        'At sea level you are under 1 bar/ata of pressure from the weight of the atmosphere.',
        'Every 10 m / 33 ft of seawater adds 1 bar/ata: 10 m = 2, 20 m = 3, 30 m = 4 bar/ata.',
        'Water (and your mostly-water body) doesn’t compress; gas does.',
        'Volume and density change in proportion to pressure: double the pressure → half the volume, double the density.',
        'Example: 3 L at the surface → 1.5 L at 10 m → 1 L at 20 m. 1 L at 30 m → 4 L at the surface.',
        'A balloon filled and sealed at depth will burst as you ascend — air must be vented as it expands.',
      ],
    },
    {
      heading: 'Descending: squeezes and equalizing',
      points: [
        'The three main air spaces affected are your ears, sinuses and mask.',
        'A squeeze is a pressure imbalance: more pressure outside an air space than inside it.',
        'Equalizing = adding air to the space. Ears/sinuses: pinch your nose and blow gently (or swallow and wiggle your jaw). Mask: exhale through your nose.',
        'Equalize every metre / few feet, BEFORE you feel discomfort.',
        'Can’t equalize? Stop descending, signal your buddy/instructor, ascend a little until it eases, try again. Still can’t → end the dive.',
        'Never equalize forcefully — it can permanently damage your ears and hearing.',
        'Never dive with a cold or allergy congestion, and don’t rely on decongestants.',
        'Never wear earplugs (a hood that seals too tightly acts like one). Goggles can’t be used because they don’t cover your nose.',
        'Lungs equalize themselves on scuba as long as you breathe normally.',
      ],
    },
    {
      heading: 'Ascending: the most important rule',
      points: [
        'Breathe continuously and never hold your breath on scuba.',
        'Holding your breath while ascending — even 1 m / 2–3 ft — can cause a lung overexpansion injury (paralysis or death; needs a recompression chamber).',
        'Whenever the regulator is out of your mouth, blow a slow, steady stream of bubbles.',
        'A reverse block is expanding air trapped in an air space during ascent (e.g. a decongestant wearing off, gas in the stomach, air under a filling).',
        'Discomfort on ascent: slow or stop, go down a little, let the air work out, then ascend more slowly.',
      ],
    },
    {
      heading: 'Breathing underwater',
      points: [
        'The deeper you go, the faster you use air: ½ as long at 10 m, ⅓ at 20 m, ¼ at 30 m.',
        'Dense air takes more effort; breathing twice as fast takes about four times the energy.',
        'The 4 breathing rules: (1) breathe continuously, never hold your breath; (2) breathe slowly and deeply; (3) don’t get winded; (4) if there’s a problem, stop and restore slow, deep breathing.',
      ],
    },
    {
      heading: 'Buoyancy',
      points: [
        'Buoyancy is the upward force equal to the weight of the water displaced.',
        'Positive = floats, negative = sinks, neutral = neither.',
        'Salt water weighs more than fresh, so you are more buoyant in the ocean.',
        'You control buoyancy with your weight system and your BCD.',
        'Descending: gear compresses → less buoyant → add air to the BCD. Ascending: air expands → more buoyant → vent air.',
        'Inhaling slightly increases buoyancy; exhaling decreases it.',
      ],
    },
    {
      heading: 'The buddy system',
      points: [
        'Diving with another diver or team for shared assistance and safety.',
        'Buddies plan together, check each other’s gear, remind each other of limits and help with problems.',
        'Three benefits: practicality, safety and fun.',
      ],
    },
  ],
  questions: [
    // Pressure, volume, density
    one('bd1-01', 'What happens to the water pressure on you as you descend?', ['It increases', 'It decreases', 'It stays the same', 'It increases, then levels off'], 0, 'Water has weight, so the deeper you go, the more water is above you and the higher the pressure.'),
    one('bd1-02', 'How much does pressure change for every 10 metres / 33 feet of depth change?', ['1 bar/ata', '2 bar/ata', '½ bar/ata', '10 bar/ata'], 0, 'A 10 m / 33 ft column of seawater weighs about as much as the whole atmosphere, so each 10 m / 33 ft adds or removes 1 bar/ata.'),
    one('bd1-03', 'What is the total (absolute) pressure at 20 metres / 66 feet?', ['3 bar/ata', '2 bar/ata', '4 bar/ata', '20 bar/ata'], 0, 'You start with 1 bar from the atmosphere, and 20 m of water adds 2 bar more: 1 + 2 = 3 bar/ata.'),
    one('bd1-04', 'What is the total (absolute) pressure at 30 metres / 99 feet?', ['4 bar/ata', '3 bar/ata', '30 bar/ata', '2 bar/ata'], 0, 'You start with 1 bar from the atmosphere, and 30 m of water adds 3 bar more: 1 + 3 = 4 bar/ata.'),
    one('bd1-05', 'As pressure increases, what happens to a volume of air?', ['Its volume decreases and its density increases', 'Its volume increases and its density decreases', 'Its volume and its density both increase', 'Nothing, because air can’t be compressed'], 0, 'Pressure squeezes the same amount of gas into a smaller space, so the volume drops and the air becomes denser.'),
    one('bd1-06', 'A sealed balloon holds 6 litres of air at the surface. You take it down to 20 m / 66 ft. What is its volume there?', ['2 litres', '3 litres', '1 litre', '4 litres'], 0, 'The surface is 1 bar and 20 m is 3 bar. Three times the pressure means one-third the volume: 6 L ÷ 3 = 2 L.'),
    one('bd1-07', 'A sealed balloon holding 6 litres of air at the surface is taken to 20 m / 66 ft. How dense is the air inside now, compared with at the surface?', ['Three times as dense', 'One-third as dense', 'Twice as dense', 'The same density'], 0, 'At 20 m the pressure is 3 bar, three times the surface. The air is squeezed into ⅓ of the space, so it is 3 times as dense.'),
    one('bd1-08', 'A sealed balloon holds 3 litres of air at the surface. What is its volume at 10 m / 33 ft?', ['1.5 litres', '3 litres', '1 litre', '6 litres'], 0, 'The surface is 1 bar and 10 m is 2 bar. Double the pressure means half the volume: 3 L ÷ 2 = 1.5 L.'),
    one('bd1-09', 'A balloon holds 1 litre of air at 30 m / 99 ft. You bring it up to the surface. What volume does that same air take up now?', ['4 litres', '3 litres', '2 litres', '1 litre'], 0, 'At 30 m the pressure is 4 bar; at the surface it is 1 bar. A quarter of the pressure lets the same air expand to 4 times the volume: 1 L × 4 = 4 L.'),
    one('bd1-10', 'A balloon is filled completely and sealed at 10 m / 33 ft. What will probably happen as it is brought up?', ['It will expand and burst', 'It will shrink and crumple', 'It will keep the same size', 'It will fill up with water'], 0, 'As the pressure drops the air inside expands until the balloon stretches past its limit — the same reason you must never hold your breath while ascending.'),
    tf('bd1-11', 'Because your body is mostly water, you don’t feel pressure changes on most of your body while diving.', true, 'Water can’t be compressed, so pressure only has a noticeable effect on the air spaces in or against your body.'),
    many('bd1-12', 'Which of these are air spaces that pressure changes affect while diving?', ['Ears', 'Sinuses', 'Lungs', 'Mask', 'Muscles'], [0, 1, 2, 3], 'Ears, sinuses, lungs and your mask all contain air, which changes volume with pressure. Muscles are mostly water, so they aren’t affected.'),

    // Increasing pressure
    many('bd1-13', 'As you descend, increasing pressure affects which of these?', ['Your mask', 'Your ears', 'Your sinuses', 'Your skin'], [0, 1, 2], 'Your ears, sinuses and mask are air spaces, so the air in them gets squeezed. Skin is mostly water and isn’t affected.'),
    one('bd1-14', 'What causes a squeeze?', ['A pressure imbalance between the water and an air space', 'A wet suit that is too tight around your chest', 'Breathing too quickly and shallowly on descent', 'Very cold water chilling your ears and sinuses'], 0, 'When the pressure outside an air space is greater than the pressure inside it, tissue is pushed into the space — that’s a squeeze.'),
    one('bd1-15', 'What is equalization?', ['Adding air to an air space as you descend', 'Letting air out of an air space as you descend', 'Reducing the water pressure around an air space', 'Breathing out slowly through your mouth'], 0, 'Adding air to an air space raises its pressure to match the water around you, which prevents a squeeze.'),
    one('bd1-16', 'When should you equalize while descending?', ['Every metre / few feet, before you feel discomfort', 'As soon as you start to feel pain in your ears', 'Only once the discomfort becomes hard to bear', 'Once, when you reach the bottom of the dive'], 0, 'Equalizing early and often keeps the pressure balanced. If you wait for discomfort, the imbalance can make equalizing difficult or impossible.'),
    one('bd1-17', 'You are descending and can’t equalize your ears. What should you do first?', ['Stop descending and signal your buddy or instructor', 'Equalize harder until your ears finally clear', 'Keep descending slowly and hope it clears', 'Descend faster to get past the discomfort'], 0, 'Stop so the imbalance doesn’t get worse, signal, then ascend a little until it eases and try again. If it still won’t clear, end the dive.'),
    tf('bd1-18', 'You should equalize gently because a forceful, extended equalization can permanently damage your ears and hearing.', true, 'Forcing air into your ears can injure them permanently, so use short, frequent, gentle equalizations instead.'),
    one('bd1-19', 'You wake up on a dive day with blocked sinuses from a cold. What should you do?', ['Skip diving until the congestion clears', 'Take a decongestant so you can equalize', 'Dive anyway, but descend much more slowly', 'Dive anyway, but don’t try to equalize'], 0, 'Congestion can make equalizing difficult or impossible, and a decongestant can wear off during the dive and cause a reverse block on ascent.'),
    tf('bd1-20', 'When scuba diving, breathing normally keeps your lungs equalized to the surrounding pressure.', true, 'Scuba delivers air at the surrounding pressure, so your lungs stay at their normal volume as long as you breathe normally and continuously.'),
    one('bd1-21', 'How do you equalize your mask?', ['Exhale into it through your nose', 'Pinch your nose and swallow hard', 'Lift the bottom edge to let water in', 'Pull the strap tighter on your head'], 0, 'Blowing a little air into the mask through your nose raises the pressure inside it to match the water around you.'),
    one('bd1-22', 'Why can’t you use swimming goggles for scuba diving?', ['They don’t cover your nose, so you can’t equalize them', 'They fog up too easily once you are underwater', 'They are too small to give you a clear view', 'They leak too easily once you are at depth'], 0, 'Goggles trap an air space you can’t add air to, so as you descend they would squeeze against your eyes.'),
    one('bd1-23', 'Why should you never dive with earplugs?', ['They trap an air space you can’t equalize', 'They let water get deep into your ear canals', 'They stop you hearing your buddy or the boat', 'They tend to fall out when you descend'], 0, 'The air between an earplug and your eardrum can’t be equalized, so it gets squeezed as you descend. Only special ear protectors made for diving are an exception.'),
    one('bd1-24', 'A pulling or sucking feeling on your face while descending is a sign of a…', ['Mask squeeze', 'Ear squeeze', 'Sinus squeeze', 'Reverse block'], 0, 'The air in your mask is being compressed, so the mask pulls against your face. Exhale through your nose into the mask to fix it.'),
    one('bd1-25', 'Your wet suit hood seals tightly over one ear and you feel discomfort. What should you do?', ['Pull the hood away from your ear for a moment', 'Equalize harder until the discomfort stops', 'Ignore it, because a hood can’t affect your ears', 'Ascend to the surface and end the dive'], 0, 'A tight hood can act like an earplug. Pulling it away briefly lets water in to fill and equalize that space.'),
    one('bd1-26', 'Which of these can result from continuing to descend without equalizing your ears?', ['A ruptured eardrum and severe vertigo', 'Nitrogen narcosis and poor judgment', 'A lung overexpansion injury on ascent', 'Rapid air use and running low on air'], 0, 'Unequalized ears can lead to fluid in the middle ear or a ruptured eardrum, which can cause severe vertigo and needs medical treatment.'),

    // Decreasing pressure
    one('bd1-27', 'What is the most important rule in scuba diving?', ['Breathe continuously and never hold your breath', 'Check your air gauge every five minutes', 'Always stay within arm’s reach of your buddy', 'Equalize every metre on the way down'], 0, 'Holding your breath while ascending can over-expand your lungs and cause a serious injury, which is why this rule comes first.'),
    tf('bd1-28', 'Breaking the most important rule in scuba diving can cause lung overexpansion injuries that may lead to paralysis or death.', true, 'If you hold your breath while ascending, expanding air can be forced into the bloodstream and chest. Treatment usually needs a recompression chamber.'),
    one('bd1-29', 'How small a depth change can cause a lung overexpansion injury if you ascend holding a full breath?', ['As little as 1 metre / 2–3 feet', 'At least 10 metres / 33 feet', 'Only from deeper than 18 metres / 60 feet', 'Only during a fast, uncontrolled ascent'], 0, 'Your lungs are already full, so even the small expansion from a 1 m / 2–3 ft ascent can over-expand them if the air can’t escape.'),
    one('bd1-30', 'What should you do whenever your regulator is not in your mouth underwater?', ['Exhale a slow, steady stream of bubbles', 'Hold your breath until it is back in', 'Swim straight up to the surface', 'Breathe in and out through your nose'], 0, 'Blowing gentle bubbles means your airway is open and you are never holding your breath.'),
    one('bd1-31', 'What is a reverse block?', ['Expanding air trapped in a body air space during ascent', 'Compressed air squeezing a body air space during descent', 'A regulator that is blocked by sand or debris', 'Running low on air near the end of a dive'], 0, 'It is the opposite of a squeeze: air can’t get out as it expands on the way up. A decongestant wearing off during a dive is a common cause.'),
    one('bd1-32', 'You feel discomfort in your ears while ascending. What should you do?', ['Stop, go down slightly and let the air work its way out', 'Ascend faster so the discomfort is over sooner', 'Pinch your nose and blow hard to clear your ears', 'Hold your breath and keep ascending normally'], 0, 'Going down a little reduces the expansion so the trapped air can escape. Then ascend more slowly.'),
    one('bd1-33', 'How can you help avoid stomach or intestinal discomfort on ascent?', ['Avoid gas-producing foods and don’t swallow air', 'Eat a large meal shortly before you dive', 'Hold your breath briefly as you ascend', 'Take a decongestant before the dive'], 0, 'Gas that forms in your gut or that you swallow during the dive expands as you ascend and can cause discomfort.'),
    tf('bd1-34', 'Normally you have to do something special to let air out of your ears, sinuses and mask as you ascend.', false, 'As you ascend, the expanding air normally escapes from these spaces on its own.'),
    one('bd1-35', 'Why shouldn’t you dive with lung congestion?', ['It can trap expanding air in your lungs on ascent', 'It makes your mask fog up more quickly', 'It makes you more buoyant at depth', 'It makes you use your air more slowly'], 0, 'Congestion can block air from leaving parts of your lungs, so it expands on ascent and can cause an overexpansion injury.'),

    // Breathing underwater
    one('bd1-36', 'Breathing at the same rate, how does your air use at 12 m / 40 ft compare with at 6 m / 20 ft?', ['You use it faster', 'You use it at the same rate', 'You use it more slowly', 'It depends on the water temperature'], 0, 'Deeper water means higher pressure and denser air, so each breath takes more air from your cylinder.'),
    one('bd1-37', 'At 20 m / 66 ft, how long would your air last compared with at the surface (same breathing rate)?', ['About ⅓ as long', 'About ½ as long', 'About ¼ as long', 'About the same'], 0, '20 m is 3 bar, so each breath uses three times as much air as at the surface and your supply lasts about a third as long.'),
    one('bd1-38', 'What is the most efficient way to breathe dense air underwater?', ['Slowly and deeply', 'Shallowly and rapidly', 'Shallowly and slowly', 'Deeply and rapidly'], 0, 'Dense air takes more effort to move. Breathing twice as fast takes about four times the energy, so slow, deep breaths save air and effort.'),
    tf('bd1-39', 'Your body responds to anxiety by breathing faster, but slow breathing helps reduce anxiety.', true, 'Slowing your breathing calms you down, so you can deal with a problem using your training instead of emotion.'),
    many('bd1-40', 'Which of these are among the four breathing rules for divers?', ['Breathe continuously and never hold your breath', 'Breathe slowly and deeply', 'Don’t let yourself get winded or out of breath', 'If you have a problem, stop and maintain or restore slow, deep breathing', 'Take quick, shallow breaths to make your air last'], [0, 1, 2, 3], 'The four rules keep you from holding your breath, save air and effort, and keep you calm. Quick, shallow breathing wastes energy and air.'),
    one('bd1-41', 'You face a problem underwater. What should you do first?', ['Stop and restore slow, deep breathing', 'Swim quickly up to the surface', 'Hold your breath while you think', 'Breathe faster to take in more air'], 0, 'This is breathing rule four: slow, deep breathing reduces anxiety so you can think clearly and use your training.'),

    // Buoyancy
    tf('bd1-42', 'Buoyancy is a force that pushes an object in water upward.', true, 'The upward force equals the weight of the water the object pushes aside (displaces).'),
    one('bd1-43', 'Your sunglasses case falls into the water and floats. It is…', ['Positively buoyant', 'Negatively buoyant', 'Neutrally buoyant', 'Not buoyant at all'], 0, 'Something that floats weighs less than the water it displaces, so the upward force wins: positive buoyancy.'),
    one('bd1-44', 'An object that weighs exactly the same as the water it displaces will…', ['Neither float nor sink (neutral)', 'Float (positive)', 'Sink (negative)', 'Float at first, then sink'], 0, 'Its weight and the upward buoyant force are equal, so they cancel out and it stays where it is — neutral buoyancy.'),
    tf('bd1-45', 'Salt water causes more buoyancy than fresh water because it is less dense and weighs less.', false, 'It’s the opposite: dissolved minerals make salt water weigh more, so it pushes up harder and gives more buoyancy.'),
    one('bd1-46', 'To control your buoyancy you normally use your weight system and your…', ['BCD', 'Scuba cylinder', 'Fins', 'Wet suit'], 0, 'Weights make you heavier, and adding or venting air in the BCD changes how much water you displace.'),
    one('bd1-47', 'Fill in the blanks: when you descend your buoyancy tends to ___; when you ascend it tends to ___.', ['decrease, increase', 'increase, decrease', 'increase, increase', 'decrease, decrease'], 0, 'Air spaces in your gear (like the bubbles in your wet suit) compress as you go down and expand as you come up.'),
    one('bd1-48', 'When you inhale underwater, your buoyancy…', ['Increases slightly', 'Doesn’t change', 'Decreases slightly', 'Decreases a lot'], 0, 'Your chest expands and displaces more water. Divers use this to fine-tune buoyancy — without holding their breath.'),
    one('bd1-49', 'As you ascend, what do you do to control your buoyancy?', ['Vent expanding air from your BCD', 'Add more air to your BCD', 'Hold your breath briefly', 'Drop some of your weights'], 0, 'Air in your BCD and gear expands as you ascend, making you more buoyant, so you release it to avoid rising too fast.'),
    one('bd1-50', 'How much weight should you wear?', ['Just enough to descend without sinking rapidly', 'As much as you can comfortably carry', 'None, because the BCD does all the work', 'Enough to sink quickly to the bottom'], 0, 'Too much weight makes you sink fast and work harder. The right amount depends on your gear, your body and whether you’re in fresh or salt water.'),
    tf('bd1-51', 'Mastering buoyancy control is important because it affects almost everything you do in and under water.', true, 'Good buoyancy lets you descend and ascend slowly, hover, float at the surface, save energy and protect the environment.'),

    // Buddy system
    tf('bd1-52', 'In recreational diving, the buddy system means diving with another diver or divers as a team that provides assistance and safety benefits.', true, 'Buddies plan together, check each other’s gear, keep an eye on limits and help each other with problems.'),
    many('bd1-53', 'What are the overall benefits of the buddy system?', ['Safety', 'Fun', 'Practicality', 'Deeper dives'], [0, 1, 2], 'The buddy system is practical, safer and more fun. It doesn’t change how deep you’re allowed to dive.'),
    many('bd1-54', 'Which of these do dive buddies do for each other?', ['Plan the dive together', 'Check each other’s equipment', 'Remind each other of time and depth limits', 'Help if there’s a problem'], [0, 1, 2, 3], 'All of these are part of being a good buddy, before and during the dive. Buddies also help each other do whatever each wants to do on the dive.'),
  ],
};
