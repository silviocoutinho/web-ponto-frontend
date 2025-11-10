import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar, Nav, NavDropdown, Image, Badge } from 'react-bootstrap';
import { BsFillBellFill as BsFill } from 'react-icons/bs';

import ActionCreators from '../../../redux/actionCreators';
import { HeaderStyles } from '../Styles';
import logo from '../../Resource/images/logo-small6.jpg';

import VersaoSoftware from './Version';

const Header = props => {
  const navAlertIcon = 0;
  return (
    <HeaderStyles>
      <header>
        <Navbar expand="sm md lg">
          <Navbar.Brand href="/restrito" className="header-title">
            <Link to={'/restrito'} className="header-title">
              <Image src={logo} className="navbar-logo" rounded />
              <span>{props.title}</span>
              <VersaoSoftware />
            </Link>
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
                <NavDropdown.Item
                  eventKey="1"
                  as={Link}
                  to="/restrito/upload-payslip"
                >
                  Enviar Mensal por Lote
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey="2"
                  as={Link}
                  to="/restrito/upload-vacation-payslip"
                >
                  Enviar único de Férias
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey="2"
                  as={Link}
                  to="/restrito/upload-others-payslip"
                >
                  Enviar único de Licença Prêmio
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey="3"
                  as={Link}
                  to="/restrito/upload-13-payslip"
                >
                  Enviar Adiantamento 13 Salário
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey="4"
                  as={Link}
                  to="/restrito/change-payslip"
                >
                  Substituir um Holerite
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey="5"
                  as={Link}
                  to="/restrito/remove-payslip"
                >
                  Remover um Holerite
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  eventKey="6"
                  as={Link}
                  to="/restrito/send-message"
                >
                  Emitir aviso aos funcionários
                </NavDropdown.Item>
              </NavDropdown>
            )}

            {props.auth.user.adm && (
              <NavDropdown
                title="Gestão de Usuários"
                id="basic-nav-dropdown"
                className="menu-usuario"
              >
                <NavDropdown.Item
                  eventKey="1"
                  as={Link}
                  to="/restrito/manager-users"
                >
                  Todos Usuários
                </NavDropdown.Item>   
                <NavDropdown.Item
                  eventKey="2"
                  as={Link}
                  to="/restrito/manager-users"
                >
                  Usuários Ativos
                </NavDropdown.Item>   
                <NavDropdown.Item
                  eventKey="1"
                  as={Link}
                  to="/restrito/manager-users"
                >
                  Usuários Inativos
                </NavDropdown.Item>  
                <NavDropdown.Divider />  
                <NavDropdown.Item
                  eventKey="1"
                  as={Link}
                  to="/restrito/manager-users"
                >
                  Adicionar Usuários
                </NavDropdown.Item>  
                       
              </NavDropdown>           
            )}


            <NavDropdown
              title={props.auth.user.nome}
              id="basic-nav-dropdown"
              className="menu-usuario"
            >
              <NavDropdown.Item eventKey="7" href="restrito/minha-conta">
                <Link to={'/restrito/minha-conta'}>Minha Conta</Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="8" href="restrito/alterar-senha">
                <Link to={'/restrito/alterar-senha'}>Alterar Senha</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="9" onClick={props.logout}>
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
