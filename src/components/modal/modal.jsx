import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { ESCAPE_KEY_CODE } from '../../utils/constants';

import ModalOverlay from '../modal-overlay/modal-overlay';

const modalRoot = document.getElementById('react-modals');

const Modal = ({ title, children, onClose }) => {
  //для закрытия по esc
  React.useEffect(() => {
    const closeByEsc = (e) => {
      if (e.keyCode === ESCAPE_KEY_CODE) {
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

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Modal;
