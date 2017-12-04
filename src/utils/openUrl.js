import { Linking } from 'react-native'

const openUrl = async (url) => {
  const supported = await Linking.canOpenURL(url)
  if (supported) {
    Linking.openURL(url)
  }
}

export default openUrl
