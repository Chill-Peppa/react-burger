import {
  AUTH_REGISTER,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAILED,
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILED,
  AUTH_LOGOUT,
  AUTH_LOGOUT_SUCCESS,
  AUTH_LOGOUT_FAILED,
} from '../actions/auth';

const initialState = {
  user: {
    name: '',
    email: '',
    password: '',
  },
  registerRequest: false,
  registerFailed: false,

  loginRequest: false,
  loginFail: false,

  logoutRequest: false,
  logoutFail: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REGISTER: {
      return {
        ...state,
        registerRequest: true,
        registerFailed: false,
      };
    }
    case AUTH_REGISTER_SUCCESS: {
      return {
        ...state,
        user: { ...action.user },
        registerRequest: false,
      };
    }
    case AUTH_REGISTER_FAILED: {
      return {
        ...state,
        registerFailed: true,
        registerRequest: false,
      };
    }
    case AUTH_LOGIN: {
      return {
        ...state,
        loginRequest: true,
        loginFailed: false,
      };
    }
    case AUTH_LOGIN_SUCCESS: {
      return {
        ...state,
        user: { ...action.user },
        loginRequest: false,
      };
    }
    case AUTH_LOGIN_FAILED: {
      return {
        ...state,
        loginFailed: true,
        loginRequest: false,
      };
    }
    case AUTH_LOGOUT: {
      return {
        ...state,
        logoutRequest: true,
        logoutFailed: false,
      };
    }
    case AUTH_LOGOUT_SUCCESS: {
      return {
        ...state,
        initialState,
      };
    }
    case AUTH_LOGOUT_FAILED: {
      return {
        ...state,
        logoutFailed: true,
        logoutRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};
