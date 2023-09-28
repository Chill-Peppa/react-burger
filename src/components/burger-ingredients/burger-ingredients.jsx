import React from 'react';
import styles from './burger-ingredients.module.css';
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { tabs, ingredientsDataType } from '../../utils/constants';

import IngredientCardList from '../ingredient-card-list/ingredient-card-list';

const BurgerIngredients = ({
  onIngredientOpen,
  ingredientsData,
  onIngredientClick,
}) => {
  const [current, setCurrent] = React.useState('bun');

  const bunArray = ingredientsData.filter(
    (ingredient) => ingredient.type === `${tabs.BUN}`,
  );

  const sauceArray = ingredientsData.filter(
    (ingredient) => ingredient.type === `${tabs.SAUCE}`,
  );

  const mainIngredientsArray = ingredientsData.filter(
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
          onIngredientClick={onIngredientClick}
        />
        <IngredientCardList
          title="Соусы"
          ingredientsArray={sauceArray}
          typeIngredient={`${tabs.SAUCE}`}
          onIngredientOpen={onIngredientOpen}
          onIngredientClick={onIngredientClick}
        />
        <IngredientCardList
          title="Начинки"
          ingredientsArray={mainIngredientsArray}
          typeIngredient={`${tabs.MAIN}`}
          onIngredientOpen={onIngredientOpen}
          onIngredientClick={onIngredientClick}
        />
      </div>
    </section>
  );
};

BurgerIngredients.propTypes = {
  onIngredientOpen: PropTypes.func.isRequired,
  onIngredientClick: PropTypes.func.isRequired,
  ingredientsData: PropTypes.arrayOf(ingredientsDataType.isRequired).isRequired,
};

export default BurgerIngredients;
