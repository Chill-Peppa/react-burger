import React from 'react';
import styles from './feed-orders-card.module.css';
import { Link, useLocation } from 'react-router-dom';
import {
  CurrencyIcon,
  FormattedDate,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { IOrder, IIngredient } from '../../types/ingredientsTypes';
import { useSelector } from '../../services/types/hooks';

interface IFeedOrdersCard {
  order: IOrder;
}

const FeedOrdersCard: React.FC<IFeedOrdersCard> = ({ order }) => {
  const location = useLocation();
  const { ingredients } = useSelector((store) => store.ingredients);
  const [plusArray, setPlusArray] = React.useState<IIngredient[]>([]);

  /*---- Тут получаю массив для отрисовки ингредиентов ----*/

  const arrWithIngredients = React.useMemo(() => {
    const uniqueChosenIngredients = Array.from(new Set(order.ingredients));

    // достанем элементы из массива ВСЕХ ингредиентов
    const newChosenIngredients = uniqueChosenIngredients.map((ingredient) => {
      return ingredients.find((ingr) => ingr._id === ingredient);
    });
    setPlusArray(newChosenIngredients as IIngredient[]);

    return newChosenIngredients;
  }, [order.ingredients, ingredients]);

  const plusIngredients = plusArray.length - 5;

  /*--------- Считаем сумму заказов ---------*/
  const totalPrice = React.useMemo(() => {
    const totalPriceArrays = order.ingredients.map((ingredient) => {
      return ingredients.find((ingr) => ingr._id === ingredient);
    });

    const mainTotal = totalPriceArrays.filter((main) => main?.type !== 'bun');
    const bunsTotal = totalPriceArrays.filter((bun) => bun?.type === 'bun');

    const total =
      (mainTotal as IIngredient[]).reduce((prevItem: number, ingredient) => {
        return prevItem + ingredient?.price;
      }, 0) +
      (bunsTotal as IIngredient[]).reduce((prevItem: number, ingredient) => {
        return prevItem + ingredient?.price;
      }, 0) *
        2;
    //console.log('массив:', totalPriceArrays, 'цена:', total);

    if (isNaN(total)) {
      return 0;
    } else {
      return total;
    }
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
    <Link
      to={`/feed/${order.number}`}
      className={styles.link}
      state={{ backgroundLocation: location }}>
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
                      <span className={styles.count}>+{plusIngredients}</span>
                    </li>
                  );
                }
              } else {
                return <div key={index}>loading</div>;
              }
            })}
          </ul>
          <div className={styles.containerPrice}>
            <span className="text text_type_digits-default">{totalPrice}</span>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </li>
    </Link>
  );
};

export default FeedOrdersCard;
