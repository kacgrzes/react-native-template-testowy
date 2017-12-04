import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    borderRadius: 6
  },
  title: {
    marginBottom: 0
  },
  titleView: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 10
  }
})

export default styles
