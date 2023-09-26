import React from 'react';
import styles from './modal-overlay.module.css';

const ModalOverlay = ({ children, onCloseOverlay }) => {
  const closeByOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onCloseOverlay();
    }
  };

  return (
    <div className={styles.background} onClick={closeByOverlay}>
      {children}
    </div>
  );
};

export default ModalOverlay;
