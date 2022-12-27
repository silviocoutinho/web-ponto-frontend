import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import toArray from 'lodash/toArray';
import {
  Alert,
  Button,
  Select,
  GridContainer,
  TimeCard,
} from 'components-ui-cmjau';

import { IndexStyles } from '../../Styles';
import { getIndexYearFromArray } from '../../utils';
import { getLabelYearFromArray } from '../../utils';
import { months, headTimeCard } from './DataToSelects';
import { yearsFromDatabase } from '../yearsFromDatabase';

const Formulario = props => {
  const [dataTimeCard, setDataTimeCard] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [typeOfErrorMessage, setTypeOfErrorMessage] = useState('danger');
  const [fieldMonth, setFieldMonth] = useState(new Date().getMonth() + 1);

  const [years, setYears] = useState([]);
  useEffect(() => {
    yearsFromDatabase(setYears);
  }, []);

  useEffect(() => {
    setFieldYear(getIndexYearFromArray(years, new Date().getFullYear()));
  }, [years]);

  const [fieldYear, setFieldYear] = useState(
    getIndexYearFromArray(years, new Date().getFullYear()),
  );
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  const {
    REACT_APP_PORT_API,
    REACT_APP_URL_API,
    REACT_APP_VERSION_API,
    REACT_APP_ENV,
  } = process.env;

  const RESOURCE = 'consulta-mensal';
  const MAIN_ROUTE = `${REACT_APP_VERSION_API}/pontos/${RESOURCE}`;
  const envURL = REACT_APP_ENV === 'test' ? '' : 'http://';

  const apiURL = `${envURL}${REACT_APP_URL_API}:${REACT_APP_PORT_API}/${MAIN_ROUTE}`;

  axios.defaults.baseURL = apiURL;

  const handleYear = evt => {
    setFieldYear(evt.target.value);
  };

  const handleMonth = evt => {
    setFieldMonth(evt.target.value);
  };

  const getDataFromAPI = (selectedMonth, selectedYear) => {
    const token = localStorage.getItem('token');
    const configHeadersAPI = {
      Authorization: 'Bearer ' + token,
    };
    try {
      axios
        .get(apiURL, {
          params: {
            month: selectedMonth,
            year: selectedYear,
          },
          headers: configHeadersAPI,
        })
        .then(res => {
          if (res.data.length === 0) {
            setTypeOfErrorMessage('warning');
            setErrorMessage(
              'Não existem informações para o período consultado!',
            );
            setDataTimeCard(null);
            return;
          }
          const arrayDataToTimeCard = toArray(res.data);
          setErrorMessage(null);
          setDataTimeCard(arrayDataToTimeCard);
        })
        .catch(err => {
          setDataTimeCard(null);
          if (!err.response) {
            setTypeOfErrorMessage('danger');
            setErrorMessage(
              'O Servidor está indisponível, contate o Setor de TI!',
            );
          } else if (err.response.status === 400) {
            const code = err.response.status;
            const response = err.response.data.error;
            setTypeOfErrorMessage('danger');
            setErrorMessage(`${response}.`);
          } else {
            const code = err.response.status;
            const response = err.response.data;
            setTypeOfErrorMessage('danger');
            setErrorMessage(
              `Estamos com problemas no Servidor. Mensagem: ${response}. Código: ${code}`,
            );
          }
        });
    } catch (error) {
      console.log('Backend is offline!');
    }
  };

  const filterData = () => {
    /* const selectedYears = years
      .filter(element => Number(element.value) === Number(fieldYear))
      .map(element => element.label); */
    const yearToFilter = getLabelYearFromArray(years, fieldYear);
    //console.log('selectedYear', yearToFilter);
    /* console.log(
      currentYear < Number(yearToFilter),
      currentYear,
      yearToFilter,
      currentYear === Number(yearToFilter),
    ); */
    if (
      currentYear === Number(yearToFilter) &&
      Number(fieldMonth) > currentMonth
    ) {
      setDataTimeCard(null);
      setTypeOfErrorMessage('danger');
      setErrorMessage(
        'Mês selecionado inválido. Selecione um mês igual ou inferior ao atual!',
      );
    } else if (currentYear < Number(yearToFilter)) {
      setDataTimeCard(null);
      setTypeOfErrorMessage('danger');
      setErrorMessage(
        'Ano selecionado inválido. Selecione um ano igual ou inferior ao atual!',
      );
    } else {
      getDataFromAPI(Number(fieldMonth), yearToFilter);
    }
  };

  return (
    <IndexStyles>
      <h1>Relatório por mês</h1>
      <Container className="meio">
        <GridContainer columns={3}>
          <div className="select-container">
            <Select
              data={months}
              field="month"
              id="selectMonth"
              label="Mês"
              onChange={handleMonth}
              value={fieldMonth}
              selectedValue={fieldMonth}
            />
          </div>
          <div className="select-container">
            <Select
              data={years}
              field="year"
              id="selectedYear"
              label="Ano"
              onChange={handleYear}
              value={fieldYear}
              selectedValue={fieldYear}
            />
          </div>
          <div className="button-container">
            <Button
              label="Filtrar"
              btnStyle="primary"
              type="button"
              onClick={filterData}
            />
          </div>
        </GridContainer>
        {dataTimeCard && (
          <TimeCard data={dataTimeCard} head={headTimeCard} workingTime={8} />
        )}
        {errorMessage && (
          <Alert message={errorMessage} type={typeOfErrorMessage} />
        )}
      </Container>
    </IndexStyles>
  );
};

export default Formulario;
