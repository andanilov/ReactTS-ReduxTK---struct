import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { publicRoutes, privateRoutes, RouteNames } from '../../routes';

const NaviTop : FC = () => (
  <nav>
    <Link to={RouteNames.MAIN}>Главная</Link>
    <Link to={RouteNames.LOGIN}>Вход</Link>
    <Link to={RouteNames.ACCOUNT}>Аккаунт</Link>
  </nav>
);

export default NaviTop;
