import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import Header from '../../../Restrito/elements/Header';
import Form from './Form';

import { IndexStyles } from '../../Styles';
import Menu from '../../elements/Menu';

const EnviarHolerite = () => {
  return (
    <IndexStyles>
      <Header title={'Portal do Servidor'} />
      <Container fluid="xs md lg">
        <Row>
          <Col xs={3} md={2} className="menu-lateral">
            <Menu />
          </Col>
          <Col xs={9} md={10} className="principal">
            <Form />
          </Col>
        </Row>
      </Container>
    </IndexStyles>
  );
};

export default EnviarHolerite;
