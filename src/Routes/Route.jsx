import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home';
import Root from '../Root/Root';
import About from '../pages/About';
import Apps from '../pages/Apps';
import AppDetails from '../pages/AppDetails';
import InstalledApps from '../pages/InstalledApps';
import Error from '../components/Error';
import NotFound from '../components/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: '/',
        Component: Home,
      },
      {
        path: 'apps',
        Component: Apps,
      },
      {
        path: 'apps/appsDetails/:id',
        Component: AppDetails,
        errorElement: <NotFound></NotFound>,
      },
      {
        path: 'installed',
        Component: InstalledApps,
      },
    ],
  },
]);
