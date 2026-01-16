import { Box, Container, Stack, Typography, useMediaQuery } from '@mui/material';
import { RecipeCard } from '../../Components/Organisms/RecipeCard';
import { ReusableButton } from '../../Components/Atoms/ReusableButton';
import { RecipeCardSmallBox } from '../../Components/Atoms/RecipeCardSmallBox';
import { Footer } from '../../Fixtures/Footer';
import { useAuth } from '../../Hooks/useAuth';
import { theme } from '../../theme';
import userImg from '../../assets/userImg.png';

export const YourAccount = () => {
  const { logout } = useAuth();
  const isNotTabletOrMobile = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Container
      maxWidth="lg"
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
        <Box sx={{ paddingBottom: { xs: '10%' } }}>
          <RecipeCard
            variant="account"
            recipeName="Användare ett"
            foodImage={userImg}
            alt="Bild på Användare ett"
            season="Användare Ett"
            weather="30"
            temperature="användare.ett@gmail.com"
          />
        </Box>

        <Stack spacing={3} sx={{ maxWidth: '500px', textAlign: 'left' }}>
          <Box>
            <Typography variant="h2">Ditt konto:</Typography>
            <Typography variant="h4" sx={{ fontWeight: 'bold', marginTop: '8%' }}></Typography>
          </Box>
          <RecipeCardSmallBox header="Stad" text="Stockholm"></RecipeCardSmallBox>
          <RecipeCardSmallBox header="Användarnamn" text="Johannes"></RecipeCardSmallBox>
          <RecipeCardSmallBox header="Lösenord" text="********"></RecipeCardSmallBox>

          <ReusableButton
            btnText="Redigera inställningar"
            onClick={() => {
              console.log('something');
            }}
            variant="secondary"
            type="button"
          />
        </Stack>
      </Box>
      {isNotTabletOrMobile && (
        <Footer
          variant="account"
          onClick={() => {
            logout();
          }}
        ></Footer>
      )}
    </Container>
  );
};
