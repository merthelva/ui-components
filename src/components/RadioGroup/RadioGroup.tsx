import type { ComponentPropsWithoutRef } from 'react'
import type { IRadioGroupProps } from './RadioGroup.interface'
import * as Styled from './RadioGroup.style'

const RadioGroup: React.FC<IRadioGroupProps & ComponentPropsWithoutRef<'fieldset'>> = ({
  children,
  legend,
  ...props
}) => {
  return (
    <Styled.Wrapper role="radiogroup" {...props}>
      <Styled.GroupLegend>{legend}</Styled.GroupLegend>
      {children}
    </Styled.Wrapper>
  )
}

export default RadioGroup
