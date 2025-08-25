import {useState, useEffect} from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../../elements/Header';
import Menu from '../../elements/Menu';

import TabelaDados from './TabelaDados';
import FormularioAlterar from './FormularioAlterar';
import {removeDataFromAPI} from './RemoveDataFromDatabase'
import { filterData } from './FilterData';

import { IndexStyles } from '../../Styles';


const GestaoUsuarios = (props) => { 


    const [dataDB, setDataDB] = useState();
    
    const [selectedRecord, setSelectedRecord] = useState(null);
    const [isRemoving, setIsRemoving] = useState(false);
    const [isEditing, setIsEditing] = useState(false);   

    const [errorMessage, setErrorMessage] = useState('');
    const [typeOfErrorMessage, setTypeOfErrorMessage] = useState('danger');

    const handlersEdit = {
      setDataDB,
      setIsEditing,
      setSelectedRecord,
      setErrorMessage,
      setTypeOfErrorMessage
    }

    const handlersDelete = {
      setDataDB,
      setIsRemoving,
      setSelectedRecord,
      setErrorMessage,
      setTypeOfErrorMessage
    }

    useEffect(() => {
        filterData(setTypeOfErrorMessage, setErrorMessage, setDataDB, 'funcionarios/nome');            
      }, [isEditing]);

      //console.log('pos setdata');

      if (!props.auth.isAuth) {
        return <Redirect to="/login" />;
      }
      if (props.auth.user.adm !== true) {
        return <Redirect to="/restrito" />;
      }

    return(
        <IndexStyles>                      
            <Header title={'Portal do Servidor'} />
            <Container fluid="xs md lg">                
                <Row>
                    <Col xs={3} md={2} className='menu-lateral'><Menu /></Col>  
                    <Col xs={9} md={10} className='principal'>
                        {!isEditing && (
                            <TabelaDados 
                                title={"Gestão de Usuários"} 
                                dataDB={dataDB} 
                                handlersEdit={handlersEdit}
                                handlersDelete={handlersDelete}
                            />
                        )}
                        {
                            isEditing &&
                            <FormularioAlterar 
                              title={"Alteração de Usuário"}  
                              user={selectedRecord}                             
                              setIsEditing={setIsEditing}
                            />
                          }
                    </Col>                 
                </Row>                               
            </Container>         
        </IndexStyles> 
    );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(GestaoUsuarios);
