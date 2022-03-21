import { takeLatest, all, put } from 'redux-saga/effects';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import ActionCreators from '../actionCreators';

export function* login(action) {
  const {
    REACT_APP_PORT_API,
    REACT_APP_URL,
    REACT_APP_ENV,
    REACT_APP_URL_API,
  } = process.env;

  const envURL = REACT_APP_ENV === 'test' ? '' : 'http://';
  const url = `${envURL}${REACT_APP_URL_API}:${REACT_APP_PORT_API}`;
  axios.defaults.baseURL = url;

  let token = localStorage.getItem('token');

  if (token) {
    const emailUser = jwtDecode(token).email;
    if (emailUser !== action.email) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      token = null;
    }
  }

  if (!token) {
    try {
      const login = yield axios.post(`${url}/auth/signin`, {
        fun_email: action.email, //'adm@mail.com',
        fun_passwd: action.password, //'Test3D3Senh@',
      });
      if (login.data.token) {
        token = login.data.token;
        localStorage.setItem('token', token);
        const user = jwtDecode(login.data.token);
        localStorage.setItem('user', user);
        yield put(ActionCreators.signinSuccess(user));
      }
    } catch (error) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      yield put(
        ActionCreators.signinFailure(
          error.response.data.error,
          error.response.status,
        ),
      );
    }
  }
}

export function* validateToken() {
  const {
    REACT_APP_PORT_API,
    REACT_APP_URL,
    REACT_APP_ENV,
    REACT_APP_URL_API,
  } = process.env;

  const envURL = REACT_APP_ENV === 'test' ? '' : 'http://';
  const url = `${envURL}${REACT_APP_URL_API}:${REACT_APP_PORT_API}`;
  axios.defaults.baseURL = url;

  let token = localStorage.getItem('token');

  if (token) {
    try {
      const validateToken = yield axios.post(`${url}/auth/validate/token`, {
        token: token,
      });
      const user = jwtDecode(token);
      if (validateToken.status === 200) {
        yield put(ActionCreators.validateTokenSuccess(user));
      } else {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        yield put(ActionCreators.validateTokenFailure('Token inválido', 401));
      }
    } catch (error) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      yield put(
        ActionCreators.validateTokenFailure(
          error.response.data.error,
          error.response.status,
        ),
      );
    }
  }
}

export function* auth() {
  let token = localStorage.getItem('token');
  if (token) {
    try {
      const user = jwtDecode(token);
      yield put(ActionCreators.authSuccess(user));
    } catch (error) {
      yield put(ActionCreators.authFailure('Invalid token'));
    }
  } else {
    yield put(ActionCreators.authFailure('No token'));
  }
}

export function* destroyAuth() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  yield put(ActionCreators.destroyAuthSuccess());
}
