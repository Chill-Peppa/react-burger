//right side of feed

import React from 'react';
import styles from './feed-details.module.css';
import { useSelector } from '../../services/types/hooks';
import { IOrder } from '../../types/ingredientsTypes';

const FeedDetails: React.FC = () => {
  const { orders, total, totalToday } = useSelector((store) => store.ws);
  console.log(total);

  const getOrdersByStatus = (orders: IOrder[], status: string) => {
    const sortedOrders = orders.filter((item) => item.status === status);
    return sortedOrders.map((item) => item.number).slice(0, 11);
  };

  return (
    <div className={styles.feedDetails}>
      <div className={styles.orderNumbersContainer}>
        <div className={styles.done}>
          <h2 className="text text_type_main-medium mb-6">Готовы:</h2>
          <ul className={styles.listDone}>
            {getOrdersByStatus(orders, 'done').map((item) => (
              <li key={item} className={'text text_type_digits-default'}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.inProgress}>
          <h2 className="text text_type_main-medium mb-6">В работе:</h2>
          <ul className={styles.listInProgress}>
            {getOrdersByStatus(orders, 'pending').length > 0 ? (
              getOrdersByStatus(orders, 'pending').map((item) => (
                <li key={item} className={'text text_type_digits-default'}>
                  {item}
                </li>
              ))
            ) : (
              <p className="text text_type_main-medium mb-6">
                Все заказы выданы
              </p>
            )}
          </ul>
        </div>
      </div>

      <h2 className="text text_type_main-medium mt-15">
        Выполнено за всё время:
      </h2>
      <p className={`${styles.digits} text text_type_digits-large`}>{total}</p>
      <h2 className="text text_type_main-medium mt-15">
        Выполнено за сегодня:
      </h2>
      <p className={`${styles.digits} text text_type_digits-large`}>
        {totalToday}
      </p>
    </div>
  );
};

export default FeedDetails;
