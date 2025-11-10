import {useState, useEffect} from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { Header } from './imports';
import { Menu } from './imports';

import TabelaDados from './TabelaDados';
import FormularioAlterar from './FormularioAlterar';
import FormularioCadastrar from './FormularioCadastrar';
import FormularioPassword from './FormularioPassword';

import { filterData } from './FilterData';

import { IndexStyles } from './imports';


const GestaoUsuarios = (props) => { 


    const [dataDB, setDataDB] = useState();
    
    const [selectedRecord, setSelectedRecord] = useState(null);
    const [isRemoving, setIsRemoving] = useState(false);
    const [isEditing, setIsEditing] = useState(false);   
    const [isInserting, setIsInserting] = useState(false); 
    const [changingPassword, setChangingPassword] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');
    const [typeOfErrorMessage, setTypeOfErrorMessage] = useState('danger');
    const [genericMessage, setGenericMessage] = useState({active: false, message: '', type: 'alert alert-danger'});

    const handlersInsert = () => {
      setIsInserting(true);
      console.log("change handle insert");
    }

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

    const handlersPassword = {
      setDataDB,
      setChangingPassword,
      setSelectedRecord,
      setErrorMessage,
      setTypeOfErrorMessage
    }


    useEffect(() => {
        filterData(setGenericMessage, setDataDB, 'funcionarios/nome');            
      }, [isEditing, isInserting, changingPassword, isRemoving]);

     
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
                        {!isEditing && !isInserting  && !changingPassword && (
                            <TabelaDados 
                                title={"Gestão de Usuários"} 
                                dataDB={dataDB} 
                                handlersEdit={handlersEdit}
                                handlersDelete={handlersDelete}
                                handlersInsert={handlersInsert}
                                handlersPassword={handlersPassword}
                            />
                        )}
                        {
                            isEditing &&
                            <FormularioAlterar 
                              title={"Alteração de Usuário"}
                              record={selectedRecord}                             
                              dataDB={dataDB}
                              setIsEditing={setIsEditing}
                            />
                          }
                          {
                            isInserting &&
                            <FormularioCadastrar
                              title={"Gestão de Usuários - Cadastro"}                                                                   
                              setIsInserting={setIsInserting}
                            />
                          }
                          {
                              changingPassword &&
                              <FormularioPassword
                                title={"Gestão de Usuários - Alterando Senha"}                                                                   
                                setIsInserting={setChangingPassword}
                                record={selectedRecord}
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
