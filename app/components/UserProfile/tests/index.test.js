import React from 'react';
import { shallow } from 'enzyme';

import UserPicture from 'components/UserPicture';
import Button from 'components/Button';

import UserProfile from '../index';
import Name from '../Name';
import Username from '../Username';
import Bio from '../Bio';
import Location from '../Location';
import buttonIcon from '../repo.svg';

const renderedComponent = (props = {}) => shallow(
  <UserProfile {...props} />
);

describe('<UserProfile />', () => {
  it('should render a <UserPicture />', () => {
    const image = 'tomasfrancisco.png';
    expect(renderedComponent({ image }).contains(
      <UserPicture image={image} />
    )).toEqual(true);
  });

  it('should render a <Name />', () => {
    const name = 'Tomás Francisco';
    expect(renderedComponent({ name }).contains(
      <Name>{name}</Name>
    )).toEqual(true);
  });

  it('should render a <Username />', () => {
    const username = 'tomasfrancisco';
    expect(renderedComponent({ username }).contains(
      <Username
        href={`https://github.com/${username}`}
        target="_blank"
      >
        {`@${username}`}
      </Username>
    )).toEqual(true);
  });

  it('should render a <Bio />', () => {
    const bio = 'A biography mock';
    expect(renderedComponent({ bio }).contains(
      <Bio>{bio}</Bio>
    )).toEqual(true);
  });

  it('should render a <Location />', () => {
    const location = 'Coimbra, Portugal';
    expect(renderedComponent({ location }).contains(
      <Location>{location}</Location>
    )).toEqual(true);
  });

  it('should render a <Button />', () => {
    expect(renderedComponent().contains(
      <Button icon={buttonIcon}>Browse Repositories</Button>
    )).toEqual(true);
  });
});
