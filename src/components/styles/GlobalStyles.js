import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
  font-family: 'Karla', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: pink;
    font-size: 1.2rem;
  }
  body * {
    line-height: calc(2px + 2ex + 2px);
  }
  h1 h2 {
    font-family: 'Karla', sans-serif;
  }
  p {
    font-family: 'Nunito', sans-serif;
    margin-bottom: 1em;
  }
`

export default GlobalStyle;