import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { Checkbox } from 'components'
import type { ChangeEvent } from 'react'
import { ComponentSizeEnum, VariantTypeEnum } from 'shared/constants'

const meta: Meta<typeof Checkbox> = {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    checkboxSize: {
      options: Object.keys(ComponentSizeEnum),
      control: { type: 'inline-radio' },
    },
    variant: {
      options: Object.keys(VariantTypeEnum),
    },
  },
}

type Story = StoryObj<typeof Checkbox>

export const DEFAULT: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isChecked, setIsChecked] = useState(false)

    const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
      setIsChecked(e.target.checked)
    }
    return <Checkbox {...args} checked={isChecked} onChange={handleValueChange} />
  },
  name: 'Default',
  args: {
    children: 'Chekbox label',
    checkboxSize: 'medium',
    disabled: false,
    required: false,
    isFullWidth: false,
    variant: 'primary',
    errorMsg: '',
  },
}

export default meta
