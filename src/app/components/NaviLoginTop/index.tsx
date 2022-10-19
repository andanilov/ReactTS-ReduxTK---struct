import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { RouteNames } from '../../routes';

const NaviTop : FC = () => {
  const { user } = useTypedSelector((state) => state.auth);
  const { handleLogout } = useAuth();

  return (
    <nav>
      { user
        ? (
          <>
            <Link to={RouteNames.ACCOUNT}>{user?.name ?? user.email}</Link>
            &nbsp;
            <button onClick={handleLogout} type="button">Выйти</button>
          </>
        ) : (
          <Link to={RouteNames.LOGIN}>Вход</Link>
        )}
    </nav>
  );
};

export default NaviTop;
