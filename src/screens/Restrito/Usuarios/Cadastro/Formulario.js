import React, { useState, useEffect } from 'react';
import { Container, Form, Col, Button, Jumbotron, Badge } from 'react-bootstrap';
import Select from '../../../../components/Select';
import axios from 'axios';

import { IndexStyles } from '../../Styles';

import { filterData } from './FilterData';
import { dadosInvalidos } from './checkData';

const {
    REACT_APP_PORT_API,
    REACT_APP_URL_API,
    REACT_APP_VERSION_API,
    REACT_APP_ENV,
  } = process.env;
  
  const RESOURCE = 'usuarios';
  const MAIN_ROUTE = `${REACT_APP_VERSION_API}/${RESOURCE}`;
  const envURL = REACT_APP_ENV === 'test' ? '' : 'http://';  
  const apiURL = `${envURL}${REACT_APP_URL_API}:${REACT_APP_PORT_API}/${MAIN_ROUTE}`; 
  
  axios.defaults.baseURL = apiURL;

const Formulario = ({title}) => {
    const [dataDepartamento, setDataDepartamento] = useState([{}]);
    const [dataTipoUsuario, setDataTipoUsuario] = useState([{}]);     
    const [genericMessage, setGenericMessage] = useState({active: false, message: '', type: 'alert alert-danger'});
    const [form, setForm] = useState({
        nome: '',
        email:'',
        departamento:'1',
        tipoUsuario: '3',
        password: '',
        confirmPassword: ''
    });
          
    useEffect(() => {
        filterData(setGenericMessage, setDataDepartamento, 'departamentos');        
      }, []);
    useEffect(() => {
    filterData(setGenericMessage, setDataTipoUsuario, 'tipos-usuario');        
    }, []);
    
    useEffect(() => {
        const timeId = setTimeout(() => {      
            setGenericMessage({active: false, message: '', type: 'alert alert-danger'});  
        }, 3000)
    
        return () => {
          clearTimeout(timeId)
        }
    }, [genericMessage.active]);

    const onChange = field => evt => {   
       if (field === 'email') {        
            if (evt.target.value.match(/^[a-z0-9.]+@$/)){
                evt.target.value = evt.target.value + 'camarajau.sp.gov.br';
            }             
       }                
        setForm({
            ...form,
            [field]: evt.target.value
        });           
    };

    const clear = () => {       
        setForm({
            ...form,
            nome: '',
            email: '',
            departamento: '1',
            tipoUsuario: '3',
            password: '',
            confirmPassword: ''
        });               
        setGenericMessage({active: false, message: '', type: 'alert alert-danger'});        
    }

    const sendData = (evt) => {  

        if (dadosInvalidos(form, setGenericMessage)){
            return;
        }

        const token = localStorage.getItem('token');     
            
        evt.preventDefault();
        axios.post(apiURL, {              
                nome: form.nome,
                email: form.email,
                departamentoID:form.departamento,
                tipoUsuarioID: form.tipoUsuario,
                password: form.password,
                confirmPassword: form.confirmPassword            
        } 
        ,{ 
            headers: {            
            Authorization: 'Bearer ' + token
        }
        }).then((res) => {              
            if (res.status === 201) {
                setGenericMessage({active: true, message: 'Dados enviados com sucesso!', type: 'alert alert-success'});  
                clear();
                                       
            }
        }).catch(err => {
           
            if(err.request) {
                setGenericMessage({active: true, message: 'Estamos com problemas na API. Contacte o TI!', type: 'alert alert-danger'});
                return;
            }

            if (err.response.status === 400){
                setGenericMessage({active: true, message: err.response.data.error, type: 'alert alert-danger'});
            }
        });
    }


    return (
        <IndexStyles>        
            <h1>{title}</h1>
            <Container className='meio'>            
                <Jumbotron className='formulario-jumbotron shadow p-5 mb-1 rounded'>
                <Form action=''  encType='multipart/form-data'>
                    <p className='formulario-info'>
                    <span>                       
                        <Badge variant='success' className='formulario-alterar-badge'>Novo Registro</Badge>
                    </span>       
                    
                    </p>
                    <Form.Group  controlId='formGridUpdateItem formulario-group'>                      
                        <Form.Label className='formulario-item formulario-label'>Nome:</Form.Label>
                        <Form.Control size='sm' type='text' value={form.nome} onChange={onChange('nome')} placeholder='Digite o nome' />                        
                    </Form.Group>
                    <Form.Group  controlId='formGridUpdateItem'>                      
                        <Form.Label className='formulario-item formulario-label'>E-mail:</Form.Label>
                        <Form.Control size='sm' type='email' value={form.email} onChange={onChange('email')} placeholder='Digite o e-mail' />                        
                    </Form.Group>                   
                    <Form.Row  controlId='formGridUpdateItem'>    
                        <Col>                  
                        <Select
                            label={"Departamento"} 
                            data={dataDepartamento} 
                            selectedValue={form.departamento}
                            onChange={onChange('departamento')}
                            classCSS='formulario-label'
                            value={form.departamento}                         
                            field='selectDepartamento'
                            
                        /> 
                        </Col>
                        <Col>
                        <Select
                            label={"Tipo de Usuário"} 
                            data={dataTipoUsuario} 
                            selectedValue={1}
                            onChange={onChange('tipoUsuario')}
                            classCSS='formulario-item formulario-label'
                            value={form.tipoUsuario}
                        />     
                        </Col>                                           
                    </Form.Row>
                 
                    <Form.Row>
                        <Col>
                            <Form.Group  controlId='formGridUpdateItem'>                      
                                <Form.Label className='formulario-item formulario-label'>Password:</Form.Label>
                                <Form.Control size='sm' type='password' value={form.password} onChange={onChange('password')} placeholder='Digite o password' />                        
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group  controlId='formGridUpdateItem'>                      
                                <Form.Label className='formulario-item formulario-label'>Confirmar Password:</Form.Label>
                                <Form.Control size='sm' type='password' value={form.confirmPassword} onChange={onChange('confirmPassword')} placeholder='Confirme o password' />                        
                            </Form.Group>  
                        </Col>
                        </Form.Row>
                        <div className='formulario-group-button'>                       
                        {
                            genericMessage.active &&
                            <div className={genericMessage.type + ' formulario-aviso-erro'}  role="alert">
                                { genericMessage.message }
                            </div>
                        }  
                    </div>  
                    <div className='formulario-group-button'>                            
                        <Button variant='primary' className='formulario-button' id='btnSalvar' onClick={sendData}>
                            Salvar
                        </Button>      
                        <Button variant='danger' className='formulario-button' name='bntLimpar' onClick={clear}>
                            Limpar                    
                        </Button>
                    </div>
                    </Form>
                </Jumbotron>
            </Container>
        </IndexStyles>       

    )
};
export default Formulario;
