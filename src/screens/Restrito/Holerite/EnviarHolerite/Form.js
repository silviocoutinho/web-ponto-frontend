import React, { useState } from 'react';

import { Container } from 'react-bootstrap';

import { Alert, Button, GridContainer, Select } from 'components-ui-cmjau';
import FileUpload from '../../../components/FileUpload';

import { IndexStyles } from '../../Styles';
import { FormStyles } from '../Styles';

import { filterData } from './FilterData';
import { months, years } from './DataToSelects';

const Form = props => {
  const [errorMessage, setErrorMessage] = useState('');
  const [typeOfErrorMessage, setTypeOfErrorMessage] = useState('danger');
  const [fieldMonth, setFieldMonth] = useState(1);
  const [fieldYear, setFieldYear] = useState(1);

  const handleYear = evt => {
    setFieldYear(evt.target.value);
  };

  const handleMonth = evt => {
    setFieldMonth(evt.target.value);
  };

  return (
    <IndexStyles>
      <FormStyles>
        <h1>Enviar Holerites em Lote </h1>
        <Container className="meio">
          <GridContainer columns={2}>
            <div className="select-container">
              <Select
                data={months}
                field="month"
                label="Mês"
                onChange={handleMonth}
              />
            </div>
            <div className="select-container">
              <Select
                data={years}
                field="year"
                label="Ano"
                onChange={handleYear}
              />
            </div>
          </GridContainer>
          <GridContainer columns={1}>
            <div className="select-container">
              <FileUpload
                label="Selecionar Lote de Holerites"
                field="fileHolerites"
              />
            </div>
          </GridContainer>
          <GridContainer columns={2}>
            <div className="button-form">
              <Button label="Filtrar" btnStyle="primary" type="button" />
            </div>
            <div className="button-form">
              <Button label="Limpar" btnStyle="success" type="button" />
            </div>
          </GridContainer>

          {errorMessage && (
            <Alert message={errorMessage} type={typeOfErrorMessage} />
          )}
        </Container>
      </FormStyles>
    </IndexStyles>
  );
};

export default Form;
