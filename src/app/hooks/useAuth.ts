import { useState } from 'react';
import { AxiosError } from 'axios';
// import { redirect, RedirectFunction } from 'react-router-dom';
import { Navigate, useNavigate, redirect } from 'react-router-dom';

import { RouteNames } from '../routes/index';
import { useTypedDispatch } from './useTypedDispatch';
import { HandleSubmit } from '../components/common/ControlledForm';
import AuthService from '../services/AuthService';
import StorageService from '../services/StorageService';
import { setUser, removeUser } from '../store/authSlice';

export function useAuth() {
  const [loadingCheckAuth, setLoadingCheckAuth] = useState(false);
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  const handleLogin : HandleSubmit = async ({ email, password }, setErrors) => {
    try {
      // 1. Try to login
      const userData = await AuthService.login(email as string, password as string);
      // 2. Set token to storage
      StorageService.setAccesToken(userData.accessToken);
      // 3. Set user to global state
      dispatch(setUser(userData.user));
      // 4. Go to main page
      navigate(RouteNames.MAIN);
    } catch (e) {
      if (e instanceof AxiosError) {
        const msg = e.response?.data?.message ?? 'Ошибка авторизации!';
        setErrors((prevError : Object) => ({ ...prevError, email: msg }));
      }
    }
  };

  const handleRegistration : HandleSubmit = async ({ email, password, name = '' }, setErrors) => {
    try {
      const userData = await AuthService.registration(email as string, password as string, name as string);
      // 2. Set token to storage
      StorageService.setAccesToken(userData.accessToken);
      // 3. Set user to global state
      dispatch(setUser(userData.user));
      // 4. Go to main page
      redirect(RouteNames.ACCOUNT);
      // navigate(RouteNames.ACCOUNT, { state: { msg: 'Поздравляем с успешной регистрацией!' } });
    } catch (e) {
      if (e instanceof AxiosError) {
        const msg = e.response?.data?.message ?? 'Ошибка регистрации!';
        setErrors((prevError : Object) => ({ ...prevError, email: msg }));
      }
    }
  };

  const handleLogout = async () => {
    try {
      const userData = await AuthService.logout();
      // 2. Set token to storage
      StorageService.removeAccesToken();
      // 3. Set user to global state
      dispatch(removeUser());
      // 4. Go to main page
      redirect(RouteNames.MAIN);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    loadingCheckAuth,
    handleLogin,
    handleLogout,
    handleRegistration,
  };
}
