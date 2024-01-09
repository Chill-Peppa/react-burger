import React from 'react';
import styles from './forgot-password.module.css';
import { useDispatch } from '../../services/types/hooks';
import {
  Button,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useNavigate } from 'react-router-dom';

import { forgotPassword } from '../../services/actions/auth';

function ForgotPassword({ title }: { title: string }) {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onResetNavigate = () => {
    navigate('/reset-password');
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
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

export default ForgotPassword;
