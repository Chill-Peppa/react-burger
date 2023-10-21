import React from 'react';
import styles from './app.module.css';
import { useDispatch } from 'react-redux';

import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import NotFoundPage from '../../pages/not-found/not-found';

import { getIngredients } from '../../services/actions/burgerIngredients';
import { closeIngredient } from '../../services/actions/ingredient';

function App() {
  const [isOpenIngredientModal, setIsOpenIngredientModal] =
    React.useState(false);
  const [isOpenOrderModal, setIsOpenOrderModal] = React.useState(false);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const handleOpenIngredientModal = () => {
    setIsOpenIngredientModal(true);
  };

  const handleOpenOrderModal = () => {
    setIsOpenOrderModal(true);
  };

  const onRemoveSelectedIngredient = () => {
    dispatch(closeIngredient(null));
  };

  // закрытие всех модалок
  const handleCloseAllModals = () => {
    setIsOpenIngredientModal(false);
    setIsOpenOrderModal(false);
    onRemoveSelectedIngredient();
  };

  return (
    <div className={styles.page}>
      <NotFoundPage />
      {/* <AppHeader />

      <Main
        onOrderOpen={handleOpenOrderModal}
        onIngredientOpen={handleOpenIngredientModal}
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
      )} */}
    </div>
  );
}

export default App;
