import React from 'react';
import mainStyles from './main.module.css';

import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

const Main = () => {
  return (
    <main className={mainStyles.main}>
      <BurgerIngredients />
      <BurgerConstructor />
    </main>
  );
};

export default Main;
