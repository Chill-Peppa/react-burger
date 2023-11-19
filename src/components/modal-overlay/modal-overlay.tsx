import React from 'react';
import styles from './modal-overlay.module.css';

interface IModalOverlayProps {
  onCloseOverlay: () => void;
}

const ModalOverlay: React.FC<IModalOverlayProps> = ({ onCloseOverlay }) => {
  const closeByOverlay = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onCloseOverlay();
    }
  };

  return <div className={styles.background} onClick={closeByOverlay}></div>;
};

export default ModalOverlay;
