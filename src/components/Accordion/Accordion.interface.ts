import type { ITypographyProps } from 'components/Typography/Typography.interface'
import type React from 'react'
import type { ComponentSizeType } from 'shared/types'

type TitleAndDetailType =
  | { KIND: 'STRING'; content: string; typographyProps?: Omit<ITypographyProps, 'type'> }
  | { KIND: 'REACT_COMPONENT'; children: React.ReactNode }

interface IAccordionItem {
  /**
   * This prop is used to display header for each accordion item
   */
  title: TitleAndDetailType
  /**
   * This prop is used to display respective content for each accordion item header.
   * Note that this content will be visible only if accordion item will be expanded.
   */
  detail: TitleAndDetailType
  /**
   * This prop is used to discriminate each accordion item, so be sure that while populating
   * "data" prop, this field for each entry will be unique.
   */
  headingButtonId: string
  /**
   * This prop is used to provide a link for each item header and corresponding item panel
   * and it is mainly here for accessibility reason. So be sure that while populating "data"
   * prop, this field for each entry will be unique.
   */
  panelId: string
}

interface IAccordionProps {
  data: Array<IAccordionItem>
  /**
   * The size of the each item header. It can be "small" | "medium" | "large".
   * You can use Intellisense feature of your editor for this prop value.
   */
  size?: ComponentSizeType
  /**
   * This prop is used to enable whether multiple panels can be expanded simultenaously or not.
   * If not enabled, when trying to expand a collapsed panel, previously expanded panel will
   * automatically be collapsed.
   */
  isMultipleExpandAllowed?: boolean
  /**
   * This prop is used to enable whether only expanded panel can be collapsed or not.
   * If not enabled, when trying to collapse the only expanded panel, it preserves its
   * current state and will not be collapsed. It is enabled by default and it is
   * recommended for use only when "isMultipleExpandAllowed" is "false".
   */
  isSingleExpandedCollapsible?: boolean
}

export default IAccordionProps
