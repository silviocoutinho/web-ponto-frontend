import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import Header from './Header';
import Menu from './Menu';
import { IndexStyles } from '../Styles';

const Avisos = ({ show }) => {
  return (
    <>
      {show && (
        <Col xs={8} md={9} className="principal">
          <h1>ATENÇÃO SERVIDORES!!!!</h1>

          <p>
            PEDIMOS ATENÇÃO PARA O CORRETO REGISTRO DAS MARCAÇÕES ELETRÔNICAS DE
            PONTO E COMPROMISSO PARA APRESENTAÇÃO ÁGIL E PONTUAL DAS
            JUSTIFICATIVAS DE OCORRÊNCIAS.
          </p>
          <p> SALIENTAMOS:</p>
          <p>
            - ATENTAR PARA EXECUÇÃO MÍNIMA DA CARGA HORÁRIA CONFORME CARGO
            OCUPADO (08 HORAS / 04 HORAS)
          </p>
          <p>- MÍNIMO UMA HORA / MÁXIMO DUAS HORAS DE ALMOÇO </p>
          <p>
            - FORMULÁRIO DE JUSTIFICATIVA DE OCORRÊNCIA CORRETAMENTE PREENCHIDO,
            ASSINADO, LETRA LEGÍVEL, SEM RASURAS, COM MOTIVO EXPLÍCITO E
            FIDEDIGNO HORÁRIO DA OCORRÊNCIA DEPARTAMENTO ADMINISTRATIVO
          </p>
        </Col>
      )}
    </>
  );
};

export default Avisos;
