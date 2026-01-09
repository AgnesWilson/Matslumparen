import { Box } from '@mui/material';
import { FeedbackCard } from '../Components/Organisms/FeedbackCard';
import { useNavigate } from 'react-router';
import { HeaderLogo } from '../Fixtures/HeaderLogo';

export const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeaderLogo />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          paddingInline: 2,
        }}
      >
        <FeedbackCard
          headline="Sidan du försöker hitta finns tyvärr inte."
          textOne="Sidan du försökt hitta finns tyvärr inte. Gå tillbaka till den föregående sidan eller försök igen"
          buttonText="Tillbaka till startsidan"
          onButtonClick={() => navigate('/')}
        />
      </Box>
    </>
  );
};
