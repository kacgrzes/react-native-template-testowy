import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import i18n from 'i18n'
import { Title, Icon } from 'components'
import styles from './ChannelButton.styles'

const ChannelButton = ({ children = i18n.t('Channel:productsList'), iconSource = require('assets/images/icon-products-list.png'), onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Icon style={styles.icon} width={40} height={40} source={iconSource} />
      <View style={styles.titleView}>
        <Title style={styles.title}>{children}</Title>
      </View>
      <Icon source={require('assets/images/icon-disclosure.png')} />
    </TouchableOpacity>
  )
}

export default ChannelButton
