import React, { useState } from 'react';
import axios from 'axios';

import { ALERT_DANGER } from './imports';

import FormBase from './FormBase';

import { setUrl } from '../setUrl';
import { putNewPasswordToAPI } from './SendDataToAPI';

import { handleChange } from './handleChange';
import { handleClearForm } from './handleClearForm';

import { dadosInvalidosPassword } from './check/data';



const FormularioPassword = ({title, setIsInserting, record}) => {       
    const [form, setForm] = useState({     
      password: '',
      confirmPasswd: '',   
      email: record.email   
    });    
 
    const [genericMessage, setGenericMessage] = useState({active: false, message: '', type: ALERT_DANGER});
     
    const onChange = field => evt => {                             
        handleChange(field, evt, form, setForm);          
    };
    const clear = () => {
        handleClearForm(form, setForm, setIsInserting, setGenericMessage);
    };
    const sendData = (evt) => {  

        if (dadosInvalidosPassword(form, setGenericMessage)){
            return;
        }

        const apiURL = setUrl('password/alterar');  
        axios.defaults.baseURL = apiURL;

        const token = localStorage.getItem('token');      
        const dadosParaEnvio = {
            passwd: form.password,
            confirmPasswd: form.confirmPasswd,
            email: form.email
        }   
        console.log('Form Pass', dadosParaEnvio);   
                       
        setGenericMessage({active: false, message: '', type: ALERT_DANGER});  
        evt.preventDefault();
        
        putNewPasswordToAPI(dadosParaEnvio, apiURL, token, setGenericMessage, setIsInserting);
    }

    return (
        <>
            <FormBase 
                title={title} 
                method={"Alterando a Senha do Usuário"}                 
                form={form}
                setForm={setForm}            
                sendData={sendData} 
                clear={clear}
                onChange={onChange}
                genericMessage={genericMessage}
                setGenericMessage={setGenericMessage}
                whichMethod={"password"}
            />
        </>
     
  

    )
};
export default FormularioPassword;
