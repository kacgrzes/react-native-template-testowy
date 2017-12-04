import { Navigation } from 'react-native-navigation'
import { registerScreen } from 'utils'

// Auth
import Login from './Login'
import PasswordRecovery from './Login/scenes/PasswordRecovery'

// Tab1
import Tab1 from './Tab1'

// Tab2
import Tab2 from './Tab2'

// Others
import Notification from 'components/Notification'
import BackButton from 'components/BackButton'

export function registerScreens () {
  // Auth
  registerScreen('Login', Login)
  registerScreen('PasswordRecovery', PasswordRecovery)

  // Tab1
  registerScreen('Tab1', Tab1)

  // Tab2
  registerScreen('Tab2', Tab2)
  
  // Navigation and BackButton don't have any enhancements so it can be register as normal screen
  Navigation.registerComponent('App.InAppNotification', () => Notification)
  Navigation.registerComponent('App.BackButton', () => BackButton)
}
