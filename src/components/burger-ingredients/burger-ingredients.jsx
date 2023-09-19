import React from 'react';
import ingredientsStyles from './burger-ingredients.module.css';
import IngredientCard from '../ingredient-card/ingredient-card';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { burgerData } from '../../utils/data';

const BurgerIngredients = () => {
  const [current, setCurrent] = React.useState('one');

  return (
    <section className={ingredientsStyles.section}>
      <h1 className={`${ingredientsStyles.title} text text_type_main-large`}>
        Соберите бургер
      </h1>

      <div className={ingredientsStyles.tabContainer}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>

      <div className={ingredientsStyles.ingredientsContainer}>
        <h2
          className={`${ingredientsStyles.subtitle} text text_type_main-medium`}>
          Булки
        </h2>
        <ul className={ingredientsStyles.ingredientsList}>
          {burgerData.map(
            (ingredient) =>
              ingredient.type === 'bun' && (
                <IngredientCard
                  key={ingredient._id}
                  ingredientData={ingredient}
                />
              ),
          )}
        </ul>

        <h2
          className={`${ingredientsStyles.subtitle} text text_type_main-medium`}>
          Соусы
        </h2>
        <ul className={ingredientsStyles.ingredientsList}>
          {burgerData.map(
            (ingredient) =>
              ingredient.type === 'sauce' && (
                <IngredientCard
                  key={ingredient._id}
                  ingredientData={ingredient}
                />
              ),
          )}
        </ul>

        <h2
          className={`${ingredientsStyles.subtitle} text text_type_main-medium`}>
          Начинки
        </h2>
        <ul className={ingredientsStyles.ingredientsList}>
          {burgerData.map(
            (ingredient) =>
              ingredient.type === 'main' && (
                <IngredientCard
                  key={ingredient._id}
                  ingredientData={ingredient}
                />
              ),
          )}
        </ul>
      </div>
    </section>
  );
};

export default BurgerIngredients;
