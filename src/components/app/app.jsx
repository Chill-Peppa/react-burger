import React from 'react';
import styles from './app.module.css';

import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';

import Api from '../../utils/api';
import { BASE_URL } from '../../utils/constants';
import { IngredientsContext } from '../../services/ingredientsContext';
import { NewOrderContext } from '../../services/newOrderContext';

function App() {
  const [ingredients, setIngredients] = React.useState([]);
  const [newOrderNumber, setNewOrderNumber] = React.useState(null);

  const [isOpenIngredientModal, setIsOpenIngredientModal] =
    React.useState(false);
  const [isOpenOrderModal, setIsOpenOrderModal] = React.useState(false);
  const [selectedIngredient, setSelectedIngredient] = React.useState({});

  /*------------------ API --------------------*/
  const api = new Api({
    url: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // получаем все ингредиенты
  React.useEffect(() => {
    api
      .getIngredientsInfo()
      .then((ingredientsData) => {
        setIngredients(ingredientsData.data);
      })
      .catch((err) => console.error(`Ошибка: ${err}`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // получить номер заказа
  const handleGetOrderNumber = (ingredientsId) => {
    api
      .sendOrder(ingredientsId)
      .then((res) => {
        console.log(res);
        setNewOrderNumber(res.order.number);
        handleOpenOrderModal();
      })
      .catch((err) => console.error(`Ошибка: ${err}`));
  };

  const handleOpenIngredientModal = () => {
    setIsOpenIngredientModal(true);
  };

  const handleOpenOrderModal = () => {
    setIsOpenOrderModal(true);
  };

  const handleIngredientClick = (ingredient) => {
    setIsOpenIngredientModal(true);
    setSelectedIngredient(ingredient);
  };

  // закрытие всех модалок
  const handleCloseAllModals = () => {
    setIsOpenIngredientModal(false);
    setIsOpenOrderModal(false);
    setSelectedIngredient(null);
  };

  return (
    <IngredientsContext.Provider value={ingredients}>
      <NewOrderContext.Provider value={newOrderNumber}>
        <div className={styles.page}>
          <AppHeader />
          {ingredients.length > 0 && (
            <Main
              onOrderOpen={handleOpenOrderModal}
              onIngredientOpen={handleOpenIngredientModal}
              onIngredientClick={handleIngredientClick}
              handleGetOrderNumber={handleGetOrderNumber}
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
      </NewOrderContext.Provider>
    </IngredientsContext.Provider>
  );
}

export default App;
