import React from 'react';
import styles from './feed-orders-card.module.css';
import { useLocation } from 'react-router-dom';
import bun from '../../images/test.svg';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const FeedOrdersCard: React.FC = () => {
  const location = useLocation();

  return (
    <li
      className={
        location.pathname === '/feed' ? styles.card : styles.cardSecondary
      }>
      <div className={styles.containerHeader}>
        <span className="text text_type_digits-default">#034535</span>
        <span className="text text_type_main-default text_color_inactive">
          Сегодня, 16:20
        </span>
      </div>
      <h2 className="text text_type_main-medium mt-6 mb-6">
        Death Star Starship Main бургер
      </h2>
      <div className={styles.containerBottom}>
        <ul className={styles.ingredientsIcons}>
          <img src={bun as unknown as string} alt="блаблабла" />
          <img src={bun as unknown as string} alt="блаблабла" />
          <img src={bun as unknown as string} alt="блаблабла" />
        </ul>
        <div className={styles.containerPrice}>
          <span className="text text_type_digits-default">480</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </li>
  );
};

export default FeedOrdersCard;
