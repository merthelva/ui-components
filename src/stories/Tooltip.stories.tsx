import type { Meta, StoryObj } from '@storybook/react'

import { Tooltip, Typography } from 'components'

const meta: Meta<typeof Tooltip> = {
  title: 'Inputs/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    element: {
      table: {
        disable: true,
      },
    },
    position: {
      control: { type: 'inline-radio' },
    },
  },
  parameters: {
    layout: 'centered',
  },
}

type Story = StoryObj<typeof Tooltip>

export const DEFAULT: Story = {
  render: (args) => {
    return <Tooltip {...args} />
  },
  name: 'Default',
  args: {
    position: 'top',
    tooltip: 'I am a tooltip text',
    element: <Typography type="text">Hover over me</Typography>,
  },
}

export default meta
