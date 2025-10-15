import BotaoTabela from "./botaoTabela";
import { handleDelete } from "./handleDelete";
import { handleEdit } from "./handleEdit";
import { fields } from '././fields'
import { ContextMenu } from "./components/ContextMenu";


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
            <ContextMenu row={row}/>
        </div>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  };
 
  return fields.concat(buttons);
  
}





export { columns };
