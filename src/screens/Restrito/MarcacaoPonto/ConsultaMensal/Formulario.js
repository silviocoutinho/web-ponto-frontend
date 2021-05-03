import React, { useEffect } from 'react';
import { Container, Form, Button, Jumbotron, Badge } from 'react-bootstrap';

import { IndexStyles } from '../../Styles';

import { Input } from 'components-ui-cmjau';

import SelectMonth from './../../../components/SelectMonth';

const Formulario = props => {
  return (
    <IndexStyles>
      <h1>Relatório por mês</h1>
      <Container className="meio">
        <Jumbotron className="formulario-jumbotron shadow p-5 mb-1 rounded">
          <Form>
            <SelectMonth label="Selecione o Mês" placeholder="Digite o valor" />
            <Input
              fieldName="example1"
              label="Example"
              placeholder="Type a text"
            />
            <Button
              variant="primary"
              type="submit"
              className="formulario-button"
            >
              Enviar
            </Button>
            <Button variant="success" className="formulario-button">
              Limpar
            </Button>
          </Form>
        </Jumbotron>
      </Container>
    </IndexStyles>
  );
};

export default Formulario;
