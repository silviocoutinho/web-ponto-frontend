import React from 'react';
import { Button } from 'react-bootstrap';

const formatLine = (value) => {
  return value % 2 === 0 ? 'class-even' : 'class-odd';
}

const Row = ({ record, position, handleEdit, handleDelete, state='', hideFields, captionEdit, captionDelete }) => {
  const keys = Object.keys(record);  
  return(
    <tr key={record.id} className={formatLine(position) + state}>
      { 
        keys.flatMap(key => {
          if (hideFields.includes(key) === false){
            return (<td key={key}>{record[key]}</td>)
          }                  
        }) 
      }
      <td className='column-action'>
        <Button className='button-action' disabled={hideFields.includes('btnEdit') ? true : false } variant="secondary"  onClick={() => handleEdit(record)}>{captionEdit}</Button>
      </td>
      <td className='column-action'>
        <Button className='button-action' disabled={hideFields.includes('btnDelete') ? true : false } variant="danger" onClick={() => handleDelete(record.id)}>{captionDelete}</Button>
      </td>
    </tr>
  );
}

export default Row;
