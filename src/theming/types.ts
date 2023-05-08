import type { BREAKPOINTS, FONT_SIZES, FONT_WEIGHTS, TEXT_TRANSFORM } from './constants'

type BreakpointsType = keyof typeof BREAKPOINTS
type FontSizesType = keyof typeof FONT_SIZES
type FontWeightsType = keyof typeof FONT_WEIGHTS
type TextTransformType = keyof typeof TEXT_TRANSFORM

export type { BreakpointsType, FontSizesType, FontWeightsType, TextTransformType }
