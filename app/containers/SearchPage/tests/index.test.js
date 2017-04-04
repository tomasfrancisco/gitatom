import React from 'react';
import { shallow } from 'enzyme';
import Search from 'components/Search';
import { SearchPage } from '../index';

const renderedComponent = shallow(
  <SearchPage />
);

describe('<SearchPage />', () => {
  it('should render a <Search />', () => {
    expect(true).toEqual(false);
  });
});
