import { createTheme, responsiveFontSizes } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
    accent: Palette['primary'];
    muted: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
    accent?: PaletteOptions['primary'];
    muted?: PaletteOptions['primary'];
  }
}

let theme = createTheme({
  palette: {
    primary: { main: '#0f0c08ff' },
    secondary: { main: '#2200FF' },
    tertiary: { main: '#F8D7AA' },
    accent: { main: '#F36D6D' },
    muted: { main: '#90A9B7' },

    background: {
      default: '#FF8000',
    },
  },
  typography: {
    fontFamily: '"Krona One", sans-serif',
    h1: {
      fontFamily: '"Luckiest Guy", sans-serif ',
      textTransform: 'uppercase',
      fontSize: 'clamp(2rem, 13.5vw, 15rem)',
    },
  },
});

theme = responsiveFontSizes(theme);

export { theme };
