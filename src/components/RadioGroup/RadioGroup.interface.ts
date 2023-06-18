interface IRadioGroupProps {
  /**
   * This prop is used to stack radio components either horizontally or vertically.
   */
  alignment: 'horizontal' | 'vertical'
  /**
   * This prop is used to provide a descriptive legend to the component only for Assistive Technology (AT)
   * in order to improve accessibility and it is NOT visible to user on the screen. So specifying
   * this prop will not have any visual effect and only Screen Reader (SR) will catch it.
   */
  legend: string
}

type RadioGroupStateType = Record<string, boolean>

export type { IRadioGroupProps, RadioGroupStateType }
