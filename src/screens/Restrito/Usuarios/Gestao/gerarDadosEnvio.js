import { formatDateISO } from "./dataPresentation";

const gerarDadosParaEnvio = ( 
 form
) => {
 
  return {
    fun_nome: form.nome,
    fun_data_cadastro: formatDateISO(form.data_cadastro),
    fun_matricula: form.matricula,   
    fun_pis: form.pis, 
    fun_email : form.email,
    fun_ativo: form.ativo,
  };
 
};



export { gerarDadosParaEnvio  };
