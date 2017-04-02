import React from 'react';
import { shallow } from 'enzyme';

import Search from '../index';

const onSubmit = jest.fn();
const renderedComponent = shallow(
  <Search
    onSubmit={onSubmit}
  />
);

describe('<Search />', () => {
  it('should have an input', () => {
    expect(
      renderedComponent.find('input').length
    ).toBe(1);
  });

  it('should have a button', () => {
    expect(
      renderedComponent.find('button').length
    ).toBe(1);
  });

  it('should return state\'s value on input change', () => {
    const value = 'tomasfrancisco';
    renderedComponent.find('input').simulate('change', { target: { value } });
    expect(
      renderedComponent.state().value
    ).toEqual(value);
  });

  describe('onSubmit()', () => {
    it('should trigger on enter', () => {
      renderedComponent.find('input').simulate('keypress', { charCode: 13 });
      expect(onSubmit).toHaveBeenCalled();
    });

    it('should trigger on button click', () => {
      renderedComponent.find('button').simulate('click');
      expect(onSubmit).toHaveBeenCalled();
    });
  });
});
