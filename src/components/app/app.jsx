import React from 'react';
import styles from './app.module.css';
import { useDispatch } from 'react-redux';

import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import OrderDetails from '../order-details/order-details';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import NotFoundPage from '../../pages/not-found/not-found';
import Login from '../../pages/login/login';
import Register from '../../pages/register/register';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import ResetPassword from '../../pages/reset-passowrd/resest-password';
import Profile from '../../pages/profile/profile';

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
      <AppHeader />
      <Profile />
      {/*
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
      )} 
      <NotFoundPage />
      <Login title='Вход' />
      <Register title="Регистрация" />
      <ForgotPassword title="Восстановление пароля" />
      <ResetPassword title="Восстановление пароля" />
      */}
    </div>
  );
}

export default App;
