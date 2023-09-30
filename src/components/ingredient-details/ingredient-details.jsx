import React from 'react';
import styles from './ingredient-details.module.css';
import PropTypes from 'prop-types';
import { ingredientsDataType } from '../../utils/constants';

import Modal from '../modal/modal';

const IngredientDetails = ({ onClose, ingredient }) => {
  return (
    <Modal onClose={onClose} title="Детали ингредиента">
      <div className={styles.ingredientDetails}>
        <img
          className={styles.image}
          src={ingredient.image_large}
          alt="Ингредиент"
        />
        <p className="text text_type_main-medium mt-4 mb-8">
          {ingredient.name}
        </p>

        <ul className={styles.propertiesContainer}>
          <li className={styles.property}>
            <span className="text text_type_main-default text_color_inactive">
              Калории,ккал
            </span>
            <span className="text text_type_digits-default text_color_inactive">
              {ingredient.calories}
            </span>
          </li>
          <li className={styles.property}>
            <span className="text text_type_main-default text_color_inactive">
              Белки,г
            </span>
            <span className="text text_type_digits-default text_color_inactive">
              {ingredient.proteins}
            </span>
          </li>
          <li className={styles.property}>
            <span className="text text_type_main-default text_color_inactive">
              Жиры,г
            </span>
            <span className="text text_type_digits-default text_color_inactive">
              {ingredient.fat}
            </span>
          </li>
          <li className={styles.property}>
            <span className="text text_type_main-default text_color_inactive">
              Углеводы,г
            </span>
            <span className="text text_type_digits-default text_color_inactive">
              {ingredient.carbohydrates}
            </span>
          </li>
        </ul>
      </div>
    </Modal>
  );
};

IngredientDetails.propTypes = {
  onClose: PropTypes.func.isRequired,
  ingredient: ingredientsDataType.isRequired,
};

export default IngredientDetails;
