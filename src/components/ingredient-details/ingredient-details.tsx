import React from 'react';
import styles from './ingredient-details.module.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IIngredient } from '../../types/ingredientsTypes';

const IngredientDetails: React.FC = () => {
  const { id } = useParams();

  const ingredient = useSelector(
    (store: any) =>
      store.ingredients.ingredients.find(
        ({ _id }: IIngredient) => _id === id,
      ) ?? {},
  );

  return (
    <div className={styles.ingredientDetails}>
      <img
        className={styles.image}
        src={ingredient.image_large}
        alt="Ингредиент"
      />
      <p className="text text_type_main-medium mt-4 mb-8">{ingredient.name}</p>

      <ul className={styles.propertiesContainer}>
        <li className={styles.property}>
          <span className="text text_type_main-default text_color_inactive">
            Калории,ккал
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {ingredient.calories}
          </span>
        </li>
        <li className={styles.property}>
          <span className="text text_type_main-default text_color_inactive">
            Белки,г
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {ingredient.proteins}
          </span>
        </li>
        <li className={styles.property}>
          <span className="text text_type_main-default text_color_inactive">
            Жиры,г
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {ingredient.fat}
          </span>
        </li>
        <li className={styles.property}>
          <span className="text text_type_main-default text_color_inactive">
            Углеводы,г
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {ingredient.carbohydrates}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default IngredientDetails;
