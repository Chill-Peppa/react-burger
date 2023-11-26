import React, { ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from '../../services/types/hooks';

interface IProtectedRoute {
  onlyUnAuth: boolean;
  isEmailEnter?: boolean;
  element: ReactElement;
}

export const ProtectedRoute: React.FC<IProtectedRoute> = ({
  onlyUnAuth,
  element,
  isEmailEnter,
}) => {
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

//onlyUnAuth помечает только те страницы на
//которые может заходить неавторизованный пользователь

//то есть если мы залогинены isLoggedIn = true идем
//на страницы которые  onlyUnAuth = true, условие этой функции выполняется
//и нас перебрасывает по прописанному маршруту

//(!onlyUnAuth && !isLoggedIn) это наоборот, мы не залогинены идем на
//страницы только для авторизованных, условие выполняется и редиректит на логин
