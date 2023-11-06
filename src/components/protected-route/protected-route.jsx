import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

export const ProtectedRoute = ({ onlyUnAuth, element, isEmailEnter }) => {
  const location = useLocation();
  const { isLoggedIn, isPasswordReset } = useSelector((store) => store.user);

  React.useEffect(() => {
    console.log(location);
  }, [location]);

  if (onlyUnAuth && isLoggedIn) {
    return (
      <Navigate
        to={(location.state && location.state.from.pathname) || '/'}
        replace
        state={{ from: location }}
      />
    );
  }

  if (!onlyUnAuth && !isLoggedIn) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (
    onlyUnAuth &&
    isEmailEnter &&
    !isPasswordReset &&
    (!isLoggedIn || isLoggedIn)
  ) {
    return (
      <Navigate
        to={(location.state && location.state.from.pathname) || '/'}
        replace
        state={{ from: location }}
      />
    );
  }

  return element;
};

ProtectedRoute.propTypes = {
  onlyUnAuth: PropTypes.bool,
  element: PropTypes.element.isRequired,
  isEmailEnter: PropTypes.bool,
};

//onlyUnAuth помечает только те страницы на
//которые может заходить неавторизованный пользователь

//то есть если мы залогинены isLoggedIn = true идем
//на страницы которая  onlyUnAuth = true, условие этой функции выполняется
//и нас перебрасывает по прописанному маршруту

//(!onlyUnAuth && !isLoggedIn) это наоборот, мы не залогинены идем на
//страницы только для авторизованных, условие выполняется и редиректит на логин
