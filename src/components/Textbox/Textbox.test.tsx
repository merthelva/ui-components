import { fireEvent, screen } from '@testing-library/react'

import { TestWithThemeProvider } from 'theming'
import Textbox from './Textbox'

describe('<Textbox>', () => {
  it('should render Textbox correctly', () => {
    const id = 'textbox-id'
    TestWithThemeProvider(<Textbox id={id} />)
    const textboxCmp = screen.getByTestId(id)
    expect(textboxCmp).toBeInTheDocument()
  })

  it('should render textbox label text correctly', () => {
    const id = 'textbox-id'
    const label = 'Textbox label'
    TestWithThemeProvider(<Textbox id={id} label={label} />)
    const labelCmp = screen.getByLabelText(label)
    expect(labelCmp).toBeInTheDocument()
  })

  it('should render textbox placeholder text correctly', () => {
    const id = 'textbox-id'
    const placeholder = 'Textbox placeholder'
    TestWithThemeProvider(<Textbox id={id} placeholder={placeholder} />)
    const placeholderCmp = screen.getByPlaceholderText(placeholder)
    expect(placeholderCmp).toBeInTheDocument()
  })

  it('should render textbox helper text correctly', () => {
    const id = 'textbox-id'
    const helperText = 'Textbox helperText'
    TestWithThemeProvider(<Textbox id={id} helperText={helperText} />)
    const helperTextCmp = screen.getByText(helperText)
    expect(helperTextCmp).toBeInTheDocument()
  })

  it('should render textbox error message correctly', () => {
    const id = 'textbox-id'
    const errorMsg = 'Textbox error message'
    TestWithThemeProvider(<Textbox id={id} errorMsg={errorMsg} />)
    const errorMsgCmp = screen.getByText(errorMsg)
    const errorIcon = screen.getByTestId('danger')
    expect(errorMsgCmp).toBeInTheDocument()
    expect(errorIcon).toBeInTheDocument()
  })

  it('should render textbox success message correctly', () => {
    const id = 'textbox-id'
    const successMsg = 'Textbox success message'
    TestWithThemeProvider(<Textbox id={id} successMsg={successMsg} />)
    const successMsgCmp = screen.getByText(successMsg)
    const successIcon = screen.getByTestId('success')
    expect(successMsgCmp).toBeInTheDocument()
    expect(successIcon).toBeInTheDocument()
  })

  it('should render textbox disabled state correctly', () => {
    const id = 'textbox-id'
    TestWithThemeProvider(<Textbox id={id} disabled />)
    const textboxCmp = screen.getByTestId(id)

    fireEvent.click(textboxCmp)

    expect(textboxCmp).toHaveStyleRule('cursor', 'not-allowed')
    expect(textboxCmp).not.toHaveFocus()
  })

  it('should render textbox value correctly', () => {
    const id = 'textbox-id'
    const typedValue = 'text'
    TestWithThemeProvider(<Textbox id={id} />)
    const textboxCmp = screen.getByTestId(id)

    fireEvent.change(textboxCmp, { target: { value: typedValue } })

    expect(textboxCmp).toHaveValue(typedValue)
  })

  it('should render textbox character limit text correctly', () => {
    const id = 'textbox-id'
    const typedValue = 'text'
    const maxLength = 10
    const OnChangeSpy = jest.fn()
    TestWithThemeProvider(
      <Textbox id={id} maxLength={maxLength} onChange={OnChangeSpy} value={typedValue} />,
    )
    const characterCountText = screen.getByText(`${typedValue.length} / ${maxLength}`)
    expect(characterCountText).toBeInTheDocument()
  })
})
