import React from 'react';
import { connect } from 'react-redux';
import { Container, Col, Row } from 'react-bootstrap';

import ActionCreator from '../../redux/actionCreators';
import Header from './elements/Header';
import MenuAdm from './elements/MenuAdm';

import { IndexStyles } from './Styles';

const Home = props => {
  return (
    <IndexStyles>
      <Header title={'Portal do Servidor - Administração'} />
      <Container fluid="xs md lg">
        <Row>
          <Col xs={3} md={2} className="menu-lateral">
            <MenuAdm />
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
const mapDispatchToProps = dispatch => {
  return {
    validateToken: () => dispatch(ActionCreator.validateTokenRequest()),
  };
};

export default connect(mapStateToProps)(Home);
