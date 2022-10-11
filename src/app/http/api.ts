import axios from 'axios';
import appConfig from '../../config.json';

const api = axios.create({
  baseURL: appConfig.serverBaseUrl,
});

export default api;
