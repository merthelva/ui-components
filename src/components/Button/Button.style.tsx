import { ComponentSizeEnum } from 'shared/constants'
import styled, { css } from 'styled-components'
import { ThemingUtils, VARIANT_COLORS_SCHEMA, theme } from 'theming'
import type IButtonProps from './Button.interface'

const smallButtonStyle = css`
  ${ThemingUtils.getSpacing({ values: [6, 8] })};
`

const mediumButtonStyle = css`
  ${ThemingUtils.getSpacing({ values: [12, 16] })};
`

const largeButtonStyle = css`
  ${ThemingUtils.getSpacing({ values: [18, 24] })};
`

function getButtonVariantStyle({
  variant,
  hasOutline,
}: Pick<IButtonProps, 'hasOutline' | 'variant'>) {
  const VARIANT_HOVER_COLORS_MAP = {
    primary: theme.colors.brown700,
    secondary: theme.colors.blue600,
    info: theme.colors.blue300,
    success: theme.colors.green300,
    warning: theme.colors.yellow500,
    error: theme.colors.red400,
    ghost: theme.colors.gray200,
  } as const

  if (variant === 'ghost') {
    const sharedStyle = css`
      background-color: transparent;

      &:hover {
        background-color: ${ThemingUtils.getColor('gray200')};
      }
    `

    if (hasOutline) {
      return css`
        ${sharedStyle};
        border: 1.5px solid ${ThemingUtils.getColor('black')};
      `
    }
    return sharedStyle
  }

  const sharedStyle = css`
    &:hover {
      color: ${variant === 'warning'
        ? ThemingUtils.getColor('gray800')
        : ThemingUtils.getColor('white')};
      background-color: ${VARIANT_HOVER_COLORS_MAP[variant || 'primary']};
    }
  `

  if (hasOutline) {
    return css`
      ${sharedStyle};
      color: ${VARIANT_COLORS_SCHEMA[variant || 'primary']};
      background-color: transparent;
      border: 1.5px solid ${VARIANT_COLORS_SCHEMA[variant || 'primary']};
      box-shadow: none;
    `
  }

  return css`
    ${sharedStyle};
    color: ${variant === 'warning'
      ? ThemingUtils.getColor('gray800')
      : ThemingUtils.getColor('white')};
    background-color: ${VARIANT_COLORS_SCHEMA[variant || 'primary']};
    box-shadow: 2px 0px 4px 2px ${ThemingUtils.getColor('gray400')};
  `
}

function getButtonLoadingOrDisabledStyle(hasOutline?: boolean) {
  const sharedStyle = css`
    background-color: ${ThemingUtils.getColor('gray300')};
    color: ${ThemingUtils.getColor('black')};
    cursor: not-allowed;
  `
  if (hasOutline) {
    return css`
      ${sharedStyle};
      border: 1.5px solid ${ThemingUtils.getColor('gray400')};
    `
  }
  return sharedStyle
}

const BUTTON_SIZE_STYLES = {
  [ComponentSizeEnum.small]: smallButtonStyle,
  [ComponentSizeEnum.medium]: mediumButtonStyle,
  [ComponentSizeEnum.large]: largeButtonStyle,
}

const Wrapper = styled.button<IButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  min-width: ${({ renderAs }) => (renderAs.KIND === 'ICON' ? 'fit-content' : '120px')};
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.25s, color 0.25s;
  ${({ size }) => BUTTON_SIZE_STYLES[size || 'medium']};
  ${({ disabled, renderAs, hasOutline }) =>
    (disabled || renderAs.KIND === 'LOADING') && getButtonLoadingOrDisabledStyle(hasOutline)}
  ${({ hasOutline, variant, disabled }) =>
    !disabled &&
    getButtonVariantStyle({
      variant: variant || 'primary',
      hasOutline: Boolean(hasOutline),
    })}
    
  &:focus {
    border: 1.5px solid ${ThemingUtils.getColor('blue800')};
  }
`

export default Wrapper
