import { StyleSheet } from 'react-native'
import colors from 'theme'

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,

    // FIXME: Add gutter
    backgroundColor: colors.purple,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.purple,
    paddingHorizontal: 8
  },

  buttonShadow: {
    shadowOpacity: 0.2,
    shadowColor: colors.black,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2
    }
  },

  buttonText: {
    fontSize: 14,
    color: colors.white,
    flex: 1,
    textAlign: 'center'
  },

  buttonDisabled: {
    backgroundColor: colors.disabledButtonBackground,
    borderColor: colors.disabledButtonBackground
  },

  buttonDisabledText: {
    color: colors.disabledButtonFont
  },

  buttonOutline: {
    backgroundColor: colors.white
  },

  buttonOutlineText: {
    color: colors.primary
  }
})

export default styles
