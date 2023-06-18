import Icon from 'components/Icon'
import { forwardRef, useMemo } from 'react'
import type { ICheckboxProps } from './Checkbox.interface'
import * as Styled from './Checkbox.style'

const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(({ children, ...props }, ref) => {
  const checkmarkSize = useMemo(() => {
    switch (props.checkboxSize) {
      case 'small':
        return 9
      case 'medium':
        return 12
      case 'large':
        return 16
      default:
        return 12
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
      >
        <Styled.VisuallyHidden
          {...props}
          type="checkbox"
          checked={isChecked}
          ref={ref}
          value={props.value as string}
        />
        <Styled.CheckMark
          checkboxSize={props.checkboxSize}
          disabled={Boolean(props.disabled)}
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
})

export default Checkbox
