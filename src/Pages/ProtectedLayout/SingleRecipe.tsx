import { Box, Container, IconButton, Stack, Typography, useMediaQuery } from '@mui/material';
import { RecipeCard } from '../../Components/Organisms/RecipeCard';
import { ReusableButton } from '../../Components/Atoms/ReusableButton';
import { theme } from '../../theme';
import { useNavigate, useParams } from 'react-router';
import { mockRecipes } from '../../MockData/Recipes';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { twoColumnPageStyle } from '../../Styles/sharedStyles';

export const SingleRecipe = () => {
  const { id } = useParams<{ id: string }>();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const recipe = mockRecipes.find((r) => r.id === id);

  if (!recipe) {
    return <Typography>Receptet hittades inte!</Typography>;
  }

  return (
    <Container
      sx={{
        paddingTop: { xs: '10%', sm: '2%', md: '3%' },
        paddingBottom: { xs: '20%', md: '3%' },
      }}
    >
      <IconButton onClick={() => navigate(-1)} sx={{ marginBottom: '20px', color: 'black' }}>
        <ArrowCircleLeftIcon
          sx={{
            color: 'secondary.main',
            fontSize: {
              xs: '2.2rem',
              sm: '2.5rem',
              md: '3rem',
              lg: '3.5rem',
            },
          }}
        />
        <Typography sx={{ marginLeft: 1 }}>Tillbaka</Typography>
      </IconButton>
      <Box sx={twoColumnPageStyle}>
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
