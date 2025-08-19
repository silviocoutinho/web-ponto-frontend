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
    const [dataDepartamento, setDataDepartamento] = useState({});
    const [dataTipoUsuario, setDataTipoUsuario] = useState({});   
    const [departamentoId, setDepartamentoId] = useState(0);
    const [tipoUsuarioId, setTipoUsuarioId] = useState(0);
    
    const [selectedRecord, setSelectedRecord] = useState(null);
    const [isRemoving, setIsRemoving] = useState(false);
    const [isEditing, setIsEditing] = useState(false);   

    const [errorMessage, setErrorMessage] = useState('');
    const [typeOfErrorMessage, setTypeOfErrorMessage] = useState('danger');

    useEffect(() => {
        filterData(setTypeOfErrorMessage, setErrorMessage, setDataDB, 'funcionarios');            
      }, [isEditing]);

      console.log('pos setdata');

      if (!props.auth.isAuth) {
        return <Redirect to="/login" />;
      }
      if (props.auth.user.adm !== true) {
        return <Redirect to="/restrito" />;
      }

      // useEffect(() => {
      //   filterData(setTypeOfErrorMessage, setErrorMessage, setDataDepartamento, 'departamentos');        
      // }, []);

      // useEffect(() => {
      //   filterData(setTypeOfErrorMessage, setErrorMessage, setDataTipoUsuario, 'tipos-usuario');        
      // }, []);

      const handleEdit = record => {        
        
        setSelectedRecord(record);
        setIsEditing(true);
        
        // const selectedDepto = dataDepartamento.filter(result => result.nome === record.departamento);
        // const selectTipoUsuario = dataTipoUsuario.filter(result => result.nome === record.tipo);
        
        // setDepartamentoId(selectedDepto[0].id);
        // setTipoUsuarioId(selectTipoUsuario[0].id);

      }; 

      const handleDelete = (id) => {
        setIsRemoving(true);      
        removeDataFromAPI(id, setTypeOfErrorMessage, setErrorMessage, setDataDB);
      

      };

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
                                handleEdit={handleEdit}
                                handleDelete={handleDelete}
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
