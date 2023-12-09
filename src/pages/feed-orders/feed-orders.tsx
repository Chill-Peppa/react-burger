//left side of feed
import React from 'react';
import styles from './feed-orders.module.css';
import { useLocation } from 'react-router-dom';
import FeedOrdersCard from '../../components/feed-orders-card/feed-orders-card';

interface IFeedOrders {
  title: string;
}

const FeedOrders: React.FC<IFeedOrders> = ({ title }) => {
  const location = useLocation();

  return (
    <div
      className={
        location.pathname === '/feed'
          ? styles.feedOrders
          : styles.feedOrdersSecondary
      }>
      <h1 className="text text_type_main-large mt-10 mb-5">{title}</h1>
      <ul className={styles.feedList}>
        <FeedOrdersCard />
        <FeedOrdersCard />
        <FeedOrdersCard />
        <FeedOrdersCard />
        <FeedOrdersCard />
      </ul>
    </div>
  );
};

export default FeedOrders;
