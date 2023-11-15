import React from 'react';
import styles from './app-header.module.css';

import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import { NavLink, Link, useLocation } from 'react-router-dom';

const AppHeader: React.FC = () => {
  const location = useLocation();

  const returnLinkState = ({ isActive }: { isActive: boolean }) => {
    return `${isActive ? styles.active : styles.menuLink}`;
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <div className={styles.leftSide}>
          <ul className={styles.menuList}>
            <li>
              <NavLink to="/" className={returnLinkState}>
                <BurgerIcon
                  type={location.pathname === '/' ? 'primary' : 'secondary'}
                />
                <span className="text text_type_main-default">Конструктор</span>
              </NavLink>
            </li>
            <li>
              <Link to="#" className={styles.menuLink}>
                <ListIcon type="secondary" />
                <span className="text text_type_main-default">
                  Лента заказов
                </span>
              </Link>
            </li>
          </ul>
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>

        <NavLink to="/profile" className={returnLinkState}>
          <ProfileIcon
            type={location.pathname === '/profile' ? 'primary' : 'secondary'}
          />
          <span className="text text_type_main-default">Личный кабинет</span>
        </NavLink>
      </nav>
    </header>
  );
};

export default AppHeader;
