import { StyleSheet } from 'react-native'
import colors from 'theme'

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    backgroundColor: colors.white
  },

  cardHeader: {
    height: 50,
    backgroundColor: colors.primary
  },

  cardHeaderRounded: {
    height: 50,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6
  },

  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  titleStyle: {
    color: colors.white,
    fontSize: 17,
    marginBottom: 0
  },

  content: {
    paddingHorizontal: 16,
    paddingVertical: 20
  },

  shadowedCard: {
    shadowOpacity: 0.2,
    shadowColor: colors.black,
    shadowRadius: 1,
    shadowOffset: {
      width: 0,
      height: 2
    },
    elevation: 2
  },

  roundedCard: {
    borderRadius: 6
  }
})

export default styles
