import React from 'react';
import { Form } from 'react-bootstrap';


import { ComponentStyles } from './Styles';

const Input = ({ fieldName, value = '', label = '', placeholder, size = 'sm', disable=false, onChange }) => { 
  return (
    <ComponentStyles>     
      <Form.Group>                      
        <Form.Label className='formulario-item formulario-label'>{label}</Form.Label>
          <Form.Control 
            id={fieldName}
            size={size} 
            type='text' 
            value={value} 
            onChange={onChange} 
            placeholder={placeholder}
            disabled={disable ? true : undefined}
          />                        
      </Form.Group>
    </ComponentStyles>
  );
};

export default Input;
