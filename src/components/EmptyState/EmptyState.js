import React from 'react'
import { View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import i18n from 'i18n'
import { Text } from 'components'
import styles from './EmptyState.styles'
import { WIDTH as DEVICE_WIDTH, ACTIVE_OPACITY } from 'theme'

const emptyStateBackgroundUrl = require('assets/images/empty-state-background.png')
const emptyStateGeneralBackgroundUrl = require('assets/images/empty-state-general-background.png')
const emptyStateButtonUrl = require('assets/images/empty-state-button.png')

const { textContainer, emptyStateText, emptyStateHeader } = styles

const WIDTH = DEVICE_WIDTH - 20
const BACKGROUND_RATIO = 657 / 1059
const BACKGROUND_BUTTON_RATIO = 119 / 353
const BUTTON_RATIO = 498 / 414

const EmptyState = ({
  title = '',
  generalTitle = i18n.t('Common:nothingToDisplayTitle'),
  description = '',
  generalDescription = i18n.t('Common:nothingToDisplayDescription'),
  onPress
}) =>
  <View>
    <ImageBackground
      source={onPress ? emptyStateBackgroundUrl : emptyStateGeneralBackgroundUrl}
      style={{
        marginTop: 100,
        width: WIDTH,
        height: WIDTH * BACKGROUND_RATIO,
        alignItems: 'center',
        justifyContent: 'flex-end'
      }}
      resizeMode={'contain'}
    >
      {onPress &&
        <TouchableOpacity activeOpacity={ACTIVE_OPACITY} onPress={onPress}>
          <Image
            source={emptyStateButtonUrl}
            style={{
              width: WIDTH * BACKGROUND_BUTTON_RATIO,
              height: WIDTH * BACKGROUND_BUTTON_RATIO * BUTTON_RATIO,
              position: 'relative',
              left: 10,
              bottom: 0
            }}
          />
        </TouchableOpacity>
      }
    </ImageBackground>
    <View style={textContainer}>
      <Text style={emptyStateHeader}>
        {onPress ? title : generalTitle}
      </Text>
      <Text style={emptyStateText}>
        {onPress ? description : generalDescription}
      </Text>
    </View>
  </View>

export default EmptyState
