import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --lg-cyan: #18c2c0;
    --cyan: hsl(179, 62%, 43%);
    --bg-yellow: hsl(71, 73%, 54%);
    --lg-gray: hsl(204, 43%, 93%);
    --gr-blue: hsl(218, 22%, 67%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Karla', sans-serif;
    font-size: 62.5%;
  }

`;

export default GlobalStyle;
