import React from 'react'
import { Text } from 'react-native'
import styles from './Text.styles.js'

const TextOverwrite = ({ children, style, ...rest }) =>
  <Text
    style={[styles.text, style]}
    {...rest}
  >{children}</Text>

export default TextOverwrite
