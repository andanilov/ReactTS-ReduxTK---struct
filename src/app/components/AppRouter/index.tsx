import React, { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getRoutesByUser } from '../../routes';

const AppRouter : FC = () => {
  const { user } = useTypedSelector((state) => state.auth);
  const router = createBrowserRouter(getRoutesByUser(user?.access, user?.isActivated));

  return user !== undefined
    ? <RouterProvider router={router} />
    : <></>;
};

export default AppRouter;
