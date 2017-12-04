import React from 'react'
import { View } from 'react-native'
import { Text } from 'components'
import styles from './Tag.styles.js'
import colors from 'theme'
import hexToRGB from 'utils/hexToRGB'

const Tag = ({text = '', color = colors.silver}) => {
  return (
    <View style={[styles.containerView, {borderColor: color, backgroundColor: hexToRGB(color, 0.15)}]}>
      <Text numberOfLines={1} style={[styles.textLabel, {color: color}]}>
        {text}
      </Text>
    </View>
  )
}

export default Tag
