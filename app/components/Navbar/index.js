/**
*
* Navbar
*
*/

import React from 'react';
import styled from 'styled-components';
import logoImg from './logo.svg';

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;

  > img {
    width: 195px;
  }
`;

function Navbar() {
  return (
    <Wrapper>
      <img alt="logo" src={logoImg} />
    </Wrapper>
  );
}

Navbar.propTypes = {

};

export default Navbar;
