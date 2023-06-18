import React from 'react'
import type { ComponentPropsWithoutRef } from 'react'
import type ITooltipProps from './Tooltip.interface'
import Wrapper from './Tooltip.style'

const Tooltip: React.FC<ITooltipProps & ComponentPropsWithoutRef<'div'>> = ({
  element,
  position,
  tooltip,
  ...props
}) => {
  return (
    <Wrapper {...props} data-tooltip={tooltip} position={position}>
      {element}
    </Wrapper>
  )
}

export default Tooltip
