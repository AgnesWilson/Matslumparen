import { Box, Tab, Tabs } from '@mui/material';
import { Link, Outlet, useLocation } from 'react-router';

export const NavTabs = () => {
  const location = useLocation();

  const currentTab = () => {
    if (location.pathname.includes('slumparen')) return 0;
    if (location.pathname.includes('dina-recept')) return 1;
    if (location.pathname.includes('nytt-recept')) return 2;
    if (location.pathname.includes('konto')) return 3;
    return 0;
  };

  return (
    <Box component="nav" aria-label="Huvudmeny" sx={{ width: '100%' }}>
      <Box
        sx={{
          bgcolor: 'primary',
        }}
      >
        <Tabs
          value={currentTab()}
          centered
          aria-label="Navigation tabs"
          selectionFollowsFocus
          sx={{
            '& .MuiTabs-flexContainer': {
              borderBottom: '2px solid black',
            },
            '& .MuiTab-root': {
              color: 'black',
              border: '2px solid black',
              borderBottom: 'none',
              marginInline: 8,
              paddingInline: 4,
            },
            '& .Mui-selected': {
              borderBottom: 'none',
              fontWeight: 'bold',
              color: 'black !important',
            },
          }}
        >
          <Tab label="Slumparen" component={Link} to="/slumparen" />
          <Tab label="Dina recept" component={Link} to="/dina-recept" />
          <Tab label="Nytt recept" component={Link} to="/nytt-recept" />
          <Tab label="Ditt konto" component={Link} to="/konto" />
        </Tabs>
      </Box>

      <div>
        <Outlet />
      </div>
    </Box>
  );
};
