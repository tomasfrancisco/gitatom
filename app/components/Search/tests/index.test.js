import React from 'react';
import { shallow } from 'enzyme';

import Search from '../index';

describe('<Search />', () => {
  it('should have an input', () => {
    expect(
      shallow(
        <Search />
      ).find('input').length
    ).toBe(1);
  });

  it('should have a button', () => {
    expect(
      shallow(
        <Search />
      ).find('button').length
    ).toBe(1);
  });

  it('should return state\'s value on input change', () => {
    const value = 'tomasfrancisco';
    const element = shallow(
      <Search />
    );
    element.find('input').simulate('change', { target: { value } });
    expect(
      element.state().value
    ).toEqual(value);
  });

  describe('onSubmit()', () => {
    it('should trigger on enter', () => {
      const onSubmit = jest.fn();
      const element = shallow(
        <Search
          onSubmit={onSubmit}
        />
      );
      element.find('input').simulate('keypress', { charCode: 13 });
      expect(onSubmit).toHaveBeenCalled();
    });

    it('should trigger on button click', () => {
      const onSubmit = jest.fn();
      const element = shallow(
        <Search
          onSubmit={onSubmit}
        />
      );
      element.find('button').simulate('click');
      expect(onSubmit).toHaveBeenCalled();
    });
  });
});
