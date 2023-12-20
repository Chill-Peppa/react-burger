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
  //все ингредиенты
  const { ingredients } = useSelector((store) => store.ingredients);

  /*------------------ Тут получаю массив для отрисовки ингредиентов -----------------*/

  const arrWithIngredients = React.useMemo(() => {
    const uniqueChosenIngredients = Array.from(new Set(order.ingredients));

    // достанем элементы из массива ВСЕХ ингредиентов
    const newChosenIngredients = uniqueChosenIngredients.map((ingredient) => {
      return ingredients.find((ingr) => ingr._id === ingredient);
    });

    return newChosenIngredients;
  }, [order.ingredients, ingredients]);

  /*--------- Считаем сумму заказов ---------*/
  const totalPrice = React.useMemo(() => {
    const totalPriceArrays = order.ingredients.map((ingredient) => {
      return ingredients.find((ingr) => ingr._id === ingredient)?.price || 0;
    });

    const total = totalPriceArrays.reduce((prevItem: number, price: number) => {
      return prevItem + price;
    }, 0);
    console.log('массив:', totalPriceArrays, 'цена:', total);

    return total;
  }, [order.ingredients, ingredients]);

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
          {arrWithIngredients.slice(0, 6).map((ingredient, index) => {
            if (ingredient !== undefined) {
              if (index < 5) {
                return (
                  <li className={styles.point} key={index}>
                    <img
                      src={ingredient!.image}
                      alt={ingredient!.name}
                      className={styles.imageIngredient}
                    />
                  </li>
                );
              } else {
                return (
                  <li className={styles.point} key={index}>
                    <img
                      src={ingredient!.image}
                      alt={ingredient!.name}
                      className={styles.lastIngredient}
                    />
                    <span className={styles.count}>+1</span>
                  </li>
                );
              }
            } else {
              return <div>loading</div>;
            }
          })}
        </ul>
        <div className={styles.containerPrice}>
          <span className="text text_type_digits-default">{totalPrice}</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </li>
  );
};

export default FeedOrdersCard;
