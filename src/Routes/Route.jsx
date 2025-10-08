import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home';
import Root from '../Root/Root';
import About from '../pages/About';
import Apps from '../pages/Apps';
import AppDetails from '../pages/AppDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
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
        path: 'appsDetails/:id',
        Component: AppDetails,
      },
    ],
  },
]);
