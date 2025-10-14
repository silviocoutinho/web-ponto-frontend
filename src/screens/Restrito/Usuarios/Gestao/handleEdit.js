
const handleEdit = (record, handlers) => {  

  const {setIsEditing, setSelectedRecord} = handlers;  
  
  setSelectedRecord(record);
  setIsEditing(true); 

}; 

export { handleEdit };
