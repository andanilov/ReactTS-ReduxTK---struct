import React, { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../../routes';

const AppRouter : FC = () => {
  const auth = true;
  const router = createBrowserRouter(auth ? privateRoutes : publicRoutes);

  return <RouterProvider router={router} />;
};

export default AppRouter;
