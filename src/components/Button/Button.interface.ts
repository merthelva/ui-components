import type { IconNames } from 'components/Icon'
import type ILoadingProps from 'components/Loading/Loading.interface'
import type { ComponentSizeType, VariantType } from 'shared/types'
import type { ThemeColorKeysType } from 'theming'

interface IButtonProps {
  /**
   * This prop is used to determine what kind of button with which content will be rendered.
   * Depending on "KIND" value for this prop, you can use Intellisense feature of your editor
   * to see which additional field(s) can be defined. Note that you can use Intellisense for
   * "KIND" value as well, i.e., you can not assign a random value for this field.
   */
  renderAs:
    | { KIND: 'TEXT'; text: string }
    | { KIND: 'ICON'; icon: IconNames; size: number; color: ThemeColorKeysType }
    | {
        KIND: 'TEXT_WITH_ICON'
        /**
         * This sub-prop is used to define icon properties.
         */
        icon: {
          /**
           * The name of the icon. You can use Intellisense feature of your editor.
           */
          name: IconNames
          size: number
          /**
           * The color of the icon. You can use Intellisense feature of your editor.
           */
          color: ThemeColorKeysType
        }
        text: {
          /**
           * The value of the text, which will be displayed.
           */
          value: string
          /**
           * The color of the text. You can use Intellisense feature of your editor.
           */
          color: ThemeColorKeysType
        }
        /**
         * This sub-prop is used to determine whether icon will be placed to the left of text or not.
         */
        isIconLeft?: boolean
      }
    | ({
        KIND: 'LOADING'
        text?: string
        textColor?: ThemeColorKeysType
      } & Omit<ILoadingProps, 'type'>)
    | { KIND: 'RENDER_WITH_CHILDREN' }
  /**
   * This prop is used to determine whether the component has 1px thick outline or not.
   * If specified as true, outline color will be "#000000" by default. In order to change it,
   * component style should be overridden.
   */
  hasOutline?: boolean
  /**
   * The size of the component. It can be "small" | "medium" | "large".
   * You can use Intellisense feature of your editor for this prop value.
   */
  size?: ComponentSizeType
  /**
   * The variant of the component. It can be like "primary" | "secondary" | "info" | "success" etc.
   * You can use Intellisense feature of your editor for this prop value.
   */
  variant?: VariantType | 'ghost'
}

export default IButtonProps
