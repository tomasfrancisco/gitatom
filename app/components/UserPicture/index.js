/**
*
* UserPicture
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { getPictureSize, getSquares } from './utils';
import config from './config';

const colors = config.squareColors.map((item) => `
    &.${item.name} {
      color: ${item.color};
    }
  `
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .section {
    display: flex;
    flex-direction: row;

    .square {
      display: block;
      width: ${config.squareSize}px;
      height: ${config.squareSize}px;
      color: transparent;
      background-color: currentColor;
      margin: ${config.squareMargin}px;

      ${colors}
    }
  }

  > img {
    position: absolute;
    width: ${getPictureSize(config.backgroundSize, config.squareSize, config.squareMargin)}px;
    height: ${getPictureSize(config.backgroundSize, config.squareSize, config.squareMargin)}px;
    background-color: rgba(152, 195, 121, 1);
  }
`;

function UserPicture(props) {
  const backgroundSquares = getSquares(config.backgroundSize, config.squareColors);
  const avatar = props.image ? (<img alt={props.alt ? props.alt : 'avatar'} src={props.image} />) : null;
  return (
    <Wrapper>
      {backgroundSquares}
      {avatar}
    </Wrapper>
  );
}

UserPicture.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
};

export default UserPicture;
