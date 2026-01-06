import { useState } from 'react';
import { LogInCard } from '../../Components/Organisms/LogInCard';
import { Footer } from '../../Fixtures/Footer';
import mainImage from '../../assets/homePage.png';
import cutlery from '../../assets/cutlery.png';
import { Box, Typography } from '@mui/material';

export const Home = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      <Box
        component="img"
        src={mainImage}
        alt="Image of a delicious meal"
        sx={{
          width: { xs: '160%', sm: '130%', md: '90%' },
          height: 'auto',
          objectFit: 'contain',
          position: 'absolute',
          top: { xs: 190, sm: 70, md: -90 },
          left: { xs: '-30%', sm: 10, md: 350 },
          zIndex: -1,
          rotate: '4deg',
        }}
      />

      <Box
        sx={{
          maxWidth: { xs: '100%', sm: '500px', md: '800px' },
          paddingLeft: { xs: 2, sm: 4, md: 5 },
          paddingTop: { xs: 6, sm: 4, md: 2 },
          mx: { xs: 0, sm: 0, md: 0 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            display: 'inline',
            color: 'white',
            backgroundColor: 'blue',
            boxShadow: '10px 0 0 blue',
            wordBreak: 'break-word',
          }}
        >
          Svaret på den eviga frågan: "Vad ska vi äta för mat idag"
        </Typography>
      </Box>

      <Box
        component="img"
        src={cutlery}
        alt="Sketch of cutlery"
        sx={{
          width: { xs: '40%', sm: '30%', md: '20%' },
          paddingLeft: { xs: 2, sm: 4, md: 10 },
          height: 'auto',
          objectFit: 'contain',
          position: 'fixed',
          bottom: 0,
          zIndex: -1,
        }}
      />

      <Footer onLoginClick={() => setIsLoginOpen(true)} />
      <LogInCard open={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </Box>
  );
};
