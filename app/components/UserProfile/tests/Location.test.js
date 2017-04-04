import React from 'react';
import { shallow } from 'enzyme';

import Location, { getDisplay } from '../Location';

describe('<Location />', () => {
  it('should render a <p/> tag', () => {
    const location = 'Coimbra, Portugal';
    const element = shallow(
      <Location>{location}</Location>
    );
    expect(element.find('p').length).toEqual(1);
  });

  describe('getDisplay({ children })', () => {
    it('should return "inline-block" if children is passed', () => {
      const children = (<h1>test</h1>);
      expect(getDisplay({ children })).toEqual('inline-block');
    });

    it('should return "none" if children is not passed', () => {
      expect(getDisplay({})).toEqual('none');
    });
  });
});
