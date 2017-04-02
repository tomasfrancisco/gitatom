import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../index';

const renderedComponent = shallow(
  <Footer />
);

describe('<Footer />', () => {
  it('should render children', () => {
    expect(renderedComponent.children().length).toBeGreaterThanOrEqual(1);
  });
});
