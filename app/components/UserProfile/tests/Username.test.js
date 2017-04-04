import React from 'react';
import { shallow } from 'enzyme';

import Username from '../Username';

const username = 'tomasfrancisco';
const renderedComponents = shallow(
  <Username>{username}</Username>
);

describe('<Username />', () => {
  it('should render a <a/> tag', () => {
    expect(renderedComponents.find('a').length).toEqual(1);
  });
});
