import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  :root {
    font-size: 16px;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  * {
    font-family: 'Anonymous Pro', monospace;
  }

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 3.5rem;
  }

  h3 {
    font-size: 3rem;
  }

  h4 {
    font-size: 2.5rem;
  }

  h5 {
    font-size: 2rem;
  }

  h6 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  a {
    transition: color ease-in-out 0.25s;
  }

  #app {
    background-color: #F4F4F4;
    min-height: 100%;
    min-width: 100%;
  }
`;
