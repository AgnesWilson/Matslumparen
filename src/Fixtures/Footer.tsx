import { ArrowForward } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

interface Props {
  onLoginClick: () => void;
}

export const Footer = ({ onLoginClick }: Props) => {
  return (
    <footer>
      <AppBar
        position="fixed"
        sx={{
          top: 'auto',
          bottom: 0,
          backgroundColor: 'accent.main',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <IconButton
            color="inherit"
            aria-label="Logga in"
            onClick={onLoginClick}
          >
            <Typography sx={{ marginRight: 1 }}>
              Logga in på ditt konto
            </Typography>
            <ArrowForward />
          </IconButton>
        </Toolbar>
      </AppBar>
    </footer>
  );
};
