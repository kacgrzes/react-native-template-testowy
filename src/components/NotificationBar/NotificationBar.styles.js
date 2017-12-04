import { StyleSheet } from 'react-native'
import colors, { font } from 'theme'

const styles = StyleSheet.create({
  touchable: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.lightGreen,
    marginHorizontal: 6,
    marginBottom: 6
  },
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    shadowOpacity: 0.2,
    shadowColor: colors.black,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 0
    }
  },
  arrowRight: {
    tintColor: colors.green
  },
  text: {
    flex: 1,
    marginHorizontal: 10,
    fontFamily: font.semibold,
    fontSize: 14,
    color: colors.dark
  }
})

export default styles
