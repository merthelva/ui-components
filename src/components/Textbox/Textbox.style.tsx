import Flex from 'components/Flex'
import * as StyledInput from 'components/Input/Input.style'
import styled, { css } from 'styled-components'
import { ThemingUtils, VARIANT_COLORS_SCHEMA } from 'theming'

const TextboxWrapper = styled(Flex)<{
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

#validation-icon {
    flex-shrink: 0;
    align-self: center;
    ${ThemingUtils.getSpacing({ values: [0, 4], type: 'margin' })};
  }
`

const Textbox = styled.textarea`
  border: none;
  resize: none;
  height: 100%;
  min-height: 100px;
  flex-basis: 100%;
  ${ThemingUtils.getSpacing({
    values: { SPACING_TYPE: 'DIRECTIONAL', horizontal: 12, vertical: 8 },
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

const Label = styled(StyledInput.Label)``

const HelperText = styled(StyledInput.HelperText)``

const ValidationText = styled(StyledInput.ValidationText)``

const MaxCountText = styled(HelperText)`
  margin-left: auto;
`

const Feedback = styled((props) => (
  <Flex {...props} type="block" alignment={{ primary: 'space-between', secondary: 'flex-start' }} />
))``

const Messages = styled((props) => <Flex {...props} type="block" direction={{ in: 'column' }} />)``

export {
  TextboxWrapper,
  Textbox,
  Label,
  HelperText,
  ValidationText,
  MaxCountText,
  Feedback,
  Messages,
}
