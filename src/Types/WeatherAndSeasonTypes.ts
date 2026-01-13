export type WeatherCondition = 'Soligt' | 'Molnigt' | 'Regn' | 'Snö' | 'Vind' | 'Alla';

export type Weather = {
  conditions: WeatherCondition[];
  temperature: {
    value: number;
    relation: 'above' | 'below';
  };
};
