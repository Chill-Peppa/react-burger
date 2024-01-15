import { initialState, authReducer } from './auth';

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

describe('auth reducer', () => {
  //1 - проверяем инишиал стейт
  it('should return the initial state', () => {
    //результат
    const testData = authReducer(undefined, {});
    //то, что приходит
    const expected = { ...initialState };

    expect(testData).toEqual(expected);
  });

  // 2 - AUTH_REGISTER
  it('should handle AUTH_REGISTER', () => {
    const testData = authReducer(initialState, { type: AUTH_REGISTER });
    const expected = {
      ...initialState,
      registerRequest: true,
      registerFailed: false,
      isLoggedIn: false,
    };

    expect(testData).toEqual(expected);
  });

  // 3
  it('should handle AUTH_REGISTER_SUCCESS', () => {
    const testData = authReducer(initialState, {
      type: AUTH_REGISTER_SUCCESS,
      user: { name: '', email: '', password: '' },
    });
    const expected = {
      ...initialState,
      user: { name: '', email: '', password: '' },
      registerRequest: false,
      isLoggedIn: true,
    };

    expect(testData).toEqual(expected);
  });

  it('should handle AUTH_REGISTER_FAILED', () => {
    const testData = authReducer(initialState, {
      type: AUTH_REGISTER_FAILED,
    });
    const expected = {
      ...initialState,
      registerFailed: true,
      registerRequest: false,
      isLoggedIn: false,
    };

    expect(testData).toEqual(expected);
  });

  it('should handle AUTH_LOGIN', () => {
    const testData = authReducer(initialState, { type: AUTH_LOGIN });
    const expected = {
      ...initialState,
      loginRequest: true,
      loginFailed: false,
      isLoggedIn: false,
    };

    expect(testData).toEqual(expected);
  });

  it('should handle AUTH_LOGIN_SUCCESS', () => {
    const testData = authReducer(initialState, {
      type: AUTH_LOGIN_SUCCESS,
      user: { name: '', email: '', password: '' },
    });
    const expected = {
      ...initialState,
      user: { name: '', email: '', password: '' },
      registerRequest: false,
      isLoggedIn: true,
    };

    expect(testData).toEqual(expected);
  });

  it('should handle AUTH_LOGIN_FAILED', () => {
    const testData = authReducer(initialState, {
      type: AUTH_LOGIN_FAILED,
    });
    const expected = {
      ...initialState,
      loginFailed: true,
      loginRequest: false,
      isLoggedIn: false,
    };

    expect(testData).toEqual(expected);
  });

  it('should handle AUTH_LOGOUT', () => {
    const testData = authReducer(initialState, { type: AUTH_LOGOUT });
    const expected = {
      ...initialState,
      logoutRequest: true,
      logoutFailed: false,
    };

    expect(testData).toEqual(expected);
  });

  it('should handle AUTH_LOGOUT_SUCCESS', () => {
    const testData = authReducer(initialState, {
      type: AUTH_LOGOUT_SUCCESS,
    });
    const expected = {
      ...initialState,
      logoutFailed: false,
      logoutRequest: false,
      isLoggedIn: false,
    };

    expect(testData).toEqual(expected);
  });

  it('should handle AUTH_LOGOUT_FAILED', () => {
    const testData = authReducer(initialState, {
      type: AUTH_LOGOUT_FAILED,
    });
    const expected = {
      ...initialState,
      logoutFailed: true,
      logoutRequest: false,
      isLoggedIn: true,
    };

    expect(testData).toEqual(expected);
  });

  it('should handle AUTH_FORGOT_PASSWORD', () => {
    const testData = authReducer(initialState, {
      type: AUTH_FORGOT_PASSWORD,
    });
    const expected = {
      ...initialState,
      forgotPasswordRequest: true,
      forgotPasswordFailed: false,
      isLoggedIn: false,
      isPasswordReset: false,
    };

    expect(testData).toEqual(expected);
  });

  it('should handle AUTH_FORGOT_PASSWORD_SUCCESS', () => {
    const testData = authReducer(initialState, {
      type: AUTH_FORGOT_PASSWORD_SUCCESS,
    });
    const expected = {
      ...initialState,
      forgotPasswordRequest: false,
      forgotPasswordFailed: false,
      isLoggedIn: false,
      isPasswordReset: true,
    };

    expect(testData).toEqual(expected);
  });

  it('should handle AUTH_FORGOT_PASSWORD_FAILED', () => {
    const testData = authReducer(initialState, {
      type: AUTH_FORGOT_PASSWORD_FAILED,
    });
    const expected = {
      ...initialState,
      forgotPasswordRequest: false,
      forgotPasswordFailed: true,
      isLoggedIn: false,
      isPasswordReset: false,
    };

    expect(testData).toEqual(expected);
  });

  it('should handle AUTH_RESET_PASSWORD', () => {
    const testData = authReducer(initialState, {
      type: AUTH_RESET_PASSWORD,
    });
    const expected = {
      ...initialState,
      resetPasswordRequest: true,
      resetPasswordFailed: false,
      isLoggedIn: false,
    };

    expect(testData).toEqual(expected);
  });

  it('should handle AUTH_RESET_PASSWORD_SUCCESS', () => {
    const testData = authReducer(initialState, {
      type: AUTH_RESET_PASSWORD_SUCCESS,
    });
    const expected = {
      ...initialState,
      resetPasswordRequest: false,
      resetPasswordFailed: false,
    };

    expect(testData).toEqual(expected);
  });

  it('should handle AUTH_RESET_PASSWORD_FAILED', () => {
    const testData = authReducer(initialState, {
      type: AUTH_RESET_PASSWORD_FAILED,
    });
    const expected = {
      ...initialState,
      resetPasswordRequest: false,
      resetPasswordFailed: true,
    };

    expect(testData).toEqual(expected);
  });

  it('should handle AUTH_GET_USER', () => {
    const testData = authReducer(initialState, {
      type: AUTH_GET_USER,
    });
    const expected = {
      ...initialState,
      getUserRequest: true,
      getUserFailed: false,
      isLoggedIn: false,
    };

    expect(testData).toEqual(expected);
  });

  it('should handle AUTH_GET_USER_SUCCESS', () => {
    const testData = authReducer(initialState, {
      type: AUTH_GET_USER_SUCCESS,
      user: { name: '', email: '', password: '' },
    });
    const expected = {
      ...initialState,
      user: { name: '', email: '', password: '' },
      getUserRequest: false,
      getUserFailed: false,
      isLoggedIn: true,
    };

    expect(testData).toEqual(expected);
  });

  it('should handle AUTH_GET_USER_FAILED', () => {
    const testData = authReducer(initialState, {
      type: AUTH_GET_USER_FAILED,
    });
    const expected = {
      ...initialState,
      getUserRequest: false,
      getUserFailed: true,
      isLoggedIn: false,
    };

    expect(testData).toEqual(expected);
  });

  it('should handle AUTH_UPDATE_USER', () => {
    const testData = authReducer(initialState, {
      type: AUTH_UPDATE_USER,
    });
    const expected = {
      ...initialState,
      getUserRequest: true,
      getUserFailed: false,
    };

    expect(testData).toEqual(expected);
  });

  it('should handle AUTH_UPDATE_USER_SUCCESS', () => {
    const testData = authReducer(initialState, {
      type: AUTH_UPDATE_USER_SUCCESS,
      user: { name: '', email: '', password: '' },
    });
    const expected = {
      ...initialState,
      user: { name: '', email: '', password: '' },
      getUserRequest: false,
      getUserFailed: false,
    };

    expect(testData).toEqual(expected);
  });

  it('should handle AUTH_UPDATE_USER_FAILED', () => {
    const testData = authReducer(initialState, {
      type: AUTH_UPDATE_USER_FAILED,
    });
    const expected = {
      ...initialState,
      getUserRequest: false,
      getUserFailed: true,
    };

    expect(testData).toEqual(expected);
  });

  it('should handle AUTH_UPDATE_TOKEN', () => {
    const testData = authReducer(initialState, {
      type: AUTH_UPDATE_TOKEN,
    });
    const expected = {
      ...initialState,
      updateTokenRequest: true,
      updateTokenFailed: false,
    };

    expect(testData).toEqual(expected);
  });

  //   it('should handle AUTH_UPDATE_TOKEN_SUCCESS', () => {
  //     const testData = authReducer(initialState, {
  //       type: AUTH_UPDATE_TOKEN_SUCCESS,
  //       user: { name: '', email: '', password: '' },
  //     });
  //     const expected = {
  //       ...initialState,
  //       user: { name: '', email: '', password: '' },
  //       getUserRequest: false,
  //       getUserFailed: false,
  //     };

  //     expect(testData).toEqual(expected);
  //   });

  it('should handle AUTH_UPDATE_TOKEN_FAILED', () => {
    const testData = authReducer(initialState, {
      type: AUTH_UPDATE_TOKEN_FAILED,
    });
    const expected = {
      ...initialState,
      updateTokenRequest: false,
      updateTokenFailed: true,
      isLoggedIn: false,
    };

    expect(testData).toEqual(expected);
  });
});
