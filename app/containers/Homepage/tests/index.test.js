import React from 'react';
import { shallow } from 'enzyme';

import Search from 'components/Search';
import Homepage from '../index';

const renderedComponent = shallow(
  <Homepage />
);

describe('<Homepage />', () => {
  it('should render <Search /> component', () => {
    expect(renderedComponent.contains(
      <Search placeholder="Type your GitHub username..." onSubmit={renderedComponent.instance().navigateToSearch} />
    )).toEqual(true);
  });
});
