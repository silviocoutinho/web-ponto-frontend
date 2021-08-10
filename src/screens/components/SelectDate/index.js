import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';

import { Wrapper } from './Styles';

import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.min.css';

import el from 'date-fns/locale/pt-BR'; // the locale you want

const SelectDate = ({ label, data, field, onChange, ...rest }) => {
  const componentRef = useRef(HTMLSelectElement);
  registerLocale('el', el);

  return (
    <Wrapper>
      <div className="grid-container">
        <div className="select-container">
          <label>{label}</label>
          <DatePicker
            id="selectDate"
            ref={componentRef}
            selected={data}
            dateFormat="dd/MM/yyyy"
            locale="el"
            onChange={onChange}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default SelectDate;
