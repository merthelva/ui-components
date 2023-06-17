import Flex from 'components/Flex'
import * as StyledInput from 'components/Input/Input.style'
import { ComponentSizeEnum } from 'shared/constants'
import styled, { css } from 'styled-components'
import { ThemingUtils, VARIANT_COLORS_SCHEMA } from 'theming'
import type { ICheckboxProps } from './Checkbox.interface'

const smallCheckboxStyle = css`
  max-height: 14px;
  max-width: 14px;
`

const mediumCheckboxStyle = css`
  max-height: 18px;
  max-width: 18px;
`

const largeCheckboxStyle = css`
  max-height: 22px;
  max-width: 22px;
`

const CHECKBOX_SIZE_STYLES = {
  [ComponentSizeEnum.small]: smallCheckboxStyle,
  [ComponentSizeEnum.medium]: mediumCheckboxStyle,
  [ComponentSizeEnum.large]: largeCheckboxStyle,
}

const Wrapper = styled((props) => (
  <Flex {...props} direction={{ in: 'column' }} gap={{ amount: 4 }} />
))<{
  $hasError?: boolean
  $isDisabled?: boolean
  $isFullWidth?: boolean
}>`
  display: ${({ $isFullWidth }) => (!$isFullWidth ? 'inline-flex' : 'flex')};
  width: ${({ $isFullWidth }) => (!$isFullWidth ? 'fit-content' : '100%')};
  ${({ $isDisabled }) =>
    Boolean($isDisabled) &&
    css`
      cursor: not-allowed;
    `}
  ${({ $hasError }) =>
    Boolean($hasError) &&
    css`
      ${ThemingUtils.getSpacing({ values: [2, 4] })};
      border: 1.5px solid ${VARIANT_COLORS_SCHEMA.error};
    `}
`

const Label = styled.label<Pick<ICheckboxProps, 'variant' | 'disabled' | 'required'>>`
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

  &[data-focus-visible] {
    ${ThemingUtils.getSpacing({ values: [2] })};
    outline: 1px solid ${({ variant }) => VARIANT_COLORS_SCHEMA[variant || 'primary']};
  }
`

const VisuallyHidden = styled.input.attrs({ type: 'checkbox' })`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const CheckMark = styled.span<Pick<ICheckboxProps, 'checkboxSize' | 'disabled' | 'variant'>>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 0;
  border-radius: 4px;
  transition: background-color 0.25s;
  border: 1.5px solid ${({ variant }) => VARIANT_COLORS_SCHEMA[variant || 'primary']};
  ${({ disabled }) =>
    disabled &&
    css`
      border: 1px solid ${ThemingUtils.getColor('gray400')};
    `}
  background-color: ${ThemingUtils.getColor('white')};
  ${ThemingUtils.getSpacing({ values: [2] })};
  ${({ checkboxSize }) => CHECKBOX_SIZE_STYLES[checkboxSize || 'medium']};

  &[data-checked='true'] {
    background-color: ${({ variant }) => VARIANT_COLORS_SCHEMA[variant || 'primary']};
  }
`

const ValidationText = styled(StyledInput.ValidationText)``

export { CheckMark, Label, ValidationText, VisuallyHidden, Wrapper }
