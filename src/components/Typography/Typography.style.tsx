import styled, { css } from 'styled-components'
import { ThemingUtils } from 'theming'
import type { IHeadingProps, IParagraphProps, ITextProps } from './Typography.interface'

const TextStyled = styled.span<ITextProps>`
  ${({ fontSize, fontWeight: weight, transform }) =>
    ThemingUtils.getTypographyStyle({
      fontSize: fontSize || 'text_md',
      weight: weight || 'regular',
      transform: transform || 'none',
    })};
  color: ${({ color, isDisabled }) =>
    isDisabled ? ThemingUtils.getColor('gray300') : ThemingUtils.getColor(color || 'primary')};
  ${({ isDisabled }) =>
    Boolean(isDisabled) &&
    css`
      cursor: not-allowed;
    `}
`

const ParagraphStyled = styled.p<IParagraphProps>`
  ${({ fontSize, fontWeight: weight, transform }) =>
    ThemingUtils.getTypographyStyle({
      fontSize: fontSize || 'text_md',
      weight: weight || 'regular',
      transform: transform || 'none',
    })};
  color: ${({ color, isDisabled }) =>
    isDisabled ? ThemingUtils.getColor('gray300') : ThemingUtils.getColor(color || 'primary')};
  ${({ align }) =>
    css`
      text-align: ${align || 'left'};
    `};
  ${({ breakWord }) =>
    css`
      word-break: ${breakWord || 'normal'};
    `};
  ${({ isDisabled }) =>
    Boolean(isDisabled) &&
    css`
      cursor: not-allowed;
    `}
`

const HeadingStyled = styled.h1<IHeadingProps>`
  ${({ renderAs, fontSize, transform }) => {
    switch (renderAs) {
      case 'h1':
        return ThemingUtils.getTypographyStyle({
          fontSize: fontSize || 'header_lg',
          weight: 'bold',
          transform: transform || 'none',
        })
      case 'h2':
        return ThemingUtils.getTypographyStyle({
          fontSize: fontSize || 'header_md',
          weight: 'bold',
          transform: transform || 'none',
        })
      case 'h3':
        return ThemingUtils.getTypographyStyle({
          fontSize: fontSize || 'header_md',
          weight: 'semibold',
          transform: transform || 'none',
        })
      case 'h4':
        return ThemingUtils.getTypographyStyle({
          fontSize: fontSize || 'header_sm',
          weight: 'semibold',
          transform: transform || 'none',
        })
      case 'h5':
        return ThemingUtils.getTypographyStyle({
          fontSize: fontSize || 'header_sm',
          weight: 'medium',
          transform: transform || 'none',
        })
      case 'h6':
        return ThemingUtils.getTypographyStyle({
          fontSize: fontSize || 'header_xs',
          weight: 'medium',
          transform: transform || 'none',
        })
      default:
        return ThemingUtils.getTypographyStyle({
          fontSize: fontSize || 'header_lg',
          weight: 'bold',
          transform: transform || 'none',
        })
    }
  }}
  color: ${({ color, isDisabled }) =>
    isDisabled ? ThemingUtils.getColor('gray300') : ThemingUtils.getColor(color || 'primary')};
  ${({ align }) =>
    css`
      text-align: ${align || 'left'};
    `};
  ${({ isDisabled }) =>
    Boolean(isDisabled) &&
    css`
      cursor: not-allowed;
    `}
`

export { TextStyled, ParagraphStyled, HeadingStyled }
