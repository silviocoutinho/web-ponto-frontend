import React, { useState } from 'react';

import { Container } from 'react-bootstrap';

import SelectDate from './../../../components/SelectDate';

import { Alert, Button, GridContainer, TimeCard } from 'components-ui-cmjau';

import { IndexStyles } from '../../Styles';
import { FormStyles } from '../Styles';

import { HeaderTimeCard } from './HeaderTimeCard';
import { filterData } from './FilterData';

const Formulario = props => {
  const [dataTimeCard, setDataTimeCard] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [typeOfErrorMessage, setTypeOfErrorMessage] = useState('danger');

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <IndexStyles>
      <FormStyles>
        <h1>Consulta por dia </h1>
        <Container className="meio">
          <GridContainer columns={3}>
            <div className="select-date-form">
              <SelectDate
                label="Data Inicial"
                data={startDate}
                onChange={date => setStartDate(date)}
              />
            </div>
            <div className="select-date-form">
              <SelectDate
                label="Data Final"
                data={endDate}
                onChange={date => setEndDate(date)}
              />
            </div>
            <div className="button-form">
              <Button
                label="Filtrar"
                btnStyle="primary"
                type="button"
                onClick={() =>
                  filterData(
                    startDate,
                    endDate,
                    setTypeOfErrorMessage,
                    setErrorMessage,
                    setDataTimeCard,
                  )
                }
              />
            </div>
          </GridContainer>
          {dataTimeCard && (
            <TimeCard
              data={dataTimeCard}
              head={HeaderTimeCard}
              workingTime={8}
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

export default Formulario;
