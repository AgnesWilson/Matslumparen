import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { theme } from './theme';
import { WeatherProvider } from './Context/WeatherProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WeatherProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </WeatherProvider>
  </StrictMode>
);
