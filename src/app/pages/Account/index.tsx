import React, { FC } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import MainLayout from '../../layouts/MainLayout';
import css from './Account.module.css';

const Account : FC = () => {
  const { user } = useTypedSelector((state) => state.auth);

  return (
    <MainLayout>
      <h1>Аккаунт пользователя</h1>
      <ul>
        {user && Object.entries(user).map(([key, value]) => <li key={key}>{`${key}: ${value}`}</li>)}
      </ul>
    </MainLayout>);
};

export default Account;
