import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';

import { ComponentStyles } from './Styles';

const CheckBox = ({ fieldName, label = '', checked,  onChange, fontWeight, ...rest }) => {
  const componentRef = useRef(HTMLElement);
  return (
    <ComponentStyles fontWeight={fontWeight}>     
      <Form.Group>                     
        <Form.Check
          id={fieldName}
          type="switch"
          label={label}         
          checked={checked}
          onChange={onChange}
          fontWeight={fontWeight}
          ref={componentRef}
        />      
      </Form.Group>
    </ComponentStyles>
  );
};

export default CheckBox;
