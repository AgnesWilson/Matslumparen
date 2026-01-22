import { createBrowserRouter } from 'react-router';
import { RootLayout } from './Pages/RootLayout/Layout';
import { ProtectedLayout } from './Pages/ProtectedLayout/ProtectedLayout';

import { PageNotFound } from './Pages/PageNotFound';
import { Home } from './Pages/RootLayout/Home';

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
              lazy: async () => {
                const { Randomizer } = await import('./Pages/ProtectedLayout/Randomizer');
                return { Component: Randomizer };
              },
            },
            {
              path: 'resultat',
              lazy: async () => {
                const { RandomizerResult } = await import('./Pages/ProtectedLayout/RandomizerResult');
                return { Component: RandomizerResult };
              },
            },
            {
              path: 'dina-recept',
              lazy: async () => {
                const { Recipes } = await import('./Pages/ProtectedLayout/Recipes');
                return { Component: Recipes };
              },
            },
            {
              path: 'recept/:id',
              lazy: async () => {
                const { SingleRecipe } = await import('./Pages/ProtectedLayout/SingleRecipe');
                return { Component: SingleRecipe };
              },
            },
            {
              path: 'nytt-recept',
              lazy: async () => {
                const { CreateRecipe } = await import('./Pages/ProtectedLayout/CreateRecipe');
                return { Component: CreateRecipe };
              },
            },
            {
              path: 'konto',
              lazy: async () => {
                const { YourAccount } = await import('./Pages/ProtectedLayout/YourAccount');
                return { Component: YourAccount };
              },
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
