import React, { useRef } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import el from 'date-fns/locale/pt-BR';


import { ComponentStyles } from './Styles';

const InputDate = ({ fieldName, value, label = '',  
                    onChange, disabled=false, height='', 
                    positionIcon='', fontSize, ...rest }) => {
  const componentRef = useRef(HTMLSelectElement);
  registerLocale('el', el);
  
  return (
    <ComponentStyles  height={height} positionIcon={positionIcon} fontSize={fontSize}>     
      <Form.Group>  
      <Col>  
        <Row>                  
          <Form.Label className='formulario-item formulario-label'>{label}</Form.Label>
        </Row>
        <Row>
          <DatePicker 
              id={fieldName}             
              value={value}           
              onChange={onChange} 
              locale="el"            
              dateFormat="dd/MM/yyyy"
              disabled={disabled}
              ref={componentRef}            
              
          />
        </Row>
      </Col>      
      </Form.Group>
    </ComponentStyles>
  );
};

export default InputDate;
