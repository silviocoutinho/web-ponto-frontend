import {useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';

import DataTable from './../../../components/DataTable';

import {  Alert } from 'components-ui-cmjau';

import { IndexStyles } from '../../Styles';
import { HeaderTableDatabase } from './HeaderTableDatabase';
import { setMessage } from './MessageNotification';

const TabelaDados = ({title, dataDB, handleEdit, handleDelete}) => {  
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
                data={dataDB}
                head={HeaderTableDatabase}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                
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
