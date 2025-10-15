import {  NavDropdown  } from 'react-bootstrap';
import { BsThreeDotsVertical } from "react-icons/bs";
import { FormStyles } from "../../StylesForm";

export const ContextMenu = (row) =>{
  return (
    <FormStyles>
      <NavDropdown
        title={<BsThreeDotsVertical size={20} />}
        id="basic-nav-dropdown"
        className="menu-usuario"
      >
        <NavDropdown.Item eventKey="1" onClick={console.log('Teste Menu')}>
          Alterar Senha
        </NavDropdown.Item>
      </NavDropdown>
    </FormStyles>
  )
}
