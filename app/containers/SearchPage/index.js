/*
 *
 * SearchPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import UserPicture from 'components/UserPicture';

import { makeSelectUser } from './selectors';
import { fetchGithubUser } from './actions';

export class SearchPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super();
    props.getGithubUser(props.location.query.q);
  }

  render() {
    return (
      <div>
        <Helmet
          title="Search"
          meta={[
            { name: 'description', content: 'Description of SearchPage' },
          ]}
        />
        <UserPicture image={this.props.user.avatar_url} />
        {this.props.error}
      </div>
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
