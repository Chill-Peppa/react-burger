import React from 'react';
import styles from './ingredient-card.module.css';
import PropTypes from 'prop-types';
import { ingredientsDataType } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { useDrag } from 'react-dnd';
import { OPEN_INGREDIENT } from '../../services/actions/ingredient';

import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientCard = ({ onIngredientOpen, ingredient }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: OPEN_INGREDIENT, ingredient: ingredient });
  };

  const [{ isDrag }, dragRef] = useDrag({
    type: 'ingredient',
    item: ingredient,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  return (
    <li
      className={isDrag ? styles.draggedCard : styles.card}
      onClick={onIngredientOpen}
      ref={dragRef}>
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
