import React from 'react';
import { Container } from 'reactstrap';
import iosBadge from '../../assets/images/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg';
import * as S from './styles';

const Mission = () => {
  return (
    <S.Wrapper>
      <Container
        fluid
        className="mission_container d-flex flex-column justify-content-center"
      >
        <h1>About</h1>
        <h3 className="w-100">
          moonmelon is a nightly based social network. <br /> Our
          mission is to create a hub of experiences and to physically
          connect you with those around.
        </h3>
        {/* <img src={iosBadge} /> */}
      </Container>
    </S.Wrapper>
  );
};

export default Mission;
