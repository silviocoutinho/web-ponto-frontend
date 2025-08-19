import { naoExisteValor } from "../validacaoDados";

const gerarDadosParaEnvio = ( 
 id, form
) => {

  if(naoExisteValor(form.password) || naoExisteValor(form.confirmPassword)){
    return {
      id: id,
      nome: form.nome,
      email: form.email,
      departamentoID:form.departamento,
      tipoUsuarioID: form.tipoUsuario     
    }
  }
 
  return {
    id: id,
    nome: form.nome,
    email: form.email,
    departamentoID:form.departamento,
    tipoUsuarioID: form.tipoUsuario,
    password: form.password,
    confirmPassword: form.confirmPassword   
  };
 
};



export { gerarDadosParaEnvio  };
