import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ESCAPE_KEY_CODE } from '../../utils/constants';

import ModalOverlay from '../modal-overlay/modal-overlay';

const modalRoot = document.getElementById('react-modals') as HTMLElement;

interface IModalProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<IModalProps> = ({ title, children, onClose }) => {
  //для закрытия по esc
  React.useEffect(() => {
    const closeByEsc = (e: KeyboardEvent) => {
      if (e.key === ESCAPE_KEY_CODE) {
        onClose();
      }
    };

    window.addEventListener('keydown', closeByEsc);
    return () => window.removeEventListener('keydown', closeByEsc);
  }, [onClose]);

  return ReactDOM.createPortal(
    <>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <h2 className="text text_type_main-large">{title}</h2>
          <button type="button" className={styles.close} onClick={onClose}>
            <CloseIcon type="primary" />
          </button>
        </div>
        {children}
      </div>
      <ModalOverlay onCloseOverlay={onClose} />
    </>,
    modalRoot,
  );
};

export default Modal;
