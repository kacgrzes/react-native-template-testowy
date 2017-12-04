import { Navigation } from 'react-native-navigation'
import { basicEnhancer } from 'hoc'

const registerComponent = (name, Component) => Navigation.registerComponent(`Shoplo.${name}`, () => basicEnhancer(Component))

export default registerComponent
