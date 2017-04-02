import React from 'react';
import { shallow } from 'enzyme';
import { browserHistory } from 'react-router';

import Search from 'components/Search';
import Homepage from '../index';

const renderedComponent = shallow(
  <Homepage />
);

describe('<Homepage />', () => {
  it('should render <Search /> component', () => {
    expect(renderedComponent.contains(
      <Search placeholder="Type your GitHub username..." onSubmit={renderedComponent.instance().navigateToSearchPage} />
    )).toEqual(true);
  });

  it('should not be updated', () => {
    expect(renderedComponent.instance().shouldComponentUpdate()).toEqual(false);
  });

  describe('navigateToSearchPage', () => {
    it('should be defined', () => {
      expect(renderedComponent.instance().navigateToSearchPage).toBeDefined();
    });

    it('should redirect to Search Page', () => {
      const query = 'tomasfrancisco';
      const url = `/search#q=${query}`;
      browserHistory.push = jest.fn();
      renderedComponent.instance().navigateToSearchPage(query);
      expect(browserHistory.push).toHaveBeenCalledWith(url);
    });
  });
});
