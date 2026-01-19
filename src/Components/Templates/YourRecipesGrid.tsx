import { Box } from '@mui/material';
import { RecipeCard } from '../Organisms/RecipeCard';
import type { RecipeType } from '../../Types/RecipeType';
import { FeedbackCard } from '../Organisms/FeedbackCard';
import { useNavigate } from 'react-router';

interface Props {
  recipes: RecipeType[];
}

export const YourRecipesGrid = ({ recipes }: Props) => {
  const navigate = useNavigate();
  return (
    <>
      {recipes.length > 0 ? (
        <Box
          sx={{
            padding: '5%',
            paddingTop: 0,
            display: 'grid',

            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
            gap: 3,
            justifyItems: 'center',
          }}
        >
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
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
            />
          ))}
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingInline: 2,
            paddingTop: '3%',
            paddingBottom: '5%',
          }}
        >
          <FeedbackCard
            headline="Inga recept att visa"
            textOne="Det finns det inga recept i din bank som matchar dina valda filter. Testa att filtrera på något annat eller att lägga till fler recept!"
            buttonText="Skapa nytt recept"
            onButtonClick={() => navigate('/nytt-recept')}
          />
        </Box>
      )}
    </>
  );
};
