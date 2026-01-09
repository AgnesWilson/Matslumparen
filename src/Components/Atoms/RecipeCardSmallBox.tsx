import { Box, Typography } from '@mui/material';

interface Props {
  header: string;
  text: string;
}

export const RecipeCardSmallBox = ({ header, text }: Props) => {
  return (
    <Box sx={{ border: '1px black solid', padding: '1%', width: '100%' }}>
      <Typography variant="body2" gutterBottom sx={{ fontWeight: 'bold' }}>
        {header}
      </Typography>
      <Typography variant="body2">{text}</Typography>
    </Box>
  );
};
