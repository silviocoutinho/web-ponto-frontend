import { naoExisteValor, PISInvalido, EmailInvalido } from "../../validacaoDados";

import { checkSpecialValues } from './specialValues';

import { ALERT_DANGER } from "../imports";

export const dadosInvalidos = (  form, setGenericMessage  ) => {

  let result = false;
  let message = '';
  let fieldError = '';

  const formForCheck = {
    nome: 'Nome',
    data_cadastro: 'Data de Cadastro',
    matricula: 'Matrícula',   
    pis: 'PIS', 
    email : 'E-mail',
    ativo: 'Ativo'
  }

  Object.keys(formForCheck).forEach((value) => {  
  if (naoExisteValor(form[value])) {
      fieldError = (naoExisteValor(fieldError)) ? fieldError  : fieldError + ",";
      fieldError = fieldError + ' ' + formForCheck[value];
      result = true;
      message =  'Digite o valor(es) para o(s) campo(s): ' ;
    }
  });

  if(PISInvalido(form.pis)) {
    message = message + ' O Número do PIS é Inválido!';
    result = true;
  }
  
  if(EmailInvalido(form.email)) {
    message = message + ' O E-mail é Inválido!';
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

  const fieldsForm = {
    nome: 'Nome',
    data_cadastro: 'Data de Cadastro',
    matricula: 'Matrícula',   
    pis: 'PIS', 
    email : 'E-mail',
  }

  Object.keys(formForCheck).forEach((value) => {  
    if ((form[value] !== dadosOriginais[value]) && naoExisteValor(form[value])) {
       fieldError = (naoExisteValor(fieldError)) ? fieldError  : fieldError + ",";
       fieldError = fieldError + ' ' + fieldsForm[value];
       result = true;
     }
     console.log()
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
