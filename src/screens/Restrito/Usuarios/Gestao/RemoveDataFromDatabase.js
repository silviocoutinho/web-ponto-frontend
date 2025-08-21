import axios from 'axios';
import { setMessage } from './MessageNotification';
import Swal from 'sweetalert2';
import jwtDecode from 'jwt-decode';

import { filterData } from './FilterData';


const {
  REACT_APP_PORT_API,
  REACT_APP_URL_API,
  REACT_APP_VERSION_API,
  REACT_APP_ENV,
} = process.env;

const RESOURCE = 'funcionarios';
const MAIN_ROUTE = `${REACT_APP_VERSION_API}/${RESOURCE}`;
const envURL = REACT_APP_ENV === 'test' ? '' : 'http://';

const apiURL = `${envURL}${REACT_APP_URL_API}:${REACT_APP_PORT_API}/${MAIN_ROUTE}`;

axios.defaults.baseURL = apiURL;

const removeDataFromAPI = (
  deleteDataID,  
  setTypeOfErrorMessage,
  setErrorMessage,
  setDataDB,
) => {

  const token = localStorage.getItem('token');  
  //const usuarioID = deleteDataID;

  const configHeadersAPI = {
    Authorization: 'Bearer ' + token,
  };

  const atendeCondicoesExclusao = (id, token) => {      
    return (id !== jwtDecode(token).id)
  }

  Swal.fire({          
    title: 'Desabilitar',
    text: "Deseja tornar o registro desabilitado???",
    showCancelButton: true,
    confirmButtonText: 'Sim',
    confirmButtonColor: '#d80e40',
    cancelButtonText: 'Não',
  }).then(result => {
    if (result.isConfirmed && atendeCondicoesExclusao(deleteDataID, token)) {         
      try {
        axios
          .delete(apiURL + "/" + deleteDataID, {       
            headers: configHeadersAPI,
          })
          .then(res => {            
            if (res.status === 204) {
              filterData(setTypeOfErrorMessage, setErrorMessage, setDataDB, 'funcionarios');              
              setMessage(
                setTypeOfErrorMessage,
                setErrorMessage,
                'success',
                'Registro Desabilitado corretamente!',
              );                     
            }           
          })
          .catch(err => {        
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
                `${response}. Código: ${code}.`,
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
    } else if (! atendeCondicoesExclusao(deleteDataID, token)) {
      Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'Autoexclusão não é permitida',
        showConfirmButton: false,
        timer: 2500,
      });
    }
    
  })
  .catch(error => console.log(error));
};

export { removeDataFromAPI  };
