import React from 'react';
import styles from './profile.module.css';
import { useDispatch, useSelector } from '../../services/types/hooks';
import { NavLink, useLocation } from 'react-router-dom';
import {
  EmailInput,
  PasswordInput,
  Input,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import FeedOrders from '../feed-orders/feed-orders';

import { logout, updateUserInfo } from '../../services/actions/auth';
import { IUser } from '../../types/ingredientsTypes';

function Profile() {
  const { user } = useSelector((store) => store.user);

  console.log(user);

  //для состояния инпутов
  const [disabled, setDisabled] = React.useState(true);

  const [form, setForm] = React.useState<IUser>({
    name: '',
    email: '',
    password: '',
  });

  const inputRef = React.useRef<HTMLInputElement>(null);
  const location = useLocation();
  const dispatch = useDispatch();

  const onIconClick = () => {
    setDisabled(false);
  };

  const handleBlur = () => {
    setDisabled(true);
  };

  React.useEffect(() => {
    if (!disabled && inputRef.current) {
      inputRef.current.focus();
    }

    if (user) {
      setForm({ name: user.name, email: user.email, password: '' });
    }
  }, [disabled, user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    setForm({ ...user });
  };

  const handleUpdate = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(updateUserInfo(form));
  };

  const returnLinkState = ({ isActive }: { isActive: boolean }) => {
    return `${isActive ? styles.active : styles.link}`;
  };

  const handleLogout = () => {
    dispatch(logout());
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
          {location.pathname === '/profile' ? (
            <p className="mt-20 text text_type_main-default text_color_inactive">
              В этом разделе вы можете
              <br />
              изменить&nbsp;свои&nbsp;персональные данные
            </p>
          ) : (
            <p className="mt-20 text text_type_main-default text_color_inactive">
              В этом разделе вы можете
              <br />
              просмотреть&nbsp;свою&nbsp;историю заказов
            </p>
          )}
        </nav>
        {location.pathname === '/profile/orders' ? (
          <FeedOrders title="" />
        ) : (
          <form className={styles.form}>
            <Input
              name={'name'}
              placeholder={'Имя'}
              type={'text'}
              extraClass={styles.input}
              onIconClick={onIconClick}
              onBlur={handleBlur}
              icon={'EditIcon'}
              ref={inputRef}
              value={form.name}
              onChange={handleChange}
              error={false}
              size={'default'}
              disabled={disabled}
            />

            <EmailInput
              name={'email'}
              value={form.email}
              placeholder="Логин"
              onChange={handleChange}
              extraClass={styles.input}
              isIcon={true}
            />

            <PasswordInput
              name={'password'}
              icon="EditIcon"
              onChange={handleChange}
              value={form.password}
            />
            <div className={styles.buttons}>
              <button
                type="button"
                className={styles.buttonCancel}
                onClick={handleCancel}>
                Отмена
              </button>
              <Button
                htmlType="submit"
                type="primary"
                size="medium"
                onClick={handleUpdate}>
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
