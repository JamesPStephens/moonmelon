import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const NavigationBar = () => {
  return (
    <Navbar fixed="top" dark>
      <NavbarBrand href="/">moonmelon.io</NavbarBrand>
    </Navbar>
  );
};

export default NavigationBar;
