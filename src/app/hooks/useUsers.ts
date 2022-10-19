import IUser from '../models/IUser';
import UserService from '../services/UserService';

export default function useUsers() {
  const getUsers = async () : Promise<IUser[]|null> => {
    try {
      const userData = await UserService.getUsers();
      return userData;
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  return { getUsers };
}
