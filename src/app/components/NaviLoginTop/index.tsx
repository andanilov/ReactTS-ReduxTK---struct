import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { publicRoutes, privateRoutes, RouteNames } from '../../routes';

const NaviTop : FC = () => {
  const { access, user } = useTypedSelector((state) => state.auth);
  console.log('user from some component: ', user);

  return (
    <nav>
      { Object.keys(user).length
        ? (
          <Link to={RouteNames.ACCOUNT}>Аккаунт</Link>
        ) : (
          <Link to={RouteNames.LOGIN}>Вход</Link>
        )}
    </nav>
  );
};

export default NaviTop;
