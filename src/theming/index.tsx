import GlobalStyles, { VARIANT_COLORS_SCHEMA } from './GlobalStyles.style'
import ThemeProvider, { TestWithThemeProvider } from './ThemeProvider'
import theme from './theme'

export type {
  BreakpointsType,
  FontSizesType,
  FontWeightsType,
  TextTransformType,
  ThemeColorKeysType,
} from './types'
export * as ThemingUtils from './utils'
export { theme, GlobalStyles, VARIANT_COLORS_SCHEMA, ThemeProvider, TestWithThemeProvider }
