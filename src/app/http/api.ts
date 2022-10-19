import axios, { AxiosRequestConfig } from 'axios';
import appConfig from '../../config.json';
import StorageService from '../services/StorageService';

const api = axios.create({
  withCredentials: true, // Add cookie to every request
  baseURL: appConfig.serverBaseUrl,
});

// Request interceptors: add access token to request header
api.interceptors.request.use((config: AxiosRequestConfig) => {
  config?.headers && (config.headers.Authorization = `Bearer ${StorageService.getAccesToken()}`);
  return config;
});

export default api;
