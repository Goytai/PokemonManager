import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6, b {
    font-weight: 700;
  }

  body {
    font-family: ${props => props.theme.font.family};
    color: ${props => props.theme.font.colors[1][0]};
    font-weight: 400;
  }
`;