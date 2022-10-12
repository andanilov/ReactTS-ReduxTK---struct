import React from 'react';
import ControlledForm, {
  TextField,
  SelectField,
  Button,
  HandleSubmit,
} from '../common/ControlledForm';

const FormLogReg = () => {
  const handleSubmit: HandleSubmit = (data) => console.log('Result', data);

  return (
    <ControlledForm handleSubmit={handleSubmit}>
      <TextField
        name="login"
        label="Логин"
        placeholder="Мой логин!"
        value="значение по умолчанию"
        rules={{
          isRequired: { msg: 'Нужен логин!' },
          min: { len: 5, msg: 'Слишком короткий логин!' },
        }}
      />
      <TextField
        name="password"
        label="Пароль"
        type="password"
        rules={{ isRequired: { msg: 'Нужен пароль!' } }}
      />
      <SelectField
        name="list"
        label="Список"
        placeholder="--- выбор ---"
        value="val3"
        options={[
          { title: 'Опция 1', value: 'val1' },
          { title: 'Опция 2', value: 'val2' },
          { title: 'Опция 3', value: 'val3' },
          { title: 'Опция 4', value: 'val4' },
        ]}
        rules={{ isRequired: { msg: 'Нужно выбрать!' } }}
      />
      <Button type="submit">Отправить</Button>
      <Button>Обычная кнопка</Button>
    </ControlledForm>
  );
};

export default FormLogReg;
