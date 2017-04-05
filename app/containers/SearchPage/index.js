/*
 *
 * SearchPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import Search from 'components/Search';
import UserProfile from 'components/UserProfile';
import ErrorOnFetch from 'components/ErrorOnFetch';

import { makeSelectUser } from './selectors';
import { fetchGithubUser } from './actions';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export class SearchPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.getGithubUser(this.props.location.query.q);
  }

  getGithubUser = (username) => {
    this.props.getGithubUser(username);
  }

  render() {
    const userProfile = this.props.user ? (
      <UserProfile
        image={this.props.user.avatar_url}
        name={this.props.user.name}
        username={this.props.user.login}
        bio={this.props.user.bio}
        location={this.props.user.location}
      />
    ) : null;

    const errorOnFetch = this.props.error ? (
      <ErrorOnFetch error={this.props.error} />
    ) : null;

    return (
      <Wrapper>
        <Helmet
          title="Search"
          meta={[
            { name: 'description', content: 'Description of SearchPage' },
          ]}
        />
        <Search placeholder="Type your GitHub username..." value={this.props.location.query.q} onSubmit={this.getGithubUser} />
        {userProfile}
        {errorOnFetch}
      </Wrapper>
    );
  }
}

SearchPage.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  getGithubUser: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    getGithubUser: (username) => dispatch(fetchGithubUser(username)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
