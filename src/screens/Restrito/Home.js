import React from 'react';
import { connect } from 'react-redux';
import { Container, Col, Row } from 'react-bootstrap';

import ActionCreator from '../../redux/actionCreators';
import Header from './elements/Header';
import Menu from './elements/Menu';

import { IndexStyles } from './Styles';

const Home = props => {
  return (
    <IndexStyles>
      <Header title={'Dados da Transparência'} />
      <Container fluid="xs md lg">
        <Row>
          <Col xs={4} md={3} className="menu-lateral">
            <Menu />
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
