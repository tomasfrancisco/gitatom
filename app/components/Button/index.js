/**
*
* Button
*
*/

import styled from 'styled-components';

export function getDisplay({ icon }) {
  return icon ? 'block' : 'none';
}

const Button = styled.button`
  outline: none;
  position: relative;
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: transparent;
  border: 1px solid currentColor;
  padding: 10px 15px;
  margin: 5px;
  cursor: pointer;
  font-size: 1.25rem;
  transition: color ease-in-out 0.25s;

  &:before {
    content: '';
    display: ${getDisplay};
    position: relative;
    width: 18px;
    height: 18px;
    margin-right: 10px;
    mask-image: url(${(props) => props.icon});
    mask-position: center;
    mask-repeat: no-repeat;
    background-color: currentColor;
  }

  &:hover {
    color: #98C379;
  }
`;

export default Button;
