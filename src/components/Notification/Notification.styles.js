import { Platform } from 'react-native'
import colors, { WIDTH } from 'theme'

const styles = {
  messageStyle: {
    fontFamily: 'ProximaNova-Semibold',
    fontSize: 10,
    lineHeight: 12,
    color: colors.white,
    alignSelf: 'center'
  },
  containerStyle: {
    width: WIDTH,
    padding: 9,
    paddingTop: Platform.OS === 'ios' ? 29 : 9
  },
  success: {
    backgroundColor: colors.success
  },
  error: {
    backgroundColor: colors.danger
  }
}

export default styles
