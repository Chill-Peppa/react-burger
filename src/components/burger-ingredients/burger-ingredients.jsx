import React from 'react';
import ingredientsStyles from './burger-ingredients.module.css';
import IngredientCard from '../ingredient-card/ingredient-card';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { burgerData } from '../../utils/data';
import { tabs } from '../../utils/constants';

const BurgerIngredients = () => {
  const [current, setCurrent] = React.useState('bun');

  const bunArray = burgerData.filter((ingredient) => ingredient.type === 'bun');

  const sauceArray = burgerData.filter(
    (ingredient) => ingredient.type === 'sauce',
  );

  const mainIngredientsArray = burgerData.filter(
    (ingredient) => ingredient.type === 'main',
  );

  return (
    <section className={ingredientsStyles.section}>
      <h1 className={`${ingredientsStyles.title} text text_type_main-large`}>
        Соберите бургер
      </h1>

      <div className={ingredientsStyles.tabContainer}>
        <Tab
          value="bun"
          active={current === `${tabs.BUN}`}
          onClick={setCurrent}>
          Булки
        </Tab>
        <Tab
          value="sauce"
          active={current === `${tabs.SAUCE}`}
          onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab
          value="main"
          active={current === `${tabs.MAIN}`}
          onClick={setCurrent}>
          Начинки
        </Tab>
      </div>

      <div className={ingredientsStyles.ingredientsContainer}>
        <h2
          className={`${ingredientsStyles.subtitle} text text_type_main-medium`}>
          Булки
        </h2>
        <ul className={ingredientsStyles.ingredientsList}>
          {bunArray.map(
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
          {sauceArray.map(
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
          {mainIngredientsArray.map(
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
