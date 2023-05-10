import type { ComponentSizeEnum, VariantTypeEnum } from './constants'

type VariantType = keyof typeof VariantTypeEnum
type ComponentSizeType = keyof typeof ComponentSizeEnum

export type { VariantType, ComponentSizeType }
