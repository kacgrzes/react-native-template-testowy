import { StyleSheet } from 'react-native'
import colors from 'theme'

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1
  },
  textFieldContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  textField: {
    fontFamily: 'ProximaNova-Regular'
  },
  iconContainer: {
    width: 24,
    height: 22,
    top: 20,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleTextStyle: {
    fontFamily: 'ProximaNova-Semibold',
    fontSize: 10,
    lineHeight: 14,
    paddingTop: 2
  },
  labelTextStyle: {
    fontFamily: 'ProximaNova-Regular',
    lineHeight: 14
  },
  affixTextStyle: {
    color: colors.silver,
    fontFamily: 'ProximaNova-Regular'
  }
})

export default styles
