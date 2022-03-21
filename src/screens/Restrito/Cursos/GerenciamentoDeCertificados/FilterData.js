import { getDataFromAPI } from './DataFromDatabase';

const filterData = ( 
  setTypeOfErrorMessage,
  setErrorMessage,
  setDataCertificates  
) => {
     getDataFromAPI(      
      setTypeOfErrorMessage,
      setErrorMessage,   
      setDataCertificates   
    );
 
};

export { filterData };
