import type { WeatherSummary } from '../Services/weatherService';
import type { RecipeType } from '../Types/RecipeType';
import type { SeasonSummary } from '../Types/SeasonTypes';

export const getSuitableRecipes = (
  allRecipes: RecipeType[],
  currentWeather: WeatherSummary | null,
  currentSeason: SeasonSummary | null
): RecipeType[] => {
  if (!currentWeather) return [];
  if (!currentSeason) return [];

  return allRecipes.filter((recipe) => {
    const seasonMatch =
      recipe.suitableSeasons.includes('Alla') || recipe.suitableSeasons.includes(currentSeason.name);

    const weatherConditionMatch =
      recipe.suitableWeather.conditions.includes('Alla') ||
      recipe.suitableWeather.conditions.includes(currentWeather.condition);

    const { value, relation } = recipe.suitableWeather.temperature;
    const tempMatch = relation === 'above' ? currentWeather.temp >= value : currentWeather.temp <= value;

    return seasonMatch && weatherConditionMatch && tempMatch;
  });
};
