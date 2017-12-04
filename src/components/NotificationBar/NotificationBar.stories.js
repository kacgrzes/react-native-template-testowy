import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { I18nextProvider } from 'react-i18next'
import i18n from 'i18n'
import NotificationBar from './'

storiesOf('Molecule / Notification Bar', module)
  .addDecorator(story => (
    <I18nextProvider i18n={i18n}>
      {story()}
    </I18nextProvider>
  ))
  .add('One unread notification', () =>
    <NotificationBar unreadNotificationCount={1} />
  )
  .add('Two unread notification', () =>
    <NotificationBar unreadNotificationCount={2} />
  )
  .add('Zero unread notification', () =>
    <NotificationBar unreadNotificationCount={0} />
  )
