import type { RecipeType } from '../Types/RecipeType';

export const mockRecipe: RecipeType = {
  id: '14',
  name: 'Indisk Paneer Butter Masala',
  image: '/Matslumparen/foodImages/paneerButterMasala.png',
  suitableSeasons: ['Vinter', 'Höst'],
  suitableWeather: {
    conditions: ['Alla'],
    temperature: { value: 10, relation: 'below' },
  },
  portions: '4',
  time: '40 min',
  comments:
    'Varmt, kryddigt och mjukt. Paneer-osten suger upp den krämiga såsen på ett fantastiskt sätt. Serveras bäst med ett fluffigt naanbröd och lite matlagningsyoghurt.',
  instructions: [
    'Koka riset enligt anvisningen på förpackningen.',
    'Skala och hacka lök och vitlök. Smält smöret i en gryta eller kastrull. Fräs lök, vitlök och ingefära i smöret tills löken mjuknar. Rör ner kryddorna och låt fräsa ytterligare någon minut.',
    'Tillsätt krossade tomater, cashewnötter och vatten och koka 10 minuter. Tillsätt grädde och mixa slätt med stavmixer. Smaka av med salt.',
    'Skär osten i bitar och stek i oljan i en stekpanna tills den får färg. Lägg ner i grytan och koka upp.',
    'Till servering: Toppa grytan med koriander och servera med riset.',
  ],
  ingredients: [
    '4 port ris',
    '2 gula lökar',
    '3 vitlöksklyftor',
    '50 g smör',
    '2 msk riven färsk ingefära',
    '1 tsk malen spiskummin',
    '1 1/2 tsk garam masala',
    '1 tsk chilipulver',
    '1/2 tsk gurkmeja',
    '1 förp krossade tomater (à 390 g)',
    '1 dl hackade naturella cashewnötter',
    '1 1/2 dl vatten',
    '1 dl vispgrädde',
    'salt',
    '450 g paneer ost',
    '2 msk rapsolja',
  ],
};
