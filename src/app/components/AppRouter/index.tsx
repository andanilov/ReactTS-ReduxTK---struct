import React, { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { publicRoutes, privateRoutes } from '../../routes';

const AppRouter : FC = () => {
  const { access } = useTypedSelector((state) => state.auth);
  const router = createBrowserRouter(access ? privateRoutes : publicRoutes);

  return <RouterProvider router={router} />;
};

export default AppRouter;
