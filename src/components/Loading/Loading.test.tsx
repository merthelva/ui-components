import { screen } from '@testing-library/react'

import { TestWithThemeProvider } from 'theming'
import Loading from './Loading'

describe('<Loading>', () => {
  it('should render Loading correctly', () => {
    TestWithThemeProvider(<Loading type="spinner" />)
    const loadingCmp = screen.getByRole('status')
    expect(loadingCmp).toBeInTheDocument()
  })

  it('should render Loading type correctly', () => {
    const loadingType = 'dots'
    TestWithThemeProvider(<Loading type={loadingType} />)
    const loadingCmp = screen.getByTestId(loadingType)
    expect(loadingCmp).toBeInTheDocument()
  })
})
