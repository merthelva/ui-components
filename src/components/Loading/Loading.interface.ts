import type { VariantType } from 'shared/types'

type LoadingType = 'spinner' | 'dots'

interface ILoadingProps {
  type: LoadingType
  size?: number
  variant?: VariantType
  thickness?: number
}

export default ILoadingProps
