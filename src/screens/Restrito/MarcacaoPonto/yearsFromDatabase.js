import axios from 'axios';

const {
  REACT_APP_PORT_API,
  REACT_APP_URL_API,
  REACT_APP_VERSION_API,
  REACT_APP_ENV,
} = process.env;

const MAIN_ROUTE = `exercicio-holerites/`;
const envURL = REACT_APP_ENV === 'test' ? '' : 'http://';
const baseURL = `${envURL}${REACT_APP_URL_API}:${REACT_APP_PORT_API}/${MAIN_ROUTE}`;
const token = localStorage.getItem('token');
const configHeadersAPI = {
  Authorization: 'Bearer ' + token,
};
axios.defaults.baseURL = baseURL;

export const yearsFromDatabase = async setYears => {
  let response;
  //, { headers: configHeadersAPI }
  try {
    response = await axios.get(`${baseURL}`);
    setYears(response?.data);
  } catch (error) {
    setYears(null);
    throw new Error(error.message);
  }
};
