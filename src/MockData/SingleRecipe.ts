import type { RecipeType } from '../Types/RecipeType';

export const mockRecipe: RecipeType = {
  id: '14',
  name: 'Indisk Paneer Butter Masala',
  image: 'foodImages/paneerButterMasala.png',
  suitableSeasons: ['Vinter', 'Höst'],
  suitableWeather: {
    conditions: ['Alla'],
    temperature: { value: 10, relation: 'below' },
  },
  portions: '4',
  time: '40 min',
  description:
    'Varmt, kryddigt och mjukt. Paneer-osten suger upp den krämiga såsen på ett fantastiskt sätt. Serveras bäst med ett fluffigt naanbröd och lite matlagningsyoghurt.',
};
