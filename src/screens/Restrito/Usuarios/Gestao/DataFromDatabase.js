import axios from 'axios';
import { setUrl } from '../setUrl';


import { badRequestCode } from './imports';
import { ALERT_WARNING, ALERT_DANGER } from './imports';

import { dataPresentation } from './dataPresentation';

const getDataFromAPI = (  
  setGenericMessage,
  setDataDB,
  resourceName
) => {

  const apiURL = setUrl(resourceName);
  axios.defaults.baseURL = apiURL;


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
           setGenericMessage(
            {active: true, 
              message: 'Não existem informações sobre Usuários!', 
              type: ALERT_WARNING
            });      
          setDataDB(null);
          return;
        }      
        const arrayDataToDB = dataPresentation(res.data); 
              
        setDataDB((arrayDataToDB));              
      })
      .catch(err => {
        setDataDB(null);
        if (!err.response) {
          setGenericMessage(
            {active: true, 
              message: 'O Servidor está indisponível, contate o Setor de TI!', 
              type: ALERT_WARNING
            }); 
        } else if (err.response.status === badRequestCode) {
          const code = err.response.status;
          const response = err.response.data.error;
          setGenericMessage(
            {active: true, 
              message: `${response} - Cód: ${code}`, 
              type: ALERT_DANGER
            }); 
        } else {
          const code = err.response.status;
          const response = err.response.data;
          setGenericMessage(
            {active: true, 
              message: `Estamos com problemas no Servidor. Mensagem: ${response}. Código: ${code}`, 
              type: ALERT_DANGER
            });         
        }
      });
  } catch (error) {
    console.log('Backend is offline!');
  }
};

export { getDataFromAPI };
