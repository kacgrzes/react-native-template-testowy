import { StyleSheet } from 'react-native'
import colors, { font } from 'theme'

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50
  },
  emptyStateHeader: {
    fontSize: 17,
    fontFamily: font.semibold,
    marginBottom: 10,
    color: colors.dark
  },
  emptyStateText: {
    color: colors.silver,
    textAlign: 'center'
  }
})

export default styles
