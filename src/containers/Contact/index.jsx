import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import * as S from './styles';

const Contact = () => {
  return (
    <S.Wrapper>
      <Container
        fluid
        className="d-flex flex-row justify-content-center flex-wrap"
      >
        <div className="map shadow flex-grow-1 d-flex flex-column justify-content-center">
          <iframe
            frameborder="0"
            src="https://www.google.com/maps/embed/v1/place?q=place_id:EidBc2hmaWVsZCBTdCwgV2hpdGVjaGFwZWwsIExvbmRvbiBFMSwgVUsiLiosChQKEglNr83t0hx2SBG8UO8TdaltJhIUChIJE0Aq3UoDdkgRIghR0C6uDiY&key=AIzaSyC5ly0ik8q7HUrwLbF90YlkLqVoKFKtP3c"
            allowfullscreen
          />
        </div>
        <div className="information flex-grow-1 d-flex flex-column justify-content-center">
          <h1>Contact</h1>
          <br />
          <p>London, UK</p>
          <p>Ministry Of Startups</p>
          <p>55 Ashfield St</p>
          <p>Whitechapel, London E1 2JH</p>
          <p>hello@moonmelon.io</p>
        </div>
      </Container>
    </S.Wrapper>
  );
};

export default Contact;
