import { VisuallyHidden } from '@ariakit/react'
import Icon from 'components/Icon'
import { forwardRef, useMemo, useState } from 'react'
import type { ICheckboxInputProps } from './Checkbox.interface'
import * as Styled from './Checkbox.style'

const Checkbox = forwardRef<HTMLInputElement, ICheckboxInputProps>(
  ({ children, ...props }, ref) => {
    const [isFocusVisible, setIsFocusVisible] = useState(false)

    const checkmarkSize = useMemo(() => {
      switch (props.checkboxSize) {
        case 'small':
          return 10
        case 'medium':
          return 14
        case 'large':
          return 18
        default:
          return 14
      }
    }, [props.checkboxSize])

    const isChecked = useMemo(
      () => Boolean(props.defaultChecked || props.checked),
      [props.defaultChecked, props.checked],
    )

    const testId = useMemo(() => {
      let state = `checkbox-${props.checked ? 'checked' : 'unchecked'}`
      if (props.disabled) {
        state += '-disabled'
      }
      return state
    }, [props.checked, props.disabled])

    return (
      <Styled.Wrapper
        $isFullWidth={Boolean(props.isFullWidth)}
        $hasError={Boolean(props.errorMsg)}
        $isDisabled={Boolean(props.disabled)}
      >
        <Styled.Label
          disabled={props.disabled}
          required={props.required}
          variant={props.variant}
          data-checked={isChecked}
          data-focus-visible={isFocusVisible || undefined}
        >
          <VisuallyHidden>
            <Styled.Hidden
              {...props}
              checked={isChecked}
              ref={ref}
              value={props.value as string}
              onFocusVisible={() => setIsFocusVisible(true)}
              onBlur={() => setIsFocusVisible(false)}
            />
          </VisuallyHidden>
          <Styled.CheckMark
            checkboxSize={props.checkboxSize}
            variant={props.variant}
            data-checked={isChecked}
            data-testid={testId}
          >
            <Icon name="checkmark" size={checkmarkSize} color="white" />
          </Styled.CheckMark>
          {children}
        </Styled.Label>
        {props.errorMsg && (
          <Styled.ValidationText validation="error">{props.errorMsg}</Styled.ValidationText>
        )}
      </Styled.Wrapper>
    )
  },
)

export default Checkbox
