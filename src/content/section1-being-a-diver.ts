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
    one('bd1-01', 'What happens to the water pressure on you as you descend?', ['It increases', 'It decreases', 'It stays the same', 'It increases only in fresh water'], 0, 'Water has weight, so the deeper you go, the more water is above you and the higher the pressure.'),
    one('bd1-02', 'How much does pressure change for every 10 metres / 33 feet of depth change?', ['1 bar/ata', '2 bar/ata', '½ bar/ata', '10 bar/ata'], 0, 'Ten metres / 33 feet of seawater weighs as much as the whole atmosphere, so each 10 m / 33 ft changes pressure by 1 bar/ata.'),
    one('bd1-03', 'What is the total (absolute) pressure at 20 metres / 66 feet?', ['3 bar/ata', '2 bar/ata', '4 bar/ata', '20 bar/ata'], 0, '1 bar of atmosphere plus 2 bar of water = 3 bar/ata.'),
    one('bd1-04', 'What is the total pressure at 30 metres / 99 feet?', ['4 bar/ata', '3 bar/ata', '30 bar/ata', '2 bar/ata'], 0, '1 bar of air plus 3 bar of water = 4 bar/ata.'),
    one('bd1-05', 'As pressure increases, what happens to a volume of air?', ['Its volume decreases and its density increases', 'Its volume increases and its density decreases', 'Both volume and density increase', 'Neither changes because air can’t be compressed'], 0, 'Pressure squeezes the gas molecules into a smaller space: less volume, same molecules, so higher density.'),
    one('bd1-06', 'A sealed balloon holds 6 litres of air at the surface. You take it down to 20 m / 66 ft. What is its volume there?', ['2 litres', '3 litres', '1 litre', '4 litres'], 0, 'Surface = 1 bar, 20 m = 3 bar. Going down, volume shrinks: 6 L × 1/3 = 2 L. (New volume = old volume × old pressure ÷ new pressure.)'),
    one('bd1-07', 'A sealed balloon holding 6 litres of air at the surface is taken to 20 m / 66 ft. How dense is the air inside now, compared with at the surface?', ['Three times as dense', 'One-third as dense', 'Twice as dense', 'The same density'], 0, 'Density changes the opposite way to volume. 20 m is 3 bar — three times the surface pressure — so the volume is ⅓ and the density is 3×.'),
    one('bd1-08', 'A sealed balloon holds 3 litres of air at the surface. What is its volume at 10 m / 33 ft?', ['1.5 litres', '3 litres', '1 litre', '6 litres'], 0, 'Surface = 1 bar, 10 m = 2 bar. Going down, volume shrinks: 3 L × 1/2 = 1.5 L.'),
    one('bd1-09', 'A balloon holds 1 litre of air at 30 m / 99 ft. You bring it up to the surface. What volume does that same air take up now?', ['4 litres', '3 litres', '2 litres', '1 litre'], 0, '30 m = 4 bar, surface = 1 bar. Going up, the air expands: 1 L × 4/1 = 4 L. The amount of air is the same — it just takes up more room. (2 L at 30 m would become 8 L.)'),
    one('bd1-10', 'A balloon is filled completely and sealed at 10 m / 33 ft. What will probably happen as it is brought up?', ['It will expand and burst', 'It will shrink', 'It will stay the same size', 'It will fill with water'], 0, 'As pressure drops the air expands until the balloon stretches past its limit — the same reason you must never hold your breath while ascending.'),
    tf('bd1-11', 'Because your body is mostly water, you don’t feel pressure changes on most of your body while diving.', true, 'Water is not compressible, so pressure only affects air spaces in or against your body.'),
    many('bd1-12', 'Which of these are air spaces that pressure changes affect while diving?', ['Ears', 'Sinuses', 'Lungs', 'Mask'], [0, 1, 2, 3], 'Ears, sinuses, lungs, your mask and (if used) a dry suit are all air spaces affected by pressure changes.'),

    // Increasing pressure
    many('bd1-13', 'As you descend, increasing pressure affects which of these?', ['Your mask', 'Your ears', 'Your sinuses', 'Your skin'], [0, 1, 2], 'The three major air spaces affected are the ears, sinuses and mask. Skin is mostly water and isn’t affected.'),
    one('bd1-14', 'What causes a squeeze?', ['A pressure imbalance between the surrounding pressure and an air space', 'Wearing a wet suit that is too tight', 'Breathing too fast', 'Cold water'], 0, 'A squeeze happens when the pressure outside an air space is greater than inside it, pushing tissue into the space.'),
    one('bd1-15', 'What is equalization?', ['Adding air to an air space', 'Removing air from an air space', 'Reducing the surrounding pressure', 'Breathing out through your mouth'], 0, 'You add air to air spaces as you descend so their pressure matches the water around you.'),
    one('bd1-16', 'When should you equalize while descending?', ['Every metre / few feet, before you feel discomfort', 'When you feel pain', 'Only if the pain becomes intolerable', 'Once you reach the bottom'], 0, 'If you wait for discomfort, equalizing may become difficult or impossible.'),
    one('bd1-17', 'You are descending and can’t equalize your ears. What should you do first?', ['Stop descending and signal your buddy/instructor', 'Equalize more forcefully', 'Keep descending slowly and hope it clears', 'Take out your regulator'], 0, 'Stop, signal (“problem” + point to your ear), ascend slightly until the discomfort passes and try again. If it still won’t clear, end the dive.'),
    tf('bd1-18', 'You should equalize gently because a forceful, extended equalization can permanently damage your ears and hearing.', true, 'Use short, frequent, gentle equalizations.'),
    one('bd1-19', 'You wake up on a dive day with blocked sinuses from a cold. What should you do?', ['Cancel the dive until you’re well', 'Take a decongestant so you can equalize', 'Plan a much slower descent', 'Dive but skip equalizing'], 0, 'Congestion can make equalizing difficult or impossible, and decongestants can wear off during the dive and cause a reverse block on ascent.'),
    tf('bd1-20', 'When scuba diving, breathing normally keeps your lungs equalized to the surrounding pressure.', true, 'Scuba delivers air at the surrounding pressure, so your lungs stay at normal volume if you breathe normally and continuously.'),
    one('bd1-21', 'How do you equalize your mask?', ['Exhale into it through your nose', 'Pinch your nose and swallow', 'Lift the edge of the mask', 'Tighten the strap'], 0, 'Blowing a little air into the mask through your nose keeps its pressure equal to the water around you.'),
    one('bd1-22', 'Why can’t you use swimming goggles for scuba diving?', ['They don’t enclose your nose, so you can’t equalize them', 'They fog too easily', 'They are too small to see through', 'They let water in'], 0, 'Goggles are an air space you can’t add air to, so they would cause a squeeze.'),
    one('bd1-23', 'Why should you never dive with earplugs?', ['They create an air space that can’t be equalized', 'They let water into your ears', 'They make it hard to hear your buddy', 'They make it harder to swallow'], 0, 'Earplugs trap air you can’t equalize. Only special ear protectors made for diving are an exception.'),
    one('bd1-24', 'A pulling or sucking feeling on your face while descending is a sign of a…', ['Mask squeeze', 'Ear squeeze', 'Sinus squeeze', 'Reverse block'], 0, 'Fix it by exhaling through your nose into the mask.'),
    one('bd1-25', 'Your wet suit hood seals tightly over one ear and you feel discomfort. What should you do?', ['Pull the hood away from your ear for a moment', 'Equalize harder', 'Ignore it — hoods don’t affect ears', 'Ascend to the surface immediately'], 0, 'A tight hood can act like an earplug. Briefly pulling it away lets water in to equalize that space.'),
    one('bd1-26', 'Which of these can result from continuing to descend without equalizing your ears?', ['A ruptured eardrum and severe vertigo', 'Nitrogen narcosis', 'A lung overexpansion injury', 'Running out of air'], 0, 'Unequalized ears can lead to fluid in the middle ear or a ruptured eardrum, which can cause severe vertigo and needs medical treatment.'),

    // Decreasing pressure
    one('bd1-27', 'What is the most important rule in scuba diving?', ['Breathe continuously and never hold your breath', 'Check your air every five minutes', 'Always dive with a buddy', 'Equalize every metre'], 0, 'Holding your breath while ascending can cause serious lung overexpansion injuries.'),
    tf('bd1-28', 'Breaking the most important rule in scuba diving can cause lung overexpansion injuries that may lead to paralysis or death.', true, 'Expanding air can be forced into the bloodstream and chest cavities. Treatment usually needs a recompression chamber.'),
    one('bd1-29', 'How small a depth change can cause a lung overexpansion injury if you ascend holding a full breath?', ['As little as 1 metre / 2–3 feet', 'At least 10 metres / 33 feet', 'Only from deeper than 18 metres / 60 feet', 'Only during a fast ascent'], 0, 'Even very small pressure changes can over-expand the lungs if air can’t escape.'),
    one('bd1-30', 'What should you do whenever your regulator is not in your mouth underwater?', ['Exhale a slow, steady stream of bubbles', 'Hold your breath until it is back', 'Swim to the surface', 'Breathe through your nose'], 0, 'Exhaling gently means you are never holding your breath.'),
    one('bd1-31', 'What is a reverse block?', ['Expanding air trapped in a body air space during ascent', 'A squeeze during descent', 'A blocked regulator', 'Running low on air'], 0, 'Also called a reverse squeeze. A decongestant wearing off during a dive is a common cause.'),
    one('bd1-32', 'You feel discomfort in your ears while ascending. What should you do?', ['Stop, descend slightly and let the trapped air work its way out', 'Ascend faster to get it over with', 'Pinch your nose and blow hard', 'Take a decongestant before your next dive'], 0, 'Then ascend more slowly to give the expanding air time to escape.'),
    one('bd1-33', 'How can you help avoid stomach or intestinal discomfort on ascent?', ['Avoid gas-producing foods before diving and don’t swallow air', 'Eat a large meal before diving', 'Hold your breath while ascending', 'Use a decongestant'], 0, 'Gas that forms or is swallowed during the dive expands as you ascend.'),
    tf('bd1-34', 'Normally you have to do something special to let air out of your ears, sinuses and mask as you ascend.', false, 'Expanding air normally escapes from these spaces on its own during ascent.'),
    one('bd1-35', 'Why shouldn’t you dive with lung congestion?', ['It can trap air in the lungs and cause an overexpansion injury', 'It makes your mask fog', 'It increases your buoyancy', 'It makes you use less air'], 0, 'Air trapped in congested lungs can’t escape as it expands during ascent.'),

    // Breathing underwater
    one('bd1-36', 'You and your buddy descend to 12 m / 40 ft. Compared with 6 m / 20 ft, you will use your air…', ['Faster', 'At the same rate', 'Slower', 'It depends only on water temperature'], 0, 'The deeper you are, the denser the air, so each breath takes more air from your cylinder.'),
    one('bd1-37', 'At 20 m / 66 ft, how long would your air last compared with at the surface (same breathing rate)?', ['About ⅓ as long', 'About ½ as long', 'About ¼ as long', 'The same'], 0, '20 m is 3 bar, so each breath uses three times as much air.'),
    one('bd1-38', 'What is the most efficient way to breathe dense air underwater?', ['Slowly and deeply', 'Shallowly and rapidly', 'Shallowly and slowly', 'Deeply and rapidly'], 0, 'Breathing twice as fast takes about four times the energy, so slow, deep breathing saves air and effort.'),
    tf('bd1-39', 'Your body responds to anxiety by breathing faster, but slow breathing helps reduce anxiety.', true, 'Controlling your breathing helps you deal with problems using your training instead of emotion.'),
    many('bd1-40', 'Which of these are among the four breathing rules for divers?', ['Breathe continuously and never hold your breath', 'Breathe slowly and deeply', 'Don’t let yourself get winded or out of breath', 'If you have a problem, stop and maintain or restore slow, deep breathing'], [0, 1, 2, 3], 'All four are the breathing rules you follow as a scuba diver.'),
    one('bd1-41', 'You face a problem underwater. What should you do first?', ['Stop, then reduce anxiety by maintaining or restoring slow, deep breathing', 'Swim quickly to the surface', 'Hold your breath while you think', 'Breathe faster to get more air'], 0, 'This is breathing rule four.'),

    // Buoyancy
    tf('bd1-42', 'Buoyancy is a force that pushes an object in water upward.', true, 'It is equal to the weight of the water the object displaces.'),
    one('bd1-43', 'Your sunglasses case falls into the water and floats. It is…', ['Positively buoyant', 'Negatively buoyant', 'Neutrally buoyant', 'Not buoyant at all'], 0, 'Objects that float weigh less than the water they displace.'),
    one('bd1-44', 'An object that weighs exactly the same as the water it displaces will…', ['Neither float nor sink (neutral)', 'Float (positive)', 'Sink (negative)', 'Float in fresh water only'], 0, 'That’s neutral buoyancy.'),
    tf('bd1-45', 'Salt water causes more buoyancy than fresh water because it is less dense and weighs less.', false, 'It’s the opposite: salt water has dissolved minerals, weighs more, and so gives more buoyancy.'),
    one('bd1-46', 'To control your buoyancy you normally use your weight system and your…', ['BCD', 'Scuba cylinder', 'Fins', 'Wet suit'], 0, 'Inflating and deflating the BCD changes how much water you displace.'),
    one('bd1-47', 'When you descend your buoyancy tends to ___; when you ascend it tends to ___.', ['decrease, increase', 'increase, decrease', 'increase, increase', 'decrease, decrease'], 0, 'Gas spaces in your gear (like your wet suit) compress as you go down and expand as you come up.'),
    one('bd1-48', 'When you inhale underwater, your buoyancy…', ['Increases slightly', 'Doesn’t change', 'Decreases slightly', 'Decreases a lot'], 0, 'Your chest expands and displaces more water. Divers use this to fine-tune buoyancy — without holding their breath.'),
    one('bd1-49', 'As you ascend, what do you do to control your buoyancy?', ['Vent the air you added to your BCD on the way down', 'Add more air to your BCD', 'Hold your breath', 'Drop your weights'], 0, 'Air in your BCD and gear expands as you ascend, so you release it to avoid ascending too fast.'),
    one('bd1-50', 'How much weight should you wear?', ['Just enough to let you descend without sinking rapidly', 'As much as you can comfortably carry', 'None — the BCD controls everything', 'Enough to sink quickly to the bottom'], 0, 'The right amount depends on your gear, your body and whether you’re in fresh or salt water.'),
    tf('bd1-51', 'Mastering buoyancy control is important because it affects almost everything you do in and under water.', true, 'It lets you descend and ascend slowly, hover, float at the surface, save energy and protect the environment.'),

    // Buddy system
    tf('bd1-52', 'In recreational diving, the buddy system means diving with another diver or divers as a team that provides assistance and safety benefits.', true, 'You plan, check gear, monitor limits and help each other.'),
    many('bd1-53', 'What are the overall benefits of the buddy system?', ['Safety', 'Fun', 'Practicality', 'Deeper dives'], [0, 1, 2], 'The three benefits are practicality, safety and fun.'),
    many('bd1-54', 'Which of these do dive buddies do for each other?', ['Plan the dive together', 'Check each other’s equipment', 'Remind each other of time and depth limits', 'Help if there’s a problem'], [0, 1, 2, 3], 'Buddies also help each other with whatever each wants to do on the dive.'),
  ],
};
