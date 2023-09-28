import React from 'react';
import styles from './ingredient-card-list.module.css';

import IngredientCard from '../ingredient-card/ingredient-card';

const IngredientCardList = ({
  title,
  ingredientsArray,
  typeIngredient,
  onIngredientOpen,
  onIngredientClick,
}) => {
  return (
    <>
      <h2 className={`${styles.subtitle} text text_type_main-medium`}>
        {title}
      </h2>
      <ul className={styles.ingredientsList}>
        {ingredientsArray.map(
          (ingredient) =>
            ingredient.type === typeIngredient && (
              <IngredientCard
                key={ingredient._id}
                ingredient={ingredient}
                ingredientData={ingredient}
                onIngredientOpen={onIngredientOpen}
                onIngredientClick={onIngredientClick}
              />
            ),
        )}
      </ul>
    </>
  );
};

export default IngredientCardList;
