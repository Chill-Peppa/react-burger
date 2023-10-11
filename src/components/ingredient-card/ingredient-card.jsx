import React from 'react';
import styles from './ingredient-card.module.css';
import PropTypes from 'prop-types';
import { ingredientsDataType } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { OPEN_INGREDIENT } from '../../services/actions/ingredient';

import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientCard = ({ onIngredientOpen, ingredient }) => {
  const dispatch = useDispatch();

  const { selectedIngredient } = useSelector((store) => store.ingredient);

  const handleClick = () => {
    dispatch({ type: OPEN_INGREDIENT, ingredient: ingredient });
  };

  console.log(selectedIngredient);

  return (
    <li className={styles.card} onClick={onIngredientOpen}>
      <img
        className={styles.image}
        src={ingredient.image}
        alt={ingredient.name}
        onClick={handleClick}
      />
      <div className={styles.priceContainer}>
        <span className="text text_type_digits-default">
          {ingredient.price}
        </span>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${styles.name} text text_type_main-default`}>
        {ingredient.name}
      </p>
      <Counter count={3} size="default" />
    </li>
  );
};

IngredientCard.propTypes = {
  ingredient: ingredientsDataType.isRequired,
  onIngredientOpen: PropTypes.func.isRequired,
};

export default IngredientCard;
