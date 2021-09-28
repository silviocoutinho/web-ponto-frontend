import React, { useState, useEffect } from 'react';

import { Container } from 'react-bootstrap';

import SelectDate from '../../../components/SelectDate';

import {
  Alert,
  Button,
  GridContainer,
  Select,
  DataTable,
} from 'components-ui-cmjau';

import { IndexStyles } from '../../Styles';
import { FormStyles } from '../Styles';

import { HeaderPayslip } from './HeaderPayslip';
import { years } from './DataToForm';
import { filterData } from './FilterData';

const Form = props => {
  const [dataTimeCard, setDataTimeCard] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [typeOfErrorMessage, setTypeOfErrorMessage] = useState('danger');

  const [fieldYear, setFieldYear] = useState(1);
  const currentYear = new Date().getFullYear();

  let startDate;
  let endDate;

  useEffect(() => {
    setFieldYear(() => {
      const yearToCombobox = years.filter(arrayOfYears => {
        return arrayOfYears.label === currentYear.toString();
      });
      return yearToCombobox[0].value;
    });
    setFieldYear(3);
  }, []);

  const handleYear = evt => {
    setFieldYear(evt.target.value);
  };

  const clearData = () => {
    console.log(fieldYear);
  };

  return (
    <IndexStyles>
      <FormStyles>
        <h1>Obter Holerite</h1>
        <Container className="meio">
          <GridContainer columns={3}>
            <div className="select-container">
              <Select
                data={years}
                field="year"
                label="Ano"
                onChange={handleYear}
                selectedValue={fieldYear.toString()}
              />
            </div>
            <div className="button-form">
              <Button
                label="Filtrar"
                btnStyle="primary"
                type="button"
                onClick={() =>
                  filterData(
                    years,
                    fieldYear,
                    setTypeOfErrorMessage,
                    setErrorMessage,
                    setDataTimeCard,
                  )
                }
              />
            </div>
            <div className="button-form">
              <Button
                label="Limpar"
                btnStyle="success"
                type="button"
                onClick={() => clearData()}
              />
            </div>
          </GridContainer>
          {dataTimeCard && (
            <DataTable data={dataTimeCard} head={HeaderPayslip} />
          )}
          {errorMessage && (
            <Alert message={errorMessage} type={typeOfErrorMessage} />
          )}
        </Container>
      </FormStyles>
    </IndexStyles>
  );
};

export default Form;
