/**
*
* Footer
*
*/

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: currentColor;

  > a {
    text-decoration: underline;
    color: currentColor;

    &:hover {
      color: #98C379;
    }
  }
`;

function Footer() {
  return (
    <Wrapper>
      {'Made with ❤ by'}&nbsp;<a href="http://www.tomasfrancisco.com" target="_blank">{'Tomás Francisco'}</a>
    </Wrapper>
  );
}

Footer.propTypes = {

};

export default Footer;
