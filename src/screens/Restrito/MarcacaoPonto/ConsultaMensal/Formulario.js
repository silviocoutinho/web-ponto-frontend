import React from 'react';
import { Container, Jumbotron, Badge } from 'react-bootstrap';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { IndexStyles } from '../../Styles';

import { Input, Alert, Button } from 'components-ui-cmjau';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const Formulario = props => {
  return (
    <IndexStyles>
      <h1>Relatório por mês</h1>
      <Container className="meio">
        <Jumbotron className="formulario-jumbotron shadow p-5 mb-1 rounded">
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
                  type="email"
                  as={Input}
                  label="E-mail"
                  placeholder="Your E-mail"
                  errorMessage={
                    errors.email && touched.email ? errors.email : null
                  }
                />

                <Button type="submit" label="Enviar" btnStyle="danger" />
              </Form>
            )}
          </Formik>
        </Jumbotron>
      </Container>
    </IndexStyles>
  );
};

export default Formulario;
