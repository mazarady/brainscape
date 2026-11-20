import { many, one, tf, type CourseModule } from './types';

export const finalAscents: CourseModule = {
  id: 'final-ascents',
  section: 'Final Quiz',
  name: 'Types of Ascent',
  topics: [
    ['fa-01', 'Choosing an Ascent'],
    ['fa-09', 'How Each Ascent Works'],
    ['fa-17', 'Scenarios'],
  ],
  notes: [
    {
      heading: '⭐ The four ascents, in order of preference',
      points: [
        '1. Normal ascent: very LOW on air but NOT empty. Signal, ascend normally at 18 m / 60 ft per minute or slower, safety stop if you have air.',
        '2. Alternate air source ascent: OUT of air and your buddy is CLOSE. Signal out of air + share air, breathe from their alternate, ascend together holding on. Usually the best out-of-air option.',
        '3. Controlled emergency swimming ascent (CESA): OUT of air, SHALLOW (about 9 m / 30 ft or less), and the surface is CLOSER than your buddy. Look up, swim up normally, regulator in your mouth, exhale continuously with a steady “ahhh”.',
        '4. Buoyant emergency ascent: OUT of air, buddy NOT near, and too DEEP to swim to the surface. Drop your weights, exhale continuously, flare out (arms and legs spread) to slow down near the surface.',
      ],
    },
    {
      heading: 'Key differences',
      points: [
        'Low on air → normal ascent. Out of air → one of the three emergency options.',
        'Buddy close → alternate air source. Surface closer and shallow → CESA. Deep and alone → buoyant.',
        'In every emergency ascent: keep the regulator in your mouth (you may get a breath as air expands), look up, and exhale continuously so expanding air can escape your lungs. Never hold your breath.',
        'CESA: you control the speed by swimming. Buoyant: you rise fast, so flare to slow down; it is the last resort because of the higher risk of lung injury and DCS.',
        'At the surface after a CESA, drop weights and/or orally inflate the BCD to float.',
      ],
    },
  ],
  questions: [
    one('fa-01', 'You check your SPG and you are very low on air, but not out. What should you do?', ['Make a normal ascent', 'Make an alternate air source ascent', 'Make a controlled emergency swimming ascent', 'Make a buoyant emergency ascent'], 0, 'You still have air, so it isn’t an emergency yet: signal your buddy and make a normal, slow ascent.'),
    one('fa-02', 'You run out of air and your buddy is close by. What is usually your best option?', ['Ascend using your buddy’s alternate air source', 'Make a controlled emergency swimming ascent', 'Make a buoyant emergency ascent', 'Make a normal ascent with no air'], 0, 'With a buddy nearby, breathing from their alternate air source lets you ascend normally and under control.'),
    one('fa-03', 'You run out of air in shallow water, and the surface is closer than your buddy. What should you do?', ['Make a controlled emergency swimming ascent', 'Swim over to your buddy’s alternate air source', 'Make a buoyant emergency ascent', 'Make a normal ascent'], 0, 'When it’s shallow and the surface is nearer than any air source, swim up while exhaling continuously.'),
    one('fa-04', 'You run out of air, your buddy is not near, and you are too deep to swim to the surface. What should you do?', ['Make a buoyant emergency ascent', 'Make a controlled emergency swimming ascent', 'Swim to look for your buddy', 'Make a normal ascent'], 0, 'Dropping your weights makes you buoyant so you rise even if you can’t swim all the way. Flare out near the surface to slow down.'),
    one('fa-05', 'You ran out of air. Your buddy is close; if you’re shallow and the surface is closer than your buddy, what is your other option?', ['Buddy’s alternate air source / controlled emergency swimming ascent', 'Buddy’s alternate air source / buoyant emergency ascent', 'Normal ascent / buddy’s alternate air source', 'Controlled emergency swimming ascent / normal ascent'], 0, 'First choice with a buddy close: their alternate air source. Shallow with the surface closer than your buddy: a CESA.'),
    one('fa-06', 'Which lists the out-of-air options from most to least preferred, in general?', ['Alternate air source, then CESA, then buoyant ascent', 'CESA, then alternate air source, then buoyant ascent', 'Buoyant ascent, then CESA, then alternate air source', 'Alternate air source, then buoyant ascent, then CESA'], 0, 'Breathing from a buddy’s alternate is the most controlled. A CESA is next. A buoyant ascent is the last resort because you rise fast and lose control.'),
    one('fa-07', 'What is the difference between being low on air and being out of air?', ['Low on air you can still breathe, so make a normal ascent', 'There is none: both need an emergency ascent', 'Low on air means you should drop your weights', 'Out of air means you should make a normal ascent'], 0, 'Low on air you can still breathe, so make a normal ascent. Out of air you need an emergency option: alternate air source, CESA or buoyant ascent.'),
    tf('fa-08', 'A buoyant emergency ascent is the last resort among the out-of-air options.', true, 'It is used only when your buddy isn’t near and you’re too deep to swim up, because the fast, uncontrolled rise carries a higher risk of lung injury and DCS.'),
    many('fa-09', 'Which are correct during a controlled emergency swimming ascent?', ['Look up and swim up at a normal rate', 'Keep the regulator in your mouth', 'Exhale continuously, making an “ahhh” sound', 'Hold your breath to save air for the surface'], [0, 1, 2], 'Swim up while exhaling slowly and continuously. Keep the regulator in: expanding air in the cylinder may give you a breath. Holding your breath risks lung overexpansion.'),
    one('fa-10', 'Why do you make a continuous “ahhh” sound during a CESA?', ['It keeps your airway open so expanding air can escape', 'It warns other divers to get out of the way', 'It slows your ascent rate to a safe speed', 'It tells your buddy that you’re out of air'], 0, 'Air in your lungs expands as you rise. A steady exhale keeps your airway open so it escapes instead of overexpanding your lungs.'),
    one('fa-11', 'During an emergency ascent, why keep your regulator in your mouth?', ['Air may expand in the cylinder and give you another breath', 'It stops water from getting into your lungs', 'It keeps the regulator from getting damaged', 'It helps you control your ascent rate'], 0, 'As you rise, the remaining air in your cylinder expands relative to the lower surrounding pressure, so you may be able to take a breath.'),
    one('fa-12', 'What is the first step of a buoyant emergency ascent?', ['Drop your weights', 'Fully inflate your BCD', 'Remove your scuba unit', 'Swim hard toward the surface'], 0, 'Ditching your weights makes you positively buoyant so you rise without needing to swim the whole way.'),
    one('fa-13', 'During a buoyant emergency ascent, how do you slow down as you near the surface?', ['Flare out: spread your arms and legs', 'Hold your breath to slow your rise', 'Kick hard downward toward the bottom', 'Tuck into a ball to cut drag'], 0, 'Spreading your body increases drag and slows your rise. Keep exhaling all the way.'),
    one('fa-14', 'What do you do at the surface after a controlled emergency swimming ascent?', ['Drop weights and/or orally inflate your BCD', 'Swim back down to find your buddy', 'Take off your mask to breathe easier', 'Use the low-pressure inflator to fill your BCD'], 0, 'You’re out of air, so the power inflator won’t work. Drop weights or orally inflate your BCD to float.'),
    one('fa-15', 'In general, CESA is an option from depths of about…', ['9 metres / 30 feet or less', '18 metres / 60 feet or less', '30 metres / 100 feet or less', 'Any depth, as long as you swim fast'], 0, 'A CESA is for when you’re fairly shallow, about 9 m / 30 ft or less, and the surface is closer than your buddy.'),
    one('fa-16', 'In an alternate air source ascent, how do you and your buddy stay together?', ['Hold on to each other and ascend together', 'Swim side by side without touching', 'Your buddy ascends first and waits for you', 'You hold the hose and your buddy swims ahead'], 0, 'Hold on to each other (e.g. a BCD strap or forearm) so the hose doesn’t pull from your mouth, and ascend at a normal rate.'),
    one('fa-17', 'At 6 metres / 20 feet you run out of air. Your buddy is 15 metres / 50 feet away. What is the best option?', ['Controlled emergency swimming ascent', 'Swim to your buddy for their alternate', 'Buoyant emergency ascent', 'Make a normal ascent'], 0, 'You’re shallow and the surface is much closer than your buddy, so swim up exhaling continuously.'),
    one('fa-18', 'At 18 metres / 60 feet you run out of air. Your buddy is right next to you. What is the best option?', ['Alternate air source ascent', 'Controlled emergency swimming ascent', 'Buoyant emergency ascent', 'Make a normal ascent'], 0, 'With your buddy beside you, signal out of air and share air, then ascend together on their alternate.'),
    one('fa-19', 'At 20 metres / 66 feet you run out of air. Your buddy is far away and you don’t think you can swim to the surface. What should you do?', ['Buoyant emergency ascent', 'Controlled emergency swimming ascent', 'Swim to find your buddy', 'Wait for your buddy to come'], 0, 'Deep and with no buddy nearby, drop your weights for a buoyant emergency ascent, exhaling all the way and flaring near the surface.'),
    one('fa-20', 'Your SPG reads 20 bar / 300 psi at 12 metres / 40 feet. What kind of ascent should you make?', ['Normal ascent', 'Alternate air source ascent', 'Controlled emergency swimming ascent', 'Buoyant emergency ascent'], 0, 'You’re very low but not out of air, so signal your buddy and make a normal ascent right away.'),
  ],
};
