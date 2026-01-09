import type { Seasons, Weather } from './WeatherAndSeasonTypes';

export type RecipeType = {
  id: string;
  name: string;
  URL?: string;
  image: string;
  suitableSeasons: Seasons[];
  suitableWeather: Weather;
  portions: string;
  time: string;
  description: string;
};
