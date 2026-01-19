import { Box, Container, Stack, Typography } from '@mui/material';
import { RecipeCard } from '../../Components/Organisms/RecipeCard';
import { FeedbackCard } from '../../Components/Organisms/FeedbackCard';
import { useLocation, useNavigate } from 'react-router';
import { ReusableButton } from '../../Components/Atoms/ReusableButton';
import { useWeather } from '../../Hooks/useWeather';
import type { RecipeType } from '../../Types/RecipeType';
import { RandomizerPoolCard } from '../../Components/Organisms/RandomizerPoolCard';
import { useRandomizer } from '../../Hooks/useRandomizer';
import { useState } from 'react';
import { ErrorMessage } from '../../Components/Atoms/ErrorMessage';

export const RandomizerResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { weather, loading, season } = useWeather();
  const { handleRandomize } = useRandomizer();

  const [errorMessage, setErrorMessage] = useState<string>('');

  const currentRecipe = location.state?.recipe as RecipeType;
  const pool = (location.state?.fullPool as RecipeType[]) || [];
  const poolLength = (location.state?.poolLength as number) || 0;

  const handleSelectRecipe = (id: string) => {
    const selected = pool.find((r) => r.id === id);
    if (selected) {
      navigate(location.pathname, {
        state: { ...location.state, recipe: selected },
      });
    }
  };

  const redoRandomizer = () => {
    if (poolLength === 1) {
      setErrorMessage(
        'Du kan inte slumpa ett nytt recept då det endast finns ett recept som passar väder och säsongkriterierna.'
      );
    } else {
      setErrorMessage('');
      handleRandomize();
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingTop: { xs: '15%', sm: '5%', md: '6%' },
        paddingBottom: { xs: '20%', md: '3%' },
      }}
    >
      {currentRecipe ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'center', md: 'flex-start' },
            justifyContent: 'center',
            gap: '10%',
          }}
        >
          <Box sx={{ paddingBottom: { xs: '10%' } }}>
            <RecipeCard
              variant="big"
              recipeName={currentRecipe.name}
              foodImage={currentRecipe.image}
              alt={`Bild på ${currentRecipe.name}`}
              season={currentRecipe.suitableSeasons.join(', ')}
              weather={currentRecipe.suitableWeather.conditions.join(', ')}
              temperature={
                currentRecipe.suitableWeather.temperature.relation === 'above'
                  ? `${currentRecipe.suitableWeather.temperature.value}° och uppåt`
                  : `${currentRecipe.suitableWeather.temperature.value}° eller under`
              }
              portions={`${currentRecipe.portions} personer`}
              time={currentRecipe.time}
              comments={currentRecipe.comments}
            />
          </Box>

          <Stack spacing={3} sx={{ maxWidth: '500px', textAlign: 'left' }}>
            <Box>
              <Typography variant="h2">Dagens rätt:</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', marginTop: '8%' }}>
                {currentRecipe.name}
              </Typography>
            </Box>

            <Box>
              <Typography variant="body2" sx={{ fontWeight: 'bold', marginBottom: '2%' }}>
                Slumpningen baseras på:
              </Typography>
              <Typography variant="body2">
                {loading
                  ? 'Laddar väder...'
                  : `Vädret i Stockholm: ${weather?.temp}° ${weather?.condition.toLowerCase()}`}
              </Typography>
              <Typography variant="body2">
                {loading ? 'Laddar säsong...' : `Nuvarande säsong: ${season?.name}, (${season?.months})`}
              </Typography>
            </Box>

            <Stack direction="row" spacing={2} sx={{ padding: '3%' }}>
              <ReusableButton
                btnText="Till recept"
                onClick={() => navigate(`/recept/${currentRecipe.id}`)}
                variant="primary"
                type="button"
              />
              <ReusableButton
                btnText="Slumpa igen"
                onClick={redoRandomizer}
                variant="secondary"
                type="button"
              />
            </Stack>

            <ErrorMessage message={errorMessage} variant={'error'} />

            <RandomizerPoolCard
              pool={pool}
              poolLength={poolLength}
              currentRecipeId={currentRecipe.id}
              onRecipeChange={handleSelectRecipe}
            />
          </Stack>
        </Box>
      ) : (
        <FeedbackCard
          headline="Slumparen kunde inte generera något recept"
          textOne="Testa igen eller rapportera felet."
          buttonText="Tillbaka till slumparen"
          onButtonClick={() => navigate('/slumparen')}
        />
      )}
    </Container>
  );
};
