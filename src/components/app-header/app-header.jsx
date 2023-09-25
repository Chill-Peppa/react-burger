import React from 'react';
import styles from './app-header.module.css';

import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import { Link } from 'react-router-dom';

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <div className={styles.leftSide}>
          <ul className={styles.menuList}>
            <li>
              <Link to="/" className={styles.menuLink}>
                <BurgerIcon type="primary" />
                <span className="text text_type_main-default">Конструктор</span>
              </Link>
            </li>
            <li>
              <Link to="/" className={styles.menuLink}>
                <ListIcon type="secondary" />
                <span className="text text_type_main-default text_color_inactive">
                  Лента заказов
                </span>
              </Link>
            </li>
          </ul>

          <Link to="/">
            <Logo />
          </Link>
        </div>

        <Link to="/" className={styles.profileLink}>
          <ProfileIcon type="secondary" />
          <span className="text text_type_main-default text_color_inactive">
            Личный кабинет
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default AppHeader;
