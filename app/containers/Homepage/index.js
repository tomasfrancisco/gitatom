/*
 *
 * Homepage
 *
 */

import React from 'react';
import { browserHistory } from 'react-router';
import Helmet from 'react-helmet';
import Search from 'components/Search';
import styled from 'styled-components';

const Wrapper = styled.section`
  position: absolute;
  width: 100%;
  height: calc(100% - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default class Homepage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  shouldComponentUpdate() {
    return false;
  }

  navigateToSearchPage = (query) => {
    browserHistory.push(`/search#q=${query}`);
  }

  render() {
    return (
      <Wrapper>
        <Helmet
          title="GITATOM"
          meta={[
            { name: 'description', content: 'Get a new view of your GitHub Repositories through your favourite editor' },
          ]}
        />
        <Search placeholder="Type your GitHub username..." onSubmit={this.navigateToSearchPage} />
      </Wrapper>
    );
  }
}
