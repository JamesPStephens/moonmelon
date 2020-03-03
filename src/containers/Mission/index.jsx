import React from 'react';
import { Container, Fade } from 'reactstrap';
import iosBadge from '../../assets/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg';
import * as S from './styles';

const Mission = () => {
  return (
    <S.Wrapper>
      <Container className="mission_container d-flex flex-column justify-content-center">
        <Fade
          mountaOnEnter
          timeout={300}
          in
          tag="h1"
          className="mt-3"
        >
          <h1>About.</h1>
          <h5>
            moonmelon is a nightly based social network. <br /> Our
            mission is to create a hub of experiences and to
            physically connect you with those around.
          </h5>
        </Fade>
        <img src={iosBadge} />
      </Container>
    </S.Wrapper>
  );
};

export default Mission;
