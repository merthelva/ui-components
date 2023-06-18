import type { Meta, StoryObj } from '@storybook/react'
import type { ChangeEvent } from 'react'
import { useState } from 'react'

import type { RadioGroupStateType } from 'components'
import { Radio, RadioGroup } from 'components'

const meta: Meta<typeof RadioGroup> = {
  title: 'Inputs/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    alignment: {
      control: { type: 'inline-radio' },
    },
  },
}

type Story = StoryObj<typeof RadioGroup>

const RADIO_IDS = ['radio-1', 'radio-2', 'radio-3', 'radio-4'] as const
const RESET_STATE = RADIO_IDS.reduce((resetState: RadioGroupStateType, id) => {
  resetState[id] = false
  return resetState
}, {})

export const DEFAULT: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [radiosState, setRadiosState] = useState<RadioGroupStateType>({
      'radio-1': false,
      'radio-2': true,
      'radio-3': false,
      'radio-4': false,
    })

    const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
      setRadiosState(() => ({
        ...RESET_STATE,
        [e.target.id]: e.target.checked,
      }))
    }

    return (
      <RadioGroup {...args}>
        <Radio id="radio-1" checked={radiosState['radio-1']} onChange={handleValueChange}>
          Radio I
        </Radio>
        <Radio id="radio-2" checked={radiosState['radio-2']} onChange={handleValueChange}>
          Radio II
        </Radio>
        <Radio id="radio-3" checked={radiosState['radio-3']} onChange={handleValueChange}>
          Radio III
        </Radio>
        <Radio id="radio-4" checked={radiosState['radio-4']} onChange={handleValueChange}>
          Radio IV
        </Radio>
      </RadioGroup>
    )
  },
  name: 'Default',
  args: {
    alignment: 'vertical',
  },
}

export default meta
