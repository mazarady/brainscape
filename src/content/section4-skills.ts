import { many, one, tf, type CourseModule } from './types';

export const skills4: CourseModule = {
  id: 's4-skills',
  section: 'Section Four',
  name: 'Your Skills as a Diver IV',
  topics: [
    ['sk4-01', 'Deep Water Entry – Put on Scuba Kit at the Surface, Controlled Seated Entry'],
    ['sk4-05', 'Helping a Tired Buddy'],
    ['sk4-08', 'Neutral Buoyancy – Near Sensitive Environments'],
    ['sk4-10', 'No Mask Swim'],
    ['sk4-14', 'Freeflow Regulator Breathing'],
    ['sk4-17', 'BCD Oral Inflation Underwater'],
    ['sk4-21', 'Skin Diving Skills'],
    ['sk4-30', 'Exit – Remove Scuba Kit in the Water'],
  ],
  notes: [
    {
      heading: 'Entries, tows and buoyancy',
      points: [
        'Putting your kit on at the surface suits small boats, high platforms (lower the kit on a line, climb down) or divers who can’t wear gear out of the water.',
        'Assemble the kit, check air and open the valve, run the predive check. Never enter wearing a weight system without your BCD. Finish the Final check once everyone is kitted up.',
        'Controlled seated entry: BCD partly inflated, regulator in, make sure the cylinder clears the platform edge as you turn and ease in.',
        'Tired buddy: first establish buoyancy for both. Cylinder valve tow (both face up) for short distances; tired diver push for longer tows. Swim slowly and steadily.',
        'Near sensitive environments, descend, swim and ascend with no bottom contact using weighting, trim and buoyancy control.',
      ],
    },
    {
      heading: 'Mask, free-flow and oral inflation',
      points: [
        'No mask swim: at least 15 m / 50 ft with your buddy, eyes open (closed if wearing contacts during practice), breathe through your mouth, exhale through your nose if water tickles. Then replace and clear the mask.',
        'Free-flow: hold the mouthpiece against your lips, don’t seal on it, sip the air. Practise 30+ seconds then check your SPG — free-flow uses air fast, so start ascending immediately.',
        'Oral inflation underwater: breathe from the regulator, blow ⅓–½ a breath in while pressing the deflator, release it between breaths, blow bubbles while the regulator is out, wait to see the effect. Hover a minute once neutral.',
        'Never continue a dive with a malfunctioning low-pressure inflator — use oral inflation to end the dive.',
      ],
    },
    {
      heading: 'Skin diving and exits',
      points: [
        'Skin diving = mask, fins and snorkel, no scuba. Useful for scouting sites, places without scuba, helping someone at the surface, and some wildlife encounters.',
        'Breathe from your diaphragm (“stomach breathing”) before a breath-hold dive. Avoid hyperventilation — it can let oxygen run out before you feel the urge to breathe, causing blackout and drowning.',
        'After surfacing, rest and breathe normally (a strong exhale can make you faint). Dizzy, light-headed or tingling? Stop and rest.',
        'One up, one down: your buddy stays on the surface while you dive.',
        'Displacement snorkel clearing: look and reach up on ascent, exhale through the last metre — the air pushes water out the tip; roll forward and inhale cautiously. Self-drain snorkels may need the blast method.',
        'These skills are for casual breath-holds of about a minute or less, no deeper than about 10 m / 30 ft.',
        'Exit without a ladder: inflate the BCD, hand up or clip weights, slip out of the kit (secure it to a line in current), then kick up and sit, or lift and roll onto the deck.',
      ],
    },
  ],
  questions: [
    one('sk4-01', 'When is putting your scuba kit on at the surface (in deep water) useful?', ['Small boats, high platforms, or if you can’t kit up out of the water', 'Shore entries through heavy surf or over slippery, uneven rocks', 'Night dives, when it’s hard to see your gear on deck', 'Any dive where you want to save air before descending'], 0, 'It suits places with no room or no safe way to kit up; from a high platform you lower the kit on a line and climb down.'),
    tf('sk4-02', 'It’s fine to enter the water wearing your weight system without your BCD.', false, 'Without a BCD you have no way to float, so never enter wearing weights but no BCD.'),
    one('sk4-03', 'During a controlled seated entry, what must you check as you turn to ease in?', ['That your cylinder clears the platform edge', 'That your fins are off and in your hand', 'That your BCD is completely empty', 'That your mask is off and around your neck'], 0, 'The cylinder can catch the edge as you turn. Your BCD should be partly inflated and your regulator in.'),
    one('sk4-04', 'After you and your buddy have put on your kits at the surface, how do you finish the predive check?', ['Do the Final check of each other’s kit', 'Do a practice drop of your weights', 'Make a short test descent together', 'Swap from snorkel to regulator'], 0, 'You run the other BWRAF steps before entering, then finish with the Final check: buckles secure, no trapped hoses, nothing dangling.'),
    one('sk4-05', 'What is the first step when helping a tired buddy at the surface?', ['Establish buoyancy for yourself and your buddy', 'Start towing them toward the exit right away', 'Remove their mask so they can breathe easier', 'Signal the boat, then wait for it to come'], 0, 'Making you both buoyant removes the immediate danger; then tow at a slow, steady pace.'),
    one('sk4-06', 'Which tow is used for short distances, with both divers face up?', ['Cylinder valve tow', 'Tired diver push', 'Fin push', 'Arm tow'], 0, 'You hold the cylinder valve and tow with both of you face up; for longer distances switch to the tired diver push.'),
    one('sk4-07', 'Which tow is used for longer distances?', ['Tired diver push', 'Cylinder valve tow', 'Underwater tow', 'Snorkel tow'], 0, 'The tired diver push (a modified tired-swimmer carry) suits longer tows; swim at a slow, steady pace.'),
    one('sk4-08', 'When practising swimming near sensitive environments, you simulate that…', ['The whole bottom is sensitive — no contact', 'You may kneel on any patch of bare sand', 'Only living coral needs to be avoided', 'Light contact is fine if you wear gloves'], 0, 'You treat everything as sensitive so you learn to manage weighting, trim and buoyancy with no bottom contact.'),
    tf('sk4-09', 'Good buoyancy control near mud bottoms also helps keep the visibility from being ruined.', true, 'Fine silt stirs up easily and stays suspended, so staying off the bottom keeps the water clear.'),

    one('sk4-10', 'How far do you swim during the no mask swim?', ['At least 15 m / 50 ft', 'About 1 m / 3 ft', 'At least 100 m / 330 ft', 'You stay in one place'], 0, 'Swimming at least 15 m / 50 ft with your buddy guiding you shows you could manage if you lost your mask.'),
    one('sk4-11', 'During the no mask swim (without contacts), you should keep your eyes…', ['Open, so you can see enough to be useful', 'Closed, to protect them from the water', 'Covered with one hand as you swim', 'Shut except to glance at your gauges'], 0, 'Even blurry vision helps you stay oriented; you may close them in practice only if wearing contacts.'),
    one('sk4-12', 'Water tickles your nose during the no mask swim. What can you do?', ['Exhale gently through your nose', 'Inhale sharply through your nose', 'Hold your breath until it passes', 'Surface and end the skill'], 0, 'A small exhale through your nose pushes the water away; keep breathing through your mouth.'),
    one('sk4-13', 'What do you do at the end of the no mask swim?', ['Replace your mask and clear it', 'Surface to put your mask back on', 'Leave your mask off for the ascent', 'Hand your mask to your buddy'], 0, 'Replacing and clearing it underwater shows you could recover from losing your mask and carry on.'),

    one('sk4-14', 'How do you breathe from a free-flowing regulator?', ['Hold it against your lips without sealing, and sip', 'Seal your lips tightly and breathe normally', 'Hold it a short distance from your mouth', 'Bite down hard to control the airflow'], 0, 'Not sealing lets the excess air escape around the mouthpiece so you can sip what you need.'),
    one('sk4-15', 'Why check your SPG after free-flow practice?', ['To see how fast a free-flow uses up your air', 'To reset the gauge after the high airflow', 'To calibrate your dive computer afterward', 'To check the gauge wasn’t damaged by the flow'], 0, 'A free-flow drains air surprisingly fast, so in a real one you start ascending immediately.'),
    one('sk4-16', 'For how long do you practise free-flow breathing?', ['At least 30 seconds', 'At least 5 minutes', 'Just two breaths', 'Until the cylinder is empty'], 0, 'Thirty seconds or more is enough to get comfortable sipping from the flow; you or your instructor holds the purge button.'),

    one('sk4-17', 'When would you need to orally inflate your BCD underwater?', ['After disconnecting a runaway or leaking inflator', 'At the start of every dive, to save some air', 'When you want to begin your descent', 'When you need to clear a flooded mask'], 0, 'With the inflator disconnected, oral inflation lets you control buoyancy while you end the dive.'),
    one('sk4-18', 'How much of a breath do you blow into your BCD underwater?', ['About a third to a half', 'One full, forceful breath', 'Only a tiny puff', 'Three full breaths in a row'], 0, 'Adding small amounts and waiting for the effect lets you reach neutral buoyancy without overshooting.'),
    one('sk4-19', 'When do you press the deflator button during oral inflation underwater?', ['Only while you blow air in', 'Throughout the whole skill', 'Not at all — it stays closed', 'Only between breaths'], 0, 'Pressing it opens the valve so your breath can go in; release it between breaths or the air escapes.'),
    tf('sk4-20', 'After fixing buoyancy with oral inflation, you can continue the dive with a malfunctioning inflator.', false, 'A faulty inflator can fail again at any time, so use oral inflation only to control buoyancy while you end the dive.'),

    many('sk4-21', 'Why are skin diving skills useful?', ['Scouting sites without using scuba air', 'Diving where scuba isn’t available', 'Quickly helping someone at the surface', 'Seeing some wildlife like whale sharks'], [0, 1, 2, 3], 'All four apply: skin diving needs only mask, fins and snorkel, giving you more chances to enjoy and help in the water.'),
    one('sk4-22', 'How should you breathe before a breath-hold dive?', ['Relaxed diaphragm (“stomach”) breathing', 'Rapid, deep hyperventilation', 'Quick, very shallow breaths', 'A one-minute practice breath-hold'], 0, 'Relaxed diaphragm breathing lets you hold your breath just as long — maybe longer — without the risks of hyperventilation.'),
    one('sk4-23', 'Why is hyperventilation no longer preferred before skin diving?', ['Oxygen can run out before you feel the urge to breathe', 'It makes you too buoyant to dive down easily', 'It fogs up your mask from the inside', 'It tires you out before you even dive'], 0, 'Hyperventilation lowers CO₂, which delays the urge to breathe, so you can black out and drown.'),
    one('sk4-24', 'After surfacing from a long breath-hold, you should…', ['Rest and breathe normally from your diaphragm', 'Exhale as forcefully as you can', 'Dive again right away while warmed up', 'Hold your breath a little longer'], 0, 'Resting lets your oxygen recover, while a strong exhale can make you faint.'),
    one('sk4-25', 'While skin diving you feel dizzy and your hands tingle. What should you do?', ['Stop diving down, and rest and breathe at the surface', 'Hyperventilate a little, then dive down again', 'Dive deeper, where the feeling usually fades', 'Keep diving, since the feeling will soon pass'], 0, 'These are warning signs; resting lets your oxygen and CO₂ levels return to normal.'),
    one('sk4-26', 'What is the one-up, one-down technique?', ['Your buddy stays at the surface while you dive', 'You and your buddy dive down together', 'One buddy uses scuba, the other a snorkel', 'You take turns sharing a single snorkel'], 0, 'One buddy watches from the surface while the other dives, then you swap, so help is always ready.'),
    one('sk4-27', 'How does displacement snorkel clearing work?', ['Exhaling as you ascend pushes water out the tip', 'Blowing hard once you reach the surface', 'Removing the snorkel and shaking it out', 'Sucking the water out through the mouthpiece'], 0, 'Look up, reach up and start exhaling in the last metre; the expanding air pushes the water out, then you roll forward.'),
    one('sk4-28', 'Your snorkel has a self-drain valve and doesn’t clear well by displacement. What do you do?', ['Use the blast method instead', 'Remove the self-drain valve', 'Hold your breath and dive again', 'Swim on with water in it'], 0, 'Some self-drain snorkels don’t clear well by displacement, and some divers simply prefer the blast method.'),
    one('sk4-29', 'Casual skin diving skills apply to breath-holds of about ___ and no deeper than about ___.', ['1 minute; 10 m / 30 ft', '5 minutes; 30 m / 100 ft', '30 seconds; 3 m / 10 ft', '2 minutes; 20 m / 65 ft'], 0, 'These are casual limits; deeper or longer free diving needs specialized training.'),

    one('sk4-30', 'Removing your scuba kit in the water before exiting, what do you do first?', ['Inflate your BCD for positive buoyancy', 'Take off your mask', 'Take off your fins', 'Drop your weights to the bottom'], 0, 'Positive buoyancy keeps you and your kit afloat; then hand up or clip off your weights.'),
    one('sk4-31', 'With a current, what may you need to do with your kit before climbing out?', ['Secure it to a gear line', 'Let it float until the boat collects it', 'Keep it on and climb the ladder', 'Hold it under one arm as you climb'], 0, 'Otherwise the current can carry your kit away while you climb out.'),
    many('sk4-32', 'When is removing your kit in the water useful?', ['Exiting into small boats', 'Exiting onto unstable platforms or boats without ladders', 'For divers who can’t wear a kit out of the water', 'Before every descent'], [0, 1, 2], 'Taking it off makes awkward exits easier and helps divers who can’t carry the weight; you never remove it before a descent.'),
    one('sk4-33', 'How can you get out of the water onto a boat with no ladder?', ['Kick up, turn and sit — or lift and roll onto the deck', 'Climb up while holding your kit in one arm', 'Wait for a wave to tilt the boat toward you', 'Push off the hull with your fins and jump up'], 0, 'Slip out of your kit first, then a strong kick lifts your torso so you can sit or roll onto the deck.'),
  ],
};
