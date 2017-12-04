import { StyleSheet } from 'react-native'
import colors from 'theme'

const styles = StyleSheet.create({
  outer: {
    height: 20,
    width: 20,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.secondary,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center'
  },

  inner: {
    height: 7,
    width: 9
  },

  outerDisabled: {
    backgroundColor: colors.grey
  }
})

export default styles
