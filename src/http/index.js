import axios from 'axios';
import AuthService from '../services/AuthService';

export const API_URL = 'http://localhost:8080/api';

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  console.log(config.headers);
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    console.log(error.response.status);
    
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
      
      originalRequest._isRetry = true;
      
      try {
        console.log('try');
        const response = await AuthService.checkAuth();

        localStorage.setItem('token', response.data.accessToken);

        return $api.request(originalRequest);
      } catch (e) {
        console.log('user are not authorised');
      }
    }
    throw error;
  }
);

export default $api;
