import axios from 'axios';
import { ALERT_DANGER, ALERT_SUCCESS } from './imports'; 
import {  createdCode, badRequestCode, noContent } from './imports';

export const postDataToAPI = (data, url, token, setGenericMessage, setGenericMethod  )=>{
  console.log('data ===>', data, 'url ====>', url);
    axios.post(url, 
        data,
        { 
            headers: {            
            Authorization: 'Bearer ' + token
        }
        }).then((res) => {             
            if (res.status === createdCode) {
                setGenericMessage(
                    {active: true, 
                    message: 'Dados enviados com sucesso!', 
                    type: ALERT_SUCCESS});  
                setGenericMethod(false);                         
            }
        }).catch(err => {
            if (err.response.status === badRequestCode){
                setGenericMessage(
                    {active: true, 
                    message: err.response.data.error, 
                    type: ALERT_DANGER});
            }
        }
    );
};

export const putDataToAPI = (data, url, token, setGenericMessage, 
  setGenericMethod, message =  'Dados atualizados sucesso!' 
)=>{
    axios.put(url, 
        data,
        { 
            headers: {            
            Authorization: 'Bearer ' + token
        }
        }).then((res) => {            
            if (res.status === noContent) {
                setGenericMessage(
                    {active: true, 
                    message: message, 
                    type: ALERT_SUCCESS});  
                setGenericMethod(false);                         
            }
        }).catch(err => {
            if (err.response.status === badRequestCode){
                setGenericMessage(
                    {active: true, 
                    message: err.response.data.error, 
                    type: ALERT_DANGER});
            }
        }
    );
};

export const putNewPasswordToAPI = ( data, url, token, setGenericMessage, setGenericMethod ) => {
  putDataToAPI(data, url, token, setGenericMessage, setGenericMethod,  'Senha atualizada com sucesso!') ; 

}
