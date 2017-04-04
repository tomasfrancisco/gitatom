/**
*
* Search
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import iconImg from './icon.svg';

const Wrapper = styled.div`
  position: relative;
  border-bottom: 1px solid #98C379;
  color: #98C379;
  width: 400px;
  height: 45px;
  margin-bottom: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  > input {
    box-sizing: border-box;
    width: 90%;
    outline: none;
    font-size: 1.2em;
    line-height: 1.2em;
    text-indent: 1px;

    &::placeholder {
      line-height: 1.2em;
      padding-left: 1px;
    }
  }

  > button {
    position: relative;
    width: 20px;
    height: 20px;
    padding: 20px;
    outline: none;
    cursor: pointer;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-image: url(${iconImg});
      background-position: center;
      background-repeat: no-repeat;
      background-size: 20px 20px;
    }

    &:hover {
      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(171, 178, 191, 0.1);
        border-radius: 50%;
      }
    }
  }
`;

class Search extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super();

    this.state = {
      value: props.value ? props.value : '',
    };
  }

  onKeyPress = (evt) => {
    if (evt.charCode === 13) {
      this.props.onSubmit(this.state.value);
    }
  }

  onChange = (evt) => {
    this.setState({
      value: evt.target.value,
    });
  }

  onClick = () => {
    this.props.onSubmit(this.state.value);
  }

  render() {
    return (
      <Wrapper>
        <input
          value={this.state.value}
          placeholder={this.props.placeholder}
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
        />
        <button src={iconImg} onClick={this.onClick} />
      </Wrapper>
    );
  }
}

Search.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

export default Search;
