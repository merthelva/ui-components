import type { FONT_SIZES, FONT_WEIGHTS, TEXT_TRANSFORM } from './constants'

type FontSizesType = keyof typeof FONT_SIZES
type FontWeightsType = keyof typeof FONT_WEIGHTS
type TextTransformType = keyof typeof TEXT_TRANSFORM

export type { FontSizesType, FontWeightsType, TextTransformType }
