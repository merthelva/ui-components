import type ILoadingProps from './Loading.interface'
import { FlashingDots, SRContent, Spinner } from './Loading.style'

const Loading: React.FC<ILoadingProps> = ({
  type = 'spinner',
  size = 32,
  variant = 'primary',
  thickness = 2,
}) => {
  const srContent = <SRContent>Loading...</SRContent>
  const LoadingCmp = type === 'spinner' ? Spinner : FlashingDots
  return (
    <LoadingCmp
      data-testid={type}
      role="status"
      size={size}
      variant={variant}
      thickness={thickness}
    >
      {srContent}
    </LoadingCmp>
  )
}

export default Loading
