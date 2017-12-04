import { StyleSheet } from 'react-native'
import colors, { font } from 'theme'

const styles = StyleSheet.create({
  containerView: {
    borderRadius: 8,
    paddingVertical: 2,
    paddingHorizontal: 6
  },
  textLabel: {
    fontFamily: font.semibold,
    fontSize: 10,
    lineHeight: 12,
    color: colors.white
  }
})

export default styles
