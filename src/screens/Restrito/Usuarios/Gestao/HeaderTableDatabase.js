import BotaoTabela from "./botaoTabela";
import { handleDelete } from "./handleDelete";
import { handleEdit } from "./handleEdit";
import { fields } from '././fields'
import {  NavDropdown  } from 'react-bootstrap';
import { BsThreeDotsVertical } from "react-icons/bs";
import { FormStyles } from "../StylesForm";

const ContextMenu = () =>{
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

const columns =(handlersEdit, handlersDelete)=> {

  const buttons = 
    {
    name: "Ações",
    width: "215px", // largura fixa menor
    cell: (row) => (
      
          <div style={{ display: "flex", gap: "8px" }}>
            <BotaoTabela 
              label={"Editar"}
              color={"orange"}
              handle={handleEdit}
              handlers={handlersEdit}
              row={row}
            />
            <BotaoTabela 
              label={"Desabilitar"}
              color={"red"}
              handle={handleDelete}
              handlers={handlersDelete}
              row={row}
            />
            <ContextMenu />
        </div>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  };
 
  return fields.concat(buttons);
  
}





export { columns };
