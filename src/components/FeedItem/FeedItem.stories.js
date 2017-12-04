import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'
import FeedItem from './FeedItem'
import { Card } from 'components'

const feedItem = {
  imageUrl: 'https://pl.shoplo.com/blog/wp-content/uploads/2013/09/ekomersy_2013-900x400.jpg',
  title: '8 Simple Ecommerce Inventory Tips',
  description: 'Have you ever gone to a nice restaurant on a Friday, wanting to enjoy a steak after a long week’s work? You place your order only to be told that they’re all out?',
  category: 'ONLINE STORE'
}

storiesOf('Molecule / FeedItem', module)
  .addDecorator(getStory =>
    <View style={{ backgroundColor: '#fafafa', flex: 1 }}>
      <View style={{ margin: 10 }}>
        <Card style={{ paddingHorizontal: 0, paddingVertical: 0 }}>{getStory()}</Card>
      </View>
    </View>
  )
  .add('default', () => {
    return <FeedItem feedItem={feedItem} />
  })
