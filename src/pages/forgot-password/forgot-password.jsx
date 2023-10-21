import React from 'react';
import styles from './forgot-password.module.css';
import {
  Button,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

function ForgotPassword({ title }) {
  return (
    <section className={styles.forgotPassword}>
      <h2 className={`${styles.title} text text_type_main-medium mb-6`}>
        {title}
      </h2>
      <form className={styles.form}>
        <Input
          name="email"
          placeholder="E-mail"
          autoComplete="off"
          type="email"
          errorText={'Ошибка'}
          size={'default'}
          extraClass={styles.input}
          required
        />
        <Button
          extraClass={styles.button}
          htmlType="submit"
          type="primary"
          size="medium">
          Восстановить
        </Button>
      </form>
      <p className={`text text_type_main-default text_color_inactive`}>
        Вспомнили пароль? <Link className={styles.link}>Войти</Link>
      </p>
    </section>
  );
}

export default ForgotPassword;
