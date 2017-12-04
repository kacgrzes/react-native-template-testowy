import { Navigation } from 'react-native-navigation'
import { getStorybookUI, configure } from '@storybook/react-native'
import { loadStories } from './storyLoader'

configure(() => {
  loadStories()
}, module)

const StorybookUI = getStorybookUI({ port: 7007, onDeviceUI: true })

Navigation.registerComponent('Storybook', () => StorybookUI)
Navigation.startSingleScreenApp({
  screen: {
    screen: 'Storybook',
    navigatorStyle: {
      navBarHidden: true
    }
  }
})

export default StorybookUI
