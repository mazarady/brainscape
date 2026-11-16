import type { AppState, Card, Deck, StudyClass } from './types';

export const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);

export const newCard = (question: string, answer: string): Card => ({
  id: uid(),
  question,
  answer,
  rating: 0,
  dueStep: 0,
  timesSeen: 0,
});

export const newDeck = (name: string, pairs: [string, string][] = []): Deck => ({
  id: uid(),
  name,
  cards: pairs.map(([q, a]) => newCard(q, a)),
});

export const CLASS_COLORS = ['#2f80ed', '#9b51e0', '#eb5757', '#f2994a', '#27ae60', '#00a3a3', '#d6336c'];
export const CLASS_ICONS = ['📚', '🤿', '🧪', '🌍', '🧮', '🎵', '💻', '🩺', '🗣️', '⚖️'];

export const newClass = (name: string, decks: Deck[] = [], icon = '📚', color = CLASS_COLORS[0]): StudyClass => ({
  id: uid(),
  name,
  description: '',
  color,
  icon,
  decks,
  selectedDeckIds: decks.map((d) => d.id),
  order: 'progressive',
  step: 0,
  totalStudySeconds: 0,
});

export function seedState(): AppState {
  const diving = newClass(
    'Scuba Diving Fundamentals',
    [
      newDeck('Dive Safety Basics', [
        ['Diving with a cold or using decongestants to clear congestion before a dive is a good idea.\n\nTrue or False?', 'False — congestion makes equalizing hard, and medication can wear off at depth, causing a reverse block on ascent.'],
        ['What is the single most important rule in scuba diving?', 'Breathe continuously and never hold your breath — expanding air in the lungs on ascent can cause serious injury.'],
        ['Why should you always dive with a buddy?', 'For mutual assistance in emergencies (e.g. sharing air), help with equipment, and safety monitoring.'],
        ['What does a pre-dive safety check confirm?', 'BCD inflates/deflates, weights and releases are secure, air is on and breathable, and all gear is fastened.'],
        ['What should you do if you feel discomfort in your ears while descending?', 'Stop, ascend slightly, and equalize gently. Never force it.'],
        ['What is a safety stop and when do you make it?', 'A pause of about 3 minutes at roughly 5 m / 15 ft at the end of a dive to allow extra nitrogen off-gassing.'],
      ]),
      newDeck('Physics & Physiology', [
        ['As you descend, what happens to the volume of air in a flexible space?', 'It decreases — pressure increases with depth, compressing gas (Boyle\'s law).'],
        ['Where is the greatest relative pressure change in the water column?', 'Near the surface — between 0 and 10 m the pressure doubles.'],
        ['What causes decompression sickness?', 'Dissolved nitrogen forming bubbles in the body when ascending too fast or staying too long/deep.'],
        ['Name two symptoms of nitrogen narcosis.', 'Impaired judgment and a feeling of euphoria or anxiety; it clears on ascending to shallower water.'],
        ['Why do colors disappear as you go deeper?', 'Water absorbs light — reds fade first, then oranges and yellows.'],
      ]),
      newDeck('Equipment', [
        ['What does BCD stand for?', 'Buoyancy Control Device.'],
        ['What is the purpose of the alternate air source (octopus)?', 'A spare second stage so a buddy can breathe from your tank in an out-of-air situation.'],
        ['What does an SPG show?', 'Submersible Pressure Gauge — how much air remains in your cylinder.'],
        ['Why should a mask be cleaned before first use?', 'To remove manufacturing residue that causes fogging.'],
      ]),
    ],
    '🤿',
    '#00a3a3',
  );
  diving.description = 'Core open-water knowledge: safety, physics, physiology and gear.';

  const spanish = newClass(
    'Spanish Starter Vocab',
    [
      newDeck('Greetings', [
        ['Hello', 'Hola'],
        ['Good morning', 'Buenos días'],
        ['Good night', 'Buenas noches'],
        ['How are you?', '¿Cómo estás?'],
        ['Nice to meet you', 'Mucho gusto'],
        ['See you later', 'Hasta luego'],
      ]),
      newDeck('Food & Drink', [
        ['Water', 'El agua'],
        ['Bread', 'El pan'],
        ['Coffee', 'El café'],
        ['The bill, please', 'La cuenta, por favor'],
      ]),
    ],
    '🗣️',
    '#f2994a',
  );
  spanish.description = 'Everyday words and phrases for travel.';

  return { version: 1, classes: [diving, spanish] };
}
