import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container } from 'react-bootstrap';

import SelectDate from '../../../components/SelectDate';

import { Alert, DataTableCertificates } from 'components-ui-cmjau';

import { IndexStyles } from '../../Styles';
import { FormStyles } from '../Styles';

import { HeaderTableCertificate } from './HeaderTableCertificate';
import { filterData } from './FilterData';

const {
  REACT_APP_PORT_API,
  REACT_APP_URL_API,
  REACT_APP_VERSION_API,
  REACT_APP_ENV,
} = process.env;

const RESOURCE = 'certificados';
const MAIN_ROUTE = `${REACT_APP_VERSION_API}/${RESOURCE}/aguardando`;
const envURL = REACT_APP_ENV === 'test' ? '' : 'http://';

const apiURL = `${envURL}${REACT_APP_URL_API}:${REACT_APP_PORT_API}/${MAIN_ROUTE}`;

console.log('URL: ', apiURL);

axios.defaults.baseURL = apiURL;

const token = localStorage.getItem('token');

const configHeadersAPI = {
  Authorization: 'Bearer ' + token,
};

const Formulario = props => {
  const [dataCertificates, setDataCertificates] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [typeOfErrorMessage, setTypeOfErrorMessage] = useState('danger');

  useEffect(() => {
    axios
      .get(apiURL, {
        headers: configHeadersAPI,
      })
      .then(res => {
        console.log(res);
        //setDataCertificates(res);
      });
  }, []);

  return (
    <IndexStyles>
      <FormStyles>
        <h1>Gerenciamento de Certificados</h1>
        <Container className="meio">
          {dataCertificates && (
            <DataTableCertificates
              data={dataCertificates}
              head={HeaderTableCertificate}
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
