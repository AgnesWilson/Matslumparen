import { createContext } from 'react';
import type { WeatherSummary } from '../Services/weatherService';
import type { SeasonSummary } from '../Types/SeasonTypes';

type WeatherContextType = {
  weather: WeatherSummary | null;
  season: SeasonSummary | null;
  loading: boolean;
};

export const WeatherContext = createContext<WeatherContextType | undefined>(undefined);
