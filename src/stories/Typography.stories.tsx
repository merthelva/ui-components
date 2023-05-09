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
    color: {
      if: { arg: 'isDisabled', truthy: false },
    },
    fontSize: {
      options: Object.keys(FONT_SIZES),
      control: { type: 'select' },
      // if: { arg: 'type', eq: 'text' || 'paragraph' }, // FIXME: Filtering by multiple values is not available in Storybook right now. When published, apply it as required.
    },
    fontWeight: {
      options: Object.keys(FONT_WEIGHTS),
      control: { type: 'inline-radio' },
      // if: { arg: 'type', eq: 'text' || 'paragraph' }, // FIXME: Filtering by multiple values is not available in Storybook right now. When published, apply it as required.
    },
    breakWord: {
      options: TypographyConstants.BreakWordTypeEnum,
      control: { type: 'inline-radio' },
      if: { arg: 'type', eq: 'paragraph' },
    },
    transform: {
      control: { type: 'inline-radio' },
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
    isDisabled: false,
  },
}

export default meta
