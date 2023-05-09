import GlobalStyles from './GlobalStyles.style'
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
export { theme, GlobalStyles, ThemeProvider, TestWithThemeProvider }
