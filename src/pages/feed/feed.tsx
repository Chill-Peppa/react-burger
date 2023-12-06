import React from 'react';
import styles from './feed.module.css';
import FeedOrders from '../feed-orders/feed-orders';
import FeedDetails from '../../components/feed-details/feed-details';
import {
  wsConnectionFeedStart,
  wsConnectionFeedClosed,
} from '../../services/actions/feed';
import { useDispatch } from '../../services/types/hooks';
import { wsUrl } from '../../utils/constants';

const Feed: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(wsConnectionFeedStart(wsUrl + '/all'));
    return () => {
      dispatch(wsConnectionFeedClosed());
    };
  }, [dispatch]);

  return (
    <section className={styles.feed}>
      <FeedOrders title="Лента заказов" />
      <FeedDetails />
    </section>
  );
};

export default Feed;
