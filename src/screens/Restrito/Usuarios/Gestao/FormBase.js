import { Container, Form, Col, Button, Jumbotron } from 'react-bootstrap';
import { IndexStyles } from '../../Styles';
import { Input, TagText, InputDate, Message, CheckBox } from './imports';

const FormBase = ({title, method, form, setForm, sendData, clear, onChange, genericMessage, setGenericMessage, whichMethod}) => {
  console.log('method',whichMethod);
  return (
            <IndexStyles>
              <h1>{title}</h1>
              <Container className='meio'>            
                <Jumbotron className='formulario-jumbotron shadow p-5 mb-1 rounded'>
                <Form action=''  encType='multipart/form-data'>
                  <TagText label={method} classBadge={'formulario-alterar-badge'} width={'2rem'} />                  
                  { (whichMethod !=='password') &&
                  <>
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
                      <InputDate 
                        fieldName={'data_cadastro'} 
                        value={form.data_cadastro} 
                        label = 'Data Cadastro:'  
                        onChange={onChange('data_cadastro')} 
                        height={'3rem'}
                        positionIcon={'.75rem'}
                        fontSize={'1.25rem'}

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
                  <Form.Row>
                    <Col>
                       <CheckBox 
                        fieldName={'ativo'} 
                        checked={form.ativo} 
                        label='Ativo' 
                        onChange={onChange('ativo')}
                      />
                    </Col>
                    {
                      (whichMethod === 'insert') && (<>
                        <Col>
                          <CheckBox 
                            fieldName={'adm'} 
                            checked={form.adm} 
                            label='Admnistrador:' 
                            onChange={onChange('adm')}
                          />  
                        </Col>
                      </>)
                    }
                  </Form.Row>
                  <Form.Row>
                    {
                      (whichMethod === 'insert') && (
                        <>
                          <Col>
                            <Input 
                              fieldName={'password'} 
                              value={form.password} 
                              label = 'Senha:'  
                              placeholder={'Digite o password'}
                              onChange={onChange('password')}     
                              size={'lg'}                
                            />
                          </Col>
                          <Col>
                            <Input 
                              fieldName={'confirmPasswd'} 
                              value={form.confirmPasswd} 
                              label = 'Confirme a Senha:'  
                              placeholder={'Confirme a sua Senha'}
                              onChange={onChange('confirmPasswd')}     
                              size={'lg'}                
                            />
                          </Col>
                        </>
                      )
                    }
                    
                  </Form.Row>
                  </>
                  }

                    
                    {
                      (whichMethod === 'password') && (
                        <>
                        <Form.Row>
                          <Col>
                            <Input 
                              fieldName={'email'} 
                              value={form.email} 
                              label = 'Email:'  
                              disable={true}
                              size={'lg'}                
                            />
                          </Col>
                        </Form.Row>
                        <Form.Row>                          
                          <Col>
                            <Input 
                              fieldName={'password'} 
                              value={form.password} 
                              label = 'Senha:'  
                              placeholder={'Digite o password'}
                              onChange={onChange('password')}     
                              size={'lg'}                
                            />
                          </Col>
                          <Col>
                            <Input 
                              fieldName={'confirmPasswd'} 
                              value={form.confirmPasswd} 
                              label = 'Confirme a Senha:'  
                              placeholder={'Confirme a sua Senha'}
                              onChange={onChange('confirmPasswd')}     
                              size={'lg'}                
                            />
                          </Col>
                        </Form.Row>
                        </>
                      )
                    }                    
                  

                  <Message active={genericMessage.active} message={genericMessage.message} type={genericMessage.type} />
                
                  <div className='formulario-group-button'>                            
                      <Button variant='primary' className='formulario-button' id='btnSalvar' onClick={sendData}>
                          Salvar
                      </Button>   
                      <Button variant='danger' className='formulario-button' name='bntLimpar' onClick={clear}>
                          Cancelar                    
                      </Button>
                  </div>                 
                </Form>
                </Jumbotron>
              </Container>
            </IndexStyles>
  )

};
export default FormBase;
