import React from 'react';
import { Navbar } from 'react-bootstrap';

import { HeaderStyles } from './Styles';

const Header = props => {
  return (
    <HeaderStyles>
      <header>
        <Navbar expand="lg" fixed="top">
          <Navbar.Brand href="restrito">Portal do Servidor</Navbar.Brand>
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
        </Navbar>
      </header>
    </HeaderStyles>
  );
};
export default Header;
