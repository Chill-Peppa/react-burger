import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from '../../services/types/hooks';
import styles from './feed-details-single.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { getOrder } from '../../services/actions/selectedOrder';

import FeedDetailsSingleCard from '../../components/feed-details-single-card/feed-details-single-card';

const FeedDetailsSingle: React.FC = () => {
  const dispatch = useDispatch();
  const { number } = useParams();
  const order = useSelector((store) => store.selectedOrder.order);

  React.useEffect(() => {
    dispatch(getOrder(number));
  }, [dispatch, number]);

  return (
    <div className={styles.feedDetails}>
      <p className={`${styles.order} text text_type_digits-default`}>#034533</p>
      <h2 className={`text text_type_main-medium mt-10 mb-3`}>
        Black Hole Singularity острый бургер
      </h2>
      <p className={`${styles.done} text text_type_main-default mb-15`}>
        Выполнен
      </p>
      <p className={'text text_type_main-medium mb-6'}>Состав:</p>

      <ul className={styles.ingredientsList}>
        <FeedDetailsSingleCard />
        <FeedDetailsSingleCard />
        <FeedDetailsSingleCard />
        <FeedDetailsSingleCard />
        <FeedDetailsSingleCard />
        <FeedDetailsSingleCard />
        <FeedDetailsSingleCard />
        <FeedDetailsSingleCard />
        <FeedDetailsSingleCard />
      </ul>

      <div className={`${styles.bottom} mt-10`}>
        <span className="text text_type_main-default text_color_inactive">
          Вчера, 13:50
        </span>
        <div className={styles.totalContainer}>
          <span className="text text_type_digits-default">510</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};

export default FeedDetailsSingle;
