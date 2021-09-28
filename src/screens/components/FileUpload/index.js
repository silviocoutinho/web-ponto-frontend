import React, { useRef, useState } from 'react';

import { Wrapper2 } from './Styles';

const FileUpload = ({ label, field, onChange, ...rest }) => {
  const componentRef = useRef(HTMLInputElement);

  return (
    <Wrapper2>
      <div className="grid-container-file-upload">
        <div className="select-container-file-upload">
          <label>{label}</label>
          <input
            type="file"
            class="fileUpload"
            id={field}
            name="filename"
            onChange={onChange}
            ref={componentRef}
          />
        </div>
      </div>
    </Wrapper2>
  );
};

export default FileUpload;
