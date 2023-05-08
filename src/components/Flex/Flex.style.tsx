import styled, { css } from 'styled-components'
import { ThemingUtils } from 'theming'
import type IFlexProps from './Flex.interface'

function getFlexDirection(direction?: IFlexProps['direction']) {
  if (!direction) {
    return css`
      flex-direction: row;
    `
  }
  if (!direction.minWidth) {
    return css`
      flex-direction: ${direction.in};
    `
  }

  return css`
    ${ThemingUtils.getMediaQuery(direction.minWidth)} {
      flex-direction: ${direction.in};
    }
  `
}

function getFlexAlignment(alignment?: IFlexProps['alignment']) {
  if (!alignment) {
    return css`
      justify-content: flex-start;
      align-items: flex-start;
    `
  }

  let justifyContentStyle = 'center'
  let alignItemsStyle = 'center'

  if (alignment.primary) {
    justifyContentStyle = alignment.primary
  }
  if (alignment.secondary) {
    alignItemsStyle = alignment.secondary
  }
  return !alignment.minWidth
    ? css`
        justify-content: ${justifyContentStyle};
        align-items: ${alignItemsStyle};
      `
    : css`
        ${ThemingUtils.getMediaQuery(alignment.minWidth)} {
          justify-content: ${justifyContentStyle};
          align-items: ${alignItemsStyle};
        }
      `
}

const Wrapper = styled.div<IFlexProps>`
  flex-wrap: nowrap;
  display: ${({ type }) => (type === 'inline' ? 'inline-flex' : 'flex')};
  ${({ direction }) => getFlexDirection(direction)};
  ${({ alignment }) => getFlexAlignment(alignment)};
  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap.amount}${gap.unit || 'px'};
    `};
  ${({ isFullHeight }) =>
    isFullHeight &&
    css`
      height: 100%;
    `};
`

export default Wrapper
