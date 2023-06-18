import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import Radio from 'components/RadioGroup/Radio/Radio'
import type { ChangeEvent } from 'react'
import { ComponentSizeEnum, VariantTypeEnum } from 'shared/constants'

const meta: Meta<typeof Radio> = {
  title: 'Inputs/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    radioSize: {
      options: Object.keys(ComponentSizeEnum),
      control: { type: 'inline-radio' },
    },
    variant: {
      options: Object.keys(VariantTypeEnum),
    },
  },
}

type Story = StoryObj<typeof Radio>

export const DEFAULT: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isChecked, setIsChecked] = useState(false)

    const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
      setIsChecked(e.target.checked)
    }
    return <Radio {...args} checked={isChecked} onChange={handleValueChange} />
  },
  name: 'Default',
  args: {
    children: 'Radio label',
    radioSize: 'medium',
    disabled: false,
    required: false,
    variant: 'primary',
    errorMsg: '',
  },
}

export default meta
