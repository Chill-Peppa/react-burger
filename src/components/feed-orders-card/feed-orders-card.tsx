import React from 'react';
import styles from './feed-orders-card.module.css';
import { useLocation } from 'react-router-dom';
import {
  CurrencyIcon,
  FormattedDate,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { IOrder } from '../../types/ingredientsTypes';
import { useSelector } from '../../services/types/hooks';

interface IFeedOrdersCard {
  order: IOrder;
}

const FeedOrdersCard: React.FC<IFeedOrdersCard> = ({ order }) => {
  const location = useLocation();
  const { ingredients } = useSelector((store) => store.ingredients);
  console.log(ingredients);

  //статус заказа
  const getStatus = (): string | undefined => {
    if (order.status === 'created') {
      return 'Создан';
    }
    if (order.status === 'done') {
      return 'Выполнен';
    }
    if (order.status === 'pending') {
      return 'Готовится';
    }
  };

  return (
    <li
      className={
        location.pathname === '/feed' ? styles.card : styles.cardSecondary
      }>
      <div className={styles.containerHeader}>
        <span className="text text_type_digits-default">
          {`#${order.number}`}
        </span>
        <span className="text text_type_main-default text_color_inactive">
          <FormattedDate date={new Date(order.createdAt)} />
        </span>
      </div>
      <h2 className="text text_type_main-medium mt-6 mb-6">{order.name}</h2>
      {location.pathname === '/feed' ? (
        ''
      ) : (
        <span
          className={`text text_type_main-small mb-6 ${
            order.status === 'done' ? styles.status : ''
          }`}>
          {getStatus()}
        </span>
      )}
      <div className={styles.containerBottom}>
        <ul className={styles.ingredientsIcons}>
          {ingredients.map((ingredient) => (
            <li className={styles.point}>
              <img
                src={ingredient.image}
                alt={ingredient.name}
                className={styles.imageIngredient}
              />
            </li>
          ))}
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
