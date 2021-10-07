import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const FooterStyles = styled.div`
  .footer {
    margin-top: 1rem;
    background: #0d63ac;
    padding: 15px 0;
    color: #fcfae1;
  }
  .footer h1 {
    font: 14px 'Titillium+Web', sans-serif;
    font-weight: bold;
    color: #fff;
    text-align: left;
  }
  .footer p {
    font-size: 12px;
    text-align: left;
  }
`;

const Footer = () => {
  return (
    <FooterStyles>
      <footer className="footer">
        <Container className="footer">
          <Row>
            <Col md={6} sm={6} xs={6}>
              <h1>ATENDIMENTO</h1>
              <p>
                Praça Barão do Rio Branco, S/N <br />
                CEP: 17201-901 - Jaú/SP <br />
                Telefone: (14)3602-8770 - Fax: (14)3602-8777
              </p>
            </Col>
            <Col md={6} sm={6} xs={6}>
              <h1>EXPEDIENTE</h1>
              <p>
                De Segunda a Sexta <br />
                Horário: 8h às 18h
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </FooterStyles>
  );
};
export default Footer;
