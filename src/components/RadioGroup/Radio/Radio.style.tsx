import Flex from 'components/Flex'
import * as StyledInput from 'components/Input/Input.style'
import { ComponentSizeEnum } from 'shared/constants'
import styled, { css } from 'styled-components'
import { ThemingUtils, VARIANT_COLORS_SCHEMA } from 'theming'
import type { IRadioProps } from './Radio.interface'

const smallRadioStyle = css`
  height: 6px;
  width: 6px;
`

const mediumRadioStyle = css`
  height: 8px;
  width: 8px;
`

const largeRadioStyle = css`
  height: 10px;
  width: 10px;
`

const RADIO_SIZE_STYLES = {
  [ComponentSizeEnum.small]: smallRadioStyle,
  [ComponentSizeEnum.medium]: mediumRadioStyle,
  [ComponentSizeEnum.large]: largeRadioStyle,
}

const Wrapper = styled((props) => (
  <Flex {...props} type="inline" direction={{ in: 'column' }} gap={{ amount: 4 }} />
))<{
  $isDisabled?: boolean
}>`
  ${({ $isDisabled }) =>
    Boolean($isDisabled) &&
    css`
      cursor: not-allowed;
    `}
`

const Label = styled.label<Pick<IRadioProps, 'variant' | 'disabled' | 'required'>>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  user-select: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${ThemingUtils.getColor('gray400')};
    `}

  ${({ required }) =>
    Boolean(required) &&
    css`
      ::after {
        position: relative;
        content: '*';
        left: -5px;
      }
    `}

  &:focus-within {
    ${ThemingUtils.getSpacing({ values: [2] })};
    outline: 1px solid ${({ variant }) => VARIANT_COLORS_SCHEMA[variant || 'primary']};
  }
`

const VisuallyHidden = styled.input.attrs({ type: 'radio' })`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const Radio = styled.span<Pick<IRadioProps, 'radioSize' | 'disabled' | 'variant'>>`
  border-radius: 50%;
  transition: background-color 0.25s;
  outline-offset: 2px;
  outline: 2px solid ${({ variant }) => VARIANT_COLORS_SCHEMA[variant || 'primary']};
  ${({ radioSize }) => RADIO_SIZE_STYLES[radioSize || 'medium']};

  ${({ disabled }) =>
    disabled &&
    css`
      outline: 2px solid ${ThemingUtils.getColor('gray400')};
    `}

  &[data-checked='true'] {
    background-color: ${({ variant }) => VARIANT_COLORS_SCHEMA[variant || 'primary']};
  }
`

const ValidationText = styled(StyledInput.ValidationText)``

export { Label, Radio, ValidationText, VisuallyHidden, Wrapper }
