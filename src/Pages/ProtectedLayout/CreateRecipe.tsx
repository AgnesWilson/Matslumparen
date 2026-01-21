import { Link as MuiLink, Box, Container, Typography } from '@mui/material';
import vectorBlob from '../../assets/vectorBlob.png';
import arrow from '../../assets/arrow.png';
import { Link as RouterLink } from 'react-router';
import { twoColumnPageStyle } from '../../Styles/sharedStyles';

export const CreateRecipe = () => {
  const recipeOptions = [
    { text: 'Skriv ett eget recept', to: '/skapa-recept' },
    { text: 'Länka till ett recept', to: '/skapa-recept-URL' },
    { text: 'Lägg upp en bild på ett recept', to: '/skapa-recept-bild' },
  ];
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          minHeight: '80vh',
          position: 'relative',
          overflow: 'hidden',
          p: 4,
        }}
      >
        <Typography variant="h2">Skapa din egna receptbank!</Typography>
        <Box sx={twoColumnPageStyle}>
          <Box
            component="ol"
            sx={{
              paddingLeft: '8%',
              paddingTop: '5%',
              display: 'flex',
              flexDirection: 'column',
              gap: 5,
            }}
          >
            {recipeOptions.map((option, index) => (
              <Typography
                key={index}
                variant="h4"
                component="li"
                sx={{
                  '&::marker': { fontWeight: 'bold' },
                }}
              >
                <MuiLink
                  component={RouterLink}
                  to={option.to}
                  sx={{
                    color: 'inherit',
                    textDecoration: 'none',
                    borderBottom: '2px solid transparent',
                    transition: '0.2s',
                    '&:hover': {
                      fontWeight: 'bold',
                    },
                  }}
                >
                  {option.text}
                </MuiLink>
              </Typography>
            ))}
          </Box>

          <Box
            component="img"
            src={arrow}
            alt="Dekoration"
            sx={{
              display: { xs: 'none', md: 'block' },
              position: 'absolute',
              left: '45%',
              top: '20%',
              width: '15rem',
              zIndex: 2,
              transform: 'rotate(-10deg)',
            }}
          />

          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              maxWidth: '500px',
            }}
          >
            <Box
              component="img"
              src={vectorBlob}
              alt="Bakgrundsbild"
              sx={{ width: { xs: '120%', sm: '100%' }, height: 'auto' }}
            />
            <Typography
              sx={{
                position: 'absolute',
                width: { xs: '80%', sm: '70%' },
                textAlign: 'center',
                top: '45%',
                left: '55%',
                transform: 'translate(-60%, -50%)',
                rotate: '-5deg',
                fontWeight: 'bold',
                lineHeight: 2.5,
              }}
            >
              Välj ett av alternativen för att kunna lägga till ett recept till din receptbank!
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};
