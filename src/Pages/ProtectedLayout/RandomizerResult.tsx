import { Box, Container, Stack, Typography } from '@mui/material';
import { RecipeCard } from '../../Components/Organisms/RecipeCard';
import type { RecipeType } from '../../Types/RecipeType';
import { FeedbackCard } from '../../Components/Organisms/FeedbackCard';
import { useNavigate } from 'react-router';
import { ReusableButton } from '../../Components/Atoms/ReusableButton';
import { useWeather } from '../../Context/UseWeather';

interface Props {
  recipe?: RecipeType;
}

export const RandomizerResult = ({ recipe }: Props) => {
  const navigate = useNavigate();
  const { weather, loading } = useWeather();

  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingTop: { xs: '15%', sm: '5%', md: '6%' },
        paddingBottom: { xs: '20%', md: '3%' },
      }}
    >
      {recipe ? (
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
              recipeName={recipe.name}
              foodImage={recipe.image}
              alt={`Bild på ${recipe.name}`}
              season={recipe.suitableSeasons.join(', ')}
              weather={recipe.suitableWeather.conditions.join(', ')}
              temperature={
                recipe.suitableWeather.temperature.relation === 'above'
                  ? `${recipe.suitableWeather.temperature.value}° och uppåt`
                  : `Under ${recipe.suitableWeather.temperature.value}°`
              }
              portions={`${recipe.portions} personer`}
              time={recipe.time}
              description={recipe.description}
            />
          </Box>

          <Stack spacing={3} sx={{ maxWidth: '500px', textAlign: 'left' }}>
            <Box>
              <Typography variant="h2">Dagens rätt:</Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', marginTop: '8%' }}>
                {recipe.name}
              </Typography>
            </Box>

            <Box>
              <Typography variant="body2" sx={{ fontWeight: 'bold', marginBottom: '2%' }}>
                Slumpningen baseras på:
              </Typography>
              <Typography variant="body2">
                {loading
                  ? 'Laddar väder...'
                  : `Stockholm: ${weather?.temp}° ${weather?.condition.toLowerCase()}`}
              </Typography>
              {/*  // TODO: Ändra från ett hårdkodat värde till {CurrentSeason} */}
              <Typography variant="body2">Nuvarande säsong: Vinter, december - februari</Typography>
            </Box>

            <Stack direction="row" spacing={2} sx={{ paddingTop: '3%' }}>
              <ReusableButton
                btnText="Till recept"
                onClick={() => navigate('/recipe/:id')} //TODO fixa routing här!
                variant="primary"
                type="button"
              />
              <ReusableButton
                btnText="Nytt recept"
                onClick={() => navigate('/slumparen')} //TODO fixa routing här!
                variant="secondary"
                type="button"
              />
            </Stack>
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
