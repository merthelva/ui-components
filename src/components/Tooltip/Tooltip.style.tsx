import styled, { css } from 'styled-components'
import type ITooltipProps from './Tooltip.interface'
import { ThemingUtils } from 'theming'

function getTooltipPosition(position: ITooltipProps['position']) {
  switch (position) {
    case 'top':
      return css`
        bottom: 100%;
        left: 0;
        transform-origin: left bottom;
      `
    case 'bottom':
      return css`
        top: 100%;
        left: 0;
        transform-origin: left top;
      `
    case 'left':
      return css`
        top: 0;
        right: 100%;
        margin-right: 0.2rem;
        transform-origin: right;
      `
    case 'right':
      return css`
        top: 0;
        left: 100%;
        margin-left: 0.2rem;
        transform-origin: left;
      `
    default:
      return css`
        bottom: 100%;
        left: 0;
        transform-origin: left bottom;
      `
  }
}

const Wrapper = styled.div<Pick<ITooltipProps, 'position'>>`
  position: relative;
  width: fit-content;

  &::after {
    position: absolute;
    content: attr(data-tooltip);
    z-index: 1000;
    ${({ position }) => getTooltipPosition(position)};
    transform: scale(0, 0);
    transition: transform 0.25s ease-in;
    width: max-content;
    border-radius: 4px;
    font-size: 0.875rem;
    color: ${ThemingUtils.getColor('white')};
    background-color: ${ThemingUtils.getColor('gray600')};
    ${ThemingUtils.getSpacing({ values: [4, 8] })};
  }

  &:hover {
    cursor: pointer;

    &::after {
      transform: scale(1, 1);
    }
  }
`

export default Wrapper
