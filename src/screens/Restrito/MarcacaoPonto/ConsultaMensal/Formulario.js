import React from 'react';
import { Container, Form, Button, Jumbotron, Badge } from 'react-bootstrap';

import { IndexStyles } from '../../Styles';

const Formulario = props => {
  return (
    <IndexStyles>
      <h1>Relatório por mês</h1>
      <Container className="meio">
        <Jumbotron className="formulario-jumbotron shadow p-5 mb-1 rounded">
          <Form>
            <p className="formulario-info">
              <span>
                Mês:
                <Form.Control as="select" className="formulario-select">
                  <option>Default select</option>
                </Form.Control>
              </span>
              <span className="formulario-info-ano">Ano: 2021</span>
            </p>

            <Form.Group>
              <Form.File
                id="exampleFormControlFile1"
                label="Selecionar Arquivo"
              />
            </Form.Group>
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
