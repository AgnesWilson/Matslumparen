import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

import wobblesImage from '../../assets/wobbles.png';
import { FormError } from '../Atoms/FormError';
import { ReusableButton } from '../Atoms/ReusableButton';

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
            width: '50vw',
            height: 'auto',
            backgroundImage: `url(${wobblesImage})`,
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            padding: '20px',
            backgroundColor: 'transparent',
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
          <DialogTitle id="login-dialog-title">Logga in</DialogTitle>
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

            {error && <FormError message={error} />}
            <DialogActions sx={{ paddingBottom: 4 }}>
              <ReusableButton
                btnText="Glömt lösenord"
                onClick={() => navigate('/forgot-password')}
                variant="secondary"
                type="button"
              />
              <ReusableButton
                btnText="Logga in"
                type="submit"
                variant="primary"
              />
            </DialogActions>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
};
