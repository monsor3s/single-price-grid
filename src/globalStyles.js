import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --lg-cyan: #00CED1;
    --cyan: hsl(179, 62%, 43%);
    --bg-yellow: hsl(71, 73%, 54%);
    --lg-gray: hsl(204, 43%, 93%);
    --gr-blue: hsl(218, 22%, 67%);
  }

  #root {
  width: 100vw;
  height: 100vh;
  font-size: 62.5%;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Karla', sans-serif;
  }

`;

export default GlobalStyle;
