import React, { useContext, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { BsFillBellFill as BsFill } from 'react-icons/bs';

import { ComponentStyles } from './Styles';

const Input = ({ fieldName, type, label = '', placeholder, validate }) => {
  const [field, setField] = useState('');

  const onChange = evt => {
    setField(evt.target.value);
  };

  return (
    <ComponentStyles>
      <Form.Group controlId="formGridUpdateItem">
        <Form.Label className="formulario-item">{label}</Form.Label>
        <Form.Control
          id={fieldName}
          size="lg"
          type={type}
          value={field}
          onChange={onChange}
          placeholder={placeholder}
        />
      </Form.Group>
    </ComponentStyles>
  );
};

export default Input;
