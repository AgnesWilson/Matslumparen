import { Box, Card, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import wobbles from '../../../assets/wobbles.png';
import type { RecipeType } from '../../Types/RecipeType';
import { mockRecipe } from '../../MockData/SingleRecipe';
import { h2BoxStyles } from '../../Styles/sharedStyles';
import { ReusableButton } from '../Atoms/ReusableButton';
import { RecipeCard } from '../Organisms/RecipeCard';

interface Props {
  recipe?: RecipeType;
}

export const InfoSegment = ({ recipe = mockRecipe }: Props) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          padding: 4,
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', md: '60%' },
            paddingInline: { xs: '0%', sm: '0%', md: '4%', lg: '5%' },
            paddingBottom: { xs: '5%', sm: '8%' },
            position: 'relative',
          }}
        >
          <Box sx={{ ...h2BoxStyles, rotate: '-3deg', maxWidth: 1000 }}>
            <Typography variant="h2">Hur funkar det?</Typography>
          </Box>
          <Box
            component="ol"
            sx={{
              paddingLeft: '20%',
              paddingTop: '5%',
              display: 'flex',
              flexDirection: 'column',
              gap: 5,
            }}
          >
            <Typography variant="h4" component="li">
              Ladda upp dina recept
            </Typography>
            <Typography variant="h4" component="li">
              Vi kollar vädret och säsongen
            </Typography>
            <Typography variant="h4" component="li">
              Du får dagens perfekta förslag
            </Typography>
          </Box>

          <Card
            sx={{
              marginTop: '10%',
              minHeight: '350px',
              maxWidth: '800px',
              backgroundImage: `url(${wobbles})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',

              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                backgroundColor: 'tertiary.main',
                p: { xs: 3, md: 6 },
                textAlign: 'center',
                maxWidth: '90%',
              }}
            >
              <Typography variant="h4" sx={{ paddingBottom: '10%' }}>
                Börja bygga din samling!
              </Typography>
              <Typography variant="body2" sx={{ paddingBottom: '8%' }}>
                Skapa ett konto och lägg till ditt första recept. Helt gratis att komma igång.
              </Typography>
              <ReusableButton
                btnText="Skapa konto"
                onClick={() => navigate('/slumparen')}
                variant="primary"
                type="button"
              />
            </Box>
          </Card>
        </Box>
        <Box
          sx={{
            width: { xs: '100%', md: '40%' },
          }}
        >
          {recipe && (
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
              comments={recipe.comments}
            ></RecipeCard>
          )}
        </Box>
      </Box>
    </Box>
  );
};
