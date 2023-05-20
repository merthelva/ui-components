import type { ComponentPropsWithoutRef, KeyboardEvent } from 'react'
import { forwardRef, useCallback, useState } from 'react'

import Button from 'components/Button'
import Flex from 'components/Flex'
import Typography from 'components/Typography'
import type IAccordionProps from './Accordion.interface'
import * as Accordion from './Accordion.style'

const AccordionCmp = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'> & IAccordionProps>(
  ({ data, isMultipleExpandAllowed, isSingleExpandedCollapsible = true, size }, ref) => {
    const [itemsState, setItemsState] = useState(() =>
      data.reduce((acc: Record<string, boolean>, val) => {
        acc[val.headingButtonId] = false
        return acc
      }, {}),
    )

    const handleToggleItemsState = useCallback(
      (itemId: string) => {
        if (isMultipleExpandAllowed) {
          return setItemsState((prevState) => ({
            ...prevState,
            [itemId]: !prevState[itemId],
          }))
        }

        return setItemsState((prevState) =>
          Object.keys(prevState).reduce((acc: typeof prevState, id) => {
            if (itemId === id) {
              acc[id] = isSingleExpandedCollapsible ? !prevState[itemId] : true
            } else {
              acc[id] = false
            }
            return acc
          }, {}),
        )
      },
      [isMultipleExpandAllowed, isSingleExpandedCollapsible],
    )

    const handleKeyboardNavigation = useCallback(
      (e: KeyboardEvent<HTMLDivElement>, itemId: string) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleToggleItemsState(itemId)
        }
      },
      [handleToggleItemsState],
    )

    return (
      <Accordion.Container ref={ref} role="tablist">
        {data.map((item, index) => (
          <Accordion.Item key={item.headingButtonId}>
            <Accordion.ItemHeading role="heading" aria-level={3} size={size || 'medium'}>
              <Accordion.ItemHeadingButton
                role="button"
                id={item.headingButtonId}
                data-testid={item.headingButtonId}
                isExpanded={itemsState[item.headingButtonId]}
                aria-disabled={!isMultipleExpandAllowed && itemsState[item.headingButtonId]}
                aria-expanded={itemsState[item.headingButtonId]}
                aria-controls={item.panelId}
                tabIndex={0}
                onClick={handleToggleItemsState.bind(undefined, item.headingButtonId)}
                onKeyDown={(e) => handleKeyboardNavigation(e, item.headingButtonId)}
              >
                <Flex alignment={{ primary: 'space-between' }} isFullHeight>
                  {item.title.KIND === 'STRING' ? (
                    <Typography type="text" {...item.title.typographyProps} fontWeight="medium">
                      {item.title.content}
                    </Typography>
                  ) : (
                    <>{item.title.children}</>
                  )}
                  <Button
                    renderAs={{ KIND: 'ICON', icon: 'chevron-down', color: 'black', size: 16 }}
                    variant="ghost"
                    size="small"
                  />
                </Flex>
              </Accordion.ItemHeadingButton>
            </Accordion.ItemHeading>
            <Accordion.ItemPanel
              id={item.panelId}
              data-testid={item.panelId}
              isVisible={itemsState[item.headingButtonId]}
              isLastPanel={index === data.length - 1}
            >
              {item.detail.KIND === 'STRING' ? (
                <Typography type="paragraph" {...item.detail.typographyProps}>
                  {item.detail.content}
                </Typography>
              ) : (
                <>{item.detail.children}</>
              )}
            </Accordion.ItemPanel>
          </Accordion.Item>
        ))}
      </Accordion.Container>
    )
  },
)

export default AccordionCmp
