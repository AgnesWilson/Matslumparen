import { ArrowForward } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

interface Props {
  onClick: () => void;
  variant?: 'home' | 'account';
}

export const Footer = ({ onClick, variant = 'home' }: Props) => {
  const isAccount = variant === 'account';
  return (
    <footer>
      <AppBar
        position="fixed"
        sx={{
          top: 'auto',
          bottom: 0,
          backgroundColor: 'accent.main',
          height: 60,
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: isAccount ? 'flex-end' : 'flex-start' }}>
          <IconButton color="inherit" aria-label="Logga in" onClick={onClick}>
            <Typography sx={{ marginRight: 1 }}>
              {isAccount ? 'Logga ut' : 'Logga in på ditt konto'}
            </Typography>
            <ArrowForward />
          </IconButton>
        </Toolbar>
      </AppBar>
    </footer>
  );
};
