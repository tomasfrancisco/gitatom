import React from 'react';
import { shallow } from 'enzyme';

import Bio from '../Bio';

const bio = 'A biography mock';
const renderedComponents = shallow(
  <Bio>{bio}</Bio>
);

describe('<Bio />', () => {
  it('should render a <p/> tag', () => {
    expect(renderedComponents.find('p').length).toEqual(1);
  });
});
