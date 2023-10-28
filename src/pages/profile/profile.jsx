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
  const { user } = useSelector((store) => store.user);
  console.log(user);
  //для состояния инпутов
  const [disabled, setDisabled] = React.useState(true);

  const [form, setForm] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  const inputRef = React.useRef(null);
  const location = useLocation();
  const dispatch = useDispatch();

  const onIconClick = () => {
    setDisabled(false);
  };

  const handleBlur = () => {
    setDisabled(true);
  };

  //чтобы подсвечивался инпут
  React.useEffect(() => {
    if (!disabled) {
      inputRef.current.focus();
    }

    if (user) {
      setForm({ name: user.name, email: user.email, password: '' });
    }
  }, [disabled, user]);

  const handleChange = (e) => {
    setForm({ ...user, [e.target.name]: e.target.value });
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
              name={'name'}
              placeholder={'Имя'}
              type={'text'}
              extraClass={styles.input}
              onIconClick={onIconClick}
              onBlur={handleBlur}
              icon={'EditIcon'}
              ref={inputRef}
              value={form.name || ''}
              onChange={handleChange}
              error={false}
              size={'default'}
              disabled={disabled}
            />

            <EmailInput
              name={'email'}
              value={form.email || ''}
              placeholder="Логин"
              onChange={handleChange}
              extraClass={styles.input}
              isIcon={true}
            />

            <PasswordInput
              name={'password'}
              icon="EditIcon"
              onChange={handleChange}
              value={form.password || ''}
            />
            <div className={styles.buttons}>
              <button type="button" className={styles.buttonCancel}>
                Отмена
              </button>
              <Button htmlType="submit" type="primary" size="medium">
                Сохранить
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

export default Profile;
