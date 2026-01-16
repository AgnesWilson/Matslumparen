import { Box, Container, Stack, Typography, useMediaQuery } from '@mui/material';
import { RecipeCard } from '../../Components/Organisms/RecipeCard';
import { ReusableButton } from '../../Components/Atoms/ReusableButton';
import { mockRecipe } from '../../MockData/SingleRecipe';
import type { RecipeType } from '../../Types/RecipeType';
import { theme } from '../../theme';

interface Props {
  recipe?: RecipeType;
}

export const SingleRecipe = ({ recipe = mockRecipe }: Props) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container
      sx={{
        paddingTop: { xs: '15%', sm: '5%', md: '6%' },
        paddingBottom: { xs: '20%', md: '3%' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'flex-start' },
          justifyContent: 'center',
          gap: '10%',
        }}
      >
        <Box
          sx={{
            paddingBottom: { xs: '10%' },
            position: { md: 'sticky' },
            top: { md: '100px' },
            width: { xs: '100%', md: 'auto' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
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
          />
          <Box sx={{ paddingTop: '5%', display: 'flex', justifyContent: 'center' }}>
            <ReusableButton
              btnText="Redigera recept"
              onClick={() => {
                console.log('something'); // TODO:fixa detta :)
              }}
              variant="primary"
              type="button"
            ></ReusableButton>
          </Box>
        </Box>

        <Stack spacing={3} sx={{ maxWidth: '500px', textAlign: 'left' }}>
          <Box>
            {isMobile ? null : <Typography variant="h2">{recipe.name}</Typography>}

            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', marginTop: '8%' }}>
              Ingredienser:
            </Typography>
            <Box component="ul" sx={{ paddingLeft: '1.2rem', margin: 0 }}>
              {recipe.ingredients?.map((ingredient, index) => (
                <Typography key={index} component="li" variant="body1" sx={{ marginBottom: '0.5rem' }}>
                  {ingredient}
                </Typography>
              ))}
            </Box>

            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', marginTop: '8%' }}>
              Gör så här:
            </Typography>
            <Box component="ol" sx={{ paddingLeft: '1.2rem', margin: 0 }}>
              {recipe.instructions?.map((instruction, index) => (
                <Typography key={index} component="li" variant="body1" sx={{ marginBottom: '0.5rem' }}>
                  {instruction}
                </Typography>
              ))}
            </Box>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};
