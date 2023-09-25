import React from 'react';
import styles from './burger-ingredients.module.css';
import IngredientCard from '../ingredient-card/ingredient-card';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { burgerData } from '../../utils/data';
import { tabs } from '../../utils/constants';

const BurgerIngredients = () => {
  const [current, setCurrent] = React.useState('bun');

  const bunArray = burgerData.filter(
    (ingredient) => ingredient.type === `${tabs.BUN}`,
  );

  const sauceArray = burgerData.filter(
    (ingredient) => ingredient.type === `${tabs.SAUCE}`,
  );

  const mainIngredientsArray = burgerData.filter(
    (ingredient) => ingredient.type === `${tabs.MAIN}`,
  );

  return (
    <section className={styles.section}>
      <h1 className={`${styles.title} text text_type_main-large`}>
        Соберите бургер
      </h1>

      <div className={styles.tabContainer}>
        <Tab
          value={tabs.BUN}
          active={current === `${tabs.BUN}`}
          onClick={setCurrent}>
          Булки
        </Tab>
        <Tab
          value={tabs.SAUCE}
          active={current === `${tabs.SAUCE}`}
          onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab
          value={tabs.MAIN}
          active={current === `${tabs.MAIN}`}
          onClick={setCurrent}>
          Начинки
        </Tab>
      </div>

      <div className={styles.ingredientsContainer}>
        <h2 className={`${styles.subtitle} text text_type_main-medium`}>
          Булки
        </h2>
        <ul className={styles.ingredientsList}>
          {bunArray.map(
            (ingredient) =>
              ingredient.type === `${tabs.BUN}` && (
                <IngredientCard
                  key={ingredient._id}
                  ingredientData={ingredient}
                />
              ),
          )}
        </ul>

        <h2 className={`${styles.subtitle} text text_type_main-medium`}>
          Соусы
        </h2>
        <ul className={styles.ingredientsList}>
          {sauceArray.map(
            (ingredient) =>
              ingredient.type === `${tabs.SAUCE}` && (
                <IngredientCard
                  key={ingredient._id}
                  ingredientData={ingredient}
                />
              ),
          )}
        </ul>

        <h2 className={`${styles.subtitle} text text_type_main-medium`}>
          Начинки
        </h2>
        <ul className={styles.ingredientsList}>
          {mainIngredientsArray.map(
            (ingredient) =>
              ingredient.type === `${tabs.MAIN}` && (
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
