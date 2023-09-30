import React from 'react';
import styles from './ingredient-card-list.module.css';
import PropTypes from 'prop-types';
import { ingredientsDataType } from '../../utils/constants';

import IngredientCard from '../ingredient-card/ingredient-card';

const IngredientCardList = ({
  title,
  ingredientsArray,
  onIngredientOpen,
  onIngredientClick,
}) => {
  return (
    <>
      <h2 className={`${styles.subtitle} text text_type_main-medium`}>
        {title}
      </h2>
      <ul className={styles.ingredientsList}>
        {ingredientsArray.map((ingredient) => (
          <IngredientCard
            key={ingredient._id}
            ingredient={ingredient}
            onIngredientOpen={onIngredientOpen}
            onIngredientClick={onIngredientClick}
          />
        ))}
      </ul>
    </>
  );
};

IngredientCardList.propTypes = {
  title: PropTypes.string.isRequired,
  onIngredientOpen: PropTypes.func.isRequired,
  onIngredientClick: PropTypes.func.isRequired,
  ingredientsArray: PropTypes.arrayOf(ingredientsDataType.isRequired)
    .isRequired,
};

export default IngredientCardList;
