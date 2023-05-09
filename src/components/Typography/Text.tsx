import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import type { ITextProps } from './Typography.interface'
import { TextStyled } from './Typography.style'

const Text = forwardRef<HTMLSpanElement, ComponentPropsWithoutRef<'span'> & ITextProps>(
  ({ children, ...props }, ref) => {
    return (
      <TextStyled ref={ref} {...props} aria-disabled={Boolean(props.isDisabled)}>
        {children}
      </TextStyled>
    )
  },
)

export default Text
