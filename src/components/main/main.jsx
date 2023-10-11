import React from 'react';
import styles from './main.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

const Main = ({ onIngredientOpen, handleGetOrderNumber }) => {
  const { ingredients, ingredientsRequest, ingredientsFailed } = useSelector(
    (store) => store.ingredients,
  );

  return (
    <main className={styles.main}>
      {ingredientsRequest ? (
        <p>Загрузка данных...</p>
      ) : ingredientsFailed ? (
        <p>Произошла ошибка на сервере...</p>
      ) : (
        <BurgerIngredients onIngredientOpen={onIngredientOpen} />
      )}
      {ingredients.length > 0 && (
        <BurgerConstructor handleGetOrderNumber={handleGetOrderNumber} />
      )}
    </main>
  );
};

Main.propTypes = {
  onIngredientOpen: PropTypes.func.isRequired,
  handleGetOrderNumber: PropTypes.func.isRequired,
};

export default Main;
