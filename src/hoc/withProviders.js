import React from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from 'i18n'
import { Provider } from 'react-redux'
import store from 'store'

const withProviders = (Scene) => (props, context) =>
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <Scene {...props} />
    </I18nextProvider>
  </Provider>

export default withProviders
