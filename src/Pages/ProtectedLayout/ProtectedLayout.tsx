import { Box } from '@mui/material';
import { Outlet, Navigate } from 'react-router';
import { useAuth } from '../../Hooks/useAuth';
import { ScrollToTop } from '../../Hooks/ScrollToTop';
import { NavTabs } from '../../Components/Fixtures/NavTabs';

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
