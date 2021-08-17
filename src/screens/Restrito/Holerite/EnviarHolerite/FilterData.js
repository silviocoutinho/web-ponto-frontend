import { getDataFromAPI } from './DataFromDatabase';
import { setMessage } from './MessageNotification';

const filterData = (month, year, setTypeOfErrorMessage, setErrorMessage) => {
  const currentYear = new Date.now().getFullYear();
  const currentMonth = new Date.now().getMonth();
  if (year > currentYear) {
    setMessage(
      setTypeOfErrorMessage,
      setErrorMessage,
      'danger',
      'Ano selecionado inválido. Selecione um ano igual ou inferior ao atual!',
    );
  } else if (month > currentMonth) {
    setMessage(
      setTypeOfErrorMessage,
      setErrorMessage,
      'danger',
      'Mês selecionado inválido. Selecione um mês igual ou inferior ao atual!',
    );
  } else {
    getDataFromAPI(month, year, setTypeOfErrorMessage, setErrorMessage);
  }
};

export { filterData };
