import React from 'react';
import styles from './modal-overlay.module.css';

const ModalOverlay = ({ children }) => {
  return <div className={styles.background}>{children}</div>;
};

export default ModalOverlay;
