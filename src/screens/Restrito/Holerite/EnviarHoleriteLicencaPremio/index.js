import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';

import Header from '../../../Restrito/elements/Header';
import Form from './Form';

import { IndexStyles } from '../../Styles';
import Menu from '../../elements/Menu';

const EnviarHoleriteLicencaPremio = props => {
  if (!props.auth.isAuth) {
    return <Redirect to="/login" />;
  }
  if (props.auth.user.adm !== true) {
    return <Redirect to="/restrito" />;
  }

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

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(EnviarHoleriteLicencaPremio);
