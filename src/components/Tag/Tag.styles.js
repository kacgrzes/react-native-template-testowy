import { StyleSheet } from 'react-native'
import { font } from 'theme'

const styles = StyleSheet.create({
  containerView: {
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingTop: 3.5,
    paddingBottom: 2.5,
    marginRight: 4
  },
  textLabel: {
    fontFamily: font.regular,
    fontSize: 12,
    lineHeight: 12
  }
})

export default styles
