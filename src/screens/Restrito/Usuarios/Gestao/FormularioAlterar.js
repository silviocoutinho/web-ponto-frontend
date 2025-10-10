import { useState } from "react";
import axios from 'axios';

import { ALERT_DANGER } from "./imports";

import FormBase from "./FormBase";
import { handleChange } from "./handleChange"
import { handleClearForm } from "./handleClearForm";

import { dadosInvalidosEdicao } from "./check/data";
import { gerarDadosParaEnvio } from "./gerarDadosEnvio";
import { setUrl } from '../setUrl';
import { putDataToAPI } from './SendDataToAPI';

/*


    192.168.0.12:3005/v1/funcionarios/adicionar
*/


const FormularioAlterar = ({title, record, dataDB, setIsEditing}) => { 
  const extractBoolenValueFromField = (record, field) => {
    return  record[field].props.children.props.children === "Sim" ? 1 : 0;
  }

  const [form, setForm] = useState({
    //fun_adm: record.fun_adm,
    nome: record.nome,
    data_cadastro: record.data_cadastro,
    matricula: record.matricula,   
    pis: record.pis, 
    email : record.email,
    ativo: extractBoolenValueFromField(record, 'ativo')
  });

  const dadosOriginais = {    
    nome: record.nome,
    data_cadastro: record.data_cadastro,
    matricula: record.matricula,   
    pis: record.pis, 
    email : record.email,
    ativo: extractBoolenValueFromField(record, 'ativo')
  };

  const [genericMessage, setGenericMessage] = useState({active: false, message: '', type: ALERT_DANGER});

  const onChange = field => evt => {  
    handleChange(field, evt, form, setForm);          
  };
  
  const clear = () => {
    handleClearForm(form, setForm, setIsEditing, setGenericMessage);
  }

  const sendData = (evt) => {
    if (dadosInvalidosEdicao(form,  dadosOriginais, setGenericMessage)){
      return;
    }

    if (JSON.stringify(form) === JSON.stringify(dadosOriginais)){
      setIsEditing(false);
      return;
    }

    const token = localStorage.getItem('token');
    const dadosParaEnvio = gerarDadosParaEnvio(form);

    const apiURL = setUrl('funcionarios/'+record.id);  
    axios.defaults.baseURL = apiURL;

    evt.preventDefault();
    setGenericMessage({active: false, message: '', type: ALERT_DANGER}); 

    putDataToAPI(dadosParaEnvio, apiURL, token, setGenericMessage, setIsEditing  );

  };



  return (
    <>
        <FormBase 
            title={title} 
            method={"Alterar Funcionários"}                        
            form={form} 
            setForm={setForm}              
            sendData={sendData} 
            clear={clear}
            onChange={onChange}
            genericMessage={genericMessage}
            setGenericMessage={setGenericMessage}
            whichMethod={"update"}
        />
    </>

)

};
export default FormularioAlterar;
