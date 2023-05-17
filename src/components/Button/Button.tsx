import Icon from 'components/Icon'
import Loading from 'components/Loading'
import Typography from 'components/Typography'
import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import type IButtonProps from './Button.interface'
import Wrapper from './Button.style'

/**
 * Customized Button component based on the most common use case scenario(s) found on the web.
 * While using this component, you must specify "renderAs.KIND" value depending on need. If none
 * of the value(s) is/are suitable for you, then specify it as "RENDER_WITH_CHILDREN" and provide
 * child(ren) to the component yourself.
 */
const Button = forwardRef<HTMLButtonElement, ComponentPropsWithoutRef<'button'> & IButtonProps>(
  ({ ...props }, ref) => {
    const { children, renderAs, ...rest } = props
    switch (renderAs.KIND) {
      case 'TEXT':
        return (
          <Wrapper ref={ref} renderAs={renderAs} {...rest}>
            {renderAs.text}
          </Wrapper>
        )
      case 'ICON':
        return (
          <Wrapper ref={ref} renderAs={renderAs} {...rest}>
            <Icon name={renderAs.icon} color={renderAs.color} size={renderAs.size} />
          </Wrapper>
        )
      case 'LOADING':
        return (
          <Wrapper ref={ref} renderAs={renderAs} {...rest} disabled>
            {renderAs.text && (
              <Typography type="text" color={renderAs.textColor || 'primary'}>
                {renderAs.text}
              </Typography>
            )}
            <Loading
              type="spinner"
              size={renderAs.size || 16}
              thickness={renderAs.thickness || 3}
              variant={renderAs.variant || 'primary'}
            />
          </Wrapper>
        )
      case 'TEXT_WITH_ICON':
        return (
          <Wrapper ref={ref} renderAs={renderAs} {...rest}>
            {renderAs.isIconLeft ? (
              <>
                <Icon
                  name={renderAs.icon.name}
                  color={renderAs.icon.color}
                  size={renderAs.icon.size}
                />
                <Typography type="text" color={renderAs.text.color}>
                  {renderAs.text.value}
                </Typography>
              </>
            ) : (
              <>
                <Typography type="text" color={renderAs.text.color}>
                  {renderAs.text.value}
                </Typography>
                <Icon
                  name={renderAs.icon.name}
                  color={renderAs.icon.color}
                  size={renderAs.icon.size}
                />
              </>
            )}
          </Wrapper>
        )
      case 'RENDER_WITH_CHILDREN':
        return (
          <Wrapper ref={ref} renderAs={renderAs} {...rest}>
            {children}
          </Wrapper>
        )
      default:
        return null
    }
  },
)

export default Button
