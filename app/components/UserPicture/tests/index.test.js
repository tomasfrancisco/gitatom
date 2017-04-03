import React from 'react';
import { shallow } from 'enzyme';

import UserPicture from '../index';

const imageURL = 'image.png';

describe('<UserPicture />', () => {
  it('should render an <img> tag', () => {
    const alt = 'tomasfrancisco';
    expect(
      shallow(
        <UserPicture image={imageURL} alt={alt} />
      ).contains(
        <img alt={alt} src={imageURL} />
      )
    ).toEqual(true);
  });

  it('should render an <img> tag with default avatar alt', () => {
    expect(
      shallow(
        <UserPicture image={imageURL} />
      ).contains(
        <img alt={'avatar'} src={imageURL} />
      )
    ).toEqual(true);
  });

  it('should not render <img> tag with not passed image', () => {
    expect(
      shallow(
        <UserPicture />
      ).find('img').length
    ).toEqual(0);
  });
});
