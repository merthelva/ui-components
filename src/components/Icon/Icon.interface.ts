import type { ThemeColorKeysType } from 'theming'
import type { IconNames } from './iconNames.types'

interface IIconProps {
  /**
   * This prop is used to define which icon will be displayed to user.
   * In order to see which icon name(s) is/are available, when using this component,
   * you can safely use Intellisense feature of the editor for "name" prop.
   */
  name: IconNames
  /**
   * This prop is used to change the color of the icon. In order to see which colors are available,
   * when using this component, you can safely use Intellisense feature of the editor for "color" prop.
   */
  color?: ThemeColorKeysType
  /**
   * This prop is used to change the size of the icon. Only non-negative values can be assigned.
   */
  size?: number
}

type NodeChildrenType = Array<{
  type: string
  tagName: string
  properties: Record<string, string | number | Record<string, string>>
  children: Array<never>
}>

export type { IIconProps, NodeChildrenType }
