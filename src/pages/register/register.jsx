import React from 'react';
import styles from './register.module.css';
import { useDispatch } from 'react-redux';
import {
  PasswordInput,
  Button,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { register } from '../../services/actions/auth';

function Register({ title }) {
  const [user, setUser] = React.useState({ name: '', email: '', password: '' });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(user));
    console.log(user);
  };

  return (
    <section className={styles.sign}>
      <h2 className={`${styles.title} text text_type_main-medium mb-6`}>
        {title}
      </h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          name="name"
          value={user.name}
          placeholder="Имя"
          autoComplete="off"
          type="text"
          errorText={'Ошибка'}
          size={'default'}
          extraClass={styles.input}
          onChange={handleChange}
          required
        />
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
          Зарегистрироваться
        </Button>
      </form>
      <p className={`text text_type_main-default text_color_inactive`}>
        Уже зарегистрированы?{' '}
        <Link to="/login" className={styles.link}>
          Войти
        </Link>
      </p>
    </section>
  );
}

Register.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Register;
