import React from 'react';
import styles from './reset-password.module.css';
import {
  PasswordInput,
  Button,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

function ResetPassword({ title }) {
  return (
    <section className={styles.resetPassword}>
      <h2 className={`${styles.title} text text_type_main-medium mb-6`}>
        {title}
      </h2>
      <form className={styles.form}>
        <PasswordInput
          placeholder={'Введите новый пароль'}
          name={'password'}
          extraClass={styles.input}
        />
        <Input
          name="code"
          placeholder="Введите код из письма"
          autoComplete="off"
          type="text"
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
          Сохранить
        </Button>
      </form>
      <p className={`text text_type_main-default text_color_inactive`}>
        Вспомнили пароль? <Link className={styles.link}>Войти</Link>
      </p>
    </section>
  );
}

export default ResetPassword;
