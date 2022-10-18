import React, { FC, useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useTypedDispatch } from '../hooks/useTypedDispatch';
import MainLayout from '../layouts/MainLayout';
// import AuthService from '../services/AuthService';
// import { userFetchAll } from '../store/authSlice';

const Main : FC = () => {
  // const dispatch = useTypedDispatch();
  const { access, user } = useTypedSelector((state) => state.auth);

  // useEffect(() => { AuthService.fetchAll().then((data) => console.log(data)); }, []);
  // useEffect(() => { dispatch(userFetchAll()); }, [dispatch]);
  useEffect(() => { console.log(user); }, [user]);

  return (
    <MainLayout>
      Main page!
      {access}
    </MainLayout>
  );
};

export default Main;
