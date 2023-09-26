import React from 'react';
import styles from './modal.module.css';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';

const Modal = ({ title, children }) => {
  return (
    <ModalOverlay>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <h2 className="text text_type_main-large">{title}</h2>
          <button type="button" className={styles.close}>
            <CloseIcon type="primary" />
          </button>
        </div>
        {children}
      </div>
    </ModalOverlay>
  );
};

export default Modal;
