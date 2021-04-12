import React, { Component } from 'react';
import ActionCreator from '../../redux/actionCreators';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import {
  Button,
  Alert,
  Form,
  Container,
  Row,
  Col,
  Jumbotron,
} from 'react-bootstrap';

import Header from './Header';
import Footer from '../Footer';
import { IndexStyles } from './Styles';

class Login extends Component {
  state = {
    form: {
      email: '',
      passwd: '',
    },
  };

  handleChange = fieldName => event => {
    const form = {
      ...this.state.form,
    };
    form[fieldName] = event.target.value;
    this.setState({ form });
  };
  login = () => {
    const { email, passwd } = this.state.form;
    this.props.login(email, passwd);
  };

  render() {
    console.log('Auth:', this.props.auth);
    if (this.props.auth.isAuth) {
      if (this.props.auth.user.adm === true) {
        return <Redirect to="/admin" />;
      } else {
        return <Redirect to="/restrito" />;
      }
    }
    return (
      <IndexStyles>
        <Header title="Câmara Municipal de Jahu" />
        <Container className="meio">
          <h1 className="login-title mt-5 text-center">Entrar no Sistema</h1>
          <h2>{}</h2>
          <Row>
            <Col className="mx-auto" sm={9} md={7} lg={5}>
              <Jumbotron className="shadow p-5 mb-2 rounded">
                <Form>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Digite seu email"
                      value={this.state.form.email}
                      onChange={this.handleChange('email')}
                    />
                  </Form.Group>
                  <Form.Group controlId="formPass">
                    <Form.Label>Senha:</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Digite sua senha"
                      value={this.state.form.passwd}
                      onChange={this.handleChange('passwd')}
                    />
                  </Form.Group>
                  <Button variant="primary" onClick={this.login}>
                    Logar
                  </Button>
                </Form>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </IndexStyles>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, passwd) =>
      dispatch(ActionCreator.signinRequest(email, passwd)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
