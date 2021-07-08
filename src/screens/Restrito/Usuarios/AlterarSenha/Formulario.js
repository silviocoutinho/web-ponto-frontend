import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { Alert, Button, Input } from 'components-ui-cmjau';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { IndexStyles } from '../../Styles';
import { FormStyles } from '../StylesForm';

const SignupSchema = Yup.object().shape({
  newPassword: Yup.string()
    .min(2, 'Senha muito curta!')
    .max(50, 'Senha muito grande!')
    .required('Campo Obrigatório'),
  confirmPassword: Yup.string()
    .min(2, 'Senha muito curta!')
    .max(50, 'Senha muito grande!')
    .required('Campo Obrigatório'),
});

const Formulario = props => {
  const [alertMessage, setAlertMessage] = useState('');
  const [typeOfMessage, setTypeOfMessage] = useState('danger');

  const {
    REACT_APP_PORT_API,
    REACT_APP_URL_API,
    REACT_APP_VERSION_API,
    REACT_APP_ENV,
  } = process.env;

  //192.168.0.12:3005/v1/password/alterar
  const RESOURCE = 'alterar';
  const MAIN_ROUTE = `${REACT_APP_VERSION_API}/password/${RESOURCE}`;
  const envURL = REACT_APP_ENV === 'test' ? '' : 'http://';

  const apiURL = `${envURL}${REACT_APP_URL_API}:${REACT_APP_PORT_API}/${MAIN_ROUTE}`;

  axios.defaults.baseURL = apiURL;

  const sendDataToAPI = (values, resetForm) => {
    const token = localStorage.getItem('token');
    const emailUser = jwtDecode(token).email;
    console.log(emailUser);

    const configHeadersAPI = {
      Authorization: 'Bearer ' + token,
    };
    try {
      axios
        .put(
          apiURL,
          {
            passwd: values.newPassword,
            confirmPasswd: values.confirmPassword,
            email: emailUser,
          },
          {
            headers: configHeadersAPI,
          },
        )
        .then(res => {
          console.log(res.data);
          if (res.status === 200) {
            setTypeOfMessage('success');
            setAlertMessage('Senha Alterada com Sucesso!');
            resetForm();
            return;
          }

          setAlertMessage(null);
        })
        .catch(err => {
          if (!err.response) {
            setTypeOfMessage('danger');
            setAlertMessage(
              'O Servidor está indisponível, contate o Setor de TI!',
            );
          } else if (err.response.status === 400) {
            const response = err.response.data.error;
            setTypeOfMessage('danger');
            setAlertMessage(`${response}.`);
          } else if (err.response.status === 401) {
            const response = err.response.data.error;
            setTypeOfMessage('danger');
            setAlertMessage(`Usuário não autorizado.`);
          } else {
            const code = err.response.status;
            const response = err.response.data;
            setTypeOfMessage('danger');
            setAlertMessage(
              `Estamos com problemas no Servidor. Mensagem: ${response}. Código: ${code}`,
            );
          }
        });
    } catch (error) {
      console.log('Backend is offline!');
    }
  };

  return (
    <IndexStyles>
      <h1>Alterar Senha</h1>
      <Container className="meio">
        <FormStyles>
          <Formik
            initialValues={{
              newPassword: '',
              confirmPassword: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { resetForm }) => {
              sendDataToAPI(values, resetForm);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="password-container">
                  <Field
                    name="newPassword"
                    as={Input}
                    label="Nova Senha"
                    placeholder=""
                    type="password"
                    errorMessage={
                      errors.newPassword && touched.newPassword
                        ? errors.newPassword
                        : null
                    }
                  />
                  <Field
                    name="confirmPassword"
                    as={Input}
                    label="Confimar Senha"
                    placeholder=""
                    type="password"
                    errorMessage={
                      errors.confirmPassword && touched.confirmPassword
                        ? errors.confirmPassword
                        : null
                    }
                  />
                </div>
                <div className="button-container">
                  <Button btnStyle="success" label="Salvar" type="submit" />
                  <Button btnStyle="danger" label="Cancelar" type="reset" />
                </div>
              </Form>
            )}
          </Formik>
          {alertMessage && (
            <Alert message={alertMessage} type={typeOfMessage} />
          )}
        </FormStyles>
      </Container>
    </IndexStyles>
  );
};

export default Formulario;
