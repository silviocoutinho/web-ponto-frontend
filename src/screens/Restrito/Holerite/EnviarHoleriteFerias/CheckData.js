const checkData = (month, year, description, EmployeeRegistration, file) => {
  const now = new window.Date();
  const currentMonth = new window.Date(now).getMonth() + 1;
  const currentYear = new window.Date(now).getFullYear();

  const resp = {
    status: 'OK',
    message: 'Tudo OK',
  };

  if (Number(year) === currentYear && month > currentMonth) {
    return {
      status: 'ERROR',
      message:
        'Mês selecionado inválido. Selecione um mês igual ou inferior ao atual!',
    };
  }
  if (description === '' || description === null) {
    return {
      status: 'ERROR',
      message: 'Referência inválida. Por digite um valor válido!',
    };
  }
  if (EmployeeRegistration === '' || EmployeeRegistration === null) {
    return {
      status: 'ERROR',
      message: 'Matrícula inválida. Por digite um valor válido!',
    };
  }
  if (file === undefined || file === null || file === '') {
    return {
      status: 'ERROR',
      message: 'Anexe um Holerite para continuar',
    };
  }
  return resp;
};

export { checkData };
