import {  NavDropdown  } from 'react-bootstrap';
import { BsThreeDotsVertical } from "react-icons/bs";
import { FormStyles } from "../../StylesForm";

export const ContextMenu = ({handle, handlers, row}) =>{
  
  return (
    <FormStyles>
      <NavDropdown
        title={<BsThreeDotsVertical size={20} />}
        id="basic-nav-dropdown"
        className="menu-usuario"
      >
        <NavDropdown.Item eventKey="1" onClick={() => handle(row, handlers)}>
          Alterar Senha
        </NavDropdown.Item>
      </NavDropdown>
    </FormStyles>
  )
}
