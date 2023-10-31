import React from 'react';
import styles from './ingredient-details.module.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const IngredientDetails = () => {
  const { id } = useParams();
  console.log(id);

  const { ingredients } = useSelector((store) => store.ingredients);
  console.log('ingredienti', ingredients);

  const currentIngredient = ingredients.find(
    (ingredient) => ingredient._id === id,
  );

  console.log(currentIngredient);

  return (
    <div className={styles.ingredientDetails}>
      <img
        className={styles.image}
        src={currentIngredient.image_large}
        alt="Ингредиент"
      />
      <p className="text text_type_main-medium mt-4 mb-8">
        {currentIngredient.name}
      </p>

      <ul className={styles.propertiesContainer}>
        <li className={styles.property}>
          <span className="text text_type_main-default text_color_inactive">
            Калории,ккал
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {currentIngredient.calories}
          </span>
        </li>
        <li className={styles.property}>
          <span className="text text_type_main-default text_color_inactive">
            Белки,г
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {currentIngredient.proteins}
          </span>
        </li>
        <li className={styles.property}>
          <span className="text text_type_main-default text_color_inactive">
            Жиры,г
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {currentIngredient.fat}
          </span>
        </li>
        <li className={styles.property}>
          <span className="text text_type_main-default text_color_inactive">
            Углеводы,г
          </span>
          <span className="text text_type_digits-default text_color_inactive">
            {currentIngredient.carbohydrates}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default IngredientDetails;
