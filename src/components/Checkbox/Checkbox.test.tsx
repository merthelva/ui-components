import { fireEvent, screen } from '@testing-library/react'

import { TestWithThemeProvider } from 'theming'
import Checkbox from './Checkbox'

const OnChangeSpy = jest.fn()
const checkboxLabel = 'Checkbox label'

describe('<Checkbox>', () => {
  it('should render Checkbox correctly', () => {
    TestWithThemeProvider(<Checkbox onChange={OnChangeSpy}>{checkboxLabel}</Checkbox>)
    const checkboxCmp = screen.getByRole('checkbox')
    expect(checkboxCmp).toBeInTheDocument()
  })

  it('should display error message correctly, when Checkbox is in error state', () => {
    const errorMsg = 'random error message'
    TestWithThemeProvider(
      <Checkbox onChange={OnChangeSpy} errorMsg={errorMsg}>
        {checkboxLabel}
      </Checkbox>,
    )
    const errorMsgCmp = screen.getByText(errorMsg)

    expect(errorMsgCmp).toBeInTheDocument()
  })

  it('should trigger "onChange" handler, when Checkbox is clicked', () => {
    TestWithThemeProvider(<Checkbox onChange={OnChangeSpy}>{checkboxLabel}</Checkbox>)
    const checkboxCmp = screen.getByRole('checkbox')
    fireEvent.click(checkboxCmp)

    expect(OnChangeSpy).toHaveBeenCalledTimes(1)
  })

  it('should toggle "checked" state of Checkbox, when it is clicked', () => {
    TestWithThemeProvider(<Checkbox onChange={OnChangeSpy}>{checkboxLabel}</Checkbox>)
    const checkboxCmp: HTMLInputElement = screen.getByRole('checkbox')
    fireEvent.change(checkboxCmp, { target: { checked: true } })
    expect(checkboxCmp.checked).toBeTruthy()

    fireEvent.change(checkboxCmp, { target: { checked: false } })
    expect(checkboxCmp.checked).toBeFalsy()
  })

  it('should not trigger "onChange" handler, when Checkbox is "disabled" and clicked', () => {
    TestWithThemeProvider(
      <Checkbox disabled onChange={OnChangeSpy}>
        {checkboxLabel}
      </Checkbox>,
    )
    const checkboxCmp: HTMLInputElement = screen.getByRole('checkbox')
    fireEvent.change(checkboxCmp, { target: { checked: true } })

    expect(OnChangeSpy).not.toHaveBeenCalled()
  })
})
