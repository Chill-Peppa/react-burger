import React from 'react';
import styles from './order-details.module.css';
import done from '../../images/done.svg';

import { NewOrderContext } from '../../services/newOrderContext';

const OrderDetails = () => {
  const newOrderNumber = React.useContext(NewOrderContext);

  return (
    <div className={styles.orderDetails}>
      <h3 className="text text_type_digits-large mt-4 mb-8">
        {newOrderNumber}
      </h3>
      <span className="text text_type_main-medium mb-15">
        идентификатор заказа
      </span>
      <img src={done} alt="Заказ начали готовить" />
      <p className="text text_type_main-small mt-15 mb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-small text_color_inactive mb-30">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};

export default OrderDetails;
