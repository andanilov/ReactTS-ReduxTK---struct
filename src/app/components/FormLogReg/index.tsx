import React, { FC, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import AuthService from '../../services/AuthService';
import ControlledForm, {
  TextField,
  Button,
  HandleSubmit,
} from '../common/ControlledForm';
// import { useTypedDispatch } from '../../hooks/useTypedDispatch';

type MapItem = { title: string, button: string };
export interface ILogRegMap {
  log: MapItem,
  reg: MapItem,
  rem: MapItem,
}

const LogRegMap : ILogRegMap = {
  log: { title: 'Вход', button: 'Войти' },
  reg: { title: 'Регистрация', button: 'Зарегистрироваться' },
  rem: { title: 'Напомнить пароль', button: 'Напомнить' },
};

const FormLogReg: FC<{ status?: keyof ILogRegMap }> = ({ status = 'log' }) => {
  const [currentStatus, setCurrentStatus] = useState(status || 'log');
  const { handleLogin, handleRegistration, handleRemember } = useAuth();

  return (
    <>
      <h2>{LogRegMap[currentStatus].title}</h2>
      <>
        {currentStatus === 'log' && (
          <ControlledForm handleSubmit={handleLogin}>
            <TextField
              name="email"
              label="Email"
              rules={{
                isRequired: { msg: 'Введите Email' },
                isEmail: { msg: 'Неверный формат Email' },
              }}
            />
            <TextField
              name="password"
              label="Пароль"
              type="password"
              rules={{ isRequired: { msg: 'Введите пароль!' } }}
            />
            <Button type="submit">{LogRegMap[currentStatus].button}</Button>
          </ControlledForm>
        )}
      </>
      <>
        {currentStatus === 'reg' && (
          <ControlledForm handleSubmit={handleRegistration}>
            <TextField
              name="email"
              label="Email"
              rules={{
                isRequired: { msg: 'Введите Email' },
                isEmail: { msg: 'Неверный формат Email' },
              }}
            />
            <TextField
              name="name"
              label="Имя"
            />
            <TextField
              name="password"
              label="Пароль"
              type="password"
              rules={{ isRequired: { msg: 'Введите пароль!' } }}
            />
            <TextField
              name="password_repeat"
              label="Повтор пароля"
              type="password"
              rules={{ isSimilar: { original: 'password', msg: 'Пароли не совпадают!' } }}
            />
            <Button type="submit">{LogRegMap[currentStatus].button}</Button>
          </ControlledForm>
        )}
      </>
      <>
        {currentStatus === 'rem' && (
          <ControlledForm handleSubmit={handleRemember}>
            <TextField
              name="email"
              label="Email"
              rules={{
                isRequired: { msg: 'Введите Email' },
                isEmail: { msg: 'Неверный формат Email' },
              }}
            />
            <Button type="submit">{LogRegMap[currentStatus].button}</Button>
          </ControlledForm>
        )}
      </>
      <nav>
        {Object.entries(LogRegMap).map(([status, { button }]) => (status !== currentStatus
          ? (
            <button
              type="button"
              key={status}
              onClick={() => setCurrentStatus(status as keyof ILogRegMap)}
            >
              {button}
            </button>
          )
          : ''
        ))}
      </nav>
    </>
  );
};

export default FormLogReg;
