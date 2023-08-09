import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
${normalize}

:root {
    --color-primary-light: #fff;
    --color-primary-dark: #eaeaea;
    --color-secondary: #16161D;
   
    font-family: 'Roboto', sans-serif;
}

body {
    font-family: 'Roboto', sans-serif;
    color: var(--color-secondary);
}

`;

export default GlobalStyle;
