import { StyleSheet } from 'react-native'
import colors, { font } from 'theme'

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 0
  },
  containerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  image: {
    top: 12
  },
  addProductImage: {
    marginLeft: 31,
    top: 12
  },
  overviewImage: {
    marginRight: 20
  },
  imageNoProps: {
    top: 0
  },
  infoView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.purple,
    paddingBottom: 20
  },
  textContainer: {
    alignItems: 'center',
    width: '75%',
    backgroundColor: 'transparent',
    marginBottom: 30
  },
  titleText: {
    marginBottom: 5,
    marginTop: 30,
    color: colors.white,
    fontSize: 18,
    textAlign: 'center'
  },
  contentText: {
    textAlign: 'center',
    color: colors.white
  },
  buttonText: {
    color: colors.white,
    fontFamily: font.semibold
  }
})

export default styles
