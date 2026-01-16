import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Tooltip,
} from '@mui/material';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';

import wobblesImage from '../../assets/wobbles.png';
import { ErrorMessage } from '../Atoms/ErrorMessage';
import { ReusableButton } from '../Atoms/ReusableButton';
import { useAuth } from '../../Hooks/useAuth';

// TODO: Add icons to error messages !!

interface Props {
  open: boolean;
  onClose: () => void;
}

const inputStyles = (hasError: boolean) => ({
  htmlInput: {
    'aria-invalid': hasError,
    sx: { backgroundColor: 'white' },
  },
  formHelperText: {
    sx: {
      color: '#700000 !important',
    },
  },
});

export const LogInCard = ({ open, onClose }: Props) => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateForm = () => {
    const fields = [
      {
        value: username,
        errorSetter: setUsernameError,
        msg: 'Användarnamn måste fyllas i',
      },
      {
        value: password,
        errorSetter: setPasswordError,
        msg: 'Lösenord måste fyllas i',
      },
    ];

    let hasError = false;

    fields.forEach(({ value, errorSetter, msg }) => {
      if (!value.trim()) {
        errorSetter(msg);
        hasError = true;
      } else {
        errorSetter('');
      }
    });

    return hasError;
  };

  const handleLogin = () => {
    const hasError = validateForm();
    if (hasError) return;

    if (username === 'Johannes' && password === 'Jojo') {
      login();
      onClose();
      navigate('/slumparen');
    } else {
      setError('Felaktigt användarnamn eller lösenord');
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="login-dialog-title"
      slotProps={{
        paper: {
          sx: {
            width: { xs: '95vw', sm: '80vw', md: '50vw' },
            maxWidth: '600px',
            height: 'auto',
            backgroundImage: `url(${wobblesImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            padding: { xs: '10px', sm: '20px' },
            backgroundColor: 'transparent',
            margin: '16px',
          },
        },
      }}
    >
      <Box sx={{ backgroundColor: 'tertiary.main' }}>
        <Box
          sx={{
            padding: 2,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <DialogTitle id="login-dialog-title">
            Logga in
            <Tooltip
              title={
                <Box sx={{ padding: '5%' }}>
                  <Box sx={{ fontWeight: 'bold', marginBottom: '8%' }}>Inloggningsuppgifter:</Box>
                  <Box>Användarnamn: "Johannes"</Box>
                  <Box>Lösenord: "Jojo"</Box>
                </Box>
              }
              slotProps={{
                tooltip: {
                  sx: {
                    maxWidth: '400px',
                    minWidth: '300px',
                    backgroundColor: 'rgba(50, 50, 50, 0.95)',
                    boxShadow: 3,
                  },
                },
              }}
            >
              <IconButton>
                <InfoIcon />
              </IconButton>
            </Tooltip>
          </DialogTitle>
          <Button onClick={onClose} aria-label="stäng ruta">
            <CloseIcon />
          </Button>
        </Box>
        <DialogContent>
          <Box
            component="form"
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            <TextField
              id="username"
              label="Användarnamn"
              autoComplete="username"
              required
              variant="outlined"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                if (usernameError) setUsernameError('');
              }}
              error={!!usernameError}
              helperText={usernameError}
              slotProps={inputStyles(!!usernameError)}
            />

            <TextField
              id="password"
              label="Lösenord"
              type="password"
              autoComplete="current-password"
              required
              variant="outlined"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (passwordError) setPasswordError('');
              }}
              error={!!passwordError}
              helperText={passwordError}
              slotProps={inputStyles(!!usernameError)}
            />

            {error && <ErrorMessage message={error} />}
            <DialogActions sx={{ paddingBottom: 4, flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
              <ReusableButton
                btnText="Glömt lösenord"
                onClick={() => navigate('/forgot-password')}
                variant="secondary"
                type="button"
              />
              <ReusableButton btnText="Logga in" type="submit" variant="primary" />
            </DialogActions>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
};
