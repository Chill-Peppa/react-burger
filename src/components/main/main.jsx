import React from 'react';
import styles from './main.module.css';
import PropTypes from 'prop-types';
import { ingredientsDataType } from '../../utils/constants';

import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

const Main = ({
  onIngredientOpen,
  onOrderOpen,
  ingredientsData,
  onIngredientClick,
}) => {
  return (
    <main className={styles.main}>
      <BurgerIngredients
        onIngredientOpen={onIngredientOpen}
        ingredientsData={ingredientsData}
        onIngredientClick={onIngredientClick}
      />
      <BurgerConstructor
        onOrderOpen={onOrderOpen}
        ingredientsData={ingredientsData}
      />
    </main>
  );
};

Main.propTypes = {
  onIngredientOpen: PropTypes.func.isRequired,
  onOrderOpen: PropTypes.func.isRequired,
  onIngredientClick: PropTypes.func.isRequired,
  ingredientsData: PropTypes.arrayOf(ingredientsDataType.isRequired).isRequired,
};

export default Main;
