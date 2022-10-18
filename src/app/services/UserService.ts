import api from "../http/api";
import { ApiRoutes } from "../http/apiRoutes";
import { AuthResponse } from "../models/response/auth";

export default class UserService {
  static async getUsers() : Promise<AuthResponse[]> {
    const { data } = await api.get<AuthResponse[]>(ApiRoutes.USERS);
    return data;
  }
}

