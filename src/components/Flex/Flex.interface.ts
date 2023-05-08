import type { BreakpointsType } from 'theming'

type FlexType = 'inline' | 'block'
type DirectionType = 'row' | 'column' | 'row-reverse' | 'column-reverse'
type PrimaryAlignmentType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
type SecondaryAlignmentType = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'

export default interface IFlexProps {
  /**
   * This prop is used to determine "display" property of "Flex", i.e.,
   * either "inline-flex" or "flex"
   */
  type?: FlexType
  /**
   * This prop is used to determine both "flex-direction" property and
   * from which media point and above this CSS property will be applied to.
   */
  direction?: {
    in?: DirectionType
    minWidth?: BreakpointsType
  }
  /**
   * This prop is used to determine the following:
   * 1) Items alignment in primary axis
   * 2) Items alignment in secondary axis
   * 3) From which media point and above, these CSS properties will be applied to
   */
  alignment?: {
    primary?: PrimaryAlignmentType
    secondary?: SecondaryAlignmentType
    minWidth?: BreakpointsType
  }
  /**
   * This prop is used to determine the spacing between Flex items
   */
  gap?: {
    amount: number
    unit?: 'px' | 'rem' | 'em'
  }
  /**
   * This prop is used to either make Flex container to have the height
   * of 100% of its parent or not.
   */
  isFullHeight?: boolean
}
