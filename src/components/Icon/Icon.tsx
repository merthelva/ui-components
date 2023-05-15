import type { ComponentPropsWithoutRef } from 'react'
import { createElement, forwardRef, useMemo } from 'react'

import { theme } from 'theming'
import type { IIconProps } from './Icon.interface'
import iconSet from './iconSet.json'
import { createSvgIcon, doChildrenElementsHaveFillOrStroke } from './utils'

// This component was created to be as much accessible as possible, referring to the following article: https://css-tricks.com/accessible-svgs/#aa-2-inline-svg
const Icon = forwardRef<HTMLOrSVGElement, IIconProps & ComponentPropsWithoutRef<'svg'>>(
  ({ name, size = 22, ...props }, ref) => {
    const svgElement = useMemo(() => {
      // Assume "iconSet.json" will always exist and it is populated with data in correct structure.
      return iconSet[name]?.children[0]
    }, [name])

    return createElement(
      svgElement.tagName,
      {
        ...svgElement.properties,
        ...props,
        ref,
        width: size,
        height: size,
        fill: !doChildrenElementsHaveFillOrStroke(svgElement.children)
          ? theme.colors[props.color || 'primary']
          : 'transparent',
        'data-testid': name,
        'data-icon': name,
        'aria-labelledby': `${name}-icon`,
        role: 'img',
      },
      createElement(
        'title',
        { id: `${name}-icon` },
        `${name} icon with size of ${size}px and color of ${
          theme.colors[props.color || 'primary']
        }`,
      ),
      createSvgIcon({
        nodeChildren: svgElement.children,
        fillColor: props.color,
        strokeColor: props.color,
      }),
    )
  },
)

export default Icon

// Note: Why do we need to specify "fill" property for "createElement(...)" as ternary expression above?
// For some <svg> elements, e.g. "bins" icon, none of the child elements have either "fill" or "stroke" properties.
// In that case, the icon is not colored as the one that is chosen. In order to still colorize it with selected color,
// "fill" property should be set to that of <svg> element itself. In all other cases, we can safely set it to "transparent".
