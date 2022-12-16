import { getDataFromAPI } from './DataFromDatabase';
import { setMessage } from './MessageNotification';

const filterData = (
  starDate,
  endDate,
  setTypeOfErrorMessage,
  setErrorMessage,
  setDataTimeCard,
) => {
  console.log('OK');
  if (starDate > endDate) {
    setMessage(
      setTypeOfErrorMessage,
      setErrorMessage,
      'danger',
      'Mês selecionado inválido. Selecione um mês igual ou inferior ao atual!',
    );
  } else {
    getDataFromAPI(
      starDate,
      endDate,
      setTypeOfErrorMessage,
      setErrorMessage,
      setDataTimeCard,
    );
  }
};

export { filterData };
