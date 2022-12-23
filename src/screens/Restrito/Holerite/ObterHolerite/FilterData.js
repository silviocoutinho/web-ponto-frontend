import { getDataFromAPI } from './DataFromDatabase';

const filterData = (
  years,
  fieldYear,
  setTypeOfErrorMessage,
  setErrorMessage,
  setDataTimeCard,
) => {
  const yearToGetData = years.filter(arrayOfYears => {
    return arrayOfYears.value === fieldYear.toString();
  });  
  getDataFromAPI(
    yearToGetData[0].label,
    setTypeOfErrorMessage,
    setErrorMessage,
    setDataTimeCard,
  );
};

export { filterData };
