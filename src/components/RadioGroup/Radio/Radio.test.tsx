import { fireEvent, screen } from '@testing-library/react'

import { TestWithThemeProvider } from 'theming'
import Radio from './Radio'

const OnChangeSpy = jest.fn()
const radioLabel = 'Radio label'

describe('<Radio>', () => {
  it('should render Radio correctly', () => {
    TestWithThemeProvider(<Radio onChange={OnChangeSpy}>{radioLabel}</Radio>)
    const radioCmp = screen.getByRole('radio')
    expect(radioCmp).toBeInTheDocument()
  })

  it('should display error message correctly, when Radio is in error state', () => {
    const errorMsg = 'random error message'
    TestWithThemeProvider(
      <Radio onChange={OnChangeSpy} errorMsg={errorMsg}>
        {radioLabel}
      </Radio>,
    )
    const errorMsgCmp = screen.getByText(errorMsg)

    expect(errorMsgCmp).toBeInTheDocument()
  })

  it('should trigger "onChange" handler, when Radio is clicked', () => {
    TestWithThemeProvider(<Radio onChange={OnChangeSpy}>{radioLabel}</Radio>)
    const radioCmp = screen.getByRole('radio')
    fireEvent.click(radioCmp)

    expect(OnChangeSpy).toHaveBeenCalledTimes(1)
  })

  it('should toggle "checked" state of Radio, when it is clicked', () => {
    TestWithThemeProvider(<Radio onChange={OnChangeSpy}>{radioLabel}</Radio>)
    const radioCmp: HTMLInputElement = screen.getByRole('radio')
    fireEvent.change(radioCmp, { target: { checked: true } })
    expect(radioCmp.checked).toBeTruthy()

    fireEvent.change(radioCmp, { target: { checked: false } })
    expect(radioCmp.checked).toBeFalsy()
  })

  it('should not trigger "onChange" handler, when Radio is "disabled" and clicked', () => {
    TestWithThemeProvider(
      <Radio disabled onChange={OnChangeSpy}>
        {radioLabel}
      </Radio>,
    )
    const radioCmp = screen.getByRole('radio')
    fireEvent.change(radioCmp, { target: { checked: true } })

    expect(OnChangeSpy).not.toHaveBeenCalled()
  })
})
