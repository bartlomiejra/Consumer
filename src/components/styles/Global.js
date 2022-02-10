import { createGlobalStyle } from "styled-components";
import background from "../../img/background4.svg";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.colors.body};
    background-Image: url(${background});
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
      overflow-x: hidden;
      height: 100%;

  }
  p {
    opacity: 0.6;
    line-height: 1.5;
  }
`;

export default GlobalStyles;
