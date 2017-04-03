// import React from 'react';
// import { shallow } from 'enzyme';

import { getPictureSize, getSquares } from '../utils';

describe('utils', () => {
  describe('getPictureSize(outerSize, innerSize, innerMargin)', () => {
    it('should return odd value on odd input', () => {
      expect(getPictureSize(5, 1, 0)).toEqual(3);
    });

    it('should return odd value with 3 as min on odd input <= 7', () => {
      expect(getPictureSize(1, 1, 0)).toEqual(3);
    });

    it('should return odd value with 5 as max on odd input > 7', () => {
      expect(getPictureSize(9, 1, 0)).toEqual(5);
    });

    it('should return even value on even input', () => {
      expect(getPictureSize(4, 1, 0)).toEqual(2);
    });

    it('should return even value with 2 as min on even input <= 6', () => {
      expect(getPictureSize(6, 1, 0)).toEqual(2);
    });

    it('should return even value with 4 as max on even input > 6', () => {
      expect(getPictureSize(8, 1, 0)).toEqual(4);
    });
  });

  describe('getSquares(size, colors)', () => {
    it('should return number of sections equals to size', () => {
      expect(getSquares(5).map(
        (section) => section.props.className.indexOf('section') !== -1
      ).length).toEqual(5);
    });

    it('should return number of squares in a row equals to size', () => {
      expect(getSquares(5).map(
        (section) => section.props.children.map(
          (child) => child.props.className.indexOf('square') !== -1
        )
      ).length).toEqual(5);
    });
  });
});
