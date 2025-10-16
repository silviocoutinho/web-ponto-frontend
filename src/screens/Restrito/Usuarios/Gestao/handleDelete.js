import {removeDataFromAPI} from './RemoveDataFromDatabase'

const handleDelete = (row, handlers) => {
  const { setIsRemoving, setTypeOfErrorMessage, setErrorMessage, setDataDB } = handlers;
  setIsRemoving(true);      
  removeDataFromAPI(row.id, setTypeOfErrorMessage, setErrorMessage, setDataDB, setIsRemoving);
};

export { handleDelete };
