import React from 'react';
import { Navigate } from 'react-router-dom';

// --- Pages
import Login from '../pages/Login';
import Account from '../pages/Account/index';
import Main from '../pages/Main';
import Users from '../pages/Users';
import Admins from '../pages/Admins';
import IUser from '../models/IUser';

export enum RouteNames {
  MAIN = '/',
  LOGIN = '/login',
  ACCOUNT = '/account',
  USERS = '/users',
  ADMINS = '/admins',
}

export interface IRoute {
  path: RouteNames,
  element: React.ReactNode,
  isActivated?: boolean,
  access?: number, // guest = undefined, user >= 0
}

const routesMap : IRoute[] = [
  { path: RouteNames.ACCOUNT, element: <Account />, access: 0 },
  { path: RouteNames.ADMINS, element: <Admins />, access: 100 },
  { path: RouteNames.USERS, element: <Users />, access: 0 },

  { path: RouteNames.LOGIN, element: <Login /> },
  { path: RouteNames.MAIN, element: <Main /> },
];

export const getRoutesByUser = (access: number|undefined, isActivated: boolean|undefined) => routesMap.map(({ path, element, ...rest }) => {
  access ??= -1;
  const allowByAccess = rest?.access === undefined || access >= rest.access;
  const allowByActivated = rest?.isActivated === undefined || rest.isActivated === isActivated;
  const redirectElement = access >= 0 ? <Navigate to={RouteNames.MAIN} /> : <Navigate to={RouteNames.LOGIN} />;
  // console.log(path, access >= 0 ? RouteNames.MAIN : RouteNames.LOGIN);

  return ({ path, element: allowByAccess && allowByActivated ? element : redirectElement });
});

// export const publicRoutes : IRoute[] = [
//   { path: RouteNames.ACCOUNT, element: <Login /> },
//   { path: RouteNames.LOGIN, element: <Login /> },
//   { path: RouteNames.USERS, element: <Login /> },
//   { path: RouteNames.MAIN, element: <Main /> },
// ];

// export const privateRoutes : IRoute[] = [
//   { path: RouteNames.ACCOUNT, element: <Account /> },
//   { path: RouteNames.LOGIN, element: <Login /> },
//   { path: RouteNames.USERS, element: <Users /> },
//   { path: RouteNames.MAIN, element: <Main /> },
// ];
