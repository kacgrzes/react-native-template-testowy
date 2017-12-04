import React from 'react'
import R from 'ramda'
import { View } from 'react-native'
import i18n from 'i18n'
import { Text } from 'components'
import styles from './Notification.styles'

const {
  containerStyle,
  success,
  error
} = styles

const Notification = ({ message = i18n.t('Common:somethingWentWrong'), isError = true, isSuccess = false }) => {
  if (R.isEmpty(message)) {
    message = i18n.t('Common:somethingWentWrong')
  }

  if (R.is(Error, message)) {
    message = message.message
  }

  return (
    <View style={[
      containerStyle,
      isError && error,
      isSuccess && success
    ]}>
      <Text style={styles.messageStyle}>{message.toUpperCase()}</Text>
    </View>
  )
}

export default Notification
