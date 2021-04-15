import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import Header from '../../elements/Header';
import Menu from '../../elements/Menu';
import { IndexStyles } from '../../Styles';

const Formulario = () => <h1>Relatório por mês</h1>;

const ConsultaMensal = () => {
  return (
    <IndexStyles>
      <Header title={'Portal do Servidor'} />
      <Container fluid="xs md lg">
        <Row>
          <Col xs={3} md={2} className="menu-lateral">
            <Menu />
          </Col>
          <Col xs={9} md={10} className="principal">
            <Formulario />
          </Col>
        </Row>
      </Container>
    </IndexStyles>
  );
};

export default ConsultaMensal;
