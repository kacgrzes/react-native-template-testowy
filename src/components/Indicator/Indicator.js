import React from 'react'
import { Platform } from 'react-native'
import { UIActivityIndicator, MaterialIndicator } from 'react-native-indicators'
import colors from 'theme'

const Indicator = ({ size = 30, color = colors.primary, ...rest }) =>
  Platform.OS === 'ios'
    ? <UIActivityIndicator size={size} color={color} {...rest} />
    : <MaterialIndicator size={size} color={color} {...rest} />

export default Indicator
