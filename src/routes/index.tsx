import React from 'react';

// --- Components
import Login from '../pages/Login';
import Account from '../pages/Account';
import Main from '../pages/Main';

export enum RouteNames {
  MAIN = '/',
  LOGIN = '/login',
  ACCOUNT = '/account',
}

export interface IRoute {
  path: RouteNames,
  element: React.ReactNode,
}

export const publicRoutes : IRoute[] = [
  { path: RouteNames.ACCOUNT, element: <Login /> },
  { path: RouteNames.LOGIN, element: <Login /> },
  { path: RouteNames.MAIN, element: <Main /> },
];

export const privateRoutes : IRoute[] = [
  { path: RouteNames.ACCOUNT, element: <Account /> },
  { path: RouteNames.LOGIN, element: <Login /> },
  { path: RouteNames.MAIN, element: <Main /> },
];
