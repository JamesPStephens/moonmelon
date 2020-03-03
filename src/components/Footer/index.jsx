import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import * as S from './styles';

const Footer = () => {
  return (
    <S.Wrapper className="shadow">
      <Container className="footer_container text-center">
        <Row>
          <Col md="12">
            <ul>
              <li className="list-unstyled">
                <a href="#!">Instagram</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Twitter</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Privacy Policy</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="footer_copyright text-center py-3">
        <Container>
          <p>
            &copy; {new Date().getFullYear()} Copyright{' '}
            <a href="https://www.moonmelon.io">moonmelon.io</a>
          </p>
        </Container>
      </div>
    </S.Wrapper>
  );
};

export default Footer;
