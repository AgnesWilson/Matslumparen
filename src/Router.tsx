import { createBrowserRouter } from 'react-router';
import { RootLayout } from './Pages/RootLayout/Layout';
import { PageNotFound } from './Pages/PageNotFound';
import { Home } from './Pages/RootLayout/Home/Home';
import { Randomizer } from './Pages/ProtectedLayout/Randomizer';
import { Recipes } from './Pages/ProtectedLayout/Recipes';
import { CreateRecipe } from './Pages/ProtectedLayout/CreateRecipe';
import { ProtectedLayout } from './Pages/ProtectedLayout/ProtectedLayout';
import { YourAccount } from './Pages/ProtectedLayout/YourAccount';
import { RandomizerResult } from './Pages/ProtectedLayout/RandomizerResult';
import { mockRecipe } from './MockData/SingleRecipe';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <PageNotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          element: <ProtectedLayout />,
          children: [
            {
              path: 'slumparen',
              element: <Randomizer />,
            },
            {
              path: 'resultat',
              element: <RandomizerResult recipe={mockRecipe} />,
            },
            {
              path: 'dina-recept',
              element: <Recipes />,
            },
            {
              path: 'nytt-recept',
              element: <CreateRecipe />,
            },
            {
              path: 'konto',
              element: <YourAccount />,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: '/Matslumparen',
  }
);
