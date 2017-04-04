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

  it('should set state\'s value when not passed as a prop', () => {
    expect(renderedComponent.state().value).toEqual('');
  });

  it('should set state\'s value when passed as prop', () => {
    const propValue = 'tomasfrancisco';
    const component = shallow(
      <Search
        value={propValue}
        onSubmit={jest.fn()}
      />
    );
    expect(component.state().value).toEqual(propValue);
  });

  it('should return state\'s value on input change when value is passed as a prop', () => {
    const propValue = 'tomasfrancisco';
    const changeValue = 'newValue';
    const component = shallow(
      <Search
        value={propValue}
        onSubmit={jest.fn()}
      />
    );
    component.find('input').simulate('change', { target: { value: changeValue } });
    expect(component.state().value).toEqual(changeValue);
  });

  it('should return state\'s value on input change', () => {
    const changeValue = 'newValue';
    renderedComponent.find('input').simulate('change', { target: { value: changeValue } });
    expect(
      renderedComponent.state().value
    ).toEqual(changeValue);
  });

  describe('onSubmit()', () => {
    it('should not trigger on keypress', () => {
      renderedComponent.find('input').simulate('keypress', { charCode: 32 });
      expect(onSubmit).not.toHaveBeenCalled();
    });

    it('should trigger on enter', () => {
      renderedComponent.find('input').simulate('keypress', { charCode: 13 });
      expect(onSubmit).toHaveBeenCalledWith(renderedComponent.state().value);
    });

    it('should trigger on button click', () => {
      renderedComponent.find('button').simulate('click');
      expect(onSubmit).toHaveBeenCalledWith(renderedComponent.state().value);
    });
  });
});
