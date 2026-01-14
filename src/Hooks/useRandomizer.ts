import { useNavigate } from 'react-router';
import { useWeather } from './useWeather';
import { getSuitableRecipes } from '../Utils/recipeMatcher';
import { mockRecipes } from '../MockData/Recipes';
import { useState } from 'react';

export const useRandomizer = () => {
  const navigate = useNavigate();
  const { weather, season, loading } = useWeather();
  const [emptyPool, setEmptyPool] = useState(false);

  const handleRandomize = () => {
    if (loading || !weather) return;

    const pool = getSuitableRecipes(mockRecipes, weather, season);

    if (pool.length > 0) {
      setEmptyPool(false);
      const randomIndex = Math.floor(Math.random() * pool.length);
      const selectedRecipe = pool[randomIndex];

      navigate('/resultat', { state: { recipe: selectedRecipe, poolLength: pool.length, fullPool: pool } });
    } else {
      setEmptyPool(true);
    }
  };

  return {
    handleRandomize,
    weather,
    season,
    loading,
    emptyPool,
  };
};
