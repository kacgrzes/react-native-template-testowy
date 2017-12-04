import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import styles from './Icon.styles'
import { ACTIVE_OPACITY } from 'theme'

const { iconContainer } = styles

const Icon = ({ testID, style = null, onPress = null, tintColor, imageStyle, disabled = false, ...rest }) => {
  const renderTouchableIcon = () =>
    <TouchableOpacity
      testID={testID}
      onPress={onPress}
      style={style}
      activeOpacity={ACTIVE_OPACITY}
      disabled={disabled}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <Image
        style={[iconContainer, { tintColor }, imageStyle]}
        resizeMode={'contain'}
        {...rest}
      />
    </TouchableOpacity>

  const renderIcon = () =>
    <View
      testID={testID}
      style={style}
    >
      <Image
        style={[iconContainer, { tintColor }, imageStyle]}
        resizeMode={'contain'}
        {...rest}
      />
    </View>

  return onPress
    ? renderTouchableIcon()
    : renderIcon()
}

export default Icon
