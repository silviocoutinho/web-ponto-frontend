
const handlePassword = (record, handlers) => {  

  const {setChangingPassword, setSelectedRecord} = handlers; 
  
  setSelectedRecord(record);
  setChangingPassword(true);   

}; 

export { handlePassword };
