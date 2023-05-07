import { css } from 'styled-components'
import type AppTheme from './theme'
import type { FontSizesType, FontWeightsType, TextTransformType } from './types'

interface IGetSpacingParams {
  /**
   * "Array<number>" version of "values" field can be used as if you specify "padding/margin" property using native CSS. For example,
   * (Assuming "type: 'padding' and unit: 'px'") If you type "values: [16]", this will yield to "padding: 16px", or if you type "values: [16, 24]",
   * this will yield to "padding: 16px 24px", or if you type "values: [16 24 32]", this will yield to "padding: 16px 24px 32px".
   * --------------------------------------------------------------------------------------------------------------------------------
   * In order to use "object" version of "values" field, you need to specify "SPACING_TYPE" argument as 'SELF', 'DIRECTIONAL' or 'CONCISE'.
   * Only after that, proper field(s) can be observed using editor's Intellisense feature.
   * If you are curious about why an argument like "SPACING_TYPE" is required here, you can refer to https://css-tricks.com/typescript-discriminated-unions/.
   */
  values:
    | Array<number>
    | { SPACING_TYPE: 'SELF'; top?: number; right?: number; bottom?: number; left?: number }
    | { SPACING_TYPE: 'DIRECTIONAL'; vertical?: number; horizontal?: number }
    | { SPACING_TYPE: 'CONCISE'; all: number }
  type?: 'padding' | 'margin'
  unit?: 'px' | 'rem' | 'em'
}

interface IGetTypographyStyle {
  fontSize?: FontSizesType
  weight?: FontWeightsType
  transform?: TextTransformType
}

function getSpacing({ values, ...options }: IGetSpacingParams) {
  const [spacingType, spacingUnit] = [options.type || 'padding', options.unit || 'px']
  if (Array.isArray(values)) {
    const spacingStyle = `${values.map((value) => `${value}${spacingUnit}`).join(' ')};`
    return spacingType === 'padding'
      ? css`
          padding: ${spacingStyle};
        `
      : css`
          margin: ${spacingStyle};
        `
  }
  if (values.SPACING_TYPE === 'SELF') {
    return css`
      ${Object.entries(values)
        .map(([side, value]) => `${spacingType}-${side}: ${value}${spacingUnit};`)
        .join('\n')}
    `
  }
  if (values.SPACING_TYPE === 'DIRECTIONAL') {
    let spacingStyle = ''
    if ('vertical' in values) {
      spacingStyle += `
        ${spacingType}-top: ${values.vertical}${spacingUnit};
        ${spacingType}-bottom: ${values.vertical}${spacingUnit};
    `
    }

    if ('horizontal' in values) {
      spacingStyle += `
        ${spacingType}-right: ${values.horizontal}${spacingUnit};
        ${spacingType}-left: ${values.horizontal}${spacingUnit};
    `
    }
    return css`
      ${spacingStyle}
    `
  }
  if (values.SPACING_TYPE === 'CONCISE') {
    return spacingType === 'padding'
      ? css`
          padding: ${values.all}${spacingUnit};
        `
      : css`
          margin: ${values.all}${spacingUnit};
        `
  }
  return css``
}

function getTypographyStyle({
  fontSize = 'text_md',
  weight = 'regular',
  transform = 'none',
}: IGetTypographyStyle) {
  return ({ theme }: { theme: typeof AppTheme }) => css`
    font-size: ${theme.fontSizes[fontSize]};
    line-height: ${theme.lineHeights[fontSize]};
    font-weight: ${theme.fontWeights[weight]};
    text-transform: ${transform};
  `
}

function getColor(colorName: keyof typeof AppTheme.colors) {
  return ({ theme }: { theme: typeof AppTheme }) => theme.colors[colorName]
}

export { getSpacing, getTypographyStyle, getColor }
