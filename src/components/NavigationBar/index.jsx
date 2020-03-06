import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import moon from '../../assets/images/moonmelon.svg';
import * as S from './styles';

const NavigationBar = () => {
  return (
    <S.Wrapper>
      <Navbar fixed="top" dark>
        <NavbarBrand href="/">
          <img src={moon} />
        </NavbarBrand>
      </Navbar>
    </S.Wrapper>
  );
};

export default NavigationBar;
