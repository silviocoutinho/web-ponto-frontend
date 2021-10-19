import { getDataFromAPI } from './DataToDatabase';
import { setMessage } from './MessageNotification';

const filterData = (
  month,
  year,
  description,
  setTypeOfErrorMessage,
  setErrorMessage,
) => {
  const currentYear = 2021; // new Date.now().getFullYear();
  const currentMonth = 10; // new Date.now().getMonth();
  if (Number(year) === currentYear && month > currentMonth) {
    setMessage(
      setTypeOfErrorMessage,
      setErrorMessage,
      'danger',
      'Mês selecionado inválido. Selecione um mês igual ou inferior ao atual!',
    );
  } else {
    getDataFromAPI(
      month,
      year,
      description,
      setTypeOfErrorMessage,
      setErrorMessage,
    );
  }
};

export { filterData };
