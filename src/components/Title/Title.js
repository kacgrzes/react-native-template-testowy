import React from 'react'
import { Text } from 'components'
import styles from './Title.styles.js'

const { title } = styles

const Title = ({ children, style, ...rest }) => <Text style={[title, style]} {...rest}>{children}</Text>

export default Title
