import React from 'react';
import { shallow } from 'enzyme';

import Navbar from '../index';
import logoImg from '../logo.svg';

const renderedComponent = shallow(
  <Navbar />
);

describe('<Navbar />', () => {
  it('should render an <img />', () => {
    expect(renderedComponent.contains(
      <img alt="logo" src={logoImg} />
    )).toEqual(true);
  });
});
