import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from '../../services/types/hooks';
import styles from './feed-details-single.module.css';
import {
  CurrencyIcon,
  FormattedDate,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { IIngredient } from '../../types/ingredientsTypes';
import { getOrder } from '../../services/actions/selectedOrder';

const FeedDetailsSingle: React.FC = () => {
  const dispatch = useDispatch();
  const { number } = useParams();

  const order = useSelector((store) => store.selectedOrder.order);
  const { ingredients } = useSelector((store) => store.ingredients);
  const [totalSum, setTotalSum] = React.useState<number>(0);

  React.useEffect(() => {
    dispatch(getOrder(number));
  }, [dispatch, number]);

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

  //Массив для отрисовки ингредиентов
  const arrWithIngredients = React.useMemo(() => {
    const uniqueChosenIngredients = Array.from(new Set(order?.ingredients));

    // достанем элементы из массива ВСЕХ ингредиентов
    const newChosenIngredients = uniqueChosenIngredients.map((ingredient) => {
      return ingredients.find((ingr) => ingr._id === ingredient);
    });

    return newChosenIngredients;
  }, [order.ingredients, ingredients]);
  console.log(arrWithIngredients);

  //подсчет количества ингрудиентов
  const countIngredients = (type: string, id: string) => {
    if (type === 'bun') {
      return 2;
    } else {
      return order.ingredients.filter((item) => item === id).length;
    }
  };

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

  React.useEffect(() => {
    if (Object.keys(order).length !== 0 && order.ingredients.length !== 0) {
      setTotalSum(totalPrice);
    }
  }, [order, totalPrice]);

  return (
    <>
      {Object.keys(order).length && (
        <div className={styles.feedDetails}>
          <p className={`${styles.order} text text_type_digits-default`}>
            #{order.number}
          </p>
          <h2 className={`text text_type_main-medium mt-10 mb-3`}>
            {order.name}
          </h2>
          <p className={`${styles.done} text text_type_main-default mb-15`}>
            {getStatus()}
          </p>
          <p className={'text text_type_main-medium mb-6'}>Состав:</p>

          <ul className={styles.ingredientsList}>
            {arrWithIngredients!.map((ingredient, index) => {
              if (ingredient !== undefined) {
                return (
                  <li className={styles.card} key={index}>
                    <img
                      className={styles.img}
                      src={ingredient!.image_mobile}
                      alt={ingredient!.name}
                    />
                    <div className={styles.container}>
                      <p
                        className={`${styles.title} text text_type_main-default`}>
                        {ingredient!.name}
                      </p>
                      <div className={styles.totalContainer}>
                        <span className="text text_type_digits-default">
                          {countIngredients(ingredient!.type, ingredient!._id)}{' '}
                          x {ingredient!.price}
                        </span>
                        <CurrencyIcon type="primary" />
                      </div>
                    </div>
                  </li>
                );
              } else {
                return <>Загрузка</>;
              }
            })}
          </ul>

          <div className={`${styles.bottom} mt-10`}>
            <span className="text text_type_main-default text_color_inactive">
              <FormattedDate date={new Date(order.createdAt)} />
            </span>
            <div className={styles.totalContainer}>
              <span className="text text_type_digits-default">{totalSum}</span>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedDetailsSingle;
