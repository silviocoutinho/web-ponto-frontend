import React, { useRef } from 'react';
import { Wrapper } from './Selecy.styles';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.min.css';

const SelectDate = ({ label, data, field, onChange, ...rest }) => {
  const componentRef = useRef(HTMLSelectElement);

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
            locale="pt-BR"
            onChange={onChange}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default SelectDate;
