import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import style from './CenterView.styles'

const CenterView = props =>
  <View style={style.main}>
    {props.children}
  </View>

CenterView.propTypes = {
  children: PropTypes.node.isRequired
}

export default CenterView
