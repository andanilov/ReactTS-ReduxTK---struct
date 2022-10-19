import axios from 'axios';
import api from '../http/api';
import { ApiRoutes } from '../http/apiRoutes';
import appConfig from '../../config.json';
import { AuthResponse } from '../models/response/auth';

export default class AuthService {
  static async checkAuth(): Promise<AuthResponse> {
    const { data } = await axios.get<AuthResponse>(appConfig.serverBaseUrl + ApiRoutes.REFRESH, {
      withCredentials: true, // Add cookie to every request
    });
    return data;
  }

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

  static async remember(email: string) : Promise<void> {
    return await api.post(ApiRoutes.REMEMBER, { email });
  }
}
