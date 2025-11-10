import { formatDateISO } from "./dataPresentation";

const gerarDadosParaEnvioNovo = (form) => {
  return {
    fun_nome: form.nome,
    fun_data_cadastro: formatDateISO(form.data_cadastro),
    fun_matricula: form.matricula,   
    fun_pis: form.pis, 
    fun_email : form.email,
    fun_ativo: form.ativo,
    fun_passwd: form.password,
    fun_confirmPasswd: form.confirmPasswd,
    fun_adm: form.adm,
    fun_usuario: '',
    fun_senha: 'S3nha@ntiga'
  }
}

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



export { gerarDadosParaEnvioNovo, gerarDadosParaEnvio  };
