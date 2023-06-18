import StyledButton from 'components/Button/Button.style'
import { ComponentSizeEnum } from 'shared/constants'
import styled, { css } from 'styled-components'
import { ThemingUtils } from 'theming'
import type IAccordionProps from './Accordion.interface'

const smallItemHeadingStyle = css`
  height: 33px;
`

const mediumItemHeadingStyle = css`
  height: 41px;
`

const largeItemHeadingStyle = css`
  height: 49px;
`

const ITEM_HEADING_SIZE_STYLES = {
  [ComponentSizeEnum.small]: smallItemHeadingStyle,
  [ComponentSizeEnum.medium]: mediumItemHeadingStyle,
  [ComponentSizeEnum.large]: largeItemHeadingStyle,
}

const Container = styled.div``

const Item = styled.div``

const ItemHeading = styled.h2<Pick<IAccordionProps, 'size'>>`
  background-color: ${ThemingUtils.getColor('gray50')};
  border-top: 1px solid ${ThemingUtils.getColor('gray400')};
  cursor: pointer;
  ${({ size }) => ITEM_HEADING_SIZE_STYLES[size || 'medium']};

  &:hover {
    background-color: ${ThemingUtils.getColor('gray200')};
  }
`

const ItemHeadingButton = styled.div<{ isExpanded?: boolean }>`
  height: 100%;
  ${ThemingUtils.getSpacing({ values: { SPACING_TYPE: 'DIRECTIONAL', horizontal: 16 } })};

  ${StyledButton} {
    ${ThemingUtils.getSpacing({ values: [0] })};

    svg {
      transition: transform 0.5s;
      transform: ${({ isExpanded }) => (isExpanded ? 'rotate(180deg)' : 'rotate(0deg)')};
    }
  }
`

const ItemPanel = styled.div<{ isVisible?: boolean; isLastPanel?: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  ${ThemingUtils.getSpacing({
    values: { SPACING_TYPE: 'SELF', top: 8, right: 16, bottom: 24, left: 32 },
  })};
  ${({ isLastPanel }) =>
    isLastPanel &&
    css`
      border-bottom: 1px solid ${ThemingUtils.getColor('gray400')};
    `}
`

export { Container, Item, ItemHeading, ItemHeadingButton, ItemPanel }
