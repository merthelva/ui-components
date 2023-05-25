import type { Meta, StoryObj } from '@storybook/react'

import { Textbox } from 'components'
import type { ChangeEvent } from 'react'
import { useState } from 'react'
import type { DisabledArgType } from 'shared/types'

const HIDDEN_ARG_TYPES = ['id', 'maxLength']

const meta: Meta<typeof Textbox> = {
  title: 'Inputs/Textbox',
  component: Textbox,
  tags: ['autodocs'],
  argTypes: {
    required: {
      if: { arg: 'label', truthy: true },
    },
    errorMsg: {
      if: { arg: 'successMsg', truthy: false },
    },
    successMsg: {
      if: { arg: 'errorMsg', truthy: false },
    },
    ...HIDDEN_ARG_TYPES.reduce((acc: DisabledArgType, val) => {
      acc[val] = {
        table: {
          disable: true,
        },
      }
      return acc
    }, {}),
  },
}

type Story = StoryObj<typeof Textbox>

const DEFAULT: Story = {
  render: (args) => <Textbox {...args} />,
  args: {
    id: 'test-textbox',
    label: '',
    helperText: '',
    placeholder: '',
    disabled: false,
    required: false,
    isFullWidth: false,
    errorMsg: '',
    successMsg: '',
  },
}

const WITH_MAX_LENGTH_LIMIT: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [textboxValue, setTextboxValue] = useState('')

    const handleValueChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setTextboxValue(e.target.value)
    }
    return <Textbox {...args} onChange={handleValueChange} value={textboxValue} />
  },
  args: {
    ...DEFAULT.args,
    maxLength: 20,
  },
}

export { DEFAULT as Default, WITH_MAX_LENGTH_LIMIT as WithMaxLengthLimit }

export default meta
