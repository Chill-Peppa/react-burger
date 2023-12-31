import React from 'react';
import styles from './app.module.css';
import { useDispatch } from '../../services/types/hooks';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

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
import IngredientPage from '../../pages/ingredient-page/ingredient-page';
import Feed from '../../pages/feed/feed';
import FeedDetailsSingleBg from '../../pages/feed-details-single-bg/feed-details-single-bg';
import FeedDetailsSingle from '../../pages/feed-details-single/feed-details-single';

import { ProtectedRoute } from '../protected-route/protected-route';
import { getIngredients } from '../../services/actions/burgerIngredients';
import { getUserInfo } from '../../services/actions/auth';
import { getCookie } from '../../utils/cookies';

//ВАЖНО!
// feed-details-single, feed-details-single-card и app. убери ворнинги!!!
const App: React.FC = () => {
  const accessToken = getCookie('accessToken');
  console.log(accessToken);

  const [isOpenOrderModal, setIsOpenOrderModal] = React.useState(false);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(getIngredients());
    if (accessToken) {
      dispatch(getUserInfo());
    }
  }, [dispatch, accessToken]);

  const handleOpenOrderModal = () => {
    setIsOpenOrderModal(true);
  };

  const handleCloseModalOrder = () => {
    setIsOpenOrderModal(false);
  };

  const handleCloseModalIngredient = () => {
    navigate(-1);
  };

  return (
    <div className={styles.page}>
      <AppHeader />

      <Routes location={location.state?.backgroundLocation || location}>
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
              isEmailEnter={true}
              element={<ResetPassword title="Восстановление пароля" />}
            />
          }
        />
        <Route path="/" element={<Main onOrderOpen={handleOpenOrderModal} />} />

        <Route
          path="/profile"
          element={<ProtectedRoute onlyUnAuth={false} element={<Profile />} />}
        />
        <Route
          path="/profile/orders"
          element={<ProtectedRoute onlyUnAuth={false} element={<Profile />} />}
        />
        <Route path="/feed" element={<Feed />} />
        {/* Тут будут динамичные маршруты, test будет заменен на динамичный маршрут! */}
        <Route path="/ingredients/:id" element={<IngredientPage />} />
        <Route path="/feed/:number" element={<FeedDetailsSingleBg />} />
        <Route
          path="/profile/orders/:number"
          element={
            <ProtectedRoute
              onlyUnAuth={false}
              element={<FeedDetailsSingleBg />}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* МОДАЛКИ */}

      {location.state?.backgroundLocation && (
        <Routes>
          <Route
            path="/ingredients/:id"
            element={
              <Modal
                onClose={handleCloseModalIngredient}
                title="Детали ингредиента">
                <IngredientDetails />
              </Modal>
            }
          />
        </Routes>
      )}

      {location.state?.backgroundLocation && (
        <Routes>
          <Route
            path="/feed/:number"
            element={
              <Modal title="" onClose={handleCloseModalIngredient}>
                <FeedDetailsSingle />
              </Modal>
            }
          />
        </Routes>
      )}

      {location.state?.backgroundLocation && (
        <Routes>
          <Route
            path="/profile/orders/:number"
            element={
              <ProtectedRoute
                onlyUnAuth={false}
                element={
                  <Modal title="" onClose={handleCloseModalIngredient}>
                    <FeedDetailsSingle />
                  </Modal>
                }
              />
            }
          />
        </Routes>
      )}

      {isOpenOrderModal && (
        <Modal onClose={handleCloseModalOrder} title="">
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
};

export default App;
