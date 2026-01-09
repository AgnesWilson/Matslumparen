import { useState } from 'react';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useLocation } from 'react-router';

const TabsStyles = {
  '& .MuiTabs-flexContainer': {
    borderBottom: '2px solid black',
  },
  '& .MuiTab-root': {
    color: 'black',
    marginInline: '5%',
    paddingInline: '2%',
  },
  '& .Mui-selected': {
    border: '2px solid black',
    borderBottom: 'none',
    fontWeight: 'bold',
    color: 'black !important',
  },
};

export const NavTabs = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const isTabletOrMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { label: 'Slumparen', to: '/slumparen' },
    { label: 'Dina recept', to: '/dina-recept' },
    { label: 'Nytt recept', to: '/nytt-recept' },
    { label: 'Ditt konto', to: '/konto' },
  ];

  const currentTab = () => {
    if (location.pathname.includes('slumparen')) return 0;
    if (location.pathname.includes('dina-recept')) return 1;
    if (location.pathname.includes('nytt-recept')) return 2;
    if (location.pathname.includes('konto')) return 3;
    return 0;
  };

  return (
    <Box component="nav" aria-label="Huvudmeny" sx={{ width: '100%' }}>
      {isTabletOrMobile ? (
        <>
          <AppBar
            position="fixed"
            sx={{
              top: 'auto',
              bottom: 0,
              backgroundColor: 'accent.main',
            }}
          >
            <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="Öppna meny"
                onClick={() => setOpen(true)}
              >
                <MenuIcon />
                <Typography sx={{ marginLeft: 1 }}>Meny</Typography>
              </IconButton>
            </Toolbar>
          </AppBar>

          <Drawer
            anchor="bottom"
            open={open}
            onClose={() => setOpen(false)}
            slotProps={{
              paper: {
                sx: {
                  backgroundColor: 'tertiary.main',
                  width: '60%',
                  marginLeft: 'auto',
                  marginRight: '5%',
                  marginBottom: '16px',
                  borderRadius: '4px',
                },
              },
            }}
          >
            <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="Stäng meny"
                onClick={() => setOpen(false)}
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>

            <List>
              {navItems.map((item) => (
                <ListItem key={item.to} disablePadding>
                  <ListItemButton
                    component={Link}
                    to={item.to}
                    onClick={() => setOpen(false)}
                  >
                    <ListItemText
                      primary={item.label}
                      slotProps={{
                        primary: {
                          sx: {
                            textAlign: 'right',
                            paddingRight: 4,
                          },
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </>
      ) : (
        <Box sx={{ bgcolor: 'primary' }}>
          <Tabs
            value={currentTab()}
            centered
            aria-label="Navigation tabs"
            selectionFollowsFocus
            sx={TabsStyles}
          >
            {navItems.map((n) => (
              <Tab key={n.to} label={n.label} component={Link} to={n.to} />
            ))}
          </Tabs>
        </Box>
      )}
    </Box>
  );
};
