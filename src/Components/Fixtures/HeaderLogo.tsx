import { Typography } from '@mui/material';

export const HeaderLogo = () => {
  return (
    <Typography
      variant="h1"
      sx={{
        paddingTop: 2,
        fontSize: 'clamp(2rem, 13.5vw, 15rem)',
        textAlign: 'center',
        color: 'tertiary.main',
      }}
    >
      Matslumparen
    </Typography>
  );
};
