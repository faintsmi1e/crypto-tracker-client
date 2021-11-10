import $api from '../http';
import axios from 'axios';
import { API_URL } from '../http';

export default class AuthService {
  static async login(email, password) {
    return $api.post('/login', { email, password });
  }

  static async registration(email, password) {
    return $api.post('/registration', { email, password });
  }

  static async logout() {
    return $api.post('/logout');
  }

  static async checkAuth() {
    return axios.get(API_URL + '/refresh', { withCredentials: true });
  }
}
