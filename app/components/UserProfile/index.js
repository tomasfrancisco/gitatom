/**
*
* UserProfile
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';

import UserPicture from 'components/UserPicture';
import Button from 'components/Button';

import Name from './Name';
import Bio from './Bio';
import Username from './Username';
import Location from './Location';
import repoIcon from './repo.svg';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: white;
  width: 100%;

  section {
    display: flex;

    &.col {
      flex-direction: column;
    }

    &.row {
      flex-direction: row;
    }

    &.center {
      justify-content: center;
    }
  }

  .browse-area {
    height: 100px;
  }
`;

function UserProfile(props) {
  return (
    <Wrapper>
      <section className="row">
        <UserPicture image={props.image} />
        <section className="col">
          <Name>{props.name}</Name>
          <Username
            href={`https://github.com/${props.username}`}
            target="_blank"
          >
            {`@${props.username}`}
          </Username>
          <Bio>{props.bio}</Bio>
          <Location>{props.location}</Location>
        </section>
      </section>
      <section className="col center browse-area">
        <Button icon={repoIcon}>Browse Repositories</Button>
      </section>
    </Wrapper>
  );
}

UserProfile.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  username: PropTypes.string,
  bio: PropTypes.string,
  location: PropTypes.string,
};

export default UserProfile;
