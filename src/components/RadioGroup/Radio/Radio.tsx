import { forwardRef, useMemo } from 'react'
import type { IRadioProps } from './Radio.interface'
import * as Styled from './Radio.style'

const Radio = forwardRef<HTMLInputElement, IRadioProps>(({ children, ...props }, ref) => {
  const isChecked = useMemo(
    () => Boolean(props.defaultChecked || props.checked),
    [props.defaultChecked, props.checked],
  )

  const testId = useMemo(() => {
    let state = `radio-${props.checked ? 'checked' : 'unchecked'}`
    if (props.disabled) {
      state += '-disabled'
    }
    return state
  }, [props.checked, props.disabled])

  return (
    <Styled.Wrapper $hasError={Boolean(props.errorMsg)} $isDisabled={Boolean(props.disabled)}>
      <Styled.Label
        disabled={props.disabled}
        required={props.required}
        variant={props.variant}
        data-checked={isChecked}
      >
        <Styled.VisuallyHidden
          {...props}
          ref={ref}
          type="radio"
          id={props.id}
          name={props.id}
          checked={isChecked}
        />
        <Styled.Radio
          radioSize={props.radioSize}
          disabled={Boolean(props.disabled)}
          variant={props.variant}
          data-checked={isChecked}
          data-testid={testId}
        />
        {children}
      </Styled.Label>
      {props.errorMsg && (
        <Styled.ValidationText validation="error">{props.errorMsg}</Styled.ValidationText>
      )}
    </Styled.Wrapper>
  )
})

export default Radio
