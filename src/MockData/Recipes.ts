import type { RecipeType } from '../Types/RecipeType';

export const mockRecipes: RecipeType[] = [
  {
    id: '1',
    name: 'Krämig Halloumigryta med linser',
    image: '/Matslumparen/foodImages/halloumiPot.png',
    suitableSeasons: ['Vinter', 'Höst', 'Vår'],
    suitableWeather: {
      conditions: ['Alla'],
      temperature: { value: 5, relation: 'below' },
    },
    portions: '4-6',
    time: '45 min',
    description:
      'En riktig räddare i nöden när det är ruggigt ute. Den sköter sig själv på spisen och halloumin ger det där lilla extra tugget. Receptet kommer egentligen från Tuvessonskans receptbok Tomat, tomat tomat (s.5).',
  },
  {
    id: '2',
    name: 'Fräsch Vattenmelon- & Fetasallad',
    image: '/Matslumparen/foodImages/melonSallad.png',
    suitableSeasons: ['Sommar', 'Vår'],
    suitableWeather: {
      conditions: ['Soligt', 'Vind'],
      temperature: { value: 20, relation: 'above' },
    },
    portions: '2-4',
    time: '15 min',
    description:
      'När solen gassar och man knappt orkar starta spisen är det här räddningen. Sältan från fetan och sötman från melon är en oslagbar kombo. Glöm inte massor av mynta!',
  },
  {
    id: '3',
    name: 'Sötpotatis-chili med mörk choklad',
    image: '/Matslumparen/foodImages/chilli.png',
    suitableSeasons: ['Höst', 'Vinter'],
    suitableWeather: {
      conditions: ['Molnigt', 'Regn', 'Snö', 'Vind'],
      temperature: { value: 10, relation: 'below' },
    },
    portions: '6',
    time: '60 min',
    description:
      'En mustig chili som bara blir godare ju längre den får stå. Chokladen ger ett djup som gör att man inte saknar köttet en sekund. Perfekt för storkok!',
  },
  {
    id: '4',
    name: 'Zucchini- och Halloumiburgare',
    image: '/Matslumparen/foodImages/zuchiniBurger.png',
    suitableSeasons: ['Sommar', 'Vår'],
    suitableWeather: {
      conditions: ['Soligt', 'Molnigt', 'Vind'],
      temperature: { value: 15, relation: 'above' },
    },
    portions: '4',
    time: '30 min',
    description:
      'Dessa burgare blir otroligt saftiga. Släng dem på grillen eller stek i panna, oavsett blir det succé. Servera med en rejäl klick chilimajonnäs.',
  },
  {
    id: '5',
    name: 'Linssoppa med citron och spenat',
    image: '/Matslumparen/foodImages/lentilSoup.png',
    suitableSeasons: ['Vår', 'Höst'],
    suitableWeather: {
      conditions: ['Molnigt', 'Regn', 'Vind'],
      temperature: { value: 15, relation: 'below' },
    },
    portions: '4',
    time: '25 min',
    description:
      'Billigt, snabbt och förvånansvärt gott. Citronen piggar upp och spenaten ger en härlig färg. En riktig vardagsklassiker som alltid funkar.',
  },
  {
    id: '6',
    name: 'Klassisk Shakshuka',
    image: '/Matslumparen/foodImages/shakshuka.png',
    suitableSeasons: ['Alla'],
    suitableWeather: {
      conditions: ['Soligt', 'Molnigt', 'Regn', 'Vind'],
      temperature: { value: 18, relation: 'below' },
    },
    portions: '2-3',
    time: '20 min',
    description:
      'Pannan direkt på bordet! En perfekt brunch eller snabbmiddag. Doppa ett rejält surdegsbröd i de krämiga äggulorna och njut av enkelheten.',
  },
  {
    id: '7',
    name: 'Grillad Majskolv med chilismör',
    image: '/Matslumparen/foodImages/cornCob.png',
    suitableSeasons: ['Sommar'],
    suitableWeather: {
      conditions: ['Soligt'],
      temperature: { value: 18, relation: 'above' },
    },
    portions: '2-4',
    time: '20 min',
    description:
      'Det ultimata tillbehöret på grillfesten. Chilismöret rinner ner mellan kornen och gör det hela orimligt gott. Äts bäst utomhus med servetter nära till hands.',
  },
  {
    id: '8',
    name: 'Sötpotatissoppa med ingefära och linser',
    image: '/Matslumparen/foodImages/sweetPotatoSoup.png',
    suitableSeasons: ['Höst', 'Vinter'],
    suitableWeather: {
      conditions: ['Regn', 'Vind', 'Molnigt', 'Snö'],
      temperature: { value: 12, relation: 'below' },
    },
    portions: '4',
    time: '50 min',
    description:
      'Riktigt värmande och förvånansvärt lättlagad soppa. Ingefäran ger den ett extra litet sting och det känns alltid bra att ladda upp med välgörande ingefära när det är kallt ute.',
  },
  {
    id: '9',
    name: 'Asiatisk nudelsallad med edamame',
    image: '/Matslumparen/foodImages/noodleSallad.png',
    suitableSeasons: ['Vår', 'Sommar'],
    suitableWeather: {
      conditions: ['Soligt', 'Molnigt'],
      temperature: { value: 12, relation: 'above' },
    },
    portions: '2',
    time: '20 min',
    description:
      'Krispigt, fräscht och fullt med färg. Dressingen på sesamolja och lime är beroendeframkallande. Perfekt att förbereda i burk om man ska iväg på picknick.',
  },
  {
    id: '10',
    name: 'Krämig Svamprisotto',
    image: '/Matslumparen/foodImages/risotto.png',
    suitableSeasons: ['Höst', 'Vinter'],
    suitableWeather: {
      conditions: ['Molnigt', 'Regn', 'Vind'],
      temperature: { value: 15, relation: 'below' },
    },
    portions: '4',
    time: '40 min',
    description:
      'Lite tålamod vid spisen och ett glas vin i handen, så har du snart världens godaste middag. Använd den svamp du gillar bäst – champinjoner funkar lika bra som skogens guld.',
  },
  {
    id: '11',
    name: 'Falafel-wrap med picklad rödlök',
    image: '/Matslumparen/foodImages/falafel.png',
    suitableSeasons: ['Vår', 'Sommar', 'Höst'],
    suitableWeather: {
      conditions: ['Soligt', 'Vind', 'Molnigt'],
      temperature: { value: 12, relation: 'above' },
    },
    portions: '4',
    time: '25 min',
    description:
      'Snabbt käk som alla gillar. Köp färdig falafel för att spara tid, men lägg krutet på den picklade löken och en god vitlökssås. Perfekt mat att äta framför en serie.',
  },
  {
    id: '12',
    name: 'Fransk Löksoppa med ostgratinerat bröd',
    image: '/Matslumparen/foodImages/onionSoup.png',
    suitableSeasons: ['Vinter'],
    suitableWeather: {
      conditions: ['Snö', 'Regn', 'Vind'],
      temperature: { value: 0, relation: 'below' },
    },
    portions: '2',
    time: '55 min',
    description:
      'När snön yr utanför är det här den ultimata tröstmaten. Löken får karamelliseras länge för maxad smak. Och ärligt talat – vem kan motstå gratinerad ost?',
  },
  {
    id: '13',
    name: 'Gazpacho',
    image: '/Matslumparen/foodImages/gazpacho.png',
    suitableSeasons: ['Sommar'],
    suitableWeather: {
      conditions: ['Soligt'],
      temperature: { value: 23, relation: 'above' },
    },
    portions: '4',
    time: '15 min',
    description:
      'En iskall soppa som smakar semester. Mixa ihop allt och låt stå i kylen ett tag så smakerna sätter sig ordentligt. En livräddare när termometern tickar uppåt.',
  },
  {
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
    description:
      'Varmt, kryddigt och mjukt. Paneer-osten suger upp den krämiga såsen på ett fantastiskt sätt. Serveras bäst med ett fluffigt naanbröd och lite matlagningsyoghurt.',
  },
  {
    id: '15',
    name: 'Sparris- och citronpasta',
    image: '/Matslumparen/foodImages/asparagusPasta.png',
    suitableSeasons: ['Vår', 'Sommar'],
    suitableWeather: {
      conditions: ['Soligt', 'Vind'],
      temperature: { value: 12, relation: 'above' },
    },
    portions: '2-4',
    time: '15 min',
    description:
      'Primörer, massa citronzest och en bra olivolja är allt som behövs. Går galet snabbt att kasta ihop efter en lång dag ute i solen. Får du inte tag i sparris går det bra att byta ut måt någon annan god grönsak.',
  },
  {
    id: '16',
    name: 'Rödbetsburgare med chèvrekräm',
    image: '/Matslumparen/foodImages/beetrootBurger.png',
    suitableSeasons: ['Höst', 'Vår'],
    suitableWeather: {
      conditions: ['Molnigt', 'Vind', 'Soligt'],
      temperature: { value: 18, relation: 'below' },
    },
    portions: '4',
    time: '45 min',
    description:
      'En lite lyxigare vegoburgare. Jordigheten från rödbetorna och syran från chèvren är en oslagbar kombo. Gör gärna extra chèvrekräm – den går alltid åt!',
  },
  {
    id: '17',
    name: 'Belugabolognese',
    image: '/Matslumparen/foodImages/bolognese.png',
    suitableSeasons: ['Vinter', 'Höst', 'Vår'],
    suitableWeather: {
      conditions: ['Snö', 'Molnigt', 'Regn', 'Vind'],
      temperature: { value: 10, relation: 'below' },
    },
    portions: '6',
    time: '45 min',
    description:
      'Lika mustig som en vanlig bolognese men gjord på små svarta linser. De håller formen bra och ger ett härligt tugg. Riktig life-saver som alltid går snabbt att göra och som faller ala i smaken.',
  },
  {
    id: '18',
    name: 'Vietnamesiska vårrullar',
    image: '/Matslumparen/foodImages/springRolls.png',
    suitableSeasons: ['Sommar', 'Vår'],
    suitableWeather: {
      conditions: ['Soligt'],
      temperature: { value: 18, relation: 'above' },
    },
    portions: '2',
    time: '40 min',
    description:
      'Rulla dina egna favoriter! Ställ fram alla ingredienser på bordet och låt alla göra sina egna rullar. Superfräscht och perfekt för en varm kväll med vänner.',
  },
  {
    id: '19',
    name: 'Ratatouille med potatis och nybakat bröd',
    image: '/Matslumparen/foodImages/ratatouille.png',
    suitableSeasons: ['Alla'],
    suitableWeather: {
      conditions: ['Molnigt', 'Regn', 'Snö', 'Vind'],
      temperature: { value: 18, relation: 'below' },
    },
    portions: '4',
    time: '20 min',
    description:
      'En fransk klassiker som låter grönsakerna tala för sig själva. Servera med ungsrostad potatis eller bara ett riktigt gott bröd att suga upp den goda tomatsåsen med.',
  },
  {
    id: '20',
    name: 'Ugnsbakad Blomkål med tahinisås',
    image: '/Matslumparen/foodImages/cauliflower.png',
    suitableSeasons: ['Höst', 'Vår', 'Sommar'],
    suitableWeather: {
      conditions: ['Vind', 'Molnigt'],
      temperature: { value: 15, relation: 'below' },
    },
    portions: '2-4',
    time: '40 min',
    description:
      'Blomkål kan vara lite tråkigt, men inte här! När den rostas i ugnen får den en nötig smak som passar perfekt med den krämiga tahinisåsen och lite granatäppelkärnor.',
  },
];
