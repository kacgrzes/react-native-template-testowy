import React from 'react'
import { View } from 'react-native'
import i18n from 'i18n'
import { Text } from 'components'
import styles from './Status.styles.js'
import colors from 'theme'

const Status = ({ style, online }) => {
  return (
    <View style={[styles.containerView, style, { backgroundColor: online ? colors.success : colors.danger }]}>
      <Text numberOfLines={1} style={styles.textLabel}>
        {online ? i18n.t('Channel:online') : i18n.t('Channel:offline')}
      </Text>
    </View>
  )
}

export default Status
