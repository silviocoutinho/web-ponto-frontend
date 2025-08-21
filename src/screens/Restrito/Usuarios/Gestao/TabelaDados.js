import {useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';

import DataTable from 'react-data-table-component';
import { paginationOptions, customStyles } from './dataTableCSS'

import {  Alert } from 'components-ui-cmjau';

import { IndexStyles } from '../../Styles';
import { columns } from './HeaderTableDatabase';
import { setMessage } from './MessageNotification';

const TabelaDados = ({title, dataDB, handlersEdit, handlersDelete}) => {  
  const [errorMessage, setErrorMessage] = useState('');
  const [typeOfErrorMessage, setTypeOfErrorMessage] = useState('danger');

  useEffect(() => {
    const timeId = setTimeout(() => {      
      setMessage(setTypeOfErrorMessage, setErrorMessage, 'warning', null);
    }, 2000)

    return () => {
      clearTimeout(timeId)
    }
  }, [errorMessage]);
    return (
        <IndexStyles>

            <h1>{title}</h1>
            <Container className='meio'>   
            {errorMessage && (
              <Alert message={errorMessage} type={typeOfErrorMessage} />
            )}
            {dataDB && (
              <DataTable
                pagination
                data={dataDB}
                columns={columns(handlersEdit, handlersDelete)}  
                customStyles={customStyles}   
                paginationComponentOptions={paginationOptions}                      
              />
            )}
            {errorMessage && (
              <Alert message={errorMessage} type={typeOfErrorMessage} />
            )}
            </Container>
          
        </IndexStyles>       

    )
};
export default TabelaDados;
