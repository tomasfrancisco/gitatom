import React from 'react';
import { shallow } from 'enzyme';

import Name from '../Name';

const name = 'Tomás Francisco';
const renderedComponents = shallow(
  <Name>{name}</Name>
);

describe('<Name />', () => {
  it('should render a <h4/> tag', () => {
    expect(renderedComponents.find('h4').length).toEqual(1);
  });
});
