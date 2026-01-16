import { RouterProvider } from 'react-router';
import { router } from './Router';
import { AuthProvider } from './Context/AuthProvider';

export const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  );
};
