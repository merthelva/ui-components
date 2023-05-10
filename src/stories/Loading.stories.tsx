import type { Meta, StoryObj } from '@storybook/react'

import { Loading } from 'components'

const meta: Meta<typeof Loading> = {
  title: 'Feedback/Loading',
  component: Loading,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'inline-radio' },
    },
    size: {
      control: { type: 'number', min: 0, max: 48 },
    },
    thickness: {
      control: { type: 'number', min: 0, max: 12 },
      if: { arg: 'type', eq: 'spinner' },
    },
  },
}

type Story = StoryObj<typeof Loading>

export const DEFAULT: Story = {
  render: (args) => <Loading {...args} />,
  name: 'Default',
  args: {
    type: 'spinner',
    variant: 'primary',
    thickness: 4,
    size: 16,
  },
}

export default meta
