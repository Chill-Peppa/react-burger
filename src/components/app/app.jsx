import React from 'react';
import styles from './app.module.css';
import { useDispatch } from 'react-redux';
import { Routes, Route, useLocation } from 'react-router-dom';

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
import { ProtectedRoute } from '../protected-route/protected-route';

import { getIngredients } from '../../services/actions/burgerIngredients';
import { closeIngredient } from '../../services/actions/ingredient';
import { getUserInfo } from '../../services/actions/auth';
import { headerLocations } from '../../utils/constants';
import { getCookie } from '../../utils/cookies';

function App() {
  const accessToken = getCookie('accessToken');
  console.log('accessToken:', accessToken);

  const [isOpenIngredientModal, setIsOpenIngredientModal] =
    React.useState(false);
  const [isOpenOrderModal, setIsOpenOrderModal] = React.useState(false);

  const dispatch = useDispatch();
  const location = useLocation();

  React.useEffect(() => {
    dispatch(getIngredients());
    if (accessToken) {
      dispatch(getUserInfo());
    }
  }, [dispatch, accessToken]);

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
      {headerLocations.includes(location.pathname) && <AppHeader />}
      <Routes>
        <Route
          path="/login"
          element={
            <ProtectedRoute
              onlyUnAuth={true}
              element={<Login title="Вход" />}
            />
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedRoute
              onlyUnAuth={true}
              element={<Register title="Регистрация" />}
            />
          }
        />
        <Route
          path="/forgot-password"
          element={
            <ProtectedRoute
              onlyUnAuth={true}
              element={<ForgotPassword title="Восстановление пароля" />}
            />
          }
        />
        <Route
          path="/reset-password"
          element={
            <ProtectedRoute
              onlyUnAuth={true}
              element={<ResetPassword title="Восстановление пароля" />}
            />
          }
        />

        <Route
          path="/"
          element={
            <ProtectedRoute
              onlyUnAuth={false}
              element={
                <Main
                  onOrderOpen={handleOpenOrderModal}
                  onIngredientOpen={handleOpenIngredientModal}
                />
              }
            />
          }
        />
        <Route
          path="/profile"
          element={<ProtectedRoute onlyUnAuth={false} element={<Profile />} />}
        />
        <Route
          path="/profile/orders"
          element={<ProtectedRoute onlyUnAuth={false} element={<Profile />} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

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
  );
}

export default App;
