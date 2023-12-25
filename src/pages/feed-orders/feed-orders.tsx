//left side of feed
import React from 'react';
import styles from './feed-orders.module.css';
import { useLocation } from 'react-router-dom';
import FeedOrdersCard from '../../components/feed-orders-card/feed-orders-card';
import { useSelector } from '../../services/types/hooks';

interface IFeedOrders {
  title: string;
}

const FeedOrders: React.FC<IFeedOrders> = ({ title }) => {
  const location = useLocation();
  const { orders } = useSelector((store) => store.ws);
  const url = location.pathname;
  console.log(url);

  return (
    <div
      className={
        location.pathname === '/feed'
          ? styles.feedOrders
          : styles.feedOrdersSecondary
      }>
      <h1 className="text text_type_main-large mt-10 mb-5">{title}</h1>
      <ul className={styles.feedList}>
        {location.pathname === '/feed'
          ? orders.map((order) => (
              <FeedOrdersCard key={order._id} order={order} url={url} />
            ))
          : orders
              .map((order) => (
                <FeedOrdersCard url={url} key={order._id} order={order} />
              ))
              .reverse()}
      </ul>
    </div>
  );
};

export default FeedOrders;
