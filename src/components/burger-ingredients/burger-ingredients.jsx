import React from 'react';
import ingredientsStyles from './burger-ingredients.module.css';

import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerIngredients = () => {
  return (
    <section className={ingredientsStyles.section}>
      <h1 className={ingredientsStyles.title}>Соберите бургер</h1>
    </section>
  );
};

export default BurgerIngredients;
