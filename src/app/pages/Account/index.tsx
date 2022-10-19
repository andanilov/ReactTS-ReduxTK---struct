import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import MainLayout from '../../layouts/MainLayout';
import css from './Account.module.css';

const Account : FC = () => {
  const { user } = useTypedSelector((state) => state.auth);
  const { state } = useLocation(); // msg, error

  return (
    <MainLayout>
      {!!state?.msg && (<div className={css.msg}>{state.msg}</div>)}
      {!!state?.error && (<div className={css.msg}>{state.error}</div>)}
      <h1>Аккаунт пользователя</h1>
      <ul>
        {user && Object.entries(user).map(([key, value]) => <li key={key}>{`${key}: ${value}`}</li>)}
      </ul>
    </MainLayout>);
};

export default Account;
