import { Box, Typography } from '@mui/material';
import mainImage from '../../assets/homePage.webp';
import cutlery from '../../assets/cutlery.png';
import { h2BoxStyles } from '../../Styles/sharedStyles';

export const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        maxHeight: '100%',
        overflow: 'hidden',
      }}
    >
      <Box
        component="img"
        src={mainImage}
        alt="Bild på en maträtt"
        sx={{
          width: { xs: '160vw', sm: '130vw', md: '95vw', lg: '90vw' },
          height: 'auto',
          objectFit: 'cover',
          position: 'absolute',
          top: { xs: '23vh', sm: '8vh', md: '5vh', lg: '2vh' },
          left: { xs: '-30%', sm: '3%', md: '20%', lg: '25%' },
          zIndex: -1,
          rotate: '4deg',
        }}
      />

      <Box sx={h2BoxStyles}>
        <Typography variant="h2">Svaret på den eviga frågan: "Vad ska vi äta för mat idag"</Typography>
      </Box>

      <Box
        component="img"
        src={cutlery}
        alt="Ritade bestick"
        sx={{
          width: { xs: '40%', sm: '30%', md: '22%', lg: '20%' },
          height: 'auto',
          objectFit: 'contain',
          position: 'absolute',
          bottom: { xs: '0', sm: '0', md: '3vh', lg: '3vh' },
          left: { xs: '3%', sm: '3%', md: '4%', lg: '4%' },
          zIndex: -1,
        }}
      />
    </Box>
  );
};
