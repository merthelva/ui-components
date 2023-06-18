import { screen } from '@testing-library/react'

import { TestWithThemeProvider } from 'theming'
import Radio from './Radio'
import RadioGroup from './RadioGroup'

const OnChangeSpy = jest.fn()

describe('<RadioGroup>', () => {
  it('should render RadioGroup correctly', () => {
    TestWithThemeProvider(
      <RadioGroup alignment="vertical" legend="SR Legend">
        <Radio id="radio-1" onChange={OnChangeSpy}>
          Radio I
        </Radio>
        <Radio id="radio-2" onChange={OnChangeSpy}>
          Radio II
        </Radio>
        <Radio id="radio-3" onChange={OnChangeSpy}>
          Radio III
        </Radio>
        <Radio id="radio-4" onChange={OnChangeSpy}>
          Radio IV
        </Radio>
      </RadioGroup>,
    )
    const radioGroupCmp = screen.getByRole('radiogroup')
    expect(radioGroupCmp).toBeInTheDocument()
  })

  it('should render first radio component as checked initially', () => {
    TestWithThemeProvider(
      <RadioGroup alignment="vertical" legend="SR Legend">
        <Radio id="radio-1" checked onChange={OnChangeSpy}>
          Radio I
        </Radio>
        <Radio id="radio-2" onChange={OnChangeSpy}>
          Radio II
        </Radio>
        <Radio id="radio-3" onChange={OnChangeSpy}>
          Radio III
        </Radio>
        <Radio id="radio-4" onChange={OnChangeSpy}>
          Radio IV
        </Radio>
      </RadioGroup>,
    )
    const [firstRadioCmp]: Array<HTMLInputElement> = screen.getAllByRole('radio')
    expect(firstRadioCmp.checked).toBeTruthy()
  })
})
