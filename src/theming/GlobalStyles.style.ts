import { createGlobalStyle, css } from 'styled-components'
import theme from './theme'

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

    html {
      font-size: 0.875rem;

      &:focus-within {
        scroll-behavior: smooth;
      }
    }

    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    small {
      font-size: 0.8rem;
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

export const VARIANT_COLORS_SCHEMA = {
  primary: theme.colors.primary,
  secondary: theme.colors.secondary,
  info: theme.colors.blue400,
  success: theme.colors.green400,
  warning: theme.colors.yellow600,
  error: theme.colors.red500,
} as const

export default globalStyles
