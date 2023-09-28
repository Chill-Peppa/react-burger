import React from 'react';
import styles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

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

ModalOverlay.propTypes = {
  onCloseOverlay: PropTypes.func.isRequired,
  children: PropTypes.elementType.isRequired,
};

export default ModalOverlay;
