import React from 'react';
import styles from './main.module.css';

import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

const Main = ({ onIngredientOpen, onOrderOpen, ingredientsData }) => {
  return (
    <main className={styles.main}>
      <BurgerIngredients
        onIngredientOpen={onIngredientOpen}
        ingredientsData={ingredientsData}
      />
      <BurgerConstructor
        onOrderOpen={onOrderOpen}
        ingredientsData={ingredientsData}
      />
    </main>
  );
};

export default Main;
