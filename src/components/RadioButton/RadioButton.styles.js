import { StyleSheet } from 'react-native'
import colors from 'theme'

const styles = StyleSheet.create({
  outerCircle: {
    height: 30,
    width: 30,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.secondary,
    backgroundColor: colors.white
  },

  innerCircle: {
    backgroundColor: colors.primary,
    flex: 1,
    borderRadius: 100,
    margin: 4
  },

  outerCircleSmall: {
    height: 20,
    width: 20
  },

  innerCircleSmall: {
    margin: 3
  },

  outerCircleDisabled: {
    backgroundColor: colors.grey
  },

  innerCircleDisabled: {
    backgroundColor: colors.secondary
  }
})

export default styles
