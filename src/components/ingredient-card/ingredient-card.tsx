import React from 'react';
import styles from './ingredient-card.module.css';
import { useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';
import { tabs } from '../../utils/constants';
import { Link, useLocation } from 'react-router-dom';
import { IIngredient } from '../../types/ingredientsTypes';

import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';

interface IngredientCardProps {
  ingredient: IIngredient;
}

const IngredientCard: React.FC<IngredientCardProps> = ({ ingredient }) => {
  const location = useLocation();

  const { mainIngredientsData, bunIngredientsData } = useSelector(
    (store: any) => store.addedIngredients,
  );

  const [counter, setCounter] = React.useState<number>(0);

  const [{ isDrag }, dragRef] = useDrag({
    type: 'ingredient',
    item: ingredient,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  /*------------------- Логика счетчика ---------------------*/
  const mainCounter = [...mainIngredientsData].filter(
    (item) => item._id === ingredient._id,
  ).length;
  const bunCounter = [...[bunIngredientsData]].filter(
    (item) => item._id === ingredient._id,
  ).length;

  React.useEffect(() => {
    if (ingredient.type === tabs.BUN) {
      return setCounter(bunCounter * 2);
    } else {
      return setCounter(mainCounter);
    }
  }, [bunCounter, mainCounter, ingredient.type]);

  return (
    <Link
      to={`/ingredients/${ingredient._id}`}
      className={styles.link}
      state={{ backgroundLocation: location }}>
      <li className={isDrag ? styles.draggedCard : styles.card} ref={dragRef}>
        <img
          className={styles.image}
          src={ingredient.image}
          alt={ingredient.name}
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
        <Counter count={counter} size="default" />
      </li>
    </Link>
  );
};

export default IngredientCard;
