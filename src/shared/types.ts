import type { ComponentSizeEnum, VariantTypeEnum } from './constants'

type VariantType = keyof typeof VariantTypeEnum
type ComponentSizeType = keyof typeof ComponentSizeEnum
type DisabledArgType = Record<string, Record<'table', Record<'disable', boolean>>>

export type { VariantType, ComponentSizeType, DisabledArgType }
