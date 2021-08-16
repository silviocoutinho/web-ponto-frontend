import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar, Nav, NavDropdown, Image, Badge } from 'react-bootstrap';
import { BsFillBellFill as BsFill } from 'react-icons/bs';

import ActionCreators from '../../../redux/actionCreators';
import { HeaderStyles } from '../Styles';
import logo from '../../Resource/images/logo-small6.jpg';

const Header = props => {
  const navAlertIcon = 0;
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
            {props.auth.user.adm && (
              <NavDropdown
                title="Gestão de Holerite"
                id="basic-nav-dropdown"
                className="menu-usuario"
              >
                <NavDropdown.Item eventKey="1" href="/admin/upload-payslip">
                  Enviar por Lote
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="2" href="restrito/minha-conta">
                  Substituir um Holerite
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="2" href="restrito/minha-conta">
                  Remover um Holerite
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="3" onClick={props.logout}>
                  Emitir aviso aos funcionários
                </NavDropdown.Item>
              </NavDropdown>
            )}
            <NavDropdown
              title={props.auth.user.nome}
              id="basic-nav-dropdown"
              className="menu-usuario"
            >
              <NavDropdown.Item eventKey="1" href="restrito/minha-conta">
                Minha Conta
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="2" href="restrito/alterar-senha">
                <Link to={'/restrito/alterar-senha'}>Alterar Senha</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="3" onClick={props.logout}>
                Sair
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={
                <>
                  <BsFill className="menu-lateral-button-icone" />
                  {navAlertIcon > 0 && (
                    <Badge variant="light" className="barra-navegacao-badge">
                      {navAlertIcon}
                    </Badge>
                  )}
                </>
              }
              id="basic-nav-dropdown"
              className="menu-usuario"
              disabled={navAlertIcon == 0}
            >
              {navAlertIcon > 0 && (
                <NavDropdown.Item eventKey="1" href="restrito/avisos">
                  Avisos
                </NavDropdown.Item>
              )}
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
