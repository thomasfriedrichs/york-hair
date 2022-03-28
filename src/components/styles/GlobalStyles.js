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
  }
  h1 h2 {
    font-family: 'Karla', sans-serif;
  }
  p {
    font-family: 'Nunito', sans-serif;
  }
`

export default GlobalStyle;