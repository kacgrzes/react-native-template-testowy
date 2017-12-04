import { Navigation } from 'react-native-navigation'
import { registerScreens } from 'scenes'
import { AuthService } from 'services'
import { generateTabs } from 'tabs'
import { tabsStyle, appStyle, navigatorStyle } from 'theme'
import { createDebuggingConfig } from 'utils'

// Set to true if want to disable yellow boxes on dev
console.disableYellowBox = false

if (__DEV__) {
  createDebuggingConfig()
}

registerScreens()

export const startTabBasedApp = async () => {
  const tabs = await generateTabs()

  Navigation.startTabBasedApp({
    tabs,
    appStyle: {...appStyle},
    tabsStyle: {...tabsStyle}
  })
}

export const startSingleScreenApp = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'App.Login',
      navigatorStyle: {...navigatorStyle}
    },
    animationType: 'none'
  })
}

const startApp = async () => {
  const isLoggedIn = await AuthService.isLoggedIn()

  if (isLoggedIn) {
    startTabBasedApp()
  } else {
    startSingleScreenApp()
  }
}

export default startApp
