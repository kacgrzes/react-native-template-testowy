import React from 'react'
import { storiesOf } from '@storybook/react-native'
import CenterView from 'utils/CenterView'
import { I18nextProvider } from 'react-i18next'
import i18n from 'i18n'
import Price from './'

storiesOf('Atom / Price', module)
  .addDecorator(getStory =>
    <CenterView>
      <I18nextProvider i18n={i18n}>
        {getStory()}
      </I18nextProvider>
    </CenterView>
  )
  .add('USD price', () =>
    <Price currency='USD'>100</Price>
  )
  .add('PLN price', () =>
    <Price currency='PLN'>100</Price>
  )
  .add('EURO price', () =>
    <Price currency='EUR'>100</Price>
  )
