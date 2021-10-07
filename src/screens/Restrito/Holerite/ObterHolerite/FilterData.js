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
  console.log(yearToGetData[0].label);
  getDataFromAPI(
    yearToGetData[0].label,
    setTypeOfErrorMessage,
    setErrorMessage,
    setDataTimeCard,
  );
};

export { filterData };
