import { createReducer } from 'reduxsauce';
import { Types } from '../actionCreators';

export const INITIAL_STATE = {
  isAuthing: false,
  isAuth: false,
  isSigningin: false,
  user: {},
  isValidingToken: false,
  isTokenValid: false,
  error: false,
  errorMessage: '',
  errorCode: 0,
};

export const signinRequest = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isSigningin: true,
    error: false,
    errorMessage: '',
  };
};

export const signinSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isSigningin: false,
    isAuth: true,
    user: action.user,
  };
};

export const signinFailure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isAuthing: false,
    isAuth: false,
    user: {},
    isSigningin: false,
    error: true,
    errorMessage: action.error,
    errorCode: action.code,
  };
};

export const authRequest = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isSigningin: true,
    error: false,
    errorMessage: '',
  };
};

export const authSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isSigningin: false,
    isAuth: true,
    user: action.user,
  };
};

export const authFailure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isAuthing: false,
    isAuth: false,
    user: {},
    isSigningin: false,
  };
};

export const destroyAuthSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isSigningin: false,
    isAuth: false,
    user: {},
  };
};

export const validateTokenRequest = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isAuthing: false,
    isAuth: false,
    isSigningin: false,
    user: {},
    isValidingToken: true,
    isTokenValid: false,
    error: false,
    errorMessage: '',
    errorCode: 0,
  };
};

export const validateTokenSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isAuth: true,
    user: action.user,
    isValidingToken: false,
    isTokenValid: true,
  };
};

export const validateTokenFailure = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isAuth: false,
    user: {},
    isValidingToken: false,
    isTokenValid: false,
    error: true,
    errorMessage: action.errorMessage,
    errorCode: action.errorCode,
  };
};

export const HANDLERS = {
  [Types.SIGNIN_REQUEST]: signinRequest,
  [Types.SIGNIN_SUCCESS]: signinSuccess,
  [Types.SIGNIN_FAILURE]: signinFailure,
  [Types.AUTH_REQUEST]: authRequest,
  [Types.AUTH_SUCCESS]: authSuccess,
  [Types.AUTH_FAILURE]: authFailure,
  [Types.DESTROY_AUTH_SUCCESS]: destroyAuthSuccess,
  [Types.VALIDATE_TOKEN_REQUEST]: validateTokenRequest,
  [Types.VALIDATE_TOKEN_SUCCESS]: validateTokenSuccess,
  [Types.VALIDATE_TOKEN_FAILURE]: validateTokenFailure,
};
export default createReducer(INITIAL_STATE, HANDLERS);
