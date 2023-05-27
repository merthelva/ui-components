import StyledButton from 'components/Button/Button.style'
import Flex from 'components/Flex'
import StyledFlex from 'components/Flex/Flex.style'
import type { ComponentPropsWithoutRef } from 'react'
import { ComponentSizeEnum } from 'shared/constants'
import styled, { css } from 'styled-components'
import { ThemingUtils, VARIANT_COLORS_SCHEMA } from 'theming'
import type IInputProps from './Input.interface'

const smallInputStyle = css`
  height: 32px;
`

const mediumInputStyle = css`
  height: 40px;
`

const largeInputStyle = css`
  height: 48px;
`

const INPUT_SIZE_STYLES = {
  [ComponentSizeEnum.small]: smallInputStyle,
  [ComponentSizeEnum.medium]: mediumInputStyle,
  [ComponentSizeEnum.large]: largeInputStyle,
}

const Label = styled.label<Pick<ComponentPropsWithoutRef<'input'>, 'required'>>`
  color: ${ThemingUtils.getColor('gray700')};
  ${({ required }) =>
    required &&
    css`
      ::after {
        position: relative;
        content: '*';
        left: 1px;
      }
    `}
`

const HelperText = styled.small`
  color: ${ThemingUtils.getColor('gray700')};
`

const ValidationText = styled.small<{ validation: 'success' | 'error' }>`
  color: ${({ validation }) =>
    validation === 'error' ? VARIANT_COLORS_SCHEMA.error : VARIANT_COLORS_SCHEMA.success};
`

const InputWrapper = styled(Flex)<{
  $size?: IInputProps['inputSize']
  $hasError?: boolean
  $hasSuccess?: boolean
  $isDisabled?: boolean
}>`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid ${ThemingUtils.getColor('gray400')};
  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      cursor: not-allowed;
      background-color: ${ThemingUtils.getColor('gray200')};
    `}
  ${({ $size }) => INPUT_SIZE_STYLES[$size || 'medium']};
  ${({ $hasError }) =>
    Boolean($hasError) &&
    css`
      border: 1.5px solid ${VARIANT_COLORS_SCHEMA.error};
    `}
  ${({ $hasSuccess }) =>
    Boolean($hasSuccess) &&
    css`
      border: 1.5px solid ${VARIANT_COLORS_SCHEMA.success};
    `}

  ${StyledFlex}:last-of-type {
    flex: 1;
  }

  #validation-icon {
    flex-shrink: 0;
    align-self: center;
    ${ThemingUtils.getSpacing({ values: [0, 4], type: 'margin' })};
  }
`

const RawInput = styled.input<IInputProps>`
  border: none;
  height: 100%;
  flex-basis: 100%;
  ${ThemingUtils.getSpacing({
    values: { SPACING_TYPE: 'DIRECTIONAL', horizontal: 8, vertical: 4 },
  })};
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      background-color: ${ThemingUtils.getColor('gray200')};
    `}

  ::placeholder {
    color: ${ThemingUtils.getColor('gray400')};
  }
`

const TextInput = styled(RawInput).attrs({
  type: 'text',
})``

const PasswordInput = styled(RawInput).attrs({
  // type: 'password',
})``

const EmailInput = styled(RawInput).attrs({
  type: 'email',
})``

const NumberInput = styled(RawInput).attrs({
  type: 'number',
})``

const AddonWrapper = styled((props) => (
  <Flex {...props} type="inline" alignment={{ primary: 'center', secondary: 'center' }} />
))`
  background-color: ${ThemingUtils.getColor('gray100')};
  ${ThemingUtils.getSpacing({ values: [8] })};

  ${StyledButton} {
    ${ThemingUtils.getSpacing({ values: [0] })};
  }
`

export {
  Label,
  HelperText,
  ValidationText,
  InputWrapper,
  TextInput,
  PasswordInput,
  EmailInput,
  NumberInput,
  AddonWrapper,
}
