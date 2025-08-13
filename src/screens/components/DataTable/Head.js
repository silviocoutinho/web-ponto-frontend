import React from 'react';

const Head = ({keys, head, hideFields}) => {
  return(
    <thead>
          <tr>
            {
              keys.flatMap(key => {
                if (hideFields.includes(key) === false){
                  return (<th key={key}>{head[key] || key}</th>)
                }
              })
            }
            <th colSpan={2} className='column-action'>Ações</th>
          </tr>
          
        </thead>
  )
}

export default Head;
