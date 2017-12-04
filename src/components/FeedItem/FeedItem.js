import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Text } from 'components'
import styles from './FeedItem.styles'
import FlexImage from 'react-native-flex-image'

const { container, category: categoryStyle, title: titleStyle, description: descriptionStyle } = styles

const FeedItem = ({ feedItem, onPress }) => {
  const { title = '', category = '', description = '' } = feedItem
  const image = feedItem.imageUrl ? <FlexImage source={{ uri: feedItem.imageUrl }} /> : null
  return (
    <TouchableOpacity onPress={onPress ? () => onPress(feedItem) : null}>
      {image}
      <View style={container}>
        <Text style={categoryStyle}>{category.toUpperCase()}</Text>
        <Text style={titleStyle}>{title}</Text>
        <Text style={descriptionStyle} numberOfLines={4}>
          {description.replace(/<[^>]+>/g, '').trim()}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default FeedItem
