import { Box } from '@mui/material';
import { Outlet, Navigate } from 'react-router';
import { NavTabs } from '../../Fixtures/NavTabs';
import { useAuth } from '../../Hooks/useAuth';

export const ProtectedLayout = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <Box>
      <NavTabs />

      <div>
        <Outlet />
      </div>
    </Box>
  );
};
