import React from 'react';
import styles from './main.module.css';

import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

const Main = ({ onIngredientOpen, onOrderOpen }) => {
  return (
    <main className={styles.main}>
      <BurgerIngredients onIngredientOpen={onIngredientOpen} />
      <BurgerConstructor onOrderOpen={onOrderOpen} />
    </main>
  );
};

export default Main;
