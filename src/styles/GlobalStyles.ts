import { createGlobalStyle } from 'styled-components';

 
const GlobalStyle = createGlobalStyle`
    
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, root {
      height: 100%;
  }

  body {
      font-size: 14px;
      font-family: 'Roboto', sans-serif;
      background: #ecf1f8;
      -webkit-font-smoothing: antialised !important;
  }
  
  ul {
      list-style: none;
  }
`;
 
export default GlobalStyle;