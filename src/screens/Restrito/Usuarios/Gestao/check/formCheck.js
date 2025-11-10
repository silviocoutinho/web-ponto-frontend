export const formcheck = (type) => {
  const OperationType = {
    NEW: 0,
    EDIT: 1,
  }
  const structure = {
    nome: 'Nome',
    data_cadastro: 'Data de Cadastro',
    matricula: 'Matrícula',   
    pis: 'PIS', 
    email: 'E-mail',
  };

  if (type === OperationType.NEW) {
    return { 
      ...structure, 
      password: 'Senha',
      confirmPasswd: 'Confirmar Senha' 
    };
  }

  return structure;
};

