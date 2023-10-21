import React from 'react';
import styles from './login.module.css';
import {
  PasswordInput,
  Button,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <section className={styles.sign}>
      <h2 className={`${styles.title} text text_type_main-medium mb-6`}>
        Вход
      </h2>
      <form className={styles.form}>
        <Input
          className={styles.input}
          name="email"
          placeholder="E-mail"
          autoComplete="off"
          type="email"
          errorText={'Ошибка'}
          size={'default'}
          extraClass={styles.input}
          required
        />
        <PasswordInput name={'password'} extraClass={styles.input} />
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
        <Link className={styles.link}>Зарегистрироваться</Link>
      </p>
      <p className={`text text_type_main-default text_color_inactive`}>
        Забыли пароль? <Link className={styles.link}>Восстановить пароль</Link>
      </p>
    </section>
  );
}

export default Login;
