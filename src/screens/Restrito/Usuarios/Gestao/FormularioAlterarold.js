import React, { useState } from 'react';
import { Container, Form, Col, Button, Jumbotron, Badge } from 'react-bootstrap';

import {  Alert, Select } from 'components-ui-cmjau';

import axios from 'axios';

import { IndexStyles } from '../../Styles';

import { gerarDadosParaEnvio } from './gerarDadosEnvio';
import { dadosInvalidos, compararSenhaEConfirmacao } from './checkData';

const {
    REACT_APP_PORT_API,
    REACT_APP_URL_API,
    REACT_APP_VERSION_API,
    REACT_APP_ENV,
  } = process.env;
  
  const RESOURCE = 'funcionarios';
  const MAIN_ROUTE = `${REACT_APP_VERSION_API}/${RESOURCE}`;
  const envURL = REACT_APP_ENV === 'test' ? '' : 'http://';
  
  const apiURL = `${envURL}${REACT_APP_URL_API}:${REACT_APP_PORT_API}/${MAIN_ROUTE}`;
  
  
  axios.defaults.baseURL = apiURL;

const FormularioAlterar = ({title, user, depto, departamentoId, tipoUsuarioId, tipoUsuario, setIsEditing}) => {
    const [form, setForm] = useState({
        nome: user.fun_nome,
       
    });
   
    const [isValidForm, setIsValidForm] = useState(true);
    const [genericMessage, setGenericMessage] = useState({active: false, message: '', type: 'alert alert-danger'});
    const [errorMessage, setErrorMessage] = useState('');
    const [typeOfErrorMessage, setTypeOfErrorMessage] = useState('danger');
     
    const onChange = field => evt => { 
        if (field === 'confirmPassword') {        
            compararSenhaEConfirmacao(form.password, evt.target.value, setGenericMessage);
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
        });
        setIsEditing(false);
        setGenericMessage({active: false, message: '', type: 'alert alert-danger'});
    }

    const sendData = (evt) => {      
        if (dadosInvalidos(form, setGenericMessage)){
            return;
        }

        const token = localStorage.getItem('token');      
        setGenericMessage({active: false, message: '', type: 'alert alert-danger'});  
        const dadosUsuario = gerarDadosParaEnvio(user.id, form);                
        evt.preventDefault();
        axios.post(apiURL, 
        dadosUsuario,
        { 
            headers: {            
            Authorization: 'Bearer ' + token
        }
        }).then((res) => {              
            if (res.status === 201) {
                setGenericMessage({active: true, message: 'Dados enviados com sucesso!', type: 'alert alert-success'});  
                setIsEditing(false);                         
            }
        }).catch(err => {
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
                        <Badge variant='success' className='formulario-alterar-badge'>Alterando Registro: { user.id }</Badge>
                    </span>       
                    
                    </p>
                    <Form.Group  controlId='formGridUpdateItem formulario-group'>                      
                        <Form.Label className='formulario-item formulario-label'>Nome:</Form.Label>
                        <Form.Control size='sm' type='text' value={form.nome} onChange={onChange('nome')} placeholder='Digite o nome' />                        
                    </Form.Group>
                    <Form.Group  controlId='formGridUpdateItem'>                      
                        <Form.Label className='formulario-item formulario-label'>E-mail:</Form.Label>
                        <Form.Control size='sm' type='text' value={form.email} onChange={onChange('email')} placeholder='Digite o e-mail' />                        
                    </Form.Group>                

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
                    { !isValidForm &&
                        <div className="alert alert-danger formulario-aviso-erro" role="alert">
                            Valor inválido!!!
                        </div>
                    }
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
                        <Button variant='danger' className='formulario-button' name='bntCancelar' onClick={clear}>
                            Cancelar                    
                        </Button>
                    </div>
                    </Form>
                </Jumbotron>
            </Container>
        </IndexStyles>       

    )
};
export default FormularioAlterar;
