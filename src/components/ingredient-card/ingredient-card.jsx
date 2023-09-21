import React from 'react';
import cardStyles from './ingredient-card.module.css';

import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

const IngredientCard = ({ ingredientData }) => {
  return (
    <li className={cardStyles.card}>
      <img
        className={cardStyles.image}
        src={ingredientData.image}
        alt={ingredientData.name}
      />
      <div className={cardStyles.priceContainer}>
        <span className="text text_type_digits-default">
          {ingredientData.price}
        </span>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${cardStyles.name} text text_type_main-default`}>
        {ingredientData.name}
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
