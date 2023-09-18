import React from 'react';
import headerStyles from './app-header.module.css';

import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import { Link } from 'react-router-dom';

const AppHeader = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.leftSide}>
        <nav>
          <ul className={headerStyles.menuList}>
            <li>
              <Link to="/" className={headerStyles.menuLink}>
                <BurgerIcon type="primary" />
                <span className="text text_type_main-default">Конструктор</span>
              </Link>
            </li>
            <li>
              <Link to="/" className={headerStyles.menuLink}>
                <ListIcon type="secondary" />
                <span className="text text_type_main-default text_color_inactive">
                  Лента заказов
                </span>
              </Link>
            </li>
          </ul>
        </nav>
        <Logo />
      </div>

      <Link to="/" className={headerStyles.profileLink}>
        <ProfileIcon type="secondary" />
        <span className="text text_type_main-default text_color_inactive">
          Личный кабинет
        </span>
      </Link>
    </header>
  );
};

export default AppHeader;
