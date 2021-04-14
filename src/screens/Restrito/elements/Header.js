import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';

import ActionCreators from '../../../redux/actionCreators';
import { HeaderStyles } from '../Styles';
import logo from '../../Resource/images/logo-small6.jpg';

const Header = props => {
  return (
    <HeaderStyles>
      <header>
        <Navbar expand="sm md lg">
          <Navbar.Brand href="/restrito">
            <Image src={logo} className="navbar-logo" rounded />
            {props.title}
          </Navbar.Brand>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Nav className="ml-auto" activeKey="/home">
            <NavDropdown
              title={props.auth.user.nome}
              id="basic-nav-dropdown"
              className="menu-usuario"
            >
              <NavDropdown.Item eventKey="1" href="restrito/minha-conta">
                Minha Conta
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="2" href="restrito/alterar-senha">
                Alterar Senha
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="3" onClick={props.logout}>
                Sair
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
      </header>
    </HeaderStyles>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signin: (email, passwd) => ActionCreators.signinRequest(email, passwd),
    logout: () => dispatch(ActionCreators.destroyAuthRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
