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

const baseTheme = createTheme({
  palette: {
    primary: { main: '#FF8000' },
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
      fontFamily: '"Luckiest Guy", sans-serif',
      textTransform: 'uppercase',
      fontSize: 'clamp(2.5rem, 11vw, 15rem)',
      lineHeight: 1,
    },
  },
});

const theme = createTheme(baseTheme, {
  typography: {
    h2: {
      fontFamily: '"Krona One", sans-serif',
      display: 'inline',
      color: 'white',
      backgroundColor: baseTheme.palette.secondary.main,
      wordBreak: 'break-word',
      lineHeight: 1.5,
      fontSize: '1.8rem',
      [baseTheme.breakpoints.up('xs')]: { fontSize: '1.8rem' },
      [baseTheme.breakpoints.up('sm')]: { fontSize: '1.9rem' },
      [baseTheme.breakpoints.up('md')]: { fontSize: '2.2rem' },
      [baseTheme.breakpoints.up('lg')]: { fontSize: '3rem' },
    },
    h4: {
      fontSize: '1rem',
      [baseTheme.breakpoints.up('xs')]: { fontSize: '1rem' },
      [baseTheme.breakpoints.up('sm')]: { fontSize: '1.4rem' },
      [baseTheme.breakpoints.up('md')]: { fontSize: '1.5rem' },
      [baseTheme.breakpoints.up('lg')]: { fontSize: '1.8rem' },
    },
    h5: {
      fontSize: '1rem',
    },

    body2: {
      fontSize: '1rem',
      [baseTheme.breakpoints.up('xs')]: { fontSize: '0.9rem' },
    },
  },
});

export { theme };
