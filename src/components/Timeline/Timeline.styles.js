import { StyleSheet } from 'react-native'

let defaultCircleColor = '#007AFF'
let defaultLineWidth = 2
let defaultLineColor = '#007AFF'
let defaultTimeTextColor = 'black'

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1
  },
  lineContainer: {
    flexGrow: 0,
    marginLeft: 14
  },
  line: {
    borderColor: defaultLineColor,
    flex: 1,
    borderLeftWidth: defaultLineWidth
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 20,
    left: -4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: defaultCircleColor
  },
  container: {
    flex: 1
  },
  listview: {
    flex: 1
  },
  sectionHeader: {
    marginBottom: 15,
    height: 30,
    justifyContent: 'center'
  },
  sectionHeaderText: {
    color: '#FFF',
    fontSize: 18,
    alignSelf: 'center'
  },
  rowContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  timeContainer: {
    minWidth: 45
  },
  time: {
    textAlign: 'right',
    color: defaultTimeTextColor
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  details: {
    flexDirection: 'row',
    flex: 1
  },
  description: {
    marginTop: 10
  },
  separator: {
    height: 1,
    backgroundColor: '#aaa'
  }
})

export default styles
