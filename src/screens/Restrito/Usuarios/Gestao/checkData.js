import { valoresNaoIguais } from "../validacaoDados";

const dadosInvalidos = ( 
 form, setGenericMessage
) => {

  if (form.nome.length <= 5) {
    setGenericMessage({active: true, message: 'Nome Inválido! Verifique a quantidade de caracteres.', type: 'alert alert-danger'});
    return true;
  }

  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!regex.test(form.email)) {
      setGenericMessage({active: true, message: 'E-mail inválido!', type: 'alert alert-danger'});  
      return true;
  } 

  if (valoresNaoIguais(form.password, form.confirmPasswd)) {
    setGenericMessage({active: true, message: 'Senhas não conferem!', type: 'alert alert-danger'});  
    return true;
  }
 
  return false;
 
};






export { dadosInvalidos };
