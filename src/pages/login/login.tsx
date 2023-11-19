import React from 'react';
import styles from './login.module.css';
import { useDispatch } from 'react-redux';
import {
  PasswordInput,
  Button,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { login } from '../../services/actions/auth';

function Login({ title }: { title: string }) {
  const [user, setUser] = React.useState({ email: '', password: '' });

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch<any>(login(user));
    console.log(user);
  };

  return (
    <section className={styles.sign}>
      <h2 className={`${styles.title} text text_type_main-medium mb-6`}>
        {title}
      </h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          name="email"
          value={user.email}
          placeholder="E-mail"
          autoComplete="off"
          type="email"
          errorText={'Ошибка'}
          size={'default'}
          extraClass={styles.input}
          onChange={handleChange}
          required
        />
        <PasswordInput
          name={'password'}
          value={user.password}
          extraClass={styles.input}
          onChange={handleChange}
        />
        <Button
          extraClass={styles.button}
          htmlType="submit"
          type="primary"
          size="medium">
          Войти
        </Button>
      </form>
      <p className={`text text_type_main-default text_color_inactive mb-4`}>
        Вы - новый пользователь?{' '}
        <Link to="/register" className={styles.link}>
          Зарегистрироваться
        </Link>
      </p>
      <p className={`text text_type_main-default text_color_inactive`}>
        Забыли пароль?{' '}
        <Link to="/forgot-password" className={styles.link}>
          Восстановить пароль
        </Link>
      </p>
    </section>
  );
}

export default Login;
