import React from 'react';
import styles from './ingredient-details.module.css';

import Modal from '../modal/modal';
import logo from '../../images/done.svg';

const IngredientDetails = () => {
  return (
    <Modal title="Детали ингредиента">
      <div className={styles.ingredientDetails}>
        <img className={styles.image} src={logo} alt="Ингредиент" />
        <p className="text text_type_main-medium mt-4 mb-8">
          Биокотлета из марсианской магнолии
        </p>

        <ul className={styles.propertiesContainer}>
          <li className={styles.property}>
            <span className="text text_type_main-default text_color_inactive">
              Калории,ккал
            </span>
            <span className="text text_type_digits-default text_color_inactive">
              244,4
            </span>
          </li>
          <li className={styles.property}>
            <span className="text text_type_main-default text_color_inactive">
              Белки,г
            </span>
            <span className="text text_type_digits-default text_color_inactive">
              12,2
            </span>
          </li>
          <li className={styles.property}>
            <span className="text text_type_main-default text_color_inactive">
              Жиры,г
            </span>
            <span className="text text_type_digits-default text_color_inactive">
              17,2
            </span>
          </li>
          <li className={styles.property}>
            <span className="text text_type_main-default text_color_inactive">
              Углеводы,г
            </span>
            <span className="text text_type_digits-default text_color_inactive">
              10,2
            </span>
          </li>
        </ul>
      </div>
    </Modal>
  );
};

export default IngredientDetails;
