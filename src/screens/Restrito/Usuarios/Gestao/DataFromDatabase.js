import axios from 'axios';
import { toArray } from 'lodash';
import { setMessage } from './MessageNotification';

import { dataPresentation,formatDataBySpecificOrder } from './dataPresentation';

const {
  REACT_APP_PORT_API,
  REACT_APP_URL_API,
  REACT_APP_VERSION_API,
  REACT_APP_ENV,
} = process.env;


const getDataFromAPI = (  
  setTypeOfErrorMessage,
  setErrorMessage,
  setDataDB,
  resourceName
) => {

  const RESOURCE = resourceName;
  const MAIN_ROUTE = `${REACT_APP_VERSION_API}/${RESOURCE}`;
  const envURL = REACT_APP_ENV === 'test' ? '' : 'http://';
  const apiURL = `${envURL}${REACT_APP_URL_API}:${REACT_APP_PORT_API}/${MAIN_ROUTE}`;
  axios.defaults.baseURL = apiURL;

  console.log('aradksfjkadlsjf')

  const removePassword =(arrayDB)=>{   
   return arrayDB.map(record => {
      return ({
          id: record.fun_id,
          nome: record.fun_nome,
          matricula: record.fun_matricula,
         
      });
    })     
  }


  const token = localStorage.getItem('token');

  const configHeadersAPI = {
    Authorization: 'Bearer ' + token,
  };
  try {
    axios
      .get(apiURL, {       
        headers: configHeadersAPI,
      })
      .then(res => {
        if (res.data.length === 0) {
          setMessage(
            setTypeOfErrorMessage,
            setErrorMessage,
            'warning',
            'Não existem informações sobre Usuários!',
          );
          setDataDB(null);
          return;
        }      
        const arrayDataToDB = toArray(dataPresentation(res.data));        
        setDataDB(formatDataBySpecificOrder(arrayDataToDB, 'matricula', 'asc'));              
      })
      .catch(err => {
        setDataDB(null);
        if (!err.response) {
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
