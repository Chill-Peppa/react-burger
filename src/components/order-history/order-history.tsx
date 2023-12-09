import React from 'react';
import FeedOrders from '../../pages/feed-orders/feed-orders';
import styles from './order-history.module.css';
import { useDispatch } from '../../services/types/hooks';
import { wsAuthStart, wsAuthClosed } from '../../services/actions/feed';
import { wsUrl } from '../../utils/constants';

const OrderHistory: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(wsAuthStart(wsUrl));
    return () => {
      dispatch(wsAuthClosed());
    };
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <FeedOrders title="" />
    </div>
  );
};

export default OrderHistory;
