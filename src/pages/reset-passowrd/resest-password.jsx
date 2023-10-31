import React from 'react';
import styles from './reset-password.module.css';
import {
  PasswordInput,
  Button,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../../services/actions/auth';

function ResetPassword({ title }) {
  const [passwordData, setPasswordData] = React.useState({
    newPassword: '',
    token: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword(passwordData));
    console.log(passwordData.newPassword);
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
        Вспомнили пароль? <Link className={styles.link}>Войти</Link>
      </p>
    </section>
  );
}

ResetPassword.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ResetPassword;
