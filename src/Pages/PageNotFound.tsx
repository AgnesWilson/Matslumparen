import { Box, Container } from '@mui/material';
import { FeedbackCard } from '../Components/Organisms/FeedbackCard';
import { useNavigate } from 'react-router';
import { HeaderLogo } from '../Components/Fixtures/HeaderLogo';

export const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <HeaderLogo />
      <Container
        maxWidth="sm"
        sx={{
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: '15vh',
        }}
      >
        <FeedbackCard
          headline="Sidan hittades inte"
          textOne="Sidan du försöker nå finns tyvärr inte. Gå tillbaka till föregående sida."
          buttonText="Tillbaka till föregående sida"
          onButtonClick={() => navigate(-1)}
        />
      </Container>
    </Box>
  );
};
