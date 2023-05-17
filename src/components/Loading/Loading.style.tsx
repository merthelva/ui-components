import styled, { keyframes } from 'styled-components'

import { VARIANT_COLORS_SCHEMA } from 'theming'
import type ILoadingProps from './Loading.interface'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const flash = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

// screen reader content wrapper for accessibility purpose
const SRContent = styled.span`
  visibility: hidden;
`

const Spinner = styled.span<Omit<ILoadingProps, 'type'>>`
  display: inline-block;
  border: ${({ variant, thickness }) =>
    `${thickness || 4}px solid ${VARIANT_COLORS_SCHEMA[variant || 'primary']}`};
  border-top: ${({ thickness }) => `${thickness || 4}px solid transparent`};
  border-radius: 50%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  animation: ${spin} 2s linear infinite;
`

const FlashingDots = styled.span<Omit<ILoadingProps, 'type'>>`
  position: relative;
  display: inline-block;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  background-color: ${({ variant }) => VARIANT_COLORS_SCHEMA[variant || 'primary']};
  animation-name: ${flash};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  &::before,
  &::after {
    position: absolute;
    content: '';
    top: 0;
    width: inherit;
    height: inherit;
    background-color: inherit;
    border-radius: inherit;
    animation: inherit;
  }

  &::before {
    right: ${({ size }) => (size || 12) + 4}px;
    animation-delay: 1s;
  }

  &::after {
    left: ${({ size }) => (size || 12) + 4}px;
    animation-delay: 2s;
  }
`

export { Spinner, FlashingDots, SRContent }
