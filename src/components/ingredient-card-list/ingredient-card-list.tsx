import React from 'react';
import styles from './ingredient-card-list.module.css';

import IngredientCard from '../ingredient-card/ingredient-card';
import { IIngredient } from '../../types/ingredientsTypes';

interface IngredientCardListProps {
  title: string;
  id: string;
  ingredientsArray: IIngredient[];
}

const IngredientCardList = React.forwardRef<
  HTMLHeadingElement,
  IngredientCardListProps
>((props, ref) => {
  const { title, ingredientsArray, id } = props;
  console.log(id);

  return (
    <>
      <h2
        className={`${styles.subtitle} text text_type_main-medium`}
        ref={ref}
        id={id}>
        {title}
      </h2>
      <ul className={styles.ingredientsList}>
        {ingredientsArray.map((ingredient) => (
          <IngredientCard key={ingredient._id} ingredient={ingredient} />
        ))}
      </ul>
    </>
  );
});

export default IngredientCardList;
