import React from 'react';
import styles from './burger-ingredients.module.css';
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { tabs } from '../../utils/constants';
import { useSelector } from 'react-redux';
//import { IngredientsContext } from '../../services/ingredientsContext';

import IngredientCardList from '../ingredient-card-list/ingredient-card-list';

const BurgerIngredients = ({ onIngredientOpen }) => {
  const [current, setCurrent] = React.useState('bun');

  const { ingredients } = useSelector((store) => store.ingredients);

  const bunArray = ingredients.filter(
    (ingredient) => ingredient.type === tabs.BUN,
  );

  const sauceArray = ingredients.filter(
    (ingredient) => ingredient.type === tabs.SAUCE,
  );

  const mainIngredientsArray = ingredients.filter(
    (ingredient) => ingredient.type === tabs.MAIN,
  );

  const onTabClick = (value) => {
    setCurrent(value);
    document.getElementById(value).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.section}>
      <h1 className={`${styles.title} text text_type_main-large`}>
        Соберите бургер
      </h1>

      <div className={styles.tabContainer}>
        <Tab
          value={tabs.BUN}
          active={current === tabs.BUN}
          onClick={onTabClick}>
          Булки
        </Tab>
        <Tab
          value={tabs.SAUCE}
          active={current === tabs.SAUCE}
          onClick={onTabClick}>
          Соусы
        </Tab>
        <Tab
          value={tabs.MAIN}
          active={current === tabs.MAIN}
          onClick={onTabClick}>
          Начинки
        </Tab>
      </div>

      <div className={styles.ingredientsContainer}>
        <IngredientCardList
          title="Булки"
          id={tabs.BUN}
          ingredientsArray={bunArray}
          onIngredientOpen={onIngredientOpen}
        />
        <IngredientCardList
          title="Соусы"
          id={tabs.SAUCE}
          ingredientsArray={sauceArray}
          onIngredientOpen={onIngredientOpen}
        />
        <IngredientCardList
          title="Начинки"
          id={tabs.MAIN}
          ingredientsArray={mainIngredientsArray}
          onIngredientOpen={onIngredientOpen}
        />
      </div>
    </section>
  );
};

BurgerIngredients.propTypes = {
  onIngredientOpen: PropTypes.func.isRequired,
};

export default BurgerIngredients;
