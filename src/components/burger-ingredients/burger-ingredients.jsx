import React from 'react';
import styles from './burger-ingredients.module.css';
import IngredientCardList from '../ingredient-card-list/ingredient-card-list';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { burgerData } from '../../utils/data';
import { tabs } from '../../utils/constants';

const BurgerIngredients = ({ onIngredientOpen }) => {
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
        <IngredientCardList
          title="Булки"
          ingredientsArray={bunArray}
          typeIngredient={`${tabs.BUN}`}
          onIngredientOpen={onIngredientOpen}
        />
        <IngredientCardList
          title="Соусы"
          ingredientsArray={sauceArray}
          typeIngredient={`${tabs.SAUCE}`}
          onIngredientOpen={onIngredientOpen}
        />
        <IngredientCardList
          title="Начинки"
          ingredientsArray={mainIngredientsArray}
          typeIngredient={`${tabs.MAIN}`}
          onIngredientOpen={onIngredientOpen}
        />
      </div>
    </section>
  );
};

export default BurgerIngredients;
