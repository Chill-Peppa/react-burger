import React from 'react';
import styles from './reset-password.module.css';
import {
  PasswordInput,
  Button,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from '../../services/types/hooks';
import { resetPassword } from '../../services/actions/auth';

function ResetPassword({ title }: { title: string }) {
  const [passwordData, setPasswordData] = React.useState({
    newPassword: '',
    token: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(resetPassword(passwordData, onNavigateLogin));
    console.log(passwordData.newPassword);
  };

  const onNavigateLogin = () => {
    navigate('/login');
  };

  console.log('новый пароль', passwordData.newPassword);

  return (
    <section className={styles.resetPassword}>
      <h2 className={`${styles.title} text text_type_main-medium mb-6`}>
        {title}
      </h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <PasswordInput
          placeholder={'Введите новый пароль'}
          name={'newPassword'}
          value={passwordData.newPassword || ''}
          extraClass={styles.input}
          onChange={handleChange}
        />
        <Input
          name={'token'}
          value={passwordData.token || ''}
          placeholder="Введите код из письма"
          autoComplete="off"
          type="text"
          errorText={'Ошибка'}
          size={'default'}
          extraClass={styles.input}
          onChange={handleChange}
        />
        <Button
          extraClass={styles.button}
          htmlType="submit"
          type="primary"
          size="medium">
          Сохранить
        </Button>
      </form>
      <p className={`text text_type_main-default text_color_inactive`}>
        Вспомнили пароль?{' '}
        <Link to="/login" className={styles.link}>
          Войти
        </Link>
      </p>
    </section>
  );
}

export default ResetPassword;
