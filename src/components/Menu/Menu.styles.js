import { StyleSheet } from 'react-native'
import colors from 'theme'

const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  menuStyle: {
    backgroundColor: colors.primary,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  linkStyle: {
    fontSize: 17,
    lineHeight: 40,
    color: colors.white,
    textAlign: 'left',
    paddingHorizontal: 40
  },
  imageStyle: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default styles
