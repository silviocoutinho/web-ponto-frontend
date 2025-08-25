import {useEffect} from 'react';
import { filterData } from './FilterData';

import { Container, Form, Col, Button, Jumbotron, Badge } from 'react-bootstrap';
import { IndexStyles } from '../../Styles';
import { Input, TagText } from './imports';

const FormBase = ({title, method, dataDB, form, setForm, sendData, clear, onChange, genericMessage, setGenericMessage}) => {

  console.log('Form Base :::',form);


  return (
            <IndexStyles>
              <h1>{title}</h1>
              <Container className='meio'>            
                <Jumbotron className='formulario-jumbotron shadow p-5 mb-1 rounded'>
                <Form action=''  encType='multipart/form-data'>
                  <TagText label={method} classBadge={'formulario-alterar-badge'} width={'2rem'} />
                  <Form.Row>
                    <Col>
                      <Input 
                        fieldName={'nome'} 
                        value={form.nome} 
                        label = 'Nome:'  
                        placeholder={'Digite o Nome do Funcionário'}
                        onChange={onChange('nome')}     
                        size={'lg'}                
                      />
                    </Col>
                  </Form.Row>
                  <Form.Row>
                    <Col>
                      <Input 
                        fieldName={'matricula'} 
                        value={form.matricula} 
                        label = 'Matricula:'  
                        placeholder={'Digite a Matricula do Funcionário'}
                        onChange={onChange('matricula')}     
                        size={'lg'}                
                      />
                    </Col>
                    <Col>
                      <Input 
                        fieldName={'data_cadastro'} 
                        value={form.data_cadastro} 
                        label = 'Data de Cad.:'  
                        placeholder={'Digite a Data de Cadastro do Funcionário'}
                        onChange={onChange('data_cadastro')}     
                        size={'lg'}  
                        disabled={false}              
                      />
                    </Col>
                  </Form.Row>
                  <Form.Row>
                    <Col>
                      <Input 
                        fieldName={'pis'} 
                        value={form.pis} 
                        label = 'P.I.S.:'  
                        placeholder={'Digite o PIS do Funcionário'}
                        onChange={onChange('pis')}     
                        size={'lg'}                
                      />
                    </Col>
                    <Col>
                      <Input 
                        fieldName={'email'} 
                        value={form.email} 
                        label = 'Email:'  
                        placeholder={'Digite o Email do Funcionário'}
                        onChange={onChange('email')}     
                        size={'lg'}                
                      />
                    </Col>
                  </Form.Row>
                </Form>
                </Jumbotron>
              </Container>
            </IndexStyles>
  )

};
export default FormBase;
