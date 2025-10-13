import { naoExisteValor, PISInvalido, EmailInvalido } from "../../validacaoDados";
import { checkName } from "./name";
import { checkPasswords } from "./password";

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
    message = (naoExisteValor(message)) ? ""  : message;    
    
    message = message + checkPasswords(form.password, form.confirmPasswd);    
    message = (naoExisteValor(message)) ? ""  : message;
    

    message = message + checkName(form.nome);
    message = (naoExisteValor(message)) ? ""  : message;
    
  


    return message;
}
