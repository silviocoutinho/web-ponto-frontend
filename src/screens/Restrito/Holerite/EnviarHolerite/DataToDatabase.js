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

const baseURL = `${envURL}${REACT_APP_URL_API}:${REACT_APP_PORT_API}/${MAIN_ROUTE}`;

axios.defaults.baseURL = baseURL;

const getDataFromAPI = (
  month,
  year,
  description,
  setTypeOfErrorMessage,
  setErrorMessage,
) => {
  const formData = new FormData();
  const token = localStorage.getItem('token');

  const fileToUpload = document.querySelector('input[type="file"]').files[0];
  month = month.toString().padStart(2, '0');
  formData.append('file', fileToUpload);

  const resourceURL = `${baseURL}?month=${month}&year=${year}&description=${description}`;
  try {
    console.log(resourceURL);
    axios
      .post(resourceURL, formData, {
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
            'Erro de serviço. Informar o TI!',
          );
          return;
        }
        setMessage(
          setTypeOfErrorMessage,
          setErrorMessage,
          'success',
          res.data.message,
        );
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