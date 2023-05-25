import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'

import { GlobalStyles, ThemeProvider } from 'theming'

// For a complete list of Axe rules, please refer to https://dequeuniversity.com/rules/axe/4.7
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  import('@axe-core/react').then(({ default: axe }) => axe(React, ReactDOM, 1000))
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider>
      <div>Hello React</div>
    </ThemeProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
