import { naoExisteValor } from "../../validacaoDados";

export const checkName = (value) => {  
  let message = null; 

  if (value.length <= 5) {   
    message = ' Nome Inválido! Verifique a quantidade de caracteres.';      
  }

  message = (naoExisteValor(message)) ? ""  : message;

  return message;
}
