import api from '../http/api';
import { ApiRoutes } from '../http/apiRoutes';
// import { AxiosResponse } from 'axios';
import { AuthResponse } from '../models/response/auth';

export default class AuthService {
  static async registration(email: string, password: string, name?: string): Promise<AuthResponse> {
    const { data } = await api.post<AuthResponse>(ApiRoutes.REGISTER, { email, password, name });
    return data;
  }

  static async login(email: string, password: string) : Promise<AuthResponse> {
    const { data } = await api.post<AuthResponse>(ApiRoutes.LOGIN, { email, password });
    return data;
  }

  static async logout() : Promise<void> {
    return await api.post(ApiRoutes.LOGOUT);
  }
}
