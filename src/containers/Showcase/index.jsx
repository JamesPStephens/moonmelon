import React from 'react';
import { Container, Fade } from 'reactstrap';
import * as S from './styles';
import splash from '../../assets/Frame 1.svg';
import feed from '../../assets/Frame 2.svg';

const Showcase = () => {
  return (
    <S.Wrapper>
      <Container className="showcase_container d-flex flex-row flex-wrap align-items-center justify-content-around">
        <img src={splash}></img>
        <img src={feed}></img>
      </Container>
    </S.Wrapper>
  );
};

export default Showcase;
