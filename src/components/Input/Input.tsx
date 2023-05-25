import { Button, Icon } from 'components'
import Flex from 'components/Flex'
import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef, useCallback, useMemo, useState } from 'react'
import type IInputProps from './Input.interface'
import * as Styled from './Input.style'

/**
 * Please specify only "text", "password", "email" or "number" values for "type" prop, as any other
 * kinds will be disregarded and the component will be rendered as a plain text input field instead.
 */
const Input = forwardRef<HTMLInputElement, ComponentPropsWithoutRef<'input'> & IInputProps>(
  ({ type, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    let inputEl = null

    const labelledBy = useMemo(() => {
      return props.helperText ? `${String(props.id)}-${props.helperText}` : undefined
    }, [props.id, props.helperText])

    const hasValidation = useMemo(() => {
      return Boolean(props.errorMsg || props.successMsg)
    }, [props.errorMsg, props.successMsg])

    const sharedProps = {
      ref,
      id: props.id,
      'data-testid': props.id,
      name: props.id,
      'aria-labelledby': labelledBy,
      ...props,
    }

    const handleTogglePasswordVisibility = useCallback(() => {
      setIsPasswordVisible((prevState) => !prevState)
    }, [])

    switch (type) {
      case 'text':
        inputEl = <Styled.TextInput {...sharedProps} />
        break
      case 'password':
        inputEl = (
          <Styled.PasswordInput type={isPasswordVisible ? 'text' : 'password'} {...sharedProps} />
        )
        break
      case 'email':
        inputEl = <Styled.EmailInput {...sharedProps} inputMode="email" />
        break
      case 'number':
        inputEl = <Styled.NumberInput {...sharedProps} inputMode="numeric" />
        break
      default:
        inputEl = <Styled.TextInput {...sharedProps} />
        break
    }
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
        <Styled.InputWrapper
          type={props.isFullWidth ? 'block' : 'inline'}
          alignment={{ primary: 'space-between', secondary: 'stretch' }}
          $size={props.inputSize}
          $hasError={Boolean(props.errorMsg)}
          $hasSuccess={Boolean(props.successMsg)}
          $isDisabled={Boolean(props.disabled)}
        >
          {props.inputPrefix && <Styled.AddonWrapper>{props.inputPrefix}</Styled.AddonWrapper>}
          <Flex isFullHeight alignment={{ secondary: 'stretch' }}>
            {inputEl}
            {/* This is related to "isClearable" prop and implementation detail will be decided later */}
            {/* <Button
              renderAs={{ KIND: 'ICON', icon: 'cancel', size: 14, color: 'gray700' }}
              variant="ghost"
              size="small"
            /> */}
            {type === 'password' && (
              <Button
                renderAs={{
                  KIND: 'ICON',
                  icon: isPasswordVisible ? 'invisible' : 'visible',
                  size: 14,
                  color: 'gray700',
                }}
                variant="ghost"
                size="small"
                onClick={handleTogglePasswordVisibility}
              />
            )}
            {hasValidation && (
              <Icon
                id="validation-icon"
                data-testid="validation-icon"
                name={props.errorMsg ? 'danger' : 'success'}
                size={14}
                color={props.errorMsg ? 'red500' : 'green400'}
              />
            )}
            {props.inputPostfix && <Styled.AddonWrapper>{props.inputPostfix}</Styled.AddonWrapper>}
          </Flex>
        </Styled.InputWrapper>
        {props.helperText && (
          <Styled.HelperText id={labelledBy}>{props.helperText}</Styled.HelperText>
        )}
        {hasValidation && (
          <Styled.ValidationText validation={props.errorMsg ? 'error' : 'success'}>
            {props.errorMsg || props.successMsg}
          </Styled.ValidationText>
        )}
      </Flex>
    )
  },
)

export default Input
