import { StyleSheet } from 'react-native'
import colors, { font } from 'theme'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 16
  },
  category: {
    fontSize: 10,
    color: colors.silver,
    fontFamily: font.semibiold
  },
  title: {
    marginTop: 10,
    fontSize: 17,
    color: colors.dark,
    fontFamily: font.semibiold
  },
  description: {
    fontFamily: font.regular,
    fontSize: 14,
    marginTop: 10
  }
})

export default styles
