import type { ReactNode } from 'react'
import type { ComponentSizeType } from 'shared/types'

interface IInputProps {
  /**
   * This prop is used to assign a readable label to input.
   */
  label?: string
  /**
   * This prop is used to assign a readable helper text to input
   * in case the field needs more detail to be explained about.
   */
  helperText?: string
  /**
   * The size of the component. It can be "small" | "medium" | "large".
   * You can use Intellisense feature of your editor for this prop value.
   */
  inputSize?: ComponentSizeType
  /**
   * This prop is used to either make the component to have the width
   * of 100% of its parent or not.
   */
  isFullWidth?: boolean
  /**
   * This prop is used to display a content at the left to the input field.
   */
  inputPrefix?: string | ReactNode
  /**
   * This prop is used to display a content at the right to the input field.
   */
  inputPostfix?: string | ReactNode
  /**
   * This prop is used to display an error message along with attaching additional
   * styling to the component in case that the validation for the field has failed.
   */
  errorMsg?: string
  /**
   * This prop is used to display a success message along with attaching additional
   * styling to the component in case that the validation for the field has succeeded.
   */
  successMsg?: string
  // isClearable?: boolean
}

export default IInputProps
