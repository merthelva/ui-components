import type { ComponentPropsWithoutRef } from 'react'
import React from 'react'
import Heading from './Heading'
import Paragraph from './Paragraph'
import Text from './Text'
import type { ITypographyProps } from './Typography.interface'

const Typography: React.FC<
  React.PropsWithChildren<
    ITypographyProps &
      (
        | ComponentPropsWithoutRef<'span'>
        | ComponentPropsWithoutRef<'p'>
        | ComponentPropsWithoutRef<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>
      )
  >
> = ({ children, type, ...props }) => {
  switch (type) {
    case 'text':
      return <Text {...props}>{children}</Text>
    case 'paragraph':
      return <Paragraph {...props}>{children}</Paragraph>
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      return (
        <Heading renderAs={type} {...props}>
          {children}
        </Heading>
      )
    default:
      return <Paragraph {...props}>{children}</Paragraph>
  }
}

export default Typography
