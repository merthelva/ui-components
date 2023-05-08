import React from 'react'
import type IFlexProps from './Flex.interface'
import Wrapper from './Flex.style'

/**
 * This component assumes only unidirectional alignment, i.e., multi-line alignment will not be supported intentionally.
 * If you want to have 2-D alignment, please use Grid Layout instead as it will be more useful.
 */
const Flex: React.FC<React.PropsWithChildren<IFlexProps>> = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>
}

export default Flex
