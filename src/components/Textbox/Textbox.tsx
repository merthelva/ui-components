import Flex from 'components/Flex'
import Icon from 'components/Icon'
import type IInputProps from 'components/Input/Input.interface'
import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef, useMemo } from 'react'
import * as Styled from './Textbox.style'

const Textbox = forwardRef<
  HTMLTextAreaElement,
  ComponentPropsWithoutRef<'textarea'> &
    Omit<IInputProps, 'inputSize' | 'inputPrefix' | 'inputPostfix'>
>(({ ...props }, ref) => {
  const labelledBy = useMemo(() => {
    return props.helperText ? `${String(props.id)}-${props.helperText}` : undefined
  }, [props.id, props.helperText])

  const hasValidation = useMemo(() => {
    return Boolean(props.errorMsg || props.successMsg)
  }, [props.errorMsg, props.successMsg])

  return (
    <Flex
      type={props.isFullWidth ? 'block' : 'inline'}
      direction={{ in: 'column' }}
      alignment={{ secondary: 'stretch' }}
      gap={{ amount: 4 }}
    >
      {props.label && (
        <Styled.Label htmlFor={props.id} required={props.required}>
          {props.label}
        </Styled.Label>
      )}
      <Styled.TextboxWrapper
        type={props.isFullWidth ? 'block' : 'inline'}
        alignment={{ primary: 'space-between', secondary: 'stretch' }}
        $hasError={Boolean(props.errorMsg)}
        $hasSuccess={Boolean(props.successMsg)}
        $isDisabled={Boolean(props.disabled)}
      >
        <Styled.Textbox
          ref={ref}
          {...props}
          data-testid={props.id}
          name={props.id}
          aria-labelledby={labelledBy}
        />
        {hasValidation && (
          <Icon
            id="validation-icon"
            data-testid="validation-icon"
            name={props.errorMsg ? 'danger' : 'success'}
            size={14}
            color={props.errorMsg ? 'red500' : 'green400'}
          />
        )}
      </Styled.TextboxWrapper>
      <Styled.Feedback>
        <Styled.Messages>
          {props.helperText && (
            <Styled.HelperText id={labelledBy}>{props.helperText}</Styled.HelperText>
          )}
          {hasValidation && (
            <Styled.ValidationText validation={props.errorMsg ? 'error' : 'success'}>
              {props.errorMsg || props.successMsg}
            </Styled.ValidationText>
          )}
        </Styled.Messages>
        {props.maxLength && props.maxLength > 0 && (
          <Styled.MaxCountText>{`${props.value?.toString().length || 0} / ${
            props.maxLength
          }`}</Styled.MaxCountText>
        )}
      </Styled.Feedback>
    </Flex>
  )
})

export default Textbox
