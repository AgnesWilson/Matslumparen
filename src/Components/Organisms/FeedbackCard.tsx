import { Card, Typography, Box } from '@mui/material';
import { ReusableButton } from '../Atoms/ReusableButton';

interface Props {
  headline: string;
  textOne: string;
  textTwo?: string;
  textThree?: string;
  textFour?: string;

  buttonText?: string;
  onButtonClick?: () => void;
  buttonVariant?: 'primary' | 'secondary';
}

export const FeedbackCard = ({
  headline,
  textOne,
  textTwo,
  textThree,
  textFour,
  buttonText,
  onButtonClick,
  buttonVariant = 'primary',
}: Props) => {
  return (
    <Card
      elevation={5}
      sx={{
        backgroundColor: 'tertiary.main',
        padding: { xs: '20px', md: '40px' },
        width: '100%',
        maxWidth: '800px',
      }}
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        {headline}
      </Typography>

      <Box sx={{ marginBlock: 2 }}>
        <Typography variant="body2">{textOne}</Typography>
        <Typography variant="body2">{textTwo}</Typography>
        <Typography variant="body2">{textThree}</Typography>
        <Typography variant="body2">{textFour}</Typography>
      </Box>

      {buttonText && (
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <ReusableButton
            btnText={buttonText}
            onClick={onButtonClick}
            variant={buttonVariant}
            type="button"
          />
        </Box>
      )}
    </Card>
  );
};
