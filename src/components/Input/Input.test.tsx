import { fireEvent, screen } from '@testing-library/react'

import Button from 'components/Button'
import type { IconNames } from 'components/Icon'
import Icon from 'components/Icon'
import { TestWithThemeProvider } from 'theming'
import Input from './Input'

describe('<Input>', () => {
  it('should render Input correctly', () => {
    const id = 'text-input'
    TestWithThemeProvider(<Input type="text" id={id} />)
    const inputCmp = screen.getByTestId(id)
    expect(inputCmp).toBeInTheDocument()
  })

  it('should render input label text correctly', () => {
    const id = 'text-input'
    const label = 'Input label'
    TestWithThemeProvider(<Input type="text" id={id} label={label} />)
    const labelCmp = screen.getByLabelText(label)
    expect(labelCmp).toBeInTheDocument()
  })

  it('should render input placeholder text correctly', () => {
    const id = 'text-input'
    const placeholder = 'Input placeholder'
    TestWithThemeProvider(<Input type="text" id={id} placeholder={placeholder} />)
    const placeholderCmp = screen.getByPlaceholderText(placeholder)
    expect(placeholderCmp).toBeInTheDocument()
  })

  it('should render input helper text correctly', () => {
    const id = 'text-input'
    const helperText = 'Input helperText'
    TestWithThemeProvider(<Input type="text" id={id} helperText={helperText} />)
    const helperTextCmp = screen.getByText(helperText)
    expect(helperTextCmp).toBeInTheDocument()
  })

  it('should render input inputPrefix text correctly', () => {
    const id = 'text-input'
    const inputPrefix = 'Input inputPrefix'
    TestWithThemeProvider(<Input type="text" id={id} inputPrefix={inputPrefix} />)
    const inputPrefixText = screen.getByText(inputPrefix)
    expect(inputPrefixText).toBeInTheDocument()
  })

  it('should render input inputPrefix node correctly', () => {
    const id = 'text-input'
    const iconName: IconNames = 'user'
    const inputPrefix = <Icon name={iconName} size={14} color="gray700" />
    TestWithThemeProvider(<Input type="text" id={id} inputPrefix={inputPrefix} />)
    const inputPrefixIcon = screen.getByTestId(iconName)
    expect(inputPrefixIcon).toBeInTheDocument()
  })

  it('should render input inputPostfix text correctly', () => {
    const id = 'text-input'
    const inputPostfix = 'Input inputPostfix'
    TestWithThemeProvider(<Input type="text" id={id} inputPostfix={inputPostfix} />)
    const inputPostfixText = screen.getByText(inputPostfix)
    expect(inputPostfixText).toBeInTheDocument()
  })

  it('should render input inputPostfix node correctly', () => {
    const id = 'text-input'
    const iconName: IconNames = 'user'
    const inputPostfix = (
      <Button renderAs={{ KIND: 'ICON', icon: iconName, size: 14, color: 'gray700' }} />
    )
    TestWithThemeProvider(<Input type="text" id={id} inputPostfix={inputPostfix} />)
    const inputPostfixButton = screen.getByRole('button')
    const inputPostfixIcon = screen.getByTestId(iconName)
    expect(inputPostfixButton).toBeInTheDocument()
    expect(inputPostfixIcon).toBeInTheDocument()
  })

  it('should render input error message correctly', () => {
    const id = 'text-input'
    const errorMsg = 'Input error message'
    TestWithThemeProvider(<Input type="text" id={id} errorMsg={errorMsg} />)
    const errorMsgCmp = screen.getByText(errorMsg)
    const errorIcon = screen.getByTestId('danger')
    expect(errorMsgCmp).toBeInTheDocument()
    expect(errorIcon).toBeInTheDocument()
  })

  it('should render input success message correctly', () => {
    const id = 'text-input'
    const successMsg = 'Input success message'
    TestWithThemeProvider(<Input type="text" id={id} successMsg={successMsg} />)
    const successMsgCmp = screen.getByText(successMsg)
    const successIcon = screen.getByTestId('success')
    expect(successMsgCmp).toBeInTheDocument()
    expect(successIcon).toBeInTheDocument()
  })

  it('should render input disabled state correctly', () => {
    const id = 'text-input'
    TestWithThemeProvider(<Input type="text" id={id} disabled />)
    const inputCmp = screen.getByTestId(id)

    fireEvent.click(inputCmp)

    expect(inputCmp).toHaveStyleRule('cursor', 'not-allowed')
    expect(inputCmp).not.toHaveFocus()
  })

  it('should render input value correctly', () => {
    const id = 'text-input'
    const typedValue = 'text'
    TestWithThemeProvider(<Input type="text" id={id} />)
    const inputCmp = screen.getByTestId(id)

    fireEvent.change(inputCmp, { target: { value: typedValue } })

    expect(inputCmp).toHaveValue(typedValue)
  })
})
