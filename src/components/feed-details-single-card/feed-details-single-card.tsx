import React from 'react';
import style from './feed-details-single-card.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import bun from '../../images/test.svg';
import { Link, useLocation } from 'react-router-dom';

const FeedDetailsSingleCard: React.FC = () => {
  return (
    <li className={style.card}>
      <img src={bun as unknown as string} alt="blablabla" />
      <div className={style.container}>
        <p className={`${style.title} text text_type_main-default`}>
          Флюоресцентная булка R2-D3
        </p>
        <div className={style.totalContainer}>
          <span className="text text_type_digits-default">2 x 20</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </li>
  );
};

export default FeedDetailsSingleCard;
