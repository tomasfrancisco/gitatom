import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  * {
    font-family: 'Anonymous Pro', monospace;
  }

  #app {
    background-color: #F4F4F4;
    min-height: 100%;
    min-width: 100%;
  }
`;
