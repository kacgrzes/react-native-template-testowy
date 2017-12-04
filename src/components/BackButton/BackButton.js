import React from 'react'
import { TouchableOpacity, View, Image, Platform } from 'react-native'
import { Text } from 'components'
import i18n from 'i18n'
import styles from './BackButton.styles'
import NavigationService from 'services/NavigationService'

const { backButton, backButtonIcon, backButtonText } = styles

const BackButton = ({ hideIcon = false, hideText = false, navigator, ...rest }) => {
  const isTextVisible = Platform.OS === 'ios' && !hideText
  const isIconVisible = !hideIcon

  return <TouchableOpacity
    testID='backButton'
    onPress={() => NavigationService.pop()}
  >
    <View style={backButton}>
      { isIconVisible &&
        <Image
          source={require('assets/images/icon-back.png')}
          style={backButtonIcon}
          resizeMode={'contain'}
        /> }
      { isTextVisible &&
        <Text
          style={backButtonText}
        >
          {i18n.t('Common:back', 'Back')}
        </Text>
      }
    </View>
  </TouchableOpacity>
}

export default BackButton
