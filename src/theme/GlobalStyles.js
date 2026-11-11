import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html,
    body,
    #root {
        margin: 0;
        min-height: 100%;
    }

    body {
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        font-family: ${({ theme }) => theme.fonts.main};
    }

    button,
    input,
    textarea,
    select {
        font: inherit;
    }

    button {
        cursor: pointer;
    }

    img {
        max-width: 100%;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;

export default GlobalStyles;