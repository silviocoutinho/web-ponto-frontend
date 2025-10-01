import { naoExisteValor, PISInvalido, EmailInvalido } from "../../validacaoDados";

export const checkSpecialValues = (form) => {

    let message = null;  

    if(PISInvalido(form.pis)) {
      message = (naoExisteValor(message)) ? ""  : "";
      message = message + ' O Número do PIS é Inválido!';      
    }

    if(EmailInvalido(form.email)) {
      message = (naoExisteValor(message)) ? ""  : message;
      message = message + ' O E-mail é Inválido!';      
    }
  


    return message;
}
