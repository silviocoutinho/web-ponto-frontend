import React from 'react';
import { Table } from 'react-bootstrap'

import { Wrapper } from './Styles';

import Row from './Row';
import Head from './Head';
import Pagination from './Pagination';
import { defineStateRow } from './stateRow';

const DataTable = ({ data, head, handleEdit, handleDelete, hideFields=[''], itemsPerPage = 10, captionEdit='Editar', captionDelete='Apagar', fontSize ,...rest }) => {  
  const keys = Object.keys(data[0]);
  const pagesAmount = Math.ceil(data.length/itemsPerPage);
  return (
    <Wrapper fontSize={fontSize}>
      <div>
        <Table responsive>
          <Head keys={keys} head={head} hideFields={hideFields}/>
          <tbody>
            {data.map((record, index) => {
              return (
              <Row 
                key={index} 
                record={record} 
                position={index} 
                handleEdit={handleEdit} 
                handleDelete={handleDelete} 
                state={defineStateRow(index, itemsPerPage)}
                hideFields={hideFields}
                captionEdit={captionEdit}
                captionDelete={captionDelete}
                fontSize={fontSize}
              />
            )}
            )}
          </tbody>
        </Table>
        <Pagination pagesAmount={pagesAmount} />
      </div>
    </Wrapper>
  );
};

export default DataTable;
