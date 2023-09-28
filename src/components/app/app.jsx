import React from 'react';
import styles from './app.module.css';

import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';

import Api from '../../utils/api';
import { BASE_URL } from '../../utils/constants';

function App() {
  const [ingredients, setIngredients] = React.useState([]);
  const [isOpenIngredientModal, setIsOpenIngredientModal] =
    React.useState(false);
  const [isOpenOrderModal, setIsOpenOrderModal] = React.useState(false);
  //выбрали ингредиент
  const [selectedIngredient, setSelectedIngredient] = React.useState({});

  /*------------------ API --------------------*/
  const api = new Api({
    url: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  React.useEffect(() => {
    api
      .getIngredientsInfo()
      .then((ingredientsData) => {
        setIngredients(ingredientsData.data);
      })
      .catch((err) => console.error(`Ошибка: ${err}`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleIngredientClick = (ingredient) => {
    setIsOpenIngredientModal(true);
    setSelectedIngredient(ingredient);
  };

  //Открытие попапа IngredientDetails
  const handleOpenIngredientModal = () => {
    setIsOpenIngredientModal(true);
  };

  //Открытие попапа OrderDetails
  const handleOpenOrderModal = () => {
    setIsOpenOrderModal(true);
  };

  //закрытие всех модалок
  const handleCloseAllModals = () => {
    setIsOpenIngredientModal(false);
    setIsOpenOrderModal(false);
    setSelectedIngredient({});
  };

  return (
    <div className={styles.page}>
      <AppHeader />
      {ingredients.length > 0 && (
        <Main
          ingredientsData={ingredients}
          onOrderOpen={handleOpenOrderModal}
          onIngredientOpen={handleOpenIngredientModal}
          onIngredientClick={handleIngredientClick}
        />
      )}

      {isOpenIngredientModal && (
        <IngredientDetails
          setOpen={setIsOpenIngredientModal}
          ingredient={selectedIngredient}
          onClose={handleCloseAllModals}
        />
      )}
      {isOpenOrderModal && <OrderDetails onClose={handleCloseAllModals} />}
    </div>
  );
}

export default App;
