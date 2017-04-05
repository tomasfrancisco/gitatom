/**
*
* ErrorOnFetch
*
*/

import React from 'react';
// import styled from 'styled-components';


function ErrorOnFetch(props) {
  return (
    <h1>{props.error}</h1>
  );
}

ErrorOnFetch.propTypes = {
  error: React.PropTypes.object.isRequired,
};

export default ErrorOnFetch;
