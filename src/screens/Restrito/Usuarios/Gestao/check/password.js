import { naoExisteValor, valoresNaoIguais } from "../../validacaoDados";

export const checkPasswords = (pass, confirm) => {

    let message = null;  

    if(valoresNaoIguais(pass,confirm)) {     
      message = ' O Campo Senha e Confirme a Senha devem ser iguais!';      
    }  

    message = (naoExisteValor(message)) ? ""  : message;

    return message;
}
