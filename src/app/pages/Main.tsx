import React, { FC, useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useTypedDispatch } from '../hooks/useTypedDispatch';
import MainLayout from '../layouts/MainLayout';
// import AuthService from '../services/AuthService';
// import { userFetchAll } from '../store/authSlice';

const Main : FC = () => {
  // const dispatch = useTypedDispatch();
  const { access, user } = useTypedSelector((state) => state.auth);

  return (
    <MainLayout>
      Main page!
      {access}
    </MainLayout>
  );
};

export default Main;
