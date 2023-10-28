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
    case AUTH_FORGOT_PASSWORD: {
      return {
        ...state,
        forgotPasswordRequest: true,
        forgotPasswordFailed: false,
      };
    }
    case AUTH_FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        forgotPasswordRequest: false,
        forgotPasswordFailed: false,
      };
    }
    case AUTH_FORGOT_PASSWORD_FAILED: {
      return {
        ...state,
        forgotPasswordRequest: false,
        forgotPasswordFailed: true,
      };
    }
    case AUTH_RESET_PASSWORD: {
      return {
        ...state,
        resetPasswordRequest: true,
        resetPasswordFailed: false,
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
      };
    }
    case AUTH_GET_USER_SUCCESS: {
      return {
        ...state,
        user: { ...action.user },
        getUserRequest: false,
        getUserFailed: false,
      };
    }
    case AUTH_GET_USER_FAILED: {
      return {
        ...state,
        getUserRequest: false,
        getUserFailed: true,
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
    default: {
      return state;
    }
  }
};
