import React from 'react';
import styles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = ({ onCloseOverlay }) => {
  const closeByOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onCloseOverlay();
    }
  };

  return <div className={styles.background} onClick={closeByOverlay}></div>;
};

ModalOverlay.propTypes = {
  onCloseOverlay: PropTypes.func.isRequired,
};

export default ModalOverlay;
