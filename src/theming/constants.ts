const FONT_SIZES = {
  text_xxs: '0.625rem',
  text_xs: '0.75rem',
  text_sm: '0.875rem',
  text_md: '1rem',
  text_lg: '1.125rem',
  text_xl: '1.25rem',

  header_xs: '1.5rem',
  header_sm: '1.875rem',
  header_md: '2.25rem',
  header_lg: '3rem',
} as const

const FONT_WEIGHTS = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const

const LINE_HEIGHTS = {
  text_xxs: '0.75rem',
  text_xs: '1rem',
  text_sm: '1.25rem',
  text_md: '1.5rem',
  text_lg: '1.75rem',
  text_xl: '1.875rem',

  header_xs: '2rem',
  header_sm: '2.375rem',
  header_md: '2.75rem',
  header_lg: '3.75rem',
} as const

const TEXT_TRANSFORM = {
  none: 'none',
  capitalize: 'capitalize',
  uppercase: 'uppercase',
  initial: 'initial',
  lowercase: 'lowercase',
} as const

export { FONT_SIZES, FONT_WEIGHTS, LINE_HEIGHTS, TEXT_TRANSFORM }
