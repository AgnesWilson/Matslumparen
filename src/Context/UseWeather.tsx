import { createContext, useContext } from 'react';
import { type WeatherSummary } from '../Services/weatherService';

export interface WeatherContextType {
  weather: WeatherSummary | null;
  loading: boolean;
}

export const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export function useWeather() {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
}
