import { visuallyHiddenStyle } from 'components/Checkbox/Checkbox.style'
import styled, { css } from 'styled-components'
import type { IRadioGroupProps } from './RadioGroup.interface'

const Wrapper = styled.fieldset<Pick<IRadioGroupProps, 'alignment'>>`
  display: flex;
  gap: 1rem;
  width: fit-content;
  border: 0;
  ${({ alignment }) => css`
    flex-direction: ${alignment === 'horizontal' ? 'row' : 'column'};
    align-items: ${alignment === 'horizontal' ? 'center' : 'flex-start'};
  `}
`

const GroupLegend = styled.legend`
  ${visuallyHiddenStyle};
`

export { GroupLegend, Wrapper }
