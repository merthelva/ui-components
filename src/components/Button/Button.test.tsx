import { fireEvent, screen } from '@testing-library/react'

import { TestWithThemeProvider } from 'theming'
import type { IconNames } from '../Icon'
import Button from './Button'

const OnClickSpy = jest.fn()

describe('<Button>', () => {
  it('should render Button correctly', () => {
    TestWithThemeProvider(<Button renderAs={{ KIND: 'TEXT', text: 'Button text' }} />)
    const buttonCmp = screen.getByRole('button')
    expect(buttonCmp).toBeInTheDocument()
  })

  it('should render Button text correctly, if "renderAs.KIND" is specified as "TEXT"', () => {
    const buttonText = 'Button text'
    TestWithThemeProvider(<Button renderAs={{ KIND: 'TEXT', text: buttonText }} />)
    const buttonCmp = screen.getByText(buttonText)
    expect(buttonCmp).toBeInTheDocument()
  })

  it('should render Button icon correctly, if "renderAs.KIND" is specified as "ICON"', () => {
    const iconName: IconNames = 'info'
    TestWithThemeProvider(
      <Button renderAs={{ KIND: 'ICON', icon: iconName, color: 'primary', size: 16 }} />,
    )
    const iconCmp = screen.getByTestId(iconName)
    expect(iconCmp).toBeInTheDocument()
  })

  it('should render Button icon and text correctly, if "renderAs.KIND" is specified as "TEXT_WITH_ICON"', () => {
    const iconName: IconNames = 'info'
    const buttonText = 'Button text'
    TestWithThemeProvider(
      <Button
        renderAs={{
          KIND: 'TEXT_WITH_ICON',
          icon: { name: iconName, color: 'primary', size: 16 },
          text: { value: buttonText, color: 'primary' },
        }}
      />,
    )
    const buttonCmp = screen.getByText(buttonText)
    const iconCmp = screen.getByTestId(iconName)

    expect(buttonCmp).toBeInTheDocument()
    expect(iconCmp).toBeInTheDocument()
  })

  it('should render loading button correctly, if "renderAs.KIND" is specified as "LOADING"', () => {
    TestWithThemeProvider(<Button renderAs={{ KIND: 'LOADING' }} />)
    const loadingCmp = screen.getByRole('status')
    const buttonCmp = screen.getByRole('button')

    fireEvent.click(buttonCmp)

    expect(loadingCmp).toBeInTheDocument()
    expect(buttonCmp).toHaveStyleRule('cursor', 'not-allowed')
    expect(OnClickSpy).toHaveBeenCalledTimes(0)
  })

  it('should render loading button with text correctly, if "renderAs.KIND" is specified as "LOADING" and "text" prop is also provided', () => {
    const buttonText = 'Button text'
    TestWithThemeProvider(<Button renderAs={{ KIND: 'LOADING', text: buttonText }} />)
    const loadingCmp = screen.getByRole('status')
    const buttonCmp = screen.getByRole('button')
    const textCmp = screen.getByText(buttonText)

    fireEvent.click(buttonCmp)

    expect(loadingCmp).toBeInTheDocument()
    expect(buttonCmp).toBeInTheDocument()
    expect(textCmp).toBeInTheDocument()
    expect(buttonCmp).toHaveStyleRule('cursor', 'not-allowed')
    expect(OnClickSpy).toHaveBeenCalledTimes(0)
  })

  it('should render Button with given children correctly, if "renderAs.KIND" is specified as "RENDER_WITH_CHILDREN"', () => {
    const buttonText = 'Button text'
    TestWithThemeProvider(<Button renderAs={{ KIND: 'RENDER_WITH_CHILDREN' }}>{buttonText}</Button>)
    const buttonCmp = screen.getByText(buttonText)
    const loadingCmp = screen.queryByRole('status')
    const iconCmp = screen.queryByRole('img')

    expect(buttonCmp).toBeInTheDocument()
    expect(loadingCmp).not.toBeInTheDocument()
    expect(iconCmp).not.toBeInTheDocument()
  })

  it('should fire click event when button is clicked', () => {
    TestWithThemeProvider(
      <Button renderAs={{ KIND: 'TEXT', text: 'Button text' }} onClick={OnClickSpy} />,
    )
    const buttonCmp = screen.getByRole('button')
    fireEvent.click(buttonCmp)
    expect(OnClickSpy).toHaveBeenCalledTimes(1)
  })
})
