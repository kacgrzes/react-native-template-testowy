// @flow

import * as React from 'react'
import { View, ScrollView, Platform } from 'react-native'
import styles from './Screen.styles'
import colors from 'theme'

type Props = {
  children?: React.Node,
  scrollable?: boolean,
  style?: any,
  contentContainerStyle?: any,
  rest?: any
};

const Screen = ({ children, contentContainerStyle, style, scrollable, ...rest } : Props) => {
  if (scrollable) {
    return (
      <ScrollView
        contentContainerStyle={[styles.content, contentContainerStyle]}
        style={[styles.view, style]}
        endFillColor={colors.background}
        keyboardShouldPersistTaps='handled'
        keyboardDismissMode={Platform.OS === 'ios' ? 'on-drag' : 'none'}
        {...rest}
      >
        {children}
      </ScrollView>
    )
  }

  return (
    <View style={[styles.view, style]} {...rest}>
      {children}
    </View>
  )
}

export default Screen
