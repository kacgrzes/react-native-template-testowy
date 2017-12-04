import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const font = {
  light: 'ProximaNova-Light',
  regular: 'ProximaNova-Regular',
  semibold: 'ProximaNova-Semibold'
}

const colors = {
  // black and white
  dark: '#2C3238',
  silver: '#6F7982',
  grey: '#D7D7D7',
  lightGrey: '#F7F7F7',
  white: '#FFFFFF',
  black: '#000000',

  // colors
  purple: '#6A5AFF',
  darkPurple: '#5F51E6',
  red: '#FF4C6B',
  green: '#19AB42',
  lightGreen: '#EDF9E6',
  blue: '#5A96FF',
  lightBlue: '#5ACFFF',
  orange: '#FFBF4C',
  darkOrange: '#FF824C',
  darkYellow: '#E1A630',
  lightYellow: '#FDF5E5',

  // brand colors
  primary: '#6A5AFF', // purple
  secondary: '#D7D7D7', // grey
  success: '#00AD3C', // green
  danger: '#FF4C6B', // red

  // screen color
  screen: '#F7F7F7', // lightGrey

  // Button
  disabledButtonBackground: '#EAEEF2',
  disabledButtonFont: '#A6AEB6',

  // SearchBar
  searchBackground: '#5349e2'
}

export const navigatorStyle = {
  navBarTextColor: colors.white,
  navBarTextFontFamily: font.semibold,
  navBarBackgroundColor: colors.primary,
  navBarButtonColor: colors.white,
  navBarTextFontSize: 17,
  navBarNoBorder: true,
  navBarSubtitleColor: colors.white,
  navBarSubtitleFontFamily: font.regular,
  screenBackgroundColor: 'transparent',
  statusBarTextColorScheme: 'light',
  statusBarTextColorSchemeSingleScreen: 'light',
  forceTitlesDisplay: true,
  topBarElevationShadowEnabled: false,
  statusBarHidden: false,
  statusBarColor: colors.primary,
  orientation: 'portrait'
}

export const tabsStyle = {
  tabBarButtonColor: colors.silver, // change the color of the tab icons and text (also unselected)
  tabBarSelectedButtonColor: colors.primary, // change the color of the selected tab icon and text (only selected)
  tabBarTranslucent: true, // change the translucent of the tab bar to false
  tabBarTextFontFamily: font.regular, // change the tab font family
  tabBarBackgroundColor: colors.white,
  tabBarLabelColor: colors.silver, // iOS only. change the color of tab text
  tabBarSelectedLabelColor: colors.primary, // iOS only. change the color of the selected tab text
  tabBarHideShadow: false
}

export const appStyle = {
  ...navigatorStyle,
  ...tabsStyle
}

export const ACTIVE_OPACITY = 0.8
export const BACKDROP_OPACITY = 0.6
export const WIDTH = width
export const HEIGHT = height

export default colors
