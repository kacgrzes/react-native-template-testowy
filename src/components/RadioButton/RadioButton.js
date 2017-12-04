import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import styles from './RadioButton.styles.js'
import { ACTIVE_OPACITY } from 'theme'

const {
  outerCircle,
  innerCircle,
  outerCircleSmall,
  innerCircleSmall,
  outerCircleDisabled,
  innerCircleDisabled
} = styles

const RadioButton = ({ children, selected, disabled, outerCircleStyle, innerCircleStyle, onPress, small, style }) => {
  const outerStyle = [style, outerCircle, small && outerCircleSmall, disabled && !selected && outerCircleDisabled, outerCircleStyle]
  const innerStyle = [innerCircle, small && innerCircleSmall, disabled && innerCircleDisabled, innerCircleStyle]

  return (
    <TouchableOpacity
      style={outerStyle}
      activeOpacity={ACTIVE_OPACITY}
      onPress={onPress}
      disabled={disabled}
    >
      {selected && <View style={innerStyle} />}
    </TouchableOpacity>
  )
}

export default RadioButton
