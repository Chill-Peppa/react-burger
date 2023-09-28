import React from 'react';
import styles from './ingredient-card.module.css';

import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

const IngredientCard = ({
  onIngredientOpen,
  onIngredientClick,
  ingredient,
}) => {
  const handleClick = () => {
    onIngredientClick(ingredient);
    console.log('на меня кликнули');
  };

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
  ingredientData: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default IngredientCard;
