import axios from 'axios';
import { toArray } from 'lodash';

const {
  REACT_APP_PORT_API,
  REACT_APP_URL_API,
  REACT_APP_VERSION_API,
  REACT_APP_ENV,
} = process.env;


const getDataFromAPI = (  
  setGenericMessage,
  setDataDB,
  resourceName
) => {

  const RESOURCE = resourceName;
  const MAIN_ROUTE = `${REACT_APP_VERSION_API}/${RESOURCE}`;
  const envURL = REACT_APP_ENV === 'test' ? '' : 'http://';
  const apiURL = `${envURL}${REACT_APP_URL_API}:${REACT_APP_PORT_API}/${MAIN_ROUTE}`;
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
          setGenericMessage({active: true, 
            message: 'Não existem informações sobre Usuários!', 
            type: 'alert alert-warning'
          });         
          setDataDB(null);
          return;
        }                    
        const arrayDataToDB = toArray((res.data));
        setDataDB(arrayDataToDB);        
      })
      .catch(err => {
        setDataDB(null);
        if (!err.response) {
          setGenericMessage({active: true, 
            message: 'O Servidor está indisponível, contate o Setor de TI!', 
            type: 'alert alert-danger'
          });       
        } else if (err.response.status === 400) {
          const code = err.response.status;
          const response = err.response.data.error;
          setGenericMessage({
            active: true, 
            message: `${response}. Código erro: ${code}`, 
            type: 'alert alert-danger'
          });          
        } else {
          const code = err.response.status;
          const response = err.response.data;
          setGenericMessage({
            active: true, 
            message: `Estamos com problemas no Servidor. Mensagem: ${response}. Código: ${code}`,
            type: 'alert alert-danger'
          }); 
        }
      });
  } catch (error) {
    console.log('Backend is offline!');
  }
};

export { getDataFromAPI };
