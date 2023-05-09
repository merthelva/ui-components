import styled, { css } from 'styled-components'
import { ThemingUtils } from 'theming'
import type { IHeadingProps, IParagraphProps, ITextProps } from './Typography.interface'

const TextStyled = styled.span<ITextProps>`
  ${({ fontSize, fontWeight: weight, transform }) =>
    ThemingUtils.getTypographyStyle({ fontSize, weight, transform })};
  color: ${({ color }) => ThemingUtils.getColor(color || 'primary')};
`

const ParagraphStyled = styled.p<IParagraphProps>`
  ${({ fontSize, fontWeight: weight, transform }) =>
    ThemingUtils.getTypographyStyle({ fontSize, weight, transform })};
  color: ${({ color }) => ThemingUtils.getColor(color || 'primary')};
  ${({ align }) =>
    css`
      text-align: ${align || 'left'};
    `};
  ${({ breakWord }) =>
    css`
      word-break: ${breakWord || 'normal'};
    `};
`

const HeadingStyled = styled.h1<IHeadingProps>`
  ${({ renderAs, transform }) => {
    switch (renderAs) {
      case 'h1':
        return ThemingUtils.getTypographyStyle({ fontSize: 'header_lg', weight: 'bold', transform })
      case 'h2':
        return ThemingUtils.getTypographyStyle({ fontSize: 'header_md', weight: 'bold', transform })
      case 'h3':
        return ThemingUtils.getTypographyStyle({
          fontSize: 'header_md',
          weight: 'semibold',
          transform,
        })
      case 'h4':
        return ThemingUtils.getTypographyStyle({
          fontSize: 'header_sm',
          weight: 'semibold',
          transform,
        })
      case 'h5':
        return ThemingUtils.getTypographyStyle({
          fontSize: 'header_sm',
          weight: 'medium',
          transform,
        })
      case 'h6':
        return ThemingUtils.getTypographyStyle({
          fontSize: 'header_xs',
          weight: 'medium',
          transform,
        })
      default:
        return ThemingUtils.getTypographyStyle({ fontSize: 'header_lg', weight: 'bold', transform })
    }
  }}
  color: ${({ color }) => ThemingUtils.getColor(color || 'primary')};
  ${({ align }) =>
    css`
      text-align: ${align || 'left'};
    `};
`

export { TextStyled, ParagraphStyled, HeadingStyled }
