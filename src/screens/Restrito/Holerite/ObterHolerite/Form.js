import React, { useState, useEffect } from 'react';

import { Container } from 'react-bootstrap';

import {
  Alert,
  Button,
  GridContainer,
  Select,
  PayslipTable,
} from 'components-ui-cmjau';

import { IndexStyles } from '../../Styles';
import { FormStyles } from '../Styles';

import { HeaderPayslip } from './HeaderPayslip';
import { years } from './DataToForm';
import { filterData } from './FilterData';

const { REACT_APP_FILE_SERVER, REACT_APP_PATH_FILES_STORED, REACT_APP_ENV } =
  process.env;

const envURL = REACT_APP_ENV === 'test' ? '' : 'http://';

const fileServerURL = `${envURL}${REACT_APP_FILE_SERVER}/${REACT_APP_PATH_FILES_STORED}`;

const Form = props => {

  const [dataPayslip, setDataPayslip] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [typeOfErrorMessage, setTypeOfErrorMessage] = useState('danger');

  const [fieldYear, setFieldYear] = useState(1);
  const currentYear = new Date().getFullYear();

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

  const getYearFromSelect = () => {
    const yearToCombobox = years.filter(arrayOfYears => {
      return arrayOfYears.value === fieldYear.toString();
    });
    return yearToCombobox[0].label;
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
                    setDataPayslip,
                  )
                }
              />
            </div>
            <div className="button-form">
              
            </div>
          </GridContainer>
          {dataPayslip && (
            <PayslipTable
              data={dataPayslip}
              head={HeaderPayslip}
              pathToFile={fileServerURL + '/' + getYearFromSelect()}
            />
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
