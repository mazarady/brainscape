import { many, one, tf, type CourseModule } from './types';

export const skills2: CourseModule = {
  id: 's2-skills',
  section: 'Section Two',
  name: 'Your Skills as a Diver II',
  // Where each topic's questions start (in question order).
  topics: [
    ['sk2-01', 'Deep Water Entry – Giant Stride'],
    ['sk2-04', 'Weight Check and Proper Weighting'],
    ['sk2-07', 'Dealing with a Loose Cylinder Band'],
    ['sk2-09', 'Snorkel Clearing'],
    ['sk2-10', 'Snorkel/Regulator Exchange'],
    ['sk2-11', 'Neutral Buoyancy'],
    ['sk2-13', 'Mask Removal and Replacement, and No-Mask Breathing'],
    ['sk2-16', 'Disconnecting Your Low-Pressure Inflator'],
    ['sk2-18', 'Air (Gas) Depletion Exercise'],
    ['sk2-19', 'Air Awareness and Managing Your Air Supply'],
    ['sk2-20', 'Deep Water Exit – Ladder Exit'],
    ['sk2-23', 'Disconnecting Your Low-Pressure Inflator'],
  ],
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
    one('sk2-01', 'How should you do a giant stride entry?', ['Look straight ahead and step out — don’t jump', 'Jump in feet first while looking down', 'Dive in head first with your arms forward', 'Sit on the edge and roll backward'], 0, 'Stepping out while looking ahead keeps you upright and in control. Enter fully equipped with your BCD partly inflated.'),
    one('sk2-02', 'During a giant stride, what do you hold as you enter?', ['Your regulator and your mask', 'Your fins and your snorkel', 'Your weight belt and your SPG', 'Your buddy’s hand and the rail'], 0, 'Holding them stops the entry from knocking them loose. Breathe from your regulator and keep holding until you’re stable at the surface.'),
    one('sk2-03', 'After a giant stride entry, what should you do?', ['Signal OK, move clear, then switch to your snorkel', 'Descend straight away without waiting', 'Take off your mask while you wait', 'Wait directly below the boat’s entry point'], 0, 'Signaling OK tells others you’re fine, and moving clear of the entry area lets the next diver enter.'),
    one('sk2-04', 'During a weight check with an empty BCD and a normal breath held, you should float…', ['At eye level', 'With your shoulders out of the water', 'Just below the surface', 'Neutrally at 3 m / 10 ft'], 0, 'Floating at eye level with a normal breath held, and slowly sinking when you exhale, shows you have the right amount of weight.'),
    one('sk2-05', 'You did your weight check with a full cylinder. What should you add?', ['About 2 kg / 5 lb', 'About 5 kg / 10 lb', 'Nothing at all', 'Half your current weight'], 0, 'The air in a cylinder has weight, so you get lighter as you use it. The extra weight makes up for that near the end of the dive.'),
    tf('sk2-06', 'When checking weighting, buddies should adjust one at a time so they can help each other.', true, 'Taking turns means one buddy is free to help the other. Check with all your equipment in place, breathing from your regulator.'),
    tf('sk2-07', 'A cylinder band coming loose during a dive is usually an emergency that requires an immediate ascent.', false, 'A loose cylinder tends to stay with you, so it’s not usually an emergency. Signal your buddy so they can tighten the band.'),
    one('sk2-08', 'Your cylinder band comes loose as you’re exiting the water. What’s often simplest?', ['Slip out of the kit in the water and carry it by the valve', 'Keep climbing out while holding the cylinder', 'Let the kit drop to the bottom and recover it later', 'Have the crew pull you out with the kit still on'], 0, 'Removing the kit in the water is easier than climbing out with a loose cylinder. (Before a dive, help the diver take the kit off to retighten it.)'),
    one('sk2-09', 'What is the blast method?', ['Clearing your snorkel by blowing hard into it', 'Clearing your mask by exhaling through your mouth', 'A fast emergency swimming ascent', 'Inflating your BCD by mouth with short puffs'], 0, 'You blow forcefully into the snorkel, like a pea-shooter, to push the water out. Breathe in cautiously and blast again if water remains.'),
    one('sk2-10', 'Why practise snorkel clearing and snorkel/regulator exchanges with your face in the water?', ['In chop or when watching below, your face stays in the water', 'It’s easier than practising with your head out of the water', 'It saves the air in your cylinder for the dive', 'It gives you a chance to practise equalizing'], 0, 'In real conditions your face is often in the water when you switch, so practising that way teaches you to do it without choking.'),
    one('sk2-11', 'During the fin pivot, when you’re neutrally buoyant you should…', ['Rise slightly as you inhale and sink as you exhale', 'Stay perfectly still no matter how you breathe', 'Sink as you inhale and rise as you exhale', 'Rise only when you add air to your BCD'], 0, 'Filling your lungs makes you slightly more buoyant and emptying them makes you less, so the fin pivot shows how breathing affects buoyancy.'),
    one('sk2-12', 'How should you adjust your BCD when working toward neutral buoyancy?', ['Add or release small amounts and be patient', 'Add a big burst of air, then dump it all', 'Use only your breathing, never the BCD', 'Make adjustments only while at the surface'], 0, 'Small changes take a moment to show, so big bursts make you overshoot. Start thinking of neutral buoyancy as your normal state in the water.'),
    one('sk2-13', 'How do you clear a fully flooded mask?', ['Like a partly flooded one, but exhale for longer', 'Take it off completely, then put it back on', 'Blow out hard through your mouth, not your nose', 'Swim to the surface and empty the water out'], 0, 'Hold the top, exhale through your nose and tilt your face up. A full mask simply needs a longer exhale.'),
    one('sk2-14', 'If your mask comes off and you don’t wear contacts, you should…', ['Keep your eyes open — blurry vision still helps', 'Close your eyes until the mask is back on', 'Hold your breath until the mask is back on', 'Make an immediate ascent to the surface'], 0, 'Even blurry vision lets you find your mask, swim and signal your buddy.'),
    one('sk2-15', 'Why practise breathing without a mask for a minute or more?', ['It’s about the time needed to reach the surface', 'It trains your eyes to focus without a mask', 'It tests whether your regulator works well', 'It’s a skill required before every dive'], 0, 'If you lost your mask, you’d need to breathe without it for about as long as it takes to surface. Blocking your nose at first is fine.'),
    one('sk2-16', 'Your BCD inflator sticks and keeps filling. What do you do?', ['Disconnect the low-pressure hose and vent the air', 'Swim downward harder to stay at your depth', 'Close your cylinder valve all the way', 'Drop your weights to keep yourself balanced'], 0, 'Disconnecting stops more air going in, and venting removes the excess. If it won’t disconnect quickly, go vertical and hold the exhaust open while you keep trying.'),
    one('sk2-17', 'How do you disconnect a pressurized low-pressure inflator hose?', ['Push the hose in while pulling back the release', 'Pull the hose straight off the fitting', 'Twist the hose counter-clockwise to unscrew it', 'Press the deflate button twice, then pull'], 0, 'The connector lets go when you push the hose toward it and pull back the release at the same time. Oversized releases make this easier with gloves.'),
    one('sk2-18', 'In the air depletion exercise, when do you signal “out of air”?', ['When you can no longer get a breath', 'As soon as the valve starts to close', 'When your SPG reads 50 bar / 500 psi', 'After about 30 seconds of breathing'], 0, 'Breathing gets harder as the pressure drops. You signal once you can’t breathe, and the instructor then reopens the valve.'),
    one('sk2-19', 'Without rechecking your SPG, you should know your air pressure to within…', ['20 bar / 300 psi', '50 bar / 500 psi', '5 bar / 50 psi', '100 bar / 1500 psi'], 0, 'Checking your SPG often keeps you continually aware of your air, and you show your instructor this by knowing it to within 20 bar / 300 psi.'),
    many('sk2-20', 'Which are correct when waiting to exit by ladder?', ['Stay out from under divers ahead of you', 'Keep your gear on with enough air in your BCD to float', 'Breathe from your snorkel while waiting', 'Take off your mask while you wait'], [0, 1, 2], 'Stay clear of divers above you, float with your gear on and breathe from your snorkel. Keep your mask on until you’re fully aboard.'),
    one('sk2-21', 'What do you do with your fins before climbing a boat ladder?', ['Hand them up or slip them onto your wrist', 'Keep them on your feet while you climb', 'Let them go and have the crew fish them out', 'Clip them to your weight belt before climbing'], 0, 'Fins get in the way on a ladder, so take them off and hand them up along with any other accessories.'),
    one('sk2-22', 'When climbing the ladder, you should…', ['Keep your mask on and breathe from your regulator', 'Take your mask off first so you can see', 'Switch to your snorkel to save your air', 'Hold your breath until you reach the deck'], 0, 'Switch to your regulator before climbing and keep it and your mask in place until fully aboard, in case you fall back into the water.'),
    tf('sk2-23', 'You should reconnect your low-pressure inflator hose after practising the disconnect skill.', true, 'If the hose stays disconnected, you can’t use your inflator to add air to your BCD.'),
  ],
};
