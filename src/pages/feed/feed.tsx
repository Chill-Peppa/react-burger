import React from 'react';
import styles from './feed.module.css';
import FeedOrders from '../feed-orders/feed-orders';
import FeedDetails from '../../components/feed-details/feed-details';

const Feed: React.FC = () => {
  return (
    <section className={styles.feed}>
      <FeedOrders title="Лента заказов" />
      <FeedDetails />
    </section>
  );
};

export default Feed;
