//The weather data is fetched from https://open-meteo.com

import type { WeatherCondition } from '../Types/WeatherTypes';

export interface WeatherSummary {
  temp: number;
  condition: WeatherCondition;
}

// Dummy data to use while developing
const DUMMY_WEATHER: WeatherSummary = {
  temp: 18,
  condition: 'Soligt',
};
const USE_DUMMY_DATA = false;
//

export const fetchStockholmWeather = async (): Promise<WeatherSummary> => {
  if (USE_DUMMY_DATA) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return DUMMY_WEATHER;
  }

  const url =
    'https://api.open-meteo.com/v1/forecast?latitude=59.3294&longitude=18.0687&current=temperature_2m,cloud_cover,rain,snowfall&timezone=Europe/Berlin';

  const response = await fetch(url);
  if (!response.ok) throw new Error('Kunde inte hämta väderdata');

  const data = await response.json();
  const { temperature_2m, cloud_cover, rain, snowfall } = data.current;

  let condition: WeatherCondition = 'Soligt';
  if (snowfall > 0) condition = 'Snö';
  else if (rain > 0) condition = 'Regn';
  else if (cloud_cover > 50) condition = 'Molnigt';

  return {
    temp: Math.round(temperature_2m),
    condition: condition,
  };
};
