import axios, { AxiosRequestConfig } from 'axios';
import appConfig from '../../config.json';
import StorageService from '../services/StorageService';
import AuthService from '../services/AuthService';

const api = axios.create({
  withCredentials: true, // Add cookie to every request
  baseURL: appConfig.serverBaseUrl,
});

// Request interceptors: add access token to request header
api.interceptors.request.use((config: AxiosRequestConfig) => {
  config?.headers && (config.headers.Authorization = `Bearer ${StorageService.getAccesToken()}`);
  return config;
});

// If we have code 401 we should send request for new access token and repeat original request
api.interceptors.response.use((config) => config, async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401) {
    try {
      const userData = await AuthService.checkAuth();
      StorageService.setAccesToken(userData.accessToken);
      return api.request(originalRequest);
    } catch (e) {
      console.log(e);
    }
  }
});

export default api;
