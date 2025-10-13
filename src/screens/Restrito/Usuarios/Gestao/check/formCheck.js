export const formcheckNew = () => {
  return {
    nome: 'Nome',
    data_cadastro: 'Data de Cadastro',
    matricula: 'Matrícula',   
    pis: 'PIS', 
    email : 'E-mail',
    password: 'Senha',
    confirmPasswd: 'Confirmar Senha'
  }
}

export const formcheck = (type) => {
  const OperationType = {
    NEW: 0,
    EDIT: 1,
  }
  const estrutura = {
    nome: 'Nome',
    data_cadastro: 'Data de Cadastro',
    matricula: 'Matrícula',   
    pis: 'PIS', 
    email: 'E-mail',
  };

  if (type === OperationType.NEW) {
    return { 
      ...estrutura, 
      password: 'Senha',
      confirmPasswd: 'Confirmar Senha' 
    };
  }

  return estrutura;
};

