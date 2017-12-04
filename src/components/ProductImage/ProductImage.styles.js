import { StyleSheet } from 'react-native'
import colors from 'theme'

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50
  },
  imageContainer: {
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: colors.white,
    overflow: 'hidden'
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: colors.white,
    backgroundColor: colors.primary,
    fontSize: 10,
    lineHeight: 14,
    marginBottom: 0
  },
  container: {
    marginRight: 8,
    alignItems: 'center'
  },
  spinnerBackground: {
    flex: 1,
    backgroundColor: '#ffffffaa',
    justifyContent: 'center',
    position: 'absolute',
    top: 1,
    left: 1,
    width: 50,
    height: 50,
    borderRadius: 5
  }
})

export default styles
