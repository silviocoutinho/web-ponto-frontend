import { createActions } from 'reduxsauce';

export const {
    Types,
    Creators
} = createActions({
    signinRequest: ['email', 'password'],
    signinSuccess: ['user'],
    signinFailure: ['error', 'code'],

    authRequest: null,
    authSuccess: ['user'],
    authFailure: null,
  

    destroyAuthRequest: null,
    destroyAuthSuccess: null,

    validateTokenRequest: null,
    validateTokenSuccess: ['user'],
    validateTokenFailure: ['errorMessage', 'errorCode'],

   
})


export default Creators;
