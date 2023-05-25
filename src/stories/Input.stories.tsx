import type { Meta, StoryObj } from '@storybook/react'

import { Button, Icon, Input } from 'components'
import { InputTypeEnum } from 'components/Input'
import { ComponentSizeEnum } from 'shared/constants'
import type { DisabledArgType } from 'shared/types'

const HIDDEN_ARG_TYPES = ['id', 'inputPrefix', 'inputPostfix']

const meta: Meta<typeof Input> = {
  title: 'Inputs/Input Field',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: Object.keys(InputTypeEnum),
      control: { type: 'select' },
    },
    inputSize: {
      options: Object.keys(ComponentSizeEnum),
      control: { type: 'inline-radio' },
    },
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

type Story = StoryObj<typeof Input>

const DEFAULT: Story = {
  render: (args) => <Input {...args} />,
  args: {
    type: 'text',
    id: 'test-input',
    placeholder: '',
    disabled: false,
    required: false,
    inputSize: 'medium',
    label: '',
    helperText: '',
    isFullWidth: false,
    errorMsg: '',
    successMsg: '',
  },
}

const WITH_INPUT_PREFIX_STRING: Story = {
  render: (args) => <Input {...args} />,
  args: { ...DEFAULT.args, inputPrefix: '$' },
}

const WITH_INPUT_PREFIX_NODE: Story = {
  render: (args) => <Input {...args} />,
  args: {
    ...DEFAULT.args,
    inputPrefix: <Icon name="user" size={14} color="gray700" />,
  },
}

const WITH_INPUT_POSTFIX_STRING: Story = {
  render: (args) => <Input {...args} />,
  args: { ...DEFAULT.args, inputPostfix: 'kg' },
}

const WITH_INPUT_POSTFIX_NODE: Story = {
  render: (args) => <Input {...args} />,
  args: {
    ...DEFAULT.args,
    inputPostfix: (
      <Button
        renderAs={{ KIND: 'ICON', icon: 'download', size: 16, color: 'gray700' }}
        variant="ghost"
        size="small"
      />
    ),
  },
}

const WITH_INPUT_PREFIX_AND_INPUT_POSTFIX: Story = {
  render: (args) => <Input {...args} />,
  args: {
    ...DEFAULT.args,
    inputPrefix: '$',
    inputPostfix: <Icon name="user" size={14} color="gray700" />,
  },
}

export {
  DEFAULT as Default,
  WITH_INPUT_PREFIX_STRING as WithPrefixString,
  WITH_INPUT_PREFIX_NODE as WithPrefixNode,
  WITH_INPUT_POSTFIX_STRING as WithPostfixString,
  WITH_INPUT_POSTFIX_NODE as WithPostfixNode,
  WITH_INPUT_PREFIX_AND_INPUT_POSTFIX as WithPredixAndPostfix,
}
export default meta
