import styled from 'styled-components';
import iconImg from './marker.svg';

export function getDisplay({ children }) {
  return children ? 'inline-block' : 'none';
}

const Location = styled.p`
  display: flex;
  align-items: center;
  margin: 5px;

  &:before {
    content: '';
    position: relative;
    display: ${getDisplay};
    margin-right: 5px;
    width: 15px;
    height: 15px;
    background-image: url(${iconImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

export default Location;
