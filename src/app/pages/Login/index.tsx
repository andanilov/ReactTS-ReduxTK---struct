import React, { FC } from 'react';
import FormLogReg from '../../components/FormLogReg';
import MainLayout from '../../layouts/MainLayout';
import css from './Login.module.css';

const Login : FC = () => (
  <MainLayout>
    <div className={css.area}>
      <FormLogReg />
    </div>
  </MainLayout>
);

export default Login;
