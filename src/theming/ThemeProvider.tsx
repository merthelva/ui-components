import { render } from '@testing-library/react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'

import theme from './theme'

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => (
  <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
)

export const TestWithThemeProvider = (ui: React.ReactElement, { ...options } = {}) => {
  const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
    <ThemeProvider>{children}</ThemeProvider>
  )

  return render(ui, { wrapper: Wrapper, ...options })
}

export default ThemeProvider
