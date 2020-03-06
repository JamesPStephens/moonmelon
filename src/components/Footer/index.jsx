import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import * as S from './styles';

const Footer = () => {
  return (
    <S.Wrapper className="shadow">
      <Container
        fluid
        className="footer_container d-flex flex-column justify-content-center"
      >
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="social">
            <a href="">Instagram</a>
            <a href="#">Twitter</a>
            <a href="https://linkedin.com/company/moonmelon-io">
              Linkedin
            </a>
          </div>
          <div className="copyright">
            <p>
              &copy; {new Date().getFullYear()} Copyright{' '}
              <a href="https://www.moonmelon.io">moonmelon.io</a>
            </p>
          </div>
        </div>
      </Container>
    </S.Wrapper>
  );
};

export default Footer;
