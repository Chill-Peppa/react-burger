import React from 'react';
import styles from './main.module.css';

import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

const Main = ({
  onIngredientOpen,
  onOrderOpen,
  ingredientsData,
  onIngredientClick,
}) => {
  return (
    <main className={styles.main}>
      <BurgerIngredients
        onIngredientOpen={onIngredientOpen}
        ingredientsData={ingredientsData}
        onIngredientClick={onIngredientClick}
      />
      <BurgerConstructor
        onOrderOpen={onOrderOpen}
        ingredientsData={ingredientsData}
      />
    </main>
  );
};

export default Main;
