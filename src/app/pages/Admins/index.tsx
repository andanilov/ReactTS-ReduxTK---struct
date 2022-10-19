import React, { FC } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import MainLayout from '../../layouts/MainLayout';
// import css from './Admins.module.css';

const Admins : FC = () => {
  const { user } = useTypedSelector((state) => state.auth);

  return (
    <MainLayout>
      <h1>Only for Admin!</h1>
    </MainLayout>);
};

export default Admins;
