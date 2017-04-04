import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router';

import Navbar from '../index';
import logoImg from '../logo.svg';

const renderedComponent = shallow(
  <Navbar />
);

describe('<Navbar />', () => {
  it('should render an <img /> tag', () => {
    expect(renderedComponent.contains(
      <img alt="logo" src={logoImg} />
    )).toEqual(true);
  });

  it('should render an <Link /> tag to /', () => {
    expect(renderedComponent.contains(
      <Link to="/">
        <img alt="logo" src={logoImg} />
      </Link>
    )).toEqual(true);
  });
});
