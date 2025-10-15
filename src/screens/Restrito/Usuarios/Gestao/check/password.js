import { naoExisteValor, valoresNaoIguais } from "../../validacaoDados";

export const checkPasswords = (form) => {

    let message = null;  

    if(valoresNaoIguais(form.password, form.confirmPasswd)) {     
      message = ' O Campo Senha e Confirme a Senha devem ser iguais!';      
    }  

    message = (naoExisteValor(message)) ? ""  : message;

    return message;
}

export const lengthPassword = (value) => {
  let message = null; 

  if (value.length <= 5) {     
    message = 'O tamanho mínimo da senha é de 8 caracteres!'
  }

  if (value.length >= 50) {   
    message = (naoExisteValor(message)) ? ""  : message;  
    message = 'O tamanho máximo da senha é de 50 caracteres!'
  }

   message = (naoExisteValor(message)) ? ""  : message;

   return message;
}
