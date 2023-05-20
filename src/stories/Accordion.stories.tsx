import type { Meta, StoryObj } from '@storybook/react'

import { Accordion, Button, Flex, Typography } from 'components'
import type IAccordionProps from 'components/Accordion/Accordion.interface'
import { ComponentSizeEnum } from 'shared/constants'

const ACCORDION_DATA: IAccordionProps['data'] = [
  {
    title: { KIND: 'STRING', content: 'Title 1' },
    detail: {
      KIND: 'STRING',
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, consectetur tenetur unde distinctio possimus cupiditate sunt enim fugit eveniet eaque eius voluptatem? Consequuntur a soluta distinctio cupiditate repudiandae quidem vitae?
  Quam, doloremque. Consequuntur aliquid nihil accusamus sunt est ea ipsam sit assumenda ducimus architecto nam dolorem ex adipisci necessitatibus vero quod ullam itaque, laudantium deserunt qui quam atque. Repellat, esse.`,
    },
    headingButtonId: 'button_id_1',
    panelId: 'panel_id_1',
  },
  {
    title: { KIND: 'STRING', content: 'Title 2' },
    detail: {
      KIND: 'STRING',
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, consectetur tenetur unde distinctio possimus cupiditate sunt enim fugit eveniet eaque eius voluptatem? Consequuntur a soluta distinctio cupiditate repudiandae quidem vitae?
  Quam, doloremque. Consequuntur aliquid nihil accusamus sunt est ea ipsam sit assumenda ducimus architecto nam dolorem ex adipisci necessitatibus vero quod ullam itaque, laudantium deserunt qui quam atque. Repellat, esse.`,
    },
    headingButtonId: 'button_id_2',
    panelId: 'panel_id_2',
  },
  {
    title: { KIND: 'STRING', content: 'Title 3' },
    detail: {
      KIND: 'REACT_COMPONENT',
      children: (
        <Flex alignment={{ primary: 'space-between' }} gap={{ amount: 8 }}>
          <Typography type="text">
            I am a text in flex container. If you don't believe, inspect me and my parent in Dev
            Tools.
          </Typography>
          <Button
            renderAs={{
              KIND: 'TEXT_WITH_ICON',
              icon: { name: 'download', size: 14, color: 'black' },
              text: { color: 'black', value: 'I am a button text' },
            }}
            variant="info"
            hasOutline
            size="small"
          />
        </Flex>
      ),
    },
    headingButtonId: 'button_id_3',
    panelId: 'panel_id_3',
  },
]

const meta: Meta<typeof Accordion> = {
  title: 'Data Display/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ComponentSizeEnum,
      control: { type: 'inline-radio' },
    },
    isSingleExpandedCollapsible: {
      if: { arg: 'isMultipleExpandAllowed', truthy: false },
    },
  },
}

type Story = StoryObj<typeof Accordion>

export const DEFAULT: Story = {
  render: (args) => <Accordion {...args} />,
  name: 'Default',
  args: {
    data: ACCORDION_DATA,
    size: 'medium',
    isSingleExpandedCollapsible: true,
    isMultipleExpandAllowed: true,
  },
  argTypes: {
    data: {
      table: {
        disable: true,
      },
    },
  },
}

export default meta
