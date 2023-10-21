import React from 'react';
import styles from './profile.module.css';
import { NavLink } from 'react-router-dom';
import {
  EmailInput,
  PasswordInput,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components';

function Profile() {
  return (
    <section className={styles.profile}>
      <div className={styles.container}>
        <nav className={styles.left}>
          <ul className={styles.menu}>
            <li className={`text text_type_main-medium ${styles.item}`}>
              <NavLink className={styles.link}>Профиль</NavLink>
            </li>
            <li className={`text text_type_main-medium ${styles.item}`}>
              <NavLink className={styles.link}>История заказов</NavLink>
            </li>
            <li className={`text text_type_main-medium ${styles.item}`}>
              <NavLink className={styles.link}>Выход</NavLink>
            </li>
          </ul>
          <p className="mt-20 text text_type_main-default text_color_inactive">
            В&nbsp;этом разделе вы&nbsp;можете изменить&nbsp;свои персональные
            данные
          </p>
        </nav>
        <form className={styles.right}>
          <Input
            name="name"
            placeholder="Имя"
            autoComplete="off"
            type="text"
            errorText={'Ошибка'}
            size={'default'}
            extraClass={styles.input}
            icon="EditIcon"
            required
          />
          <EmailInput
            name="email"
            placeholder="Логин"
            extraClass={styles.input}
            icon="EditIcon"
          />
          <PasswordInput name={'password'} icon="EditIcon" />
        </form>
      </div>
    </section>
  );
}

export default Profile;
