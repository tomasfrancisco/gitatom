import React from 'react';
import { shallow } from 'enzyme';

import Button, { getDisplay } from '../index';

const children = (<h1>test</h1>);
const renderComponent = (props = {}) => shallow(
  <Button {...props} >
    {children}
  </Button>
);

describe('<Button />', () => {
  it('should render a <button />', () => {
    expect(renderComponent().find('button').length).toEqual(1);
  });

  it('should have children', () => {
    expect(renderComponent().contains(children)).toEqual(true);
  });

  it('should handle click events', () => {
    const onClickSpy = jest.fn();
    const renderedComponent = renderComponent({ onClick: onClickSpy });
    renderedComponent.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });

  it('should have a className attribute', () => {
    expect(renderComponent().prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    expect(renderComponent({ id }).prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    expect(renderComponent({ attribute: 'test' }).prop('attribute')).toBeUndefined();
  });

  describe('getDisplay({ icon })', () => {
    it('should return "block" if icon is passed', () => {
      expect(getDisplay({ icon: 'icon.svg' })).toEqual('block');
    });

    it('should return "none" if icon is passed', () => {
      expect(getDisplay({})).toEqual('none');
    });
  });
});
