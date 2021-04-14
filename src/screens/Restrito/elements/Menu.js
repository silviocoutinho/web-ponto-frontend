import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Nav } from 'react-bootstrap';

import { BsFillCaretRightFill as BsCicle } from 'react-icons/bs';
import { BsGridFill as BsGrid } from 'react-icons/bs';

const Menu = () => {
  return (
    <div>
      <div className="menu-lateral-titulo">
        <h5>Menu</h5>
      </div>
      <a>
        <BsGrid />
        Pontos
      </a>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Active</Nav.Link>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Menu;
