import { getDataFromAPI } from './DataFromDatabase';

const filterData = ( 
  setTypeOfErrorMessage,
  setErrorMessage,
  setDataDB,
  resourceName
) => {
     getDataFromAPI(      
      setTypeOfErrorMessage,
      setErrorMessage,   
      setDataDB,
      resourceName
    );
 
};

export { filterData };
