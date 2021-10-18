import React, { useRef, useState } from 'react';

import { Wrapper2 } from './Styles';

const RadioGroup = ({ label, field, onChange, name, value, ...rest }) => {
  const componentRef = useRef(HTMLInputElement);

  return (
    <Wrapper2>
      <div className="grid-container-radio-group">
        <div className="select-container-radio-group">
          <label>{label}</label>
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <label for="html">HTML</label>
        </div>
      </div>
    </Wrapper2>
  );
};

export default RadioGroup;

/**
 *
 *  <input
            type="radio"
            class="radio-group"
            name={name}
            onChange={onChange}
            ref={componentRef}
            value={value}
          />
 *
 */
