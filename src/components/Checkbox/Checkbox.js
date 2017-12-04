import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import styles from './Checkbox.styles.js'
import colors, { ACTIVE_OPACITY } from 'theme'

const { outer, inner, outerDisabled } = styles

const Checkbox = ({ isChecked, disabled, outerStyle, innerStyle, onPress }) => {
  const dynamicStyle = {
    borderWidth: isChecked ? 0 : 1,
    backgroundColor: isChecked ? colors.primary : colors.white
  }

  return (
    <TouchableOpacity
      style={[outer, dynamicStyle, disabled && outerDisabled, outerStyle]}
      activeOpacity={ACTIVE_OPACITY}
      onPress={onPress}
      disabled={disabled}
    >
      {isChecked && <Image style={[inner, innerStyle]} source={require('./image-checkbox.png')} />}
    </TouchableOpacity>
  )
}

export default Checkbox
