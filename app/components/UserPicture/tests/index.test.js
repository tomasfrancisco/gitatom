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
      ).find('img').length
    ).toEqual(1);
  });

  it('should render an <img> tag with default avatar alt', () => {
    expect(
      shallow(
        <UserPicture image={imageURL} />
      ).find('img').prop('alt')
    ).toEqual('avatar');
  });

  it('should not render <img> tag with not passed image', () => {
    expect(
      shallow(
        <UserPicture />
      ).find('img').length
    ).toEqual(0);
  });
});
