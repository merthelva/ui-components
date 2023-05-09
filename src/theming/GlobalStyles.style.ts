import { createGlobalStyle, css } from 'styled-components'

// Why we need to use "css" helper? Please refer to https://github.com/styled-components/vscode-styled-components/issues/175#issuecomment-504113264
// Custom CSS Reset: Please refer to https://www.joshwcomeau.com/css/custom-css-reset/
const globalStyles = createGlobalStyle`
  ${css`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
      margin: 0;
    }

    html:focus-within {
      scroll-behavior: smooth;
    }

    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      overflow-wrap: break-word;
    }

    ul[role='list'],
    ol[role='list'] {
      list-style: none;
      padding: 0;
    }

    button {
      background-color: transparent;
      border: none;
      outline: none;
    }

    a {
      text-decoration: none;
      cursor: pointer;
      color: inherit;
    }
  `}  
`

export default globalStyles
