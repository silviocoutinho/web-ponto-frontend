import { naoExisteValor } from "../../validacaoDados";

export const checkAllFields =(form, formForCheck)=>{
  
  let result = false;
  let message = '';
  let fieldError = '';

  Object.keys(formForCheck).forEach((value) => {  
    console.log(value, "==>", formForCheck[value], " === ", naoExisteValor(form[value]));
    if (naoExisteValor(form[value])) {
      fieldError = (naoExisteValor(fieldError)) ? fieldError  : fieldError + ",";
      fieldError = fieldError + ' ' + formForCheck[value];
      message =  'Digite o valor(es) para o(s) campo(s): ' ;
      result = true;
    }
  });

  message = (result) ? 'Digite o valor(es) para o(s) campo(s): ' : '';
  message = (naoExisteValor(fieldError)) ? message : `${message} ${fieldError}.`;

  return message;
}

