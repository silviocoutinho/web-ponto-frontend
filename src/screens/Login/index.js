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
  clearSession = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
  validateToken = () => {
    this.props.validateToken();
  };

  render() {
    //console.log('Auth:', this.props.auth);

    if (this.props.auth.isAuth && this.props.auth.isTokenValid) {
      return <Redirect to="/restrito" />;
    }

    if (
      !this.props.auth.isTokenValid &&
      !this.props.auth.isValidingToken &&      
      this.props.auth.isAuth
    ) {
      this.validateToken();
    }

    return (
      <IndexStyles>
        <Header title="Câmara Municipal de Jahu" />
        <Container className="meio" fluid="lg">
          <h1 className="login-title mt-5 text-center">Entrar no Sistema</h1>
          <Row>
            <Col className="mx-auto" sm={9} md={7} lg={5}>
              <Jumbotron className="shadow p-5 mb-2 rounded">
                {this.props.auth.error && (
                  <Alert variant="danger">
                    <p className="login-alert">
                      {this.props.auth.errorMessage}
                    </p>
                  </Alert>
                )}
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
                  <Form.Group>
                    <Button variant="primary" onClick={this.login}>
                      Logar
                    </Button>
                  </Form.Group>
                  <Form.Group>
                    <Button variant="primary" onClick={this.clearSession}>
                      Limpar Sessão
                    </Button>                  
                  </Form.Group>        
                </Form>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
        <Footer />
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
    validateToken: () => dispatch(ActionCreator.validateTokenRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
