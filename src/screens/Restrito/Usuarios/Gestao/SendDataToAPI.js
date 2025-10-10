import axios from 'axios';
import { ALERT_DANGER, ALERT_SUCCESS } from './imports'; 
import {  createdCode, badRequestCode, noContent } from './imports';

export const postDataToAPI = (data, url, token, setGenericMessage, setGenericMethod  )=>{
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
                    message: 'Dados atualizados sucesso!', 
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

export const putDataToAPI = (data, url, token, setGenericMessage, setGenericMethod  )=>{
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

