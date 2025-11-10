import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

import Header from '../../elements/Header';
import Menu from '../../elements/Menu';

import Formulario from './Formulario';

import { IndexStyles } from '../../Styles';
import ActionCreator from './../../../../redux/actionCreators';

const AdicionarUsuarios = (props) => {    
    return(
        <IndexStyles>                      
            <Header title={'Dados da Transparência'} />
            <Container fluid="xs md lg">                
                <Row>
                    <Col xs={3} md={2} className='menu-lateral'><Menu /></Col>  
                    <Col xs={9} md={10} className='principal'>                        
                        {                            
                            <Formulario 
                              title={"Cadastro de Usuário"}
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
        dataDashboard: state.dashboard.data
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadDashboard: () => dispatch(ActionCreator.getDashboardRequest()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdicionarUsuarios);