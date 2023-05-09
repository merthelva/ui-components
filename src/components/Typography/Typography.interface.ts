import type { FontSizesType, FontWeightsType, TextTransformType, ThemeColorKeysType } from 'theming'
import type { AlignTypeEnum, BreakWordTypeEnum, TypographyTypeEnum } from './constants'

type AlignType = keyof typeof AlignTypeEnum
type BreakWordType = keyof typeof BreakWordTypeEnum
type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type TypographyType = keyof typeof TypographyTypeEnum

interface ITypographyProps {
  type: TypographyType
  color: ThemeColorKeysType | undefined
  fontSize: FontSizesType | undefined
  fontWeight: FontWeightsType | undefined
  transform: TextTransformType | undefined
  align: AlignType | undefined
  breakWord: BreakWordType | undefined
}

type ITextProps = Omit<ITypographyProps, 'type'>

type IParagraphProps = Omit<ITypographyProps, 'type'>

interface IHeadingProps extends Omit<ITypographyProps, 'type'> {
  renderAs: HeadingType | undefined
}

export type { ITypographyProps, ITextProps, IParagraphProps, IHeadingProps }
