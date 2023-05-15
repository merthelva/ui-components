import { screen } from '@testing-library/react'

import { TestWithThemeProvider } from 'theming'
import Icon from './Icon'
import type { IconNames } from './iconNames.types'

describe('<Icon>', () => {
  it('should render Icon correctly', () => {
    TestWithThemeProvider(<Icon name="info" />)
    const iconCmp = screen.getByRole('img')
    expect(iconCmp).toBeInTheDocument()
  })

  it('should render with correct icon', () => {
    const iconName: IconNames = 'info'
    TestWithThemeProvider(<Icon name={iconName} />)
    const iconCmp = screen.getByTestId(iconName)
    expect(iconCmp).toBeInTheDocument()
  })

  it('should render icon with correct size', () => {
    const size = 22
    const iconName: IconNames = 'info'
    TestWithThemeProvider(<Icon name={iconName} size={size} />)
    const iconCmp = screen.getByTestId(iconName)
    expect(iconCmp).toHaveAttribute('width', String(size))
    expect(iconCmp).toHaveAttribute('height', String(size))
  })
})
