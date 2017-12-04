import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const KeyboardAware = ({ children, contentContainerStyle = null }) =>
  <KeyboardAwareScrollView
    contentContainerStyle={contentContainerStyle}
    extraScrollHeight={44}
    keyboardOpeningTime={0}
    keyboardShouldPersistTaps='handled'
  >
    {children}
  </KeyboardAwareScrollView>

export default KeyboardAware
