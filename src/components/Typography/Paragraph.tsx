import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import type { IParagraphProps } from './Typography.interface'
import { ParagraphStyled } from './Typography.style'

const Paragraph = forwardRef<HTMLParagraphElement, ComponentPropsWithoutRef<'p'> & IParagraphProps>(
  ({ children, ...props }, ref) => {
    return (
      <ParagraphStyled ref={ref} {...props} aria-disabled={Boolean(props.isDisabled)}>
        {children}
      </ParagraphStyled>
    )
  },
)

export default Paragraph
