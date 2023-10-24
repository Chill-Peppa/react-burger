import { api } from '../../utils/api';

export const AUTH_REGISTER = 'AUTH_REGISTER';
export const AUTH_REGISTER_SUCCESS = 'AUTH_REGISTER_SUCCESS';
export const AUTH_REGISTER_FAILED = 'AUTH_REGISTER_FAILED';

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
