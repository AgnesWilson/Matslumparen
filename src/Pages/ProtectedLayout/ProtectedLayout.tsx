import { Box } from '@mui/material';
import { Outlet } from 'react-router';
import { NavTabs } from '../../Fixtures/NavTabs';

export const ProtectedLayout = () => {
  return (
    <Box>
      <NavTabs />

      <div>
        <Outlet />
      </div>
    </Box>
  );
};
