import React from 'react';
import { Container, Jumbotron, Fade } from 'reactstrap';
import * as S from './styles';
import BackgroundVideo from '../../components/BackgroundVideo';

const Landing = () => {
  return (
    <S.Wrapper>
      {/* <BackgroundVideo /> */}
      <Container
        fluid
        className="d-flex flex-column justify-content-center shadow"
      >
        <h1 className="display-3">moonmelon</h1>
        <h1 className="display-3 flipped">moonmelon</h1>
        <Fade mountaOnEnter timeout={300} in tag="p" className="mt-3">
          <p class="lead">Creating the worlds biggest nightclub.</p>
        </Fade>
      </Container>
    </S.Wrapper>
  );
};

export default Landing;
