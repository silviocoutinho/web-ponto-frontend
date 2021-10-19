import axios from 'axios';
import { setMessage } from './MessageNotification';
//{{base_url_api_pontos}}/v1/payslip/upload/pdf?month=10&year=2021&description=09/2021
const {
  REACT_APP_PORT_API,
  REACT_APP_URL_API,
  REACT_APP_VERSION_API,
  REACT_APP_ENV,
} = process.env;

const RESOURCE = 'upload/pdf';
const MAIN_ROUTE = `${REACT_APP_VERSION_API}/payslip/${RESOURCE}`;
const envURL = REACT_APP_ENV === 'test' ? '' : 'http://';

let apiURL = `${envURL}${REACT_APP_URL_API}:${REACT_APP_PORT_API}/${MAIN_ROUTE}`;

axios.defaults.baseURL = apiURL;

const getDataFromAPI = (
  month,
  year,
  description,
  setTypeOfErrorMessage,
  setErrorMessage,
) => {
  const formData = new FormData();
  const token = localStorage.getItem('token');

  console.log(apiURL);
  month = month.toString().padStart(2, '0');

  apiURL = `${envURL}${REACT_APP_URL_API}:${REACT_APP_PORT_API}/${MAIN_ROUTE}?month=${month}&year=${year}&description=${description}`;
  try {
    console.log(apiURL);
    axios
      .post(apiURL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: 'Bearer ' + token,
        },
      })
      .then(res => {
        if (res.data.length === 0) {
          //TODO: Revisar Mensagens de Alerta!!!
          setMessage(
            setTypeOfErrorMessage,
            setErrorMessage,
            'warning',
            'PERSONALIZAR!',
          );
          return;
        }
        setMessage(setTypeOfErrorMessage, setErrorMessage, 'warning', null);
      })
      .catch(err => {
        if (!err.response) {
          //TODO: Revisar Mensagens de Alerta!!!
          setMessage(
            setTypeOfErrorMessage,
            setErrorMessage,
            'danger',
            'O Servidor está indisponível, contate o Setor de TI!',
          );
        } else if (err.response.status === 400) {
          const code = err.response.status;
          const response = err.response.data.error;
          setMessage(
            setTypeOfErrorMessage,
            setErrorMessage,
            'danger',
            `${response}.`,
          );
        } else {
          const code = err.response.status;
          const response = err.response.data;
          //TODO: Revisar Mensagens de Alerta!!!
          setMessage(
            setTypeOfErrorMessage,
            setErrorMessage,
            'danger',
            `Estamos com problemas no Servidor. Mensagem: ${response}. Código: ${code}`,
          );
        }
      });
  } catch (error) {
    console.log('Backend is offline!');
  }
};

export { getDataFromAPI };
