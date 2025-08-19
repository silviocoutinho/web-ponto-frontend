import { getDataFromAPI } from './DataFromDatabase';

const filterData = ( 
  setGenericMessage,
  setDataDB,
  resourceName
) => {
     getDataFromAPI(      
      setGenericMessage,
      setDataDB,
      resourceName
    ); 
};

export { filterData };
