
const handleEdit = (record, handlers) => {  

  const {setIsEditing, setSelectedRecord} = handlers;  
  setSelectedRecord(record);
  setIsEditing(true);
  console.log('handleEdit',record)
  
  
}; 

export { handleEdit };
