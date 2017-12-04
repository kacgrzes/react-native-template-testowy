import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { Title, Text, Status, Separator, Icon } from 'components'
import styles from './Channel.styles'

const Channel = ({ channel: {shopChannelTitle = '', shopChannelUrl = '', channelLogoSmall = null} = {}, isOnline, displayDisclosure = false, displaySeparator = false, onPress }) => {
  const disclosureView = displayDisclosure
    ? <Icon source={require('assets/images/icon-disclosure.png')} />
    : null
  const separatorView = displaySeparator
    ? <Separator style={styles.separator} />
    : null
  const statusView = isOnline != null
    ? <Status style={styles.status} online={isOnline} />
    : null
  const isDisabled = onPress == null

  return (
    <TouchableOpacity style={styles.container} disabled={isDisabled} onPress={onPress}>
      <View style={styles.content}>
        {channelLogoSmall && <Image source={{ uri: channelLogoSmall }} style={styles.image} resizeMode={'contain'} />}
        <View style={styles.info}>
          <View style={styles.lineView}>
            <Title style={styles.title}>{shopChannelTitle}</Title>
            {statusView}
          </View>
          <Text numberOfLines={1} style={styles.label}>{shopChannelUrl}</Text>
        </View>
        {disclosureView}
      </View>
      {separatorView}
    </TouchableOpacity>
  )
}

export default Channel
