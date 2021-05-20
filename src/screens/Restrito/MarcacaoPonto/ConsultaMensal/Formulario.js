import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { IndexStyles } from '../../Styles';

import { Alert, Button, Input, Select } from 'components-ui-cmjau';

const dataTimeCard = [
  {
    dia: '2021-05-10',
    ent1: '08:01',
    sai1: '12:10',
    ent2: '13:30',
    sai2: '17:00',
    ent3: null,
    sai3: null,
  },
];

const months = new Array(
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
);

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const Formulario = props => {
  return (
    <IndexStyles>
      <h1>Relatório por mês</h1>
      <Container className="meio">
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Alert message="teste" type="danger" />
              <Field
                name="firstName"
                as={Input}
                label="First Name"
                placeholder="teste"
                errorMessage={
                  errors.firstName && touched.firstName
                    ? errors.firstName
                    : null
                }
              />
              <Field
                name="lastName"
                as={Input}
                label="Last Name"
                placeholder="teste"
                errorMessage={
                  errors.lastName && touched.lastName ? errors.lastName : null
                }
              />

              <Field
                name="email"
                as={Select}
                label="E-mail"
                field="email"
                data={months}
                errorMessage={
                  errors.email && touched.email ? errors.email : null
                }
              />

              <Button type="submit" label="Enviar" btnStyle="danger" />
            </Form>
          )}
        </Formik>
      </Container>
    </IndexStyles>
  );
};

export default Formulario;
