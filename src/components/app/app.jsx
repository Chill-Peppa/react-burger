import React from 'react';
import styles from './app.module.css';
import { useDispatch } from 'react-redux';

import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';

import Api from '../../utils/api';
import { BASE_URL } from '../../utils/constants';
import { NewOrderContext } from '../../services/newOrderContext';

import { getIngredients } from '../../services/actions/burgerIngredients';
import { CLOSE_INGREDIENT } from '../../services/actions/ingredient';

const api = new Api({
  url: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

function App() {
  const [newOrderNumber, setNewOrderNumber] = React.useState(null);

  const [isOpenIngredientModal, setIsOpenIngredientModal] =
    React.useState(false);
  const [isOpenOrderModal, setIsOpenOrderModal] = React.useState(false);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  // получаем номер заказа
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

  const onRemoveSelectedIngredient = () => {
    dispatch({ type: CLOSE_INGREDIENT, selectedIngredient: null });
  };

  // закрытие всех модалок
  const handleCloseAllModals = () => {
    setIsOpenIngredientModal(false);
    setIsOpenOrderModal(false);
    onRemoveSelectedIngredient();
  };

  return (
    <NewOrderContext.Provider value={newOrderNumber}>
      <div className={styles.page}>
        <AppHeader />

        <Main
          onOrderOpen={handleOpenOrderModal}
          onIngredientOpen={handleOpenIngredientModal}
          handleGetOrderNumber={handleGetOrderNumber}
        />

        {isOpenIngredientModal && (
          <Modal onClose={handleCloseAllModals} title="Детали ингредиента">
            <IngredientDetails />
          </Modal>
        )}

        {isOpenOrderModal && (
          <Modal onClose={handleCloseAllModals} title="">
            <OrderDetails onClose={handleCloseAllModals} />
          </Modal>
        )}
      </div>
    </NewOrderContext.Provider>
  );
}

export default App;
