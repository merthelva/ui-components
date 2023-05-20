import { fireEvent, screen } from '@testing-library/react'

import { TestWithThemeProvider } from 'theming'
import Accordion from './Accordion'
import type IAccordionProps from './Accordion.interface'

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
      KIND: 'STRING',
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, consectetur tenetur unde distinctio possimus cupiditate sunt enim fugit eveniet eaque eius voluptatem? Consequuntur a soluta distinctio cupiditate repudiandae quidem vitae?
  Quam, doloremque. Consequuntur aliquid nihil accusamus sunt est ea ipsam sit assumenda ducimus architecto nam dolorem ex adipisci necessitatibus vero quod ullam itaque, laudantium deserunt qui quam atque. Repellat, esse.`,
    },
    headingButtonId: 'button_id_3',
    panelId: 'panel_id_3',
  },
]

describe('<Accordion>', () => {
  it('should render Accordion correctly', () => {
    TestWithThemeProvider(<Accordion data={ACCORDION_DATA} />)
    const accordionCmp = screen.getByRole('tablist')
    expect(accordionCmp).toBeInTheDocument()
  })

  it('should render all accordion panels in collapsed state initially', () => {
    TestWithThemeProvider(<Accordion data={ACCORDION_DATA} />)
    ACCORDION_DATA.forEach((data) => {
      const accordionPanel = data.panelId
      expect(screen.getByTestId(accordionPanel)).toHaveStyleRule('display', 'none')
    })
  })

  it('should expand the accordion item, if it is clicked upon', () => {
    const clickedAccordionItemIndex = 1
    TestWithThemeProvider(<Accordion data={ACCORDION_DATA} />)
    const accordionPanel = ACCORDION_DATA[clickedAccordionItemIndex].panelId
    const accordionItemHeader = screen.getByTestId(
      ACCORDION_DATA[clickedAccordionItemIndex].headingButtonId,
    )

    fireEvent.click(accordionItemHeader)

    expect(screen.getByTestId(accordionPanel)).toHaveStyleRule('display', 'block')
  })

  it('should expand the latest clicked accordion item, if two items are clicked upon consecutively and "isMultipleExpandAllowed" is specified as falsy', () => {
    const firstItemIndex = 0
    const secondItemIndex = 2
    TestWithThemeProvider(<Accordion data={ACCORDION_DATA} />)
    const firstAccordionPanel = ACCORDION_DATA[firstItemIndex].panelId
    const firstAccordionItemHeader = screen.getByTestId(
      ACCORDION_DATA[firstItemIndex].headingButtonId,
    )
    const secondAccordionPanel = ACCORDION_DATA[secondItemIndex].panelId
    const secondAccordionItemHeader = screen.getByTestId(
      ACCORDION_DATA[secondItemIndex].headingButtonId,
    )

    fireEvent.click(firstAccordionItemHeader)
    fireEvent.click(secondAccordionItemHeader)

    expect(screen.getByTestId(firstAccordionPanel)).toHaveStyleRule('display', 'none')
    expect(screen.getByTestId(secondAccordionPanel)).toHaveStyleRule('display', 'block')
  })

  it('should expand multiple accordion items, if they are clicked upon and "isMultipleExpandAllowed" is specified as truthy', () => {
    const firstItemIndex = 0
    const secondItemIndex = 2
    TestWithThemeProvider(<Accordion data={ACCORDION_DATA} isMultipleExpandAllowed />)
    const firstAccordionPanel = ACCORDION_DATA[firstItemIndex].panelId
    const firstAccordionItemHeader = screen.getByTestId(
      ACCORDION_DATA[firstItemIndex].headingButtonId,
    )
    const secondAccordionPanel = ACCORDION_DATA[secondItemIndex].panelId
    const secondAccordionItemHeader = screen.getByTestId(
      ACCORDION_DATA[secondItemIndex].headingButtonId,
    )

    fireEvent.click(firstAccordionItemHeader)
    fireEvent.click(secondAccordionItemHeader)

    expect(screen.getByTestId(firstAccordionPanel)).toHaveStyleRule('display', 'block')
    expect(screen.getByTestId(secondAccordionPanel)).toHaveStyleRule('display', 'block')
  })

  it('should collapse the only expanded accordion item, if it is clicked upon twice and "isSingleExpandedCollapsible" not specified', () => {
    const clickedAccordionItemIndex = 1
    TestWithThemeProvider(<Accordion data={ACCORDION_DATA} />)
    const accordionPanel = ACCORDION_DATA[clickedAccordionItemIndex].panelId
    const accordionItemHeader = screen.getByTestId(
      ACCORDION_DATA[clickedAccordionItemIndex].headingButtonId,
    )

    fireEvent.click(accordionItemHeader)

    expect(screen.getByTestId(accordionPanel)).toHaveStyleRule('display', 'block')

    fireEvent.click(accordionItemHeader)

    expect(screen.getByTestId(accordionPanel)).toHaveStyleRule('display', 'none')
  })

  it('should collapse the only expanded accordion item, if it is clicked upon twice and "isSingleExpandedCollapsible" is specified as truthy', () => {
    const clickedAccordionItemIndex = 1
    TestWithThemeProvider(<Accordion data={ACCORDION_DATA} isSingleExpandedCollapsible />)
    const accordionPanel = ACCORDION_DATA[clickedAccordionItemIndex].panelId
    const accordionItemHeader = screen.getByTestId(
      ACCORDION_DATA[clickedAccordionItemIndex].headingButtonId,
    )

    fireEvent.click(accordionItemHeader)

    expect(screen.getByTestId(accordionPanel)).toHaveStyleRule('display', 'block')

    fireEvent.click(accordionItemHeader)

    expect(screen.getByTestId(accordionPanel)).toHaveStyleRule('display', 'none')
  })

  it('should collapse the only expanded accordion item, if it is clicked upon twice and "isSingleExpandedCollapsible" is specified as falsy', () => {
    const clickedAccordionItemIndex = 1
    TestWithThemeProvider(<Accordion data={ACCORDION_DATA} isSingleExpandedCollapsible={false} />)
    const accordionPanel = ACCORDION_DATA[clickedAccordionItemIndex].panelId
    const accordionItemHeader = screen.getByTestId(
      ACCORDION_DATA[clickedAccordionItemIndex].headingButtonId,
    )

    fireEvent.click(accordionItemHeader)

    expect(screen.getByTestId(accordionPanel)).toHaveStyleRule('display', 'block')

    fireEvent.click(accordionItemHeader)

    expect(screen.getByTestId(accordionPanel)).toHaveStyleRule('display', 'block')
  })
})
