import { createBrowserRouter } from 'react-router';
import { Layout } from './Pages/Layout';
import { PageNotFound } from './Pages/PageNotFound';
import { Home } from './Pages/AppPages/Home';
import { LogIn } from './Pages/AppPages/LogIn';
import { Randomizer } from './Pages/AppPages/Randomizer';
import { Recipes } from './Pages/AppPages/Recipes';
import { CreateRecipe } from './Pages/AppPages/CreateRecipe';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <PageNotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'inloggning',
          element: <LogIn />,
        },
        {
          path: 'slumparen',
          element: <Randomizer />,
        },
        {
          path: 'dina-recept',
          element: <Recipes />,
        },
        {
          path: 'nytt-recept',
          element: <CreateRecipe />,
        },
      ],
    },
  ],
  {
    basename: '/Matslumparen',
  }
);
