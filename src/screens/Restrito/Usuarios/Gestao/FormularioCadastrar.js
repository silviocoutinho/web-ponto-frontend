import React, { useState } from 'react';
import axios from 'axios';

import { ALERT_DANGER } from './imports';

import FormBase from './FormBase';

import { setUrl } from '../setUrl';
import { postDataToAPI } from './SendDataToAPI';

import { handleChange } from './handleChange';
import { handleClearForm } from './handleClearForm';

//import { gerarDadosParaEnvioNovo } from './gerarDadosEnvio;
import { dadosInvalidos } from './checkData';

import { formatDateToPresentation } from './dataPresentation';



const FormularioCadastrar = ({title, setIsInserting}) => {   
    const dataAtual =  formatDateToPresentation(Date.now());
    const [form, setForm] = useState({
      nome: '',
      data_cadastro: dataAtual,
      matricula: '',   
      pis: '', 
      email : '',
      ativo: 1,
      password: '',
      confirmPasswd: '',
      adm: 0,
    });    
 
    const [genericMessage, setGenericMessage] = useState({active: false, message: '', type: ALERT_DANGER});
     
    const onChange = field => evt => {                             
        handleChange(field, evt, form, setForm);          
    };
    const clear = () => {
        handleClearForm(form, setForm, setIsInserting, setGenericMessage);
    };
    const sendData = (evt) => {      
        if (dadosInvalidos(form, setGenericMessage)){
            return;
        }

        const apiURL = setUrl('expediente/ordinarias/pdf/'+form.numero);  
        axios.defaults.baseURL = apiURL;

        const token = localStorage.getItem('token');      
        // const dadosParaEnvio = gerarDadosParaEnvioNovo(form);              
        
        setGenericMessage({active: false, message: '', type: ALERT_DANGER});  
        evt.preventDefault();
        
        ///postDataToAPI(dadosParaEnvio, apiURL, token, setGenericMessage, setIsInserting);
    }

    return (
        <>
            <FormBase 
                title={title} 
                method={"Cadastro de Usuários"}                 
                form={form}
                setForm={setForm}            
                sendData={sendData} 
                clear={clear}
                onChange={onChange}
                genericMessage={genericMessage}
                setGenericMessage={setGenericMessage}
                whichMethod={"insert"}
            />
        </>
     
  

    )
};
export default FormularioCadastrar;
