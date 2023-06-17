import type { ComponentPropsWithoutRef } from 'react'
import type { ComponentSizeType, VariantType } from 'shared/types'

interface IProps {
  /**
   * The size of the component. It can be "small" | "medium" | "large".
   * You can use Intellisense feature of your editor for this prop value.
   */
  checkboxSize?: ComponentSizeType
  /**
   * The variant of the component. It can be like "primary" | "secondary" | "info" | "success" etc.
   * You can use Intellisense feature of your editor for this prop value.
   */
  variant?: VariantType
  /**
   * This prop is used to either make the component to have the width
   * of 100% of its parent or not.
   */
  isFullWidth?: boolean
  /**
   * This prop is used to display an error message in case that the validation
   * for the field has failed.
   */
  errorMsg?: string
  // TODO: After careful investigation, this state might be added.
  // isIndeterminate?: boolean
}

interface ICheckboxProps extends IProps, ComponentPropsWithoutRef<'input'> {}

export type { ICheckboxProps, IProps }
