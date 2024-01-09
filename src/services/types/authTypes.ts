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

import { IUser } from '../../types/ingredientsTypes';

export interface IAuthRegister {
  readonly type: typeof AUTH_REGISTER;
}

export interface IAuthRegisterSuccess {
  readonly type: typeof AUTH_REGISTER_SUCCESS;
  readonly user: IUser;
}

export interface IAuthRegisterFailed {
  readonly type: typeof AUTH_REGISTER_FAILED;
}

export interface IAuthLogin {
  readonly type: typeof AUTH_LOGIN;
}

export interface IAuthLoginSuccess {
  readonly type: typeof AUTH_LOGIN_SUCCESS;
  readonly user: IUser;
}

export interface IAuthLoginFailed {
  readonly type: typeof AUTH_LOGIN_FAILED;
}

export interface IAuthLogout {
  readonly type: typeof AUTH_LOGOUT;
}

export interface IAuthLogoutSuccess {
  readonly type: typeof AUTH_LOGOUT_SUCCESS;
}

export interface IAuthLogoutFailed {
  readonly type: typeof AUTH_LOGOUT_FAILED;
}

export interface IAuthForgotPassword {
  readonly type: typeof AUTH_FORGOT_PASSWORD;
}

export interface IAuthForgotPasswordSuccess {
  readonly type: typeof AUTH_FORGOT_PASSWORD_SUCCESS;
}

export interface IAuthForgotPasswordFailed {
  readonly type: typeof AUTH_FORGOT_PASSWORD_FAILED;
}

export interface IAuthResetPassword {
  readonly type: typeof AUTH_RESET_PASSWORD;
}

export interface IAuthResetPasswordSuccess {
  readonly type: typeof AUTH_RESET_PASSWORD_SUCCESS;
}

export interface IAuthResetPasswordFailed {
  readonly type: typeof AUTH_RESET_PASSWORD_FAILED;
}

export interface IAuthGetUser {
  readonly type: typeof AUTH_GET_USER;
}

export interface IAuthGetUserSuccess {
  readonly type: typeof AUTH_GET_USER_SUCCESS;
  readonly user: IUser;
}

export interface IAuthGetUserFailed {
  readonly type: typeof AUTH_GET_USER_FAILED;
}

export interface IAuthUpdateUser {
  readonly type: typeof AUTH_UPDATE_USER;
}

export interface IAuthUpdateUserSuccess {
  readonly type: typeof AUTH_UPDATE_USER_SUCCESS;
  readonly user: IUser;
}

export interface IAuthUpdateUserFailed {
  readonly type: typeof AUTH_UPDATE_USER_FAILED;
}

export interface IAuthUpdateToken {
  readonly type: typeof AUTH_UPDATE_TOKEN;
}

export interface IAuthUpdateTokenSuccess {
  readonly type: typeof AUTH_UPDATE_TOKEN_SUCCESS;
  readonly tokenData: any;
}

export interface IAuthUpdateTokenFailed {
  readonly type: typeof AUTH_UPDATE_TOKEN_FAILED;
}

export type TAuthState = {
  user: IUser;
  registerRequest: boolean;
  registerFailed: boolean;

  loginRequest: boolean;
  loginFailed: boolean;

  logoutRequest: boolean;
  logoutFailed: boolean;

  forgotPasswordRequest: boolean;
  forgotPasswordFailed: boolean;

  resetPasswordRequest: boolean;
  resetPasswordFailed: boolean;

  getUserRequest: boolean;
  getUserFailed: boolean;

  updateUserRequest: boolean;
  updateUserFailed: boolean;

  updateTokenRequest: boolean;
  updateTokenFailed: boolean;
  tokenData: any;

  isLoggedIn: boolean;
  isPasswordReset: boolean;
};

export type TAuthActions =
  | IAuthRegister
  | IAuthRegisterSuccess
  | IAuthRegisterFailed
  | IAuthLogin
  | IAuthLoginSuccess
  | IAuthLoginFailed
  | IAuthLogout
  | IAuthLogoutSuccess
  | IAuthLogoutFailed
  | IAuthForgotPassword
  | IAuthForgotPasswordSuccess
  | IAuthForgotPasswordFailed
  | IAuthResetPassword
  | IAuthResetPasswordSuccess
  | IAuthResetPasswordFailed
  | IAuthGetUser
  | IAuthGetUserSuccess
  | IAuthGetUserFailed
  | IAuthUpdateUser
  | IAuthUpdateUserSuccess
  | IAuthUpdateUserFailed
  | IAuthUpdateToken
  | IAuthUpdateTokenSuccess
  | IAuthUpdateTokenFailed;
