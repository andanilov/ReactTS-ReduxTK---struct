import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

import { RouteNames } from '../routes/index';
import { useTypedDispatch } from './useTypedDispatch';
import { HandleSubmit } from '../components/common/ControlledForm';
import AuthService from '../services/AuthService';
import StorageService from '../services/StorageService';
import { setUser } from '../store/authSlice';

export function useAuth() {
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

  return { handleLogin };
}
