import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import styles from './Card.styles'
import { Title } from 'components'
import colors, { ACTIVE_OPACITY } from 'theme'

const {
  card,
  cardHeader,
  cardHeaderRounded,
  titleContainer,
  titleStyle,
  content,
  shadowedCard,
  roundedCard
} = styles

const Card = ({
  children,
  rounded = false,
  shadowed = true,
  title = null,
  onClosePress = null,
  style
}) => {
  const closeButton = onClosePress
    ? (
      <TouchableOpacity style={{ position: 'absolute', right: 13, top: 13 }} activeOpacity={ACTIVE_OPACITY} onPress={onClosePress}>
        <Image
          style={{ tintColor: colors.white }}
          source={require('assets/images/icon-close.png')}
        />
      </TouchableOpacity>
    )
    : null

  const titleView = title
    ? (
      <View style={rounded ? cardHeaderRounded : cardHeader}>
        <View style={[titleContainer]}>
          <Title style={titleStyle}>
            {title}
          </Title>
        </View>
        {closeButton}
      </View>
    )
    : null

  if (title) {
    return (
      <View style={[card, shadowed && shadowedCard, rounded && roundedCard, style]}>
        {titleView}
        <View style={content}>
          {children}
        </View>
      </View>
    )
  }

  return (
    <View style={[card, content, shadowed && shadowedCard, rounded && roundedCard, style]}>
      {children}
    </View>
  )
}

export default Card
