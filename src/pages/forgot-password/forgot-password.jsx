import React from 'react';
import styles from './forgot-password.module.css';
import { useDispatch } from 'react-redux';
import {
  Button,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { forgotPassword } from '../../services/actions/auth';

function ForgotPassword({ title }) {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const onResetNavigate = () => {
    navigate('/reset-password');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email, onResetNavigate));
  };

  return (
    <section className={styles.forgotPassword}>
      <h2 className={`${styles.title} text text_type_main-medium mb-6`}>
        {title}
      </h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          name="email"
          placeholder="E-mail"
          autoComplete="off"
          type="email"
          value={email || ''}
          errorText={'Ошибка'}
          size={'default'}
          extraClass={styles.input}
          onChange={handleChange}
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
        Вспомнили пароль?{' '}
        <Link to="/login" className={styles.link}>
          Войти
        </Link>
      </p>
    </section>
  );
}

ForgotPassword.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ForgotPassword;
