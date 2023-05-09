import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from 'components'
import { TypographyConstants } from 'components/Typography'
import { FONT_SIZES, FONT_WEIGHTS } from 'theming/constants'

const meta: Meta<typeof Typography> = {
  title: 'Typography',
  component: Typography,
  tags: ['autodocs'],
  decorators: [
    (Story, { args: storyArgs }) => (
      <Story args={{ ...storyArgs, style: { border: '1px solid #000' } }} />
    ),
  ],
  argTypes: {
    align: {
      options: TypographyConstants.AlignTypeEnum,
      control: { type: 'select' },
      if: { arg: 'type', neq: 'text' },
    },
    fontSize: {
      options: Object.keys(FONT_SIZES),
      control: { type: 'select' },
      if: { arg: 'type', eq: 'text' || 'paragraph' },
    },
    fontWeight: {
      options: Object.keys(FONT_WEIGHTS),
      control: { type: 'select' },
      if: { arg: 'type', eq: 'text' || 'paragraph' },
    },
    breakWord: {
      options: TypographyConstants.BreakWordTypeEnum,
      control: { type: 'select' },
      if: { arg: 'type', eq: 'paragraph' },
    },
  },
}

type Story = StoryObj<typeof Typography>

export const DEFAULT: Story = {
  render: (args) => <Typography {...args}>Typography component</Typography>,
  name: 'Default',
  args: {
    type: 'text',
    align: 'left',
    color: 'primary',
  },
}

export default meta
