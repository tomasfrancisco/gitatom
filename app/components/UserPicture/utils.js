import React from 'react';

export function getPictureSize(outerSize, innerSize, innerMargin) {
  if (outerSize % 2 === 0) {
    return outerSize > 6 ? (4 * innerSize) + (6 * innerMargin) : (2 * innerSize) + (2 * innerMargin);
  }
  return outerSize > 7 ? (5 * innerSize) + (8 * innerMargin) : (3 * innerSize) + (4 * innerMargin);
}

export function getSquares(size, colors) {
  const result = [];

  for (let row = 0; row < size; row++) { // eslint-disable-line no-plusplus
    const squareRow = [];

    for (let column = 0; column < size; column++) { // eslint-disable-line no-plusplus
      squareRow.push((
        <span key={`square-${row}-${column}`} className={`square ${colors ? colors[Math.floor(Math.random() * colors.length)].name : null}`} />
      ));
    }
    result.push((
      <div key={`section-${row}`} className="section">
        {squareRow}
      </div>
    ));
  }

  return result;
}
