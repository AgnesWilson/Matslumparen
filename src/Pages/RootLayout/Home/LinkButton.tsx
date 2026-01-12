import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Box, Link } from '@mui/material';

interface Props {
  activeSection: 'hero' | 'info';
  onToggleScroll: () => void;
}

export const LinkButton = ({ activeSection, onToggleScroll }: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 1,
        position: 'fixed',
        bottom: '80px',
        right: '4%',
      }}
    >
      <Link
        component="button"
        aria-label="Länkar till att läsa mer om hur tjänsten fungerar"
        variant="h4"
        sx={{
          color: 'black',
          backgroundColor: 'tertiary.main',
          textDecoration: 'none',
          border: '0.5rem, solid, #F8D7AA',
        }}
        onClick={onToggleScroll}
      >
        {activeSection === 'hero' ? 'Hur funkar det?' : 'Tillbaka upp'}
      </Link>

      <ArrowCircleLeftIcon
        aria-label="pil"
        sx={{
          color: 'secondary.main',
          transform: activeSection === 'hero' ? 'rotate(270deg)' : 'rotate(90deg)',
          fontSize: {
            xs: '2.2rem',
            sm: '2.5rem',
            md: '3rem',
            lg: '4rem',
          },
        }}
      />
    </Box>
  );
};
