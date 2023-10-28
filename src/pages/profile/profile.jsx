import React from 'react';
import styles from './profile.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import {
  EmailInput,
  PasswordInput,
  Input,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import OrderHistory from '../order-history/order-history';
import { logout } from '../../services/actions/auth';

function Profile() {
  const inputRef = React.useRef(null);
  const location = useLocation();
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);

  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
  };

  const returnLinkState = ({ isActive }) => {
    return `${isActive ? styles.active : styles.link}`;
  };

  const handleLogout = () => {
    dispatch(logout());
    console.log('разлогинились');
  };

  return (
    <section className={styles.profile}>
      <div className={styles.container}>
        <nav className={styles.left}>
          <ul className={styles.menu}>
            <li className={`text text_type_main-medium ${styles.item}`}>
              <NavLink to="/profile" end className={returnLinkState}>
                Профиль
              </NavLink>
            </li>
            <li className={`text text_type_main-medium ${styles.item}`}>
              <NavLink to="/profile/orders" className={returnLinkState}>
                История заказов
              </NavLink>
            </li>
            <li className={`text text_type_main-medium ${styles.item}`}>
              <button className={styles.button} onClick={handleLogout}>
                Выход
              </button>
            </li>
          </ul>
          <p className="mt-20 text text_type_main-default text_color_inactive">
            В этом разделе вы можете изменить&nbsp;свои&nbsp;персональные данные
          </p>
        </nav>
        {location.pathname === '/profile/orders' ? (
          <OrderHistory />
        ) : (
          <form>
            <Input
              type="text"
              value={user.name}
              placeholder="Имя"
              icon="EditIcon"
              name="name"
              ref={inputRef}
              onIconClick={onIconClick}
              errorText={'Ой, произошла ошибка'}
              size={'default'}
              extraClass={styles.input}
              disabled={true}
            />
            <EmailInput
              name="email"
              value={user.email}
              placeholder="Логин"
              extraClass={styles.input}
              isIcon={true}
            />
            <PasswordInput
              name={'password'}
              icon="EditIcon"
              value={user.password}
            />
            <div className={styles.buttons}>
              <button type="button" className={styles.buttonCancel}>
                Отмена
              </button>
              <Button htmlType="submit" type="primary" size="medium">
                Войти
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

export default Profile;
