import { createElement } from 'react'

import type { ThemeColorKeysType } from 'theming'
import { theme } from 'theming'
import type { NodeChildrenType } from './Icon.interface'

function clearAndUpper(str: string) {
  return str.replace(/-/, '').toUpperCase()
}

function convertToCamelCaseFromKebabCase(str: string) {
  return str.replace(/-\w/g, clearAndUpper)
}

function convertFromDashedToCamelPropNames(props: NodeChildrenType[0]['properties']) {
  return Object.entries(props).reduce(
    (acc: NodeChildrenType[0]['properties'], [propName, propValue]) => {
      acc[convertToCamelCaseFromKebabCase(propName)] = propValue
      return acc
    },
    {},
  )
}

interface ICreateSvgIconParams {
  nodeChildren: NodeChildrenType
  fillColor?: ThemeColorKeysType
  strokeColor?: ThemeColorKeysType
}

function createSvgIcon({
  nodeChildren,
  ...props
}: ICreateSvgIconParams): Array<React.ReactNode> | null {
  if (!Array.isArray(nodeChildren) || !nodeChildren.length) return null

  return nodeChildren.map((child, index) => {
    const baseChildProps = { ...convertFromDashedToCamelPropNames(child.properties) }
    if (
      !(baseChildProps?.['fill'] as string)?.includes('url') &&
      (baseChildProps?.['fill'] as string)?.includes('#')
    ) {
      baseChildProps['fill'] = props.fillColor
        ? theme.colors[props.fillColor]
        : baseChildProps['fill']
    }
    if ((baseChildProps?.['stroke'] as string)?.includes('#')) {
      baseChildProps['stroke'] = props.strokeColor
        ? theme.colors[props.strokeColor]
        : baseChildProps['stroke']
    }
    if (baseChildProps?.['style'] && typeof baseChildProps?.['style'] === 'string') {
      const [propName, propValue] = baseChildProps['style'].split(':')
      baseChildProps['style'] = { [convertToCamelCaseFromKebabCase(propName)]: propValue }
    }

    return createElement(
      child.tagName,
      { ...baseChildProps, key: `${child.tagName}${index}` },
      createSvgIcon({
        nodeChildren: child.children,
        fillColor: props.fillColor || 'primary',
        strokeColor: props.strokeColor || 'primary',
      }),
    )
  })
}

function doChildrenElementsHaveFillOrStroke(nodeChildren: NodeChildrenType): boolean {
  if (!nodeChildren.length) return false
  for (const child of nodeChildren) {
    if (child.properties?.['fill'] || child.properties?.['stroke']) return true
    doChildrenElementsHaveFillOrStroke(child.children)
  }
  return false
}

export { doChildrenElementsHaveFillOrStroke, createSvgIcon }
