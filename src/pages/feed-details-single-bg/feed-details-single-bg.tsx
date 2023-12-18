import React from 'react';
import styles from './feed-details-single-bg.module.css';
import FeedDetailsSingle from '../feed-details-single/feed-details-single';

function FeedDetailsSingleBg() {
  return (
    <div className={styles.background}>
      <FeedDetailsSingle />
    </div>
  );
}

export default FeedDetailsSingleBg;
