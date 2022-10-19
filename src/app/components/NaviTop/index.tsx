import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { RouteNames } from '../../routes';

const NaviTop : FC = () => {
  const { user } = useTypedSelector((state) => state.auth);

  return (
    <nav>
      <Link to={RouteNames.MAIN}>Главная</Link>
      &nbsp;
      {user && <Link to={RouteNames.USERS}>Список пользователей</Link>}
    </nav>
  );
};

export default NaviTop;
