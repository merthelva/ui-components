import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import type { IHeadingProps } from './Typography.interface'
import { HeadingStyled } from './Typography.style'

const Heading = forwardRef<
  HTMLHeadingElement,
  ComponentPropsWithoutRef<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'> & IHeadingProps
>(({ children, renderAs = 'h1', ...props }, ref) => {
  return (
    <HeadingStyled
      ref={ref}
      as={renderAs}
      renderAs={renderAs}
      {...props}
      aria-disabled={Boolean(props.isDisabled)}
    >
      {children}
    </HeadingStyled>
  )
})

export default Heading
