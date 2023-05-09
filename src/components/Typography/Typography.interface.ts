import type { FontSizesType, FontWeightsType, TextTransformType, ThemeColorKeysType } from 'theming'
import type { AlignTypeEnum, BreakWordTypeEnum, TypographyTypeEnum } from './constants'

type AlignType = keyof typeof AlignTypeEnum
type BreakWordType = keyof typeof BreakWordTypeEnum
type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type TypographyType = keyof typeof TypographyTypeEnum

interface ITypographyProps {
  /**
   * This prop is used to specify which semantic HTML element will be rendered in the DOM.
   * It is the only required property for this component.
   */
  type: TypographyType
  /**
   * This prop is used to specify the display color of the component. It will be overridden,
   * if "isDisabled" prop is given as truthy
   */
  color?: ThemeColorKeysType
  /**
   * This prop is used to specify if rendered content will be in a disabled state or not. If so,
   * the content will not be editable and selectable.
   */
  isDisabled?: boolean
  /**
   * This prop is used to specify the size of the component.
   */
  fontSize?: FontSizesType
  /**
   * This prop is used to specify the weight of the font of the component.
   * Until Storybook will enable the feature for conditional rendering of multiple arg-types, this prop will be
   * displayed in UI for /h[123456]/ type components, but these will have no effect on the rendered output. In the future,
   * they will be considered to be hidden from "Controls" panel.
   */
  fontWeight?: FontWeightsType
  /**
   * This prop is used to specify the transformation for the content of the component.
   * Until Storybook will enable the feature for conditional rendering of multiple arg-types, this prop will be
   * displayed in UI for /h[123456]/ type components, but these will have no effect on the rendered output. In the future,
   * they will be considered to be hidden from "Controls" panel.
   */
  transform?: TextTransformType
  /**
   * This prop is used to specify the alignment for the content of the component.
   */
  align?: AlignType
  /**
   * This prop is used to specify how the content will be wrapped to the next line,
   * when the content will be long enough so that it cannot be fit into one line.
   */
  breakWord?: BreakWordType
}

type ITextProps = Omit<ITypographyProps, 'type'>

type IParagraphProps = Omit<ITypographyProps, 'type'>

interface IHeadingProps extends Omit<ITypographyProps, 'type'> {
  renderAs?: HeadingType
}

export type { ITypographyProps, ITextProps, IParagraphProps, IHeadingProps }
