import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { publicRoutes, privateRoutes, RouteNames } from '../../routes';

const NaviTop : FC = () => {
  const { access } = useTypedSelector((state) => state.auth);

  return (
    <nav>
      <Link to={RouteNames.MAIN}>Главная</Link>
      { access
        ? (
          <Link to={RouteNames.ACCOUNT}>Аккаунт</Link>
        ) : (
          <Link to={RouteNames.LOGIN}>Вход</Link>
        )}
    </nav>
  );
};

export default NaviTop;
