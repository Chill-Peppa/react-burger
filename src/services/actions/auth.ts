import { api } from '../../utils/api';
import { AppDispatch, AppThunk } from '../types';
import { IUser, IPasswordData } from '../../types/ingredientsTypes';
import { setCookie, deleteCookie } from '../../utils/cookies';

export const AUTH_REGISTER: 'AUTH_REGISTER' = 'AUTH_REGISTER';
export const AUTH_REGISTER_SUCCESS: 'AUTH_REGISTER_SUCCESS' =
  'AUTH_REGISTER_SUCCESS';
export const AUTH_REGISTER_FAILED: 'AUTH_REGISTER_FAILED' =
  'AUTH_REGISTER_FAILED';

export const AUTH_LOGIN: 'AUTH_LOGIN' = 'AUTH_LOGIN';
export const AUTH_LOGIN_SUCCESS: 'AUTH_LOGIN_SUCCESS' = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAILED: 'AUTH_LOGIN_FAILED' = 'AUTH_LOGIN_FAILED';

export const AUTH_LOGOUT: 'AUTH_LOGOUT' = 'AUTH_LOGOUT';
export const AUTH_LOGOUT_SUCCESS: 'AUTH_LOGOUT_SUCCESS' = 'AUTH_LOGOUT_SUCCESS';
export const AUTH_LOGOUT_FAILED: 'AUTH_LOGOUT_FAILED' = 'AUTH_LOGOUT_FAILED';

export const AUTH_FORGOT_PASSWORD: 'AUTH_FORGOT_PASSWORD' =
  'AUTH_FORGOT_PASSWORD';
export const AUTH_FORGOT_PASSWORD_SUCCESS: 'AUTH_FORGOT_PASSWORD_SUCCESS' =
  'AUTH_FORGOT_PASSWORD_SUCCESS';
export const AUTH_FORGOT_PASSWORD_FAILED: 'AUTH_FORGOT_PASSWORD_FAILED' =
  'AUTH_FORGOT_PASSWORD_FAILED';

export const AUTH_RESET_PASSWORD: 'AUTH_RESET_PASSWORD' = 'AUTH_RESET_PASSWORD';
export const AUTH_RESET_PASSWORD_SUCCESS: 'AUTH_RESET_PASSWORD_SUCCESS' =
  'AUTH_RESET_PASSWORD_SUCCESS';
export const AUTH_RESET_PASSWORD_FAILED: 'AUTH_RESET_PASSWORD_FAILED' =
  'AUTH_RESET_PASSWORD_FAILED';

export const AUTH_GET_USER: 'AUTH_GET_USER' = 'AUTH_GET_USER';
export const AUTH_GET_USER_SUCCESS: 'AUTH_GET_USER_SUCCESS' =
  'AUTH_GET_USER_SUCCESS';
export const AUTH_GET_USER_FAILED: 'AUTH_GET_USER_FAILED' =
  'AUTH_GET_USER_FAILED';

export const AUTH_UPDATE_USER: 'AUTH_UPDATE_USER' = 'AUTH_UPDATE_USER';
export const AUTH_UPDATE_USER_SUCCESS: 'AUTH_UPDATE_USER_SUCCESS' =
  'AUTH_UPDATE_USER_SUCCESS';
export const AUTH_UPDATE_USER_FAILED: 'AUTH_UPDATE_USER_FAILED' =
  'AUTH_UPDATE_USER_FAILED';

export const AUTH_UPDATE_TOKEN: 'AUTH_UPDATE_TOKEN' = 'AUTH_UPDATE_TOKEN';
export const AUTH_UPDATE_TOKEN_SUCCESS: 'AUTH_UPDATE_TOKEN_SUCCESS' =
  'AUTH_UPDATE_TOKEN_SUCCESS';
export const AUTH_UPDATE_TOKEN_FAILED: 'AUTH_UPDATE_TOKEN_FAILED' =
  'AUTH_UPDATE_TOKEN_FAILED';

//thunk на регистрацию
export const register: AppThunk = (user: IUser) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: AUTH_REGISTER,
    });

    api
      .register(user)
      .then((res) => {
        dispatch({
          type: AUTH_REGISTER_SUCCESS,
          user: res.user,
        });
      })
      .catch((err) => {
        dispatch({
          type: AUTH_REGISTER_FAILED,
        });
      });
  };
};

//логин
export const login: AppThunk = (user: IUser) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: AUTH_LOGIN,
    });

    api
      .login(user)
      .then((res) => {
        setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
        setCookie('refreshToken', res.refreshToken);
        dispatch({
          type: AUTH_LOGIN_SUCCESS,
          user: res.user,
        });
      })
      .catch((err) => {
        dispatch({
          type: AUTH_LOGIN_FAILED,
        });
      });
  };
};

//выход из системы
export const logout: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: AUTH_LOGOUT,
    });

    api
      .logout()
      .then(() => {
        deleteCookie('accessToken');
        deleteCookie('refreshToken');
        dispatch({
          type: AUTH_LOGOUT_SUCCESS,
        });
      })
      .catch((err) => {
        dispatch({
          type: AUTH_LOGOUT_FAILED,
        });
      });
  };
};

//забыли пароль
export const forgotPassword = (email: string, onResetNavigate: () => void) => {
  return function (dispatch: AppDispatch) {
    dispatch({ type: AUTH_FORGOT_PASSWORD });

    api
      .recoverPassword(email)
      .then(() => {
        dispatch({
          type: AUTH_FORGOT_PASSWORD_SUCCESS,
        });
      })
      .then(() => {
        onResetNavigate();
      })
      .catch((err) => {
        dispatch({
          type: AUTH_FORGOT_PASSWORD_FAILED,
        });
      });
  };
};

//сброс пароля
export const resetPassword: AppThunk = (
  passwordData: IPasswordData,
  onNavigateLogin: () => void,
) => {
  return function (dispatch: AppDispatch) {
    dispatch({ type: AUTH_RESET_PASSWORD });

    api
      .resetPassword(passwordData)
      .then(() => {
        dispatch({ type: AUTH_RESET_PASSWORD_SUCCESS });
      })
      .then(() => {
        onNavigateLogin();
      })
      .catch((err) => {
        dispatch({
          type: AUTH_RESET_PASSWORD_FAILED,
        });
      });
  };
};

//получаем данные юзера
export const getUserInfo: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch({ type: AUTH_GET_USER });

    api
      .getUserInfo()
      .then((res) => {
        dispatch({ type: AUTH_GET_USER_SUCCESS, user: res.user });
      })
      .catch((err) => {
        dispatch({
          type: AUTH_GET_USER_FAILED,
        });
        dispatch(updateToken());
      });
  };
};

//обновляем данные юзера
export const updateUserInfo: AppThunk = (form: IUser) => {
  return function (dispatch: AppDispatch) {
    dispatch({ type: AUTH_UPDATE_USER });

    api
      .updateUserInfo(form)
      .then((res) => {
        dispatch({ type: AUTH_UPDATE_USER_SUCCESS, user: res.user });
      })
      .catch((err) => {
        dispatch({
          type: AUTH_UPDATE_USER_FAILED,
        });
      });
  };
};

//обновление токена
export const updateToken: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch({ type: AUTH_UPDATE_TOKEN });

    api
      .updateToken()
      .then((res) => {
        dispatch({ type: AUTH_UPDATE_TOKEN_SUCCESS, tokenData: res });
        setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
        setCookie('refreshToken', res.refreshToken);
        dispatch(getUserInfo());
      })
      .catch((err) => {
        dispatch({
          type: AUTH_UPDATE_TOKEN_FAILED,
        });
      });
  };
};
