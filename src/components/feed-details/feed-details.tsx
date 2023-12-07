//right side of feed

import React from 'react';
import styles from './feed-details.module.css';

const FeedDetails: React.FC = () => {
  return (
    <div className={styles.feedDetails}>
      <div className={styles.orderNumbersContainer}>
        <div className={styles.done}>
          <h2 className="text text_type_main-medium mb-6">Готовы:</h2>
          <ul className={styles.listDone}>
            <li className={'text text_type_digits-default'}>034585</li>
            <li className={'text text_type_digits-default'}>589654</li>
            <li className={'text text_type_digits-default'}>478569</li>
            <li className={'text text_type_digits-default'}>589654</li>
            <li className={'text text_type_digits-default'}>478569</li>
            <li className={'text text_type_digits-default'}>478569</li>
          </ul>
        </div>
        <div className={styles.inProgress}>
          <h2 className="text text_type_main-medium mb-6">В работе:</h2>
          <ul className={styles.listInProgress}>
            <li className={'text text_type_digits-default'}>456789</li>
            <li className={'text text_type_digits-default'}>414785</li>
            <li className={'text text_type_digits-default'}>485475</li>
          </ul>
        </div>
      </div>

      <h2 className="text text_type_main-medium mt-15">
        Выполнено за всё время:
      </h2>
      <p className={`${styles.digits} text text_type_digits-large`}>28752</p>
      <h2 className="text text_type_main-medium mt-15">
        Выполнено за сегодня:
      </h2>
      <p className={`${styles.digits} text text_type_digits-large`}>138</p>
    </div>
  );
};

export default FeedDetails;
