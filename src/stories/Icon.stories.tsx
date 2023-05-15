import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from 'components'

const meta: Meta<typeof Icon> = {
  title: 'Data Display/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'select' },
    },
    size: {
      control: { type: 'number', min: 0, max: 84 },
    },
  },
}

type Story = StoryObj<typeof Icon>

export const DEFAULT: Story = {
  render: (args) => <Icon {...args} />,
  name: 'Default',
  args: {
    color: 'green500',
    size: 20,
    name: 'ellipsis-vertical',
  },
}

export default meta
