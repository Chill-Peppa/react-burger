import React from 'react';
import FeedOrders from '../../pages/feed-orders/feed-orders';
import styles from './order-history.module.css';
import { useDispatch } from '../../services/types/hooks';
import { wsAuthStart, wsAuthClosed } from '../../services/actions/feed';
import { wsUrl } from '../../utils/constants';
import { getCookie } from '../../utils/cookies';

const OrderHistory: React.FC = () => {
  const dispatch = useDispatch();
  const token = getCookie('accessToken');
  console.log(token);

  React.useEffect(() => {
    dispatch(wsAuthStart(`${wsUrl}?token=${token}`));
    return () => {
      dispatch(wsAuthClosed());
    };
  }, [dispatch, token]);

  return (
    <div className={styles.container}>
      <FeedOrders title="" />
    </div>
  );
};

export default OrderHistory;
