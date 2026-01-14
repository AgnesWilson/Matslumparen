import { useState, useEffect, type ReactNode } from 'react';
import { fetchStockholmWeather, type WeatherSummary } from '../Services/weatherService';
import { WeatherContext } from './UseWeather';
import { getSeasonDetails } from '../Utils/seasonUtils';

export function WeatherProvider({ children }: { children: ReactNode }) {
  const [weather, setWeather] = useState<WeatherSummary | null>(null);
  const [loading, setLoading] = useState(true);

  const [season] = useState(getSeasonDetails());

  useEffect(() => {
    const loadWeather = async () => {
      try {
        const data = await fetchStockholmWeather();
        setWeather(data);
      } catch (error) {
        console.error('Context Error:', error);
      } finally {
        setLoading(false);
      }
    };
    loadWeather();
  }, []);

  return <WeatherContext.Provider value={{ weather, loading, season }}>{children}</WeatherContext.Provider>;
}
