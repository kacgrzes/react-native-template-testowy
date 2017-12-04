import { StyleSheet } from 'react-native'
import colors from 'theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  info: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 10
  },
  lineView: {
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  title: {
    marginBottom: 0
  },
  status: {
    marginLeft: 5
  },
  label: {
    color: colors.silver
  },
  separator: {
    marginVertical: 19
  }
})

export default styles
