import React, { useState, useEffect } from 'react';

import { Container } from 'react-bootstrap';

import SelectDate from '../../../components/SelectDate';

import { Alert, DataTableCertificates } from 'components-ui-cmjau';

import { IndexStyles } from '../../Styles';
import { FormStyles } from '../Styles';

import { HeaderTableCertificate } from './HeaderTableCertificate';
import { filterData } from './FilterData';

const Formulario = props => {
  const [dataCertificates, setDataCertificates] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [typeOfErrorMessage, setTypeOfErrorMessage] = useState('danger');

  useEffect(() => {
    filterData(setTypeOfErrorMessage, setErrorMessage, setDataCertificates);
  }, []);

  return (
    <IndexStyles>
      <FormStyles>
        <h1>Consulta de Certificados Apresentados </h1>
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
