import React from 'react';
import cardStyles from './ingredient-card.module.css';

import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';
//import { burgerData } from '../../utils/data';

const IngredientCard = ({ ingredientData }) => {
  return (
    <li className={cardStyles.card}>
      <img
        className={cardStyles.image}
        src={ingredientData.image}
        alt={ingredientData.name}
      />
      <div className={cardStyles.priceContainer}>
        <span className="text text_type_main-small">
          {ingredientData.price}
        </span>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${cardStyles.name} text text_type_main-small`}>
        {ingredientData.name}
      </p>
      <Counter count={3} size="default" />
    </li>
  );
};

export default IngredientCard;
