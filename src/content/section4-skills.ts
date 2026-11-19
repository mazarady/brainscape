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
    one('sk4-01', 'When is putting your scuba kit on at the surface (in deep water) useful?', ['Small boats without room to kit up, entries from high platforms, or if you can’t wear gear out of the water', 'Only on shore dives', 'Only at night', 'When you want to save air'], 0, 'From a high platform you lower the kit on a line and climb down.'),
    tf('sk4-02', 'It’s fine to enter the water wearing your weight system without your BCD.', false, 'Never enter with weights on but no BCD.'),
    one('sk4-03', 'During a controlled seated entry, what must you check as you turn to ease in?', ['That your cylinder clears the platform edge', 'That your fins are off', 'That your BCD is empty', 'That your mask is off'], 0, 'BCD partly inflated, regulator in.'),
    one('sk4-04', 'After you and your buddy have put on your kits at the surface, you finish the predive check with…', ['The Final check — buckles secure, no trapped hoses, nothing dangling', 'A weight drop', 'A descent', 'A snorkel exchange'], 0, 'You run through the other BWRAF steps before entering.'),
    one('sk4-05', 'What is the first step when helping a tired buddy at the surface?', ['Establish buoyancy for yourself and your buddy', 'Start towing immediately', 'Remove their mask', 'Signal the boat and wait'], 0, 'Then tow at a slow, steady pace.'),
    one('sk4-06', 'Which tow is used for short distances, with both divers face up?', ['Cylinder valve tow', 'Tired diver push', 'Fin push', 'Arm tow'], 0, 'For longer distances use the tired diver push.'),
    one('sk4-07', 'Which tow is used for longer distances?', ['Tired diver push (modified tired-swimmer carry)', 'Cylinder valve tow', 'Underwater tow', 'Snorkel tow'], 0, 'Swim at a slow, steady pace.'),
    one('sk4-08', 'When practising swimming near sensitive environments, you simulate that…', ['The entire bottom is sensitive — no contact at all', 'You can kneel anywhere', 'Only coral is sensitive', 'Contact is fine with gloves'], 0, 'It combines weighting, trim and buoyancy control.'),
    tf('sk4-09', 'Good buoyancy control near mud bottoms also helps keep the visibility from being ruined.', true, 'Fine silt stirs up easily and stays suspended.'),

    one('sk4-10', 'How far do you swim during the no mask swim?', ['At least 15 m / 50 ft', '1 m', '100 m', 'Only in place'], 0, 'Your buddy guides you.'),
    one('sk4-11', 'During the no mask swim (without contacts), you should keep your eyes…', ['Open — you can see enough to be useful', 'Closed', 'Covered with your hand', 'Above the water'], 0, 'You may close them in practice if wearing contacts.'),
    one('sk4-12', 'Water tickles your nose during the no mask swim. What can you do?', ['Exhale through your nose', 'Inhale through your nose', 'Hold your breath', 'Surface'], 0, 'Concentrate on breathing through your mouth.'),
    one('sk4-13', 'What do you do at the end of the no mask swim?', ['Replace your mask and clear it', 'Surface to put it back on', 'Leave it off', 'Hand it to your buddy'], 0, 'This shows you could end a dive without a mask.'),

    one('sk4-14', 'How do you breathe from a free-flowing regulator?', ['Hold the mouthpiece against your lips without sealing and sip the air', 'Seal your lips tightly on it', 'Hold it 30 cm away', 'Bite down hard on it'], 0, 'Inserting just one side of the mouthpiece can help.'),
    one('sk4-15', 'Why check your SPG after free-flow practice?', ['To see how much air a free-flow uses — so you start ascending immediately in a real one', 'To reset it', 'To calibrate your computer', 'It isn’t necessary'], 0, 'You may be surprised how much air it uses.'),
    one('sk4-16', 'For how long do you practise free-flow breathing?', ['At least 30 seconds', '5 minutes', '2 breaths', 'Until the cylinder is empty'], 0, 'Your instructor or you hold the purge button to simulate it.'),

    one('sk4-17', 'When would you need to orally inflate your BCD underwater?', ['After disconnecting a runaway or leaking low-pressure inflator', 'At the start of every dive', 'To descend', 'When your mask floods'], 0, 'You use it to stay in control while ending the dive.'),
    one('sk4-18', 'How much of a breath do you blow into your BCD underwater?', ['About a third to a half', 'A full forceful breath', 'Just a tiny puff', 'Three full breaths at once'], 0, 'You only need to reach neutral buoyancy.'),
    one('sk4-19', 'When do you press the deflator button during oral inflation underwater?', ['Only while blowing air in', 'The whole time', 'Never', 'Only between breaths'], 0, 'Let go between breaths or the air escapes.'),
    tf('sk4-20', 'After fixing buoyancy with oral inflation, you can continue the dive with a malfunctioning inflator.', false, 'Use oral inflation to control buoyancy while you end the dive.'),

    many('sk4-21', 'Why are skin diving skills useful?', ['Scouting sites without using scuba air', 'Diving where scuba isn’t available', 'Quickly helping someone at the surface', 'Seeing some wildlife like whale sharks'], [0, 1, 2, 3], 'And more chances to enjoy the water.'),
    one('sk4-22', 'How should you breathe before a breath-hold dive?', ['Relaxed diaphragm (“stomach”) breathing', 'Rapid hyperventilation', 'Very shallow breaths', 'Hold your breath for a minute first'], 0, 'It lets you hold your breath just as long — maybe longer.'),
    one('sk4-23', 'Why is hyperventilation no longer preferred before skin diving?', ['It can lower CO₂ so much you run out of oxygen before feeling the urge to breathe', 'It makes you too buoyant', 'It fogs your mask', 'It wastes energy only'], 0, 'Done improperly it can cause blackout and drowning.'),
    one('sk4-24', 'After surfacing from a long breath-hold, you should…', ['Rest and breathe normally from your diaphragm', 'Exhale as hard as you can', 'Dive again immediately', 'Hold your breath a bit longer'], 0, 'A strong exhale can make you faint.'),
    one('sk4-25', 'While skin diving you feel dizzy and your hands tingle. What should you do?', ['Stop diving down — rest, relax and breathe at the surface', 'Hyperventilate and dive again', 'Dive deeper', 'Ignore it'], 0, 'Let oxygen and CO₂ levels return to normal.'),
    one('sk4-26', 'What is the one-up, one-down technique?', ['Your buddy stays on the surface while you dive, and vice versa', 'Both divers dive at once', 'One diver uses scuba', 'Alternating snorkels'], 0, 'Your buddy can help if you need it.'),
    one('sk4-27', 'How does displacement snorkel clearing work?', ['Exhaling as you ascend pushes water out the snorkel tip', 'Blowing hard at the surface', 'Removing the snorkel and shaking it', 'Sucking water out'], 0, 'Look up, reach up, start exhaling in the last metre, then roll forward.'),
    one('sk4-28', 'Your snorkel has a self-drain valve and doesn’t clear well by displacement. What do you do?', ['Use the blast method', 'Remove the valve', 'Hold your breath', 'Swim with water in it'], 0, 'Some divers simply prefer the blast method.'),
    one('sk4-29', 'Casual skin diving skills apply to breath-holds of about ___ and no deeper than about ___.', ['1 minute; 10 m / 30 ft', '5 minutes; 30 m', '30 seconds; 3 m', '2 minutes; 20 m'], 0, 'Deeper or longer free diving needs specialized training.'),

    one('sk4-30', 'Removing your scuba kit in the water before exiting, what do you do first?', ['Inflate your BCD for positive buoyancy', 'Remove your mask', 'Take off your fins', 'Drop your weights to the bottom'], 0, 'Then hand up or clip off your weights.'),
    one('sk4-31', 'With a current, what may you need to do with your kit before climbing out?', ['Secure it to a gear line', 'Let it float away', 'Wear it up the ladder', 'Hold it in your teeth'], 0, 'Otherwise the current can carry it off.'),
    many('sk4-32', 'When is removing your kit in the water useful?', ['Exiting into small boats', 'Exiting onto unstable platforms or boats without ladders', 'For divers who can’t wear a kit out of the water', 'Before every descent'], [0, 1, 2], 'It also makes climbing a ladder easier.'),
    one('sk4-33', 'How can you get out of the water onto a boat with no ladder?', ['Kick hard to lift your torso, turn and sit — or lift, bend forward and roll onto the deck', 'Climb up holding your kit', 'Wait for the boat to tilt', 'Jump straight up'], 0, 'Slip out of your kit first.'),
  ],
};
