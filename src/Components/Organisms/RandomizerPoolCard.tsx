import { Box, FormControl, MenuItem, Select, Typography, type SelectChangeEvent } from '@mui/material';
import type { RecipeType } from '../../Types/RecipeType';

interface Props {
  pool: RecipeType[];
  poolLength: number;
  currentRecipeId: string;
  onRecipeChange: (id: string) => void;
}

export const RandomizerPoolCard = ({ pool, poolLength, currentRecipeId, onRecipeChange }: Props) => {
  const handleChange = (event: SelectChangeEvent) => {
    onRecipeChange(event.target.value);
  };

  return (
    <Box
      sx={{
        backgroundColor: 'tertiary.main',
        padding: '5%',
        borderRadius: 2,
        width: '100%',
        border: 'dashed, 3px, black',
      }}
    >
      <Typography variant="body2" sx={{ marginBottom: 2 }}>
        Antal maträtter i din receptbank som uppfyller nuvarande väder och säsongkrav: {poolLength}
      </Typography>

      {poolLength > 1 ? (
        <FormControl fullWidth size="small">
          <Select
            labelId="recipe-select-label"
            value={currentRecipeId}
            onChange={handleChange}
            renderValue={() => `Se alla ${poolLength} recept`}
            sx={{ backgroundColor: '#ccb08a' }}
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: 'tertiary.main',
                },
              },
            }}
          >
            {pool.map((recipe) => (
              <MenuItem key={recipe.id} value={recipe.id}>
                {recipe.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : (
        <Typography variant="body2" sx={{ marginBottom: 2 }}>
          Lägg gärna till fler recept för att slumparen ska ha fler recept att välja mellan!
        </Typography>
      )}
    </Box>
  );
};
