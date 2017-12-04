// @flow
import * as React from 'react'
import {
  TouchableOpacity
} from 'react-native'
import styles from './Link.styles.js'
import { Text } from 'components'

type Props = {
  children: string,
  style?: *,
  rest?: Array<*>
}

const Link = ({ children, style, ...rest } : Props) => {
  return (
    <TouchableOpacity style={{ backgroundColor: 'transparent' }} {...rest}>
      <Text style={[styles.link, style]} numberOfLines={1}>{children}</Text>
    </TouchableOpacity>
  )
}

export default Link
