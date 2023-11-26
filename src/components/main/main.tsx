import React from 'react';
import styles from './main.module.css';
import { useSelector } from '../../services/types/hooks';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Loader from '../loader/loader';

interface IMainProps {
  onOrderOpen: () => void;
}

const Main: React.FC<IMainProps> = ({ onOrderOpen }) => {
  const { ingredients, ingredientsRequest, ingredientsFailed } = useSelector(
    (store) => store.ingredients,
  );

  return (
    <main className={styles.main}>
      <DndProvider backend={HTML5Backend}>
        {ingredientsRequest ? (
          <p className={styles.loader}>
            <Loader />
          </p>
        ) : ingredientsFailed ? (
          <p>Произошла ошибка на сервере 🤕...</p>
        ) : (
          <BurgerIngredients />
        )}
        {ingredients.length > 0 && (
          <BurgerConstructor onOrderOpen={onOrderOpen} />
        )}
      </DndProvider>
    </main>
  );
};

export default Main;
