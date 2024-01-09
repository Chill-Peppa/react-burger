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
  AUTH_FORGOT_PASSWORD,
  AUTH_FORGOT_PASSWORD_SUCCESS,
  AUTH_FORGOT_PASSWORD_FAILED,
  AUTH_RESET_PASSWORD,
  AUTH_RESET_PASSWORD_SUCCESS,
  AUTH_RESET_PASSWORD_FAILED,
  AUTH_GET_USER,
  AUTH_GET_USER_SUCCESS,
  AUTH_GET_USER_FAILED,
  AUTH_UPDATE_USER,
  AUTH_UPDATE_USER_SUCCESS,
  AUTH_UPDATE_USER_FAILED,
  AUTH_UPDATE_TOKEN,
  AUTH_UPDATE_TOKEN_SUCCESS,
  AUTH_UPDATE_TOKEN_FAILED,
} from '../actions/auth';

import { TAuthActions, TAuthState } from '../types/authTypes';

const initialState: TAuthState = {
  user: {
    name: '',
    email: '',
    password: '',
  },
  registerRequest: false,
  registerFailed: false,

  loginRequest: false,
  loginFailed: false,

  logoutRequest: false,
  logoutFailed: false,

  forgotPasswordRequest: false,
  forgotPasswordFailed: false,

  resetPasswordRequest: false,
  resetPasswordFailed: false,

  getUserRequest: false,
  getUserFailed: false,

  updateUserRequest: false,
  updateUserFailed: false,

  updateTokenRequest: false,
  updateTokenFailed: false,
  tokenData: {},

  isLoggedIn: false,
  isPasswordReset: false,
};

export const authReducer = (state = initialState, action: TAuthActions) => {
  switch (action.type) {
    case AUTH_REGISTER: {
      return {
        ...state,
        registerRequest: true,
        registerFailed: false,
        isLoggedIn: false,
      };
    }
    case AUTH_REGISTER_SUCCESS: {
      return {
        ...state,
        user: { ...action.user },
        registerRequest: false,
        isLoggedIn: true,
      };
    }
    case AUTH_REGISTER_FAILED: {
      return {
        ...state,
        registerFailed: true,
        registerRequest: false,
        isLoggedIn: false,
      };
    }
    case AUTH_LOGIN: {
      return {
        ...state,
        loginRequest: true,
        loginFailed: false,
        isLoggedIn: false,
      };
    }
    case AUTH_LOGIN_SUCCESS: {
      return {
        ...state,
        user: { ...action.user },
        loginRequest: false,
        isLoggedIn: true,
      };
    }
    case AUTH_LOGIN_FAILED: {
      return {
        ...state,
        loginFailed: true,
        loginRequest: false,
        isLoggedIn: false,
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
        ...initialState,
        logoutFailed: false,
        logoutRequest: false,
        isLoggedIn: false,
      };
    }
    case AUTH_LOGOUT_FAILED: {
      return {
        ...state,
        logoutFailed: true,
        logoutRequest: false,
        isLoggedIn: true,
      };
    }
    case AUTH_FORGOT_PASSWORD: {
      return {
        ...state,
        forgotPasswordRequest: true,
        forgotPasswordFailed: false,
        isLoggedIn: false,
        isPasswordReset: false,
      };
    }
    case AUTH_FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        forgotPasswordRequest: false,
        forgotPasswordFailed: false,
        isLoggedIn: false,
        isPasswordReset: true,
      };
    }
    case AUTH_FORGOT_PASSWORD_FAILED: {
      return {
        ...state,
        forgotPasswordRequest: false,
        forgotPasswordFailed: true,
        isLoggedIn: false,
        isPasswordReset: false,
      };
    }
    case AUTH_RESET_PASSWORD: {
      return {
        ...state,
        resetPasswordRequest: true,
        resetPasswordFailed: false,
        isLoggedIn: false,
      };
    }
    case AUTH_RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordFailed: false,
      };
    }
    case AUTH_RESET_PASSWORD_FAILED: {
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordFailed: true,
      };
    }
    case AUTH_GET_USER: {
      return {
        ...state,
        getUserRequest: true,
        getUserFailed: false,
        isLoggedIn: false,
      };
    }
    case AUTH_GET_USER_SUCCESS: {
      return {
        ...state,
        user: { ...action.user },
        getUserRequest: false,
        getUserFailed: false,
        isLoggedIn: true,
      };
    }
    case AUTH_GET_USER_FAILED: {
      return {
        ...state,
        getUserRequest: false,
        getUserFailed: true,
        isLoggedIn: false,
      };
    }
    case AUTH_UPDATE_USER: {
      return {
        ...state,
        getUserRequest: true,
        getUserFailed: false,
      };
    }
    case AUTH_UPDATE_USER_SUCCESS: {
      return {
        ...state,
        user: { ...action.user },
        getUserRequest: false,
        getUserFailed: false,
      };
    }
    case AUTH_UPDATE_USER_FAILED: {
      return {
        ...state,
        getUserRequest: false,
        getUserFailed: true,
      };
    }
    case AUTH_UPDATE_TOKEN: {
      return {
        ...state,
        updateTokenRequest: true,
        updateTokenFailed: false,
      };
    }
    case AUTH_UPDATE_TOKEN_SUCCESS: {
      return {
        ...state,
        updateTokenRequest: false,
        updateTokenFailed: false,
        tokenData: { ...action.tokenData },
      };
    }
    case AUTH_UPDATE_TOKEN_FAILED: {
      return {
        ...state,
        updateTokenRequest: false,
        updateTokenFailed: true,
        isLoggedIn: false,
      };
    }
    default: {
      return state;
    }
  }
};
