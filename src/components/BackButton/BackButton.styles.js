import { StyleSheet } from 'react-native'
import colors, { font } from 'theme'

const styles = StyleSheet.create({
  backButton: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  backButtonIcon: {
    height: 24,
    width: 24,
    tintColor: colors.white
  },
  backButtonText: {
    color: colors.white,
    fontFamily: font.semibold
  }
})

export default styles
