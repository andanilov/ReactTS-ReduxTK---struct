import api from '../http/api';

export default class AuthService {
  static async fetchAll() {
    const { data } = await api.get('users');
    return data;
  }
}
