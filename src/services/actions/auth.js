import { api } from '../../utils/api';
import { setCookie, deleteCookie } from '../../utils/cookies';

export const AUTH_REGISTER = 'AUTH_REGISTER';
export const AUTH_REGISTER_SUCCESS = 'AUTH_REGISTER_SUCCESS';
export const AUTH_REGISTER_FAILED = 'AUTH_REGISTER_FAILED';

export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAILED = 'AUTH_LOGIN_FAILED';

export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const AUTH_LOGOUT_SUCCESS = 'AUTH_LOGOUT_SUCCESS';
export const AUTH_LOGOUT_FAILED = 'AUTH_LOGOUT_FAILED';

//thunk на регистрацию
export function register(user) {
  return function (dispatch) {
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
}

//логин
export function login(user) {
  return function (dispatch) {
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
}

//выход из системы
export function logout() {
  return function (dispatch) {
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
}
