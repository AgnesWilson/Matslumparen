import { createTheme } from '@mui/material/styles';

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

const theme = createTheme({
  palette: {
    primary: { main: '#FF8000' },
    secondary: { main: '#2200FF' },
    tertiary: { main: '#F8D7AA' },
    accent: { main: '#F36D6D' },
    muted: { main: '#90A9B7' },

    error: { main: '#FF0000' },
    success: { main: '#00FF00' },
    warning: { main: '#FFFF00' },

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
      lineHeight: 1,
    },
    h2: {
      fontFamily: '"Krona One", sans-serif',
      fontSize: 'clamp(1.4rem, 4vw, 3rem)',
      lineHeight: 1.5,
    },
  },
});
theme.typography.h2 = {
  ...theme.typography.h2,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.8rem',
    lineHeight: 1.6,
  },
  [theme.breakpoints.up('md')]: {
    fontSize: 'clamp(1.6rem, 3.5vw, 3rem)',
    lineHeight: 1.5,
  },
};

export { theme };
