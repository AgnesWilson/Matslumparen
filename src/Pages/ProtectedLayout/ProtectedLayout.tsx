import { Box } from '@mui/material';
import { Outlet, Navigate } from 'react-router';
import { NavTabs } from '../../Fixtures/NavTabs';
import { useAuth } from '../../Hooks/useAuth';
import { ScrollToTop } from '../../Hooks/ScrollToTop';

export const ProtectedLayout = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <Box>
      <ScrollToTop />
      <NavTabs />

      <div>
        <Outlet />
      </div>
    </Box>
  );
};
