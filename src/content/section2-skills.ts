import { many, one, tf, type CourseModule } from './types';

export const skills2: CourseModule = {
  id: 's2-skills',
  section: 'Section Two',
  name: 'Your Skills as a Diver II',
  notes: [
    {
      heading: 'Entries, weighting and loose bands',
      points: [
        'Giant stride: fully equipped, BCD partly inflated, breathing from the regulator. Hold regulator and mask, look straight ahead and STEP (don’t jump). Signal OK, clear the area, switch to snorkel.',
        'Weight check: all gear on, empty BCD, normal breath held → float at eye level; exhale → sink slowly. Add 2 kg / 5 lb if you checked with a full cylinder (air gets lighter as you use it).',
        'Loose cylinder band: before the dive, help remove the kit to tighten; during the dive it’s not usually an emergency — signal and tighten; while exiting, slip out of the kit in the water and carry it by the valve.',
      ],
    },
    {
      heading: 'Snorkel and mask skills',
      points: [
        'Blast method: blow the snorkel clear forcefully, breathe in cautiously, blast again if needed.',
        'Practise snorkel/regulator exchanges with your face in the water.',
        'Clear a fully flooded mask like a partly flooded one — just exhale longer.',
        'Without a mask, keep your eyes open (unless you wear contacts). Practise breathing without a mask for a minute or more — about the time to reach the surface.',
      ],
    },
    {
      heading: 'Buoyancy and BCD problems',
      points: [
        'Fin pivot: when neutral you rise slightly as you inhale and sink as you exhale. Adjust the BCD in small amounts and be patient.',
        'Stuck inflator: disconnect the low-pressure hose (push the hose in while pulling back the release) and vent. Can’t disconnect quickly? Go vertical and hold the exhaust open while you keep trying.',
        'Reconnect the hose after practising.',
      ],
    },
    {
      heading: 'Air and exits',
      points: [
        'Air depletion exercise: as the valve is closed, breathing gets harder; signal “out of air” when you can’t breathe.',
        'You should always know your air pressure to within 20 bar / 300 psi without looking.',
        'Ladder exit: don’t wait under another diver, keep gear on and BCD inflated, breathe from snorkel while waiting, hand up accessories and fins (or put fins on your wrist), switch to regulator, keep mask and regulator on until fully aboard.',
      ],
    },
  ],
  questions: [
    one('sk2-01', 'How should you do a giant stride entry?', ['Look straight ahead and step in — don’t jump', 'Jump in feet first looking down', 'Dive in head first', 'Sit down and roll backward'], 0, 'Enter fully equipped with your BCD partly inflated.'),
    one('sk2-02', 'During a giant stride, what do you hold as you enter?', ['Your regulator and your mask', 'Your fins', 'Your weight belt', 'Your buddy’s hand'], 0, 'Breathe from your regulator and hold it and your mask until you’re stable at the surface.'),
    one('sk2-03', 'After a giant stride entry, what should you do?', ['Signal OK and clear the entry area, then switch to your snorkel', 'Descend immediately', 'Take off your mask', 'Wait directly below the boat'], 0, 'Moving clear lets the next diver enter.'),
    one('sk2-04', 'During a weight check with an empty BCD and a normal breath held, you should float…', ['At eye level', 'With your shoulders out of the water', 'Just below the surface', 'Neutrally at 3 m'], 0, 'When you exhale you should slowly sink.'),
    one('sk2-05', 'You did your weight check with a full cylinder. What should you add?', ['About 2 kg / 5 lb', 'About 5 kg / 10 lb', 'Nothing', 'Half your current weight'], 0, 'The air in a cylinder has weight, so you get lighter as you use it.'),
    tf('sk2-06', 'When checking weighting, buddies should adjust one at a time so they can help each other.', true, 'Check with all your equipment in place, breathing from your regulator.'),
    tf('sk2-07', 'A cylinder band coming loose during a dive is usually an emergency that requires an immediate ascent.', false, 'The cylinder tends to stay with you. Signal your buddy so they can tighten it.'),
    one('sk2-08', 'Your cylinder band comes loose as you’re exiting the water. What’s often simplest?', ['Ease back into the water, slip out of the kit and carry it out by the valve', 'Keep climbing and hold the cylinder', 'Drop the kit on the bottom', 'Ask the boat to pull you up'], 0, 'Before the dive, help the diver remove the kit to retighten it.'),
    one('sk2-09', 'What is the blast method?', ['Clearing your snorkel by blowing forcefully, like a pea-shooter', 'Clearing your mask by blowing through your mouth', 'A fast emergency ascent', 'Inflating your BCD by mouth'], 0, 'Take the first breath cautiously and blast again if water remains.'),
    one('sk2-10', 'Why practise snorkel clearing and snorkel/regulator exchanges with your face in the water?', ['Because in chop or while watching something below, your face stays in the water', 'Because it’s easier', 'To save air', 'To practise equalizing'], 0, 'It teaches you to switch without choking on water.'),
    one('sk2-11', 'During the fin pivot, when you’re neutrally buoyant you should…', ['Rise slightly when you inhale and sink when you exhale', 'Stay perfectly still whatever you do', 'Sink when you inhale', 'Rise only when you add air'], 0, 'It teaches how breathing affects buoyancy.'),
    one('sk2-12', 'How should you adjust your BCD when working toward neutral buoyancy?', ['Add or release small amounts and be patient', 'Add a big burst, then dump it all', 'Only use your breathing', 'Only adjust at the surface'], 0, 'Start thinking of neutral buoyancy as your normal state in the water.'),
    one('sk2-13', 'How do you clear a fully flooded mask?', ['The same way as a partly flooded one — just exhale longer', 'Take it off and put it back on', 'Blow through your mouth', 'Surface and empty it'], 0, 'Hold the top, blow through your nose and tilt your face up.'),
    one('sk2-14', 'If your mask comes off and you don’t wear contacts, you should…', ['Keep your eyes open — blurry vision is still useful', 'Close your eyes until it’s back on', 'Hold your breath', 'Ascend immediately'], 0, 'You can still see enough to swim and signal your buddy.'),
    one('sk2-15', 'Why practise breathing without a mask for a minute or more?', ['That’s about how long it would take to reach the surface if you lost it', 'To train your eyes', 'To test your regulator', 'It’s required for every dive'], 0, 'Blocking your nose at first is fine, but practise until you don’t need to.'),
    one('sk2-16', 'Your BCD inflator sticks and keeps filling. What do you do?', ['Disconnect the low-pressure hose and vent the excess air', 'Swim down harder', 'Close your cylinder valve', 'Remove your weights'], 0, 'If it won’t disconnect quickly, go vertical and hold the exhaust valve open while you keep trying.'),
    one('sk2-17', 'How do you disconnect a pressurized low-pressure inflator hose?', ['Push the hose toward the connection while pulling back the release', 'Pull the hose straight off', 'Twist it counter-clockwise', 'Press the deflate button twice'], 0, 'Oversized release fittings make this easier with gloves.'),
    one('sk2-18', 'In the air depletion exercise, when do you signal “out of air”?', ['When you can no longer get a breath', 'As soon as the valve starts closing', 'When the SPG reads 50 bar', 'After 30 seconds'], 0, 'Breathing gets harder as the pressure drops; the instructor then reopens the valve.'),
    one('sk2-19', 'Without rechecking your SPG, you should know your air pressure to within…', ['20 bar / 300 psi', '50 bar / 500 psi', '5 bar / 50 psi', '100 bar / 1500 psi'], 0, 'You need to show your instructor you’re continually aware of your air.'),
    many('sk2-20', 'Which are correct when waiting to exit by ladder?', ['Stay out from under divers ahead of you', 'Keep your gear on with enough air in your BCD to float', 'Breathe from your snorkel while waiting', 'Take off your mask while you wait'], [0, 1, 2], 'Keep your mask on until you’re fully aboard.'),
    one('sk2-21', 'What do you do with your fins before climbing a boat ladder?', ['Hand them up or put them on your wrist', 'Keep them on to climb', 'Drop them in the water', 'Clip them to your weight belt'], 0, 'Hand up accessories too.'),
    one('sk2-22', 'When climbing the ladder, you should…', ['Breathe from your regulator and keep your mask on until fully aboard', 'Remove your mask first so you can see', 'Breathe through your snorkel', 'Hold your breath'], 0, 'Switch back to your regulator before you start climbing.'),
    tf('sk2-23', 'You should reconnect your low-pressure inflator hose after practising the disconnect skill.', true, 'Otherwise you can’t use your inflator.'),
  ],
};
