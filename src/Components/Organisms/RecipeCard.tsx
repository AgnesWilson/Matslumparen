import { Box, Card, Typography } from '@mui/material';
import { RecipeCardSmallBox } from '../Atoms/RecipeCardSmallBox';
import { ReusableButton } from '../Atoms/ReusableButton';
import { useNavigate } from 'react-router';

const BoxStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 2,
  marginTop: '20px',
};

interface Props {
  variant?: 'small' | 'big' | 'account';
  recipeName: string;
  foodImage: string;
  alt: string;
  season: string;
  weather: string;
  temperature: string;
  portions?: string;
  time?: string;
  comments?: string;
}

export const RecipeCard = ({
  variant = 'small',
  recipeName,
  foodImage,
  alt,
  season,
  weather,
  temperature,
  portions,
  time,
  comments,
}: Props) => {
  const navigate = useNavigate();

  const isBig = variant === 'big';
  const isAccount = variant === 'account';

  return (
    <Card
      elevation={5}
      sx={{
        backgroundColor: isBig ? 'accent.main' : 'tertiary.main',
        padding: { xs: '20px', md: '40px' },
        width: '100%',
        maxWidth: '400px',
      }}
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        {recipeName}
      </Typography>

      <Box
        component="img"
        src={foodImage}
        alt={alt}
        sx={{
          width: '100%',
          height: '250px',
          objectFit: 'cover',
          display: 'block',
          margin: '20px auto',
          borderRadius: '4px',
        }}
      />
      <Box sx={BoxStyles}>
        <RecipeCardSmallBox header={isAccount ? 'Namn' : 'Säsong'} text={season}></RecipeCardSmallBox>
        <RecipeCardSmallBox header={isAccount ? 'Ålder' : 'Väder'} text={weather}></RecipeCardSmallBox>
        <RecipeCardSmallBox
          header={isAccount ? 'E-post' : 'Temperatur'}
          text={temperature}
        ></RecipeCardSmallBox>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '3%',
        }}
      >
        <Typography variant="body2" fontWeight="bold" gutterBottom>
          {portions}
        </Typography>
        <Typography variant="body2" fontWeight="bold" gutterBottom>
          {time}
        </Typography>
      </Box>
      {isBig ? (
        <Typography variant="body2" fontWeight="bold" gutterBottom sx={{ padding: '5%', lineHeight: '170%' }}>
          {comments}
        </Typography>
      ) : (
        <Box sx={BoxStyles}>
          <ReusableButton
            btnText={isAccount ? 'Redigera' : 'Till receptet'}
            onClick={() => navigate('/recipe/:id')} //TODO fixa routing här!
            variant="primary"
            type="button"
          ></ReusableButton>
        </Box>
      )}
    </Card>
  );
};
