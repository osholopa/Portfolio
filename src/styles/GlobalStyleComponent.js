import { createGlobalStyle } from '@nfront/global-styles'
import globalStyles from './globalStyles'

const GlobalStyleComponent = createGlobalStyle`
  ${globalStyles}
`

export default GlobalStyleComponent
