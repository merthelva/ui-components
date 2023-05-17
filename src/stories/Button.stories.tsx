import type { Meta, StoryObj } from '@storybook/react'

import { Button, Flex } from 'components'

const meta: Meta<typeof Button> = {
  title: 'Inputs/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
    },
  },
}

type Story = StoryObj<typeof Button>

const TEXT_BUTTON: Story = {
  render: (args) => <Button {...args} />,
  args: {
    renderAs: {
      KIND: 'TEXT',
      text: 'Hover over me',
    },
    variant: 'primary',
    size: 'medium',
  },
  argTypes: {
    renderAs: {
      table: {
        disable: true,
      },
    },
  },
}

const LOADING_BUTTON: Story = {
  render: (args) => <Button {...args} />,
  args: {
    renderAs: {
      KIND: 'LOADING',
    },
    size: 'medium',
  },
  argTypes: {
    renderAs: {
      table: {
        disable: true,
      },
    },
    variant: {
      table: {
        disable: true,
      },
    },
  },
}

const LOADING_WITH_TEXT_BUTTON: Story = {
  render: (args) => <Button {...args} />,
  args: {
    renderAs: {
      KIND: 'LOADING',
      text: 'Hover over me',
      textColor: 'primary',
    },
    size: 'medium',
  },
  argTypes: {
    renderAs: {
      table: {
        disable: true,
      },
    },
    variant: {
      table: {
        disable: true,
      },
    },
  },
}

const ICON_BUTTON: Story = {
  render: (args) => (
    <>
      <Button {...args} />
      <Button
        {...args}
        renderAs={{
          KIND: 'ICON',
          icon: 'user',
          color: args.hasOutline ? 'blue700' : 'white',
          size: 16,
        }}
        variant="info"
      />
      <Button
        {...args}
        renderAs={{
          KIND: 'ICON',
          icon: 'download',
          color: args.hasOutline ? 'red400' : 'white',
          size: 16,
        }}
        variant="primary"
      />
      <Button
        {...args}
        renderAs={{
          KIND: 'ICON',
          icon: 'ellipsis-vertical',
          color: 'black',
          size: 16,
        }}
        variant="ghost"
      />
      <Button
        {...args}
        renderAs={{
          KIND: 'ICON',
          icon: 'filter',
          color: args.hasOutline ? 'yellow800' : 'orange800',
          size: 16,
        }}
        variant="warning"
      />
    </>
  ),
  decorators: [
    (Story) => (
      <Flex gap={{ amount: 16 }}>
        <Story />
      </Flex>
    ),
  ],
  args: {
    renderAs: {
      KIND: 'ICON',
      color: 'black',
      icon: 'success',
      size: 16,
    },
    variant: 'success',
    size: 'medium',
  },
  argTypes: {
    renderAs: {
      table: {
        disable: true,
      },
    },
    variant: {
      table: {
        disable: true,
      },
    },
  },
}

const TEXT_WITH_ICON_BUTTON: Story = {
  render: (args) => (
    <>
      <Button
        {...args}
        renderAs={{
          KIND: 'TEXT_WITH_ICON',
          icon: { name: 'download', size: 16, color: args.hasOutline ? 'green700' : 'white' },
          text: {
            value: 'isIconLeft: false',
            color: args.hasOutline ? 'green700' : 'white',
          },
          isIconLeft: false,
        }}
        variant="success"
      />
      <Button
        {...args}
        renderAs={{
          KIND: 'TEXT_WITH_ICON',
          icon: { name: 'download', size: 16, color: args.hasOutline ? 'blue700' : 'white' },
          text: {
            value: 'isIconLeft: true',
            color: args.hasOutline ? 'blue700' : 'white',
          },
          isIconLeft: true,
        }}
        variant="info"
      />
    </>
  ),
  decorators: [
    (Story) => (
      <Flex gap={{ amount: 16 }}>
        <Story />
      </Flex>
    ),
  ],
  args: {
    size: 'medium',
  },
  argTypes: {
    renderAs: {
      table: {
        disable: true,
      },
    },
    variant: {
      table: {
        disable: true,
      },
    },
  },
}

const RENDER_WITH_CHILDREN_BUTTON: Story = {
  render: (args) => <Button {...args} />,
  args: {
    renderAs: {
      KIND: 'RENDER_WITH_CHILDREN',
    },
    variant: 'primary',
    size: 'medium',
    children: 'I am specified as component child text',
  },
  argTypes: {
    renderAs: {
      table: {
        disable: true,
      },
    },
  },
}

export {
  TEXT_BUTTON as TextButton,
  ICON_BUTTON as IconButton,
  LOADING_BUTTON as LoadingButton,
  LOADING_WITH_TEXT_BUTTON as LoadingWithTextButton,
  TEXT_WITH_ICON_BUTTON as TextWithIconButton,
  RENDER_WITH_CHILDREN_BUTTON as RenderWithChildrenButton,
}

export default meta
