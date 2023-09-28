import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';

const Modal = ({ title, children, onClose }) => {
  const modalRoot = document.getElementById('react-modals');

  //для закрытия по esc
  React.useEffect(() => {
    const closeByEsc = (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };

    window.addEventListener('keydown', closeByEsc);
    return () => window.removeEventListener('keydown', closeByEsc);
  }, [onClose]);

  return ReactDOM.createPortal(
    <ModalOverlay onCloseOverlay={onClose}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <h2 className="text text_type_main-large">{title}</h2>
          <button type="button" className={styles.close} onClick={onClose}>
            <CloseIcon type="primary" />
          </button>
        </div>
        {children}
      </div>
    </ModalOverlay>,
    modalRoot,
  );
};

export default Modal;
