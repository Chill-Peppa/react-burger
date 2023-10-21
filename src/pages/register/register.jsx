import React from 'react';
import styles from './register.module.css';
import {
  PasswordInput,
  Button,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

function Register({ title }) {
  return (
    <section className={styles.sign}>
      <h2 className={`${styles.title} text text_type_main-medium mb-6`}>
        {title}
      </h2>
      <form className={styles.form}>
        <Input
          name="name"
          placeholder="Имя"
          autoComplete="off"
          type="text"
          errorText={'Ошибка'}
          size={'default'}
          extraClass={styles.input}
          required
        />
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
        <PasswordInput name={'password'} extraClass={styles.input} />
        <Button
          extraClass={styles.button}
          htmlType="submit"
          type="primary"
          size="medium">
          Зарегистрироваться
        </Button>
      </form>
      <p className={`text text_type_main-default text_color_inactive`}>
        Уже зарегистрированы? <Link className={styles.link}>Войти</Link>
      </p>
    </section>
  );
}

export default Register;
