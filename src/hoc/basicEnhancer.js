import { compose, hoistStatics } from 'recompose'

import withProviders from './withProviders'
import withTranslations from './withTranslations'

const basicEnhancer = compose(
  withProviders,
  withTranslations
)

const enhance = Component => hoistStatics(basicEnhancer)(Component)

// FIXME: maybe we should wrap it with setDisplayName function from recompose
export default enhance
