import type { BREAKPOINTS, FONT_SIZES, FONT_WEIGHTS, TEXT_TRANSFORM } from './constants'
import type AppTheme from './theme'

type BreakpointsType = keyof typeof BREAKPOINTS
type FontSizesType = keyof typeof FONT_SIZES
type FontWeightsType = keyof typeof FONT_WEIGHTS
type TextTransformType = keyof typeof TEXT_TRANSFORM
type ThemeColorKeysType = keyof typeof AppTheme.colors

export type {
  BreakpointsType,
  FontSizesType,
  FontWeightsType,
  TextTransformType,
  ThemeColorKeysType,
}
