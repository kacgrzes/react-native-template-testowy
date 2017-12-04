import React from 'react'
import OneSignal from 'react-native-onesignal'
import { Navigation } from 'react-native-navigation'
import { hoistStatics } from 'recompose'

const withPushNotifications = Component =>
  class WithPushNotifications extends React.Component {
    componentWillMount () {
      OneSignal.addEventListener('opened', this.onOpened)
      OneSignal.inFocusDisplaying(2)
    }

    componentWillUnmount () {
      OneSignal.removeEventListener('opened', this.onOpened)
    }

    onOpened (openResult) {
      if (
        openResult.notification.payload.additionalData &&
        openResult.notification.payload.additionalData.id
      ) {
        Navigation.handleDeepLink({
          link: 'order',
          payload: openResult.notification.payload.additionalData.id
        })
      }
    }

    render () {
      return <Component {...this.props} />
    }
  }

export default hoistStatics(withPushNotifications)
