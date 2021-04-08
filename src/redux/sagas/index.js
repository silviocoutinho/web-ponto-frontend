import {takeLatest, all, put, take } from 'redux-saga/effects';
import { Types } from '../actionCreators';
import ActionCreators from '../actionCreators';



import { auth, login, destroyAuth, validateToken } from './auth';

export default function* rootSaga(){    
    yield all([
        takeLatest(Types.SIGNIN_REQUEST, login),     
        takeLatest(Types.AUTH_REQUEST, auth),
        takeLatest(Types.DESTROY_AUTH_REQUEST, destroyAuth),
        takeLatest(Types.VALIDATE_TOKEN_REQUEST, validateToken),
        put(ActionCreators.authRequest()),
        
    ]);
};