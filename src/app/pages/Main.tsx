import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import MainLayout from '../layouts/MainLayout';
import { IauthInitState } from '../store/authSlice';

const Main : FC = () => {
  const { access } = useTypedSelector((state) => state.auth);

  return (
    <MainLayout>
      Main page!
      {access}
    </MainLayout>
  );
};

export default Main;
