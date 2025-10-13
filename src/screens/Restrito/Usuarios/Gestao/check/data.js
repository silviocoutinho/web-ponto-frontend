import { naoExisteValor } from "../../validacaoDados";
import { checkAllFields } from "./iterateFields";
import { checkSpecialValues } from './specialValues';
import { formcheck } from "./formCheck";

import { ALERT_DANGER } from "../imports";

  const OperationType = {
    NEW: 0,
    EDIT: 1,
  }

export const dadosInvalidos = (  form, setGenericMessage  ) => {

  let message = '';  
  let result = false;

  const formForCheck = formcheck(OperationType.NEW);
  

  message = checkAllFields(form, formForCheck);
  (message !== '' ? result = true : result = false)

  const specialValues = checkSpecialValues(form);
  if (specialValues !== null) {
    message = message +  specialValues;
    result = true;
  }


  setGenericMessage(
    {active: result, 
      message: `${message}`, 
      type: ALERT_DANGER
    });
  return result;

};



export const dadosInvalidosEdicao = (  form, dadosOriginais, setGenericMessage  ) => {

  let result = false;
  let message = '';
  let fieldError = '';

  const formForCheck = {
    nome: form.nome,
    data_cadastro: form.data_cadastro,
    matricula: form.matricula,   
    pis: form.pis, 
    email : form.email,
    
  }

  const fieldsForm = formcheck(OperationType.EDIT);

  Object.keys(formForCheck).forEach((value) => {  
    if ((form[value] !== dadosOriginais[value]) && naoExisteValor(form[value])) {
       fieldError = (naoExisteValor(fieldError)) ? fieldError  : fieldError + ",";
       fieldError = fieldError + ' ' + fieldsForm[value];
       result = true;
     }
  });

  message = (result) ? 'Digite o valor(es) para o(s) campo(s): ' : '';
  message = (naoExisteValor(fieldError)) ? message : `${message} ${fieldError}.`;

  
  const specialValues = checkSpecialValues(form);
  if (specialValues !== null) {
    message = message +  specialValues;
    result = true;
  }


  setGenericMessage(
    {active: result, 
      message: `${message}`, 
      type: ALERT_DANGER
    });
  return result;

};
