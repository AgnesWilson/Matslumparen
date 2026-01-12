import { Box, Button, Container, Stack, Typography } from '@mui/material';

export const Randomizer = () => {
  const handleClick = () => {
    console.log('klick!');
  };
  return (
    <Box
      sx={{
        maxHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: { xs: '20%', sm: '15%', md: '6%' },
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', marginBottom: { xs: 4 } }}>
          <Typography variant="h2" sx={{ whiteSpace: { xs: 'normal', sm: 'nowrap' } }}>
            Vad blir det för mat idag?
          </Typography>
        </Box>
        <Stack
          spacing={{ xs: 3, sm: 4 }}
          alignItems="center"
          sx={{
            textAlign: 'center',
          }}
        >
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1.5, sm: 2 }}
            alignItems="center"
            sx={{ width: '100%', justifyContent: 'center' }}
          >
            <Typography
              variant="h5"
              sx={{
                padding: { xs: 1, sm: 1.5 },
                bgcolor: 'tertiary.main',
              }} // TODO: Ändra från ett hårdkodat värde till {currentWeather}
            >
              Stockholm 12° mulet
            </Typography>
            <Typography
              variant="h5"
              sx={{
                padding: { xs: 1, sm: 1.5 },
                bgcolor: 'tertiary.main',
              }} // TODO: Ändra från ett hårdkodat värde till {currentSeason}
            >
              Vinter (december-februari)
            </Typography>
          </Stack>

          <Button
            variant="contained"
            onClick={handleClick}
            sx={{
              bgcolor: 'accent.main',
              color: 'black',
              fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
              padding: { xs: 2, sm: 3 },
              width: { xs: '80%', sm: 'auto' },
              border: '4px solid black',
              boxShadow: '8px 8px 0px black',
              marginTop: { xs: 4, sm: 6 },
              '&:hover': {
                bgcolor: '#f68686ff',
                transform: 'translate(4px, 4px)',
                boxShadow: '4px 4px 0px black',
              },
              transition: 'all 0.15s ease-out',
            }}
          >
            Slumpa!
          </Button>
        </Stack>
      </Container>
      <Box
        sx={{
          position: 'absolute',
          border: '3px dashed #F8D7AA',
          borderRadius: 0,
          top: { xs: '50%', sm: '50%', md: '60%', lg: '70%' },
          left: '50%',
          width: { xs: '70%', sm: '60%', md: '50%' },
          height: { xs: '60%', sm: '40%', md: '50%' },
          transform: 'translate(-50%, -50%) rotate(3deg)',
          zIndex: 0,
          display: 'block',
        }}
      />
    </Box>
  );
};
