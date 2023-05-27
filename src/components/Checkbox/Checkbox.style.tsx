import { Checkbox as AriaCheckbox } from '@ariakit/react'
import Flex from 'components/Flex'
import * as StyledInput from 'components/Input/Input.style'
import { ComponentSizeEnum } from 'shared/constants'
import styled, { css } from 'styled-components'
import { ThemingUtils, VARIANT_COLORS_SCHEMA } from 'theming'
import type { ICheckboxInputProps } from './Checkbox.interface'

const smallCheckboxStyle = css`
  max-height: 18px;
  max-width: 18px;
`

const mediumCheckboxStyle = css`
  max-height: 24px;
  max-width: 24px;
`

const largeCheckboxStyle = css`
  max-height: 30px;
  max-width: 30px;
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

const Label = styled.label<Pick<ICheckboxInputProps, 'variant' | 'disabled' | 'required'>>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  user-select: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

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

const Hidden = styled(AriaCheckbox)``

const CheckMark = styled.span<Pick<ICheckboxInputProps, 'checkboxSize' | 'variant'>>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 0;
  border-radius: 4px;
  transition: background-color 0.25s;
  border: 1.5px solid ${({ variant }) => VARIANT_COLORS_SCHEMA[variant || 'primary']};
  background-color: ${ThemingUtils.getColor('white')};
  ${ThemingUtils.getSpacing({ values: [2] })};
  ${({ checkboxSize }) => CHECKBOX_SIZE_STYLES[checkboxSize || 'medium']};

  &[data-checked='true'] {
    background-color: ${({ variant }) => VARIANT_COLORS_SCHEMA[variant || 'primary']};
  }
`

const ValidationText = styled(StyledInput.ValidationText)``

export { Wrapper, Label, Hidden, CheckMark, ValidationText }
