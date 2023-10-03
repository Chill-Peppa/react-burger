import React from 'react';
import styles from './main.module.css';
import PropTypes from 'prop-types';

import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

const Main = ({
  onIngredientOpen,
  onIngredientClick,
  handleGetOrderNumber,
}) => {
  return (
    <main className={styles.main}>
      <BurgerIngredients
        onIngredientOpen={onIngredientOpen}
        onIngredientClick={onIngredientClick}
      />
      <BurgerConstructor handleGetOrderNumber={handleGetOrderNumber} />
    </main>
  );
};

Main.propTypes = {
  onIngredientOpen: PropTypes.func.isRequired,
  onIngredientClick: PropTypes.func.isRequired,
  handleGetOrderNumber: PropTypes.func.isRequired,
};

export default Main;
