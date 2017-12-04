import React from 'react'
import {
  TouchableOpacity
} from 'react-native'
import styles from './Button.styles.js'
import { Text } from 'components'
import { ACTIVE_OPACITY } from 'theme'

// FIXME: we have to get rid of Text or check Node type passad as children and act accordingly.
// Problems it should fix: emojis are cut at top and image next to text in button

// TODO: add flow typing

const {
  button,
  buttonText,
  buttonShadow,

  buttonDisabled,
  buttonDisabledText,

  buttonOutline,
  buttonOutlineText
} = styles

const Button = ({
  children,
  disabled,
  outline,
  style,
  textStyle,
  ...rest
}) => {
  const mergedButtonStyles = [
    button,
    !disabled && buttonShadow,
    disabled && buttonDisabled,
    outline && buttonOutline,
    style
  ]

  const mergedButtonTextStyles = [
    buttonText,
    disabled && buttonDisabledText,
    outline && buttonOutlineText,
    textStyle
  ]

  return (
    <TouchableOpacity
      disabled={disabled}
      style={mergedButtonStyles}
      activeOpacity={ACTIVE_OPACITY}
      {...rest}
    >
      <Text
        style={mergedButtonTextStyles}
        numberOfLines={1}
      >
        {children}
      </Text>
    </TouchableOpacity>
  )
}

export default Button
