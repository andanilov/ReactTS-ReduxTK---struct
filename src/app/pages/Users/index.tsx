import React, {
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import useUsers from '../../hooks/useUsers';
import MainLayout from '../../layouts/MainLayout';
import IUser from '../../models/IUser';
// import IUser from '../../models/IUser';

const Users : FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);
  const { getUsers } = useUsers();

  useEffect(() => {
    (async () : Promise<void> => {
      const usrs = await getUsers();
      usrs && setUsers(usrs);
      setLoading(false);
    })();
  }, []);

  return (
    <MainLayout>
      <h1>Users!</h1>
      {loading
        ? 'Загрузка'
        : (
          <ul>
            {users.map(({
              _id,
              email,
              name,
              access,
            }) => (
              <li key={_id}>{`[${_id}] ${email}: ${name || ''} ${access}`}</li>))}
          </ul>)}
    </MainLayout>);
};

export default Users;
