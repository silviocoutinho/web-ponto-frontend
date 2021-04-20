import React, { useContext, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { BsFillBellFill as BsFill } from 'react-icons/bs';

import { ComponentStyles } from './Styles';

const SelectMonth = ({ fieldName, label = '', placeholder, validate }) => {
  const [field, setField] = useState('');

  const months = new Array(
    'Janeiro',
    'Fevereiro',
    'Marco',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Septembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  );
  const currentMonth = new Date().getMonth() + 1;

  const onChange = evt => {
    setField(evt.target.value);
  };

  return (
    <ComponentStyles>
      <Form.Group controlId="formGridUpdateItem">
        <Form.Label className="formulario-item">{label}</Form.Label>
        <Form.Control
          as="select"
          id={fieldName}
          size="lg"
          value={field}
          onChange={onChange}
          placeholder={placeholder}
        >
          {months.map((element, key) => {
            if (key <= currentMonth) {
              return <option key={key}>{element}</option>;
            } else {
              return (
                <option key={key} disabled>
                  {element}
                </option>
              );
            }
          })}
        </Form.Control>
      </Form.Group>
    </ComponentStyles>
  );
};

export default SelectMonth;
