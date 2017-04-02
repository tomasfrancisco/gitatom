/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import styled from 'styled-components';

const Wrapper = styled.main`
  position: relative;
  margin: 10px;
  width: calc(100% - 20px);
  min-height: calc(100vh - 20px);
  background-color: #282C34;
  color: #ABB2BF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <Wrapper>
        <Navbar />
        {React.Children.toArray(this.props.children)}
        <Footer />
      </Wrapper>
    );
  }
}
