import api from '../http/api';
import { ApiRoutes } from '../http/apiRoutes';
import IUser from '../models/IUser';
import { AuthResponse } from '../models/response/auth';

export default class UserService {
  static async getUsers() : Promise<IUser[]> {
    const { data } = await api.get<IUser[]>(ApiRoutes.USERS);
    return data;
  }
}
