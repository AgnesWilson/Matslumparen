import { Box, Stack } from '@mui/material';
import { YourRecipesGrid } from '../../Components/Templates/YourRecipesGrid';
import { useState } from 'react';
import { mockRecipes } from '../../MockData/Recipes';
import type { WeatherCondition } from '../../Types/WeatherAndSeasonTypes';
import { FilterGroup } from '../../Components/Organisms/FilterGroup';
import { FeedbackCard } from '../../Components/Organisms/FeedbackCard';
import { useNavigate } from 'react-router';
import type { Seasons } from '../../Types/SeasonTypes';

const seasonOptions: Seasons[] = ['Vår', 'Sommar', 'Höst', 'Vinter', 'Alla'];
const weatherOptions: WeatherCondition[] = ['Soligt', 'Vind', 'Regn', 'Snö', 'Molnigt', 'Alla'];

export const Recipes = () => {
  const navigate = useNavigate();

  const [selectedSeason, setSelectedSeason] = useState<Seasons>('Alla');
  const [selectedWeather, setSelectedWeather] = useState<WeatherCondition>('Alla');

  const filteredRecipes = mockRecipes.filter((recipe) => {
    const seasonMatch = selectedSeason === 'Alla' || recipe.suitableSeasons.includes(selectedSeason);
    const weatherMatch =
      selectedWeather === 'Alla' || recipe.suitableWeather.conditions.includes(selectedWeather);

    return seasonMatch && weatherMatch;
  });

  if (mockRecipes.length === 0) {
    return (
      <Box sx={{ padding: '5%', display: 'flex', justifyContent: 'center' }}>
        <FeedbackCard
          headline="Din receptbank är tom"
          textOne="Börja med att lägga till ditt första recept för att se det här!"
          buttonText="Skapa nytt recept"
          onButtonClick={() => navigate('/nytt-recept')}
        />
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{ padding: '5%', paddingTop: { xs: '10%', sm: '6%', md: '4%', lg: '3%' }, paddingBottom: '3%' }}
      >
        <Stack direction="column" spacing={5}>
          <FilterGroup
            heading="Filtrera efter säsong"
            options={seasonOptions}
            selectedValue={selectedSeason}
            onSelect={setSelectedSeason}
            onClose={() => setSelectedSeason('Alla')}
          />
          <FilterGroup
            heading="Filtrera efter väder"
            options={weatherOptions}
            selectedValue={selectedWeather}
            onSelect={setSelectedWeather}
            onClose={() => setSelectedWeather('Alla')}
          />
        </Stack>
      </Box>

      <YourRecipesGrid recipes={filteredRecipes} />
    </Box>
  );
};
