import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import Card from './'
import { Text } from 'components'

storiesOf('Atom / Card', module)
  .addDecorator(getStory =>
    <View style={{ backgroundColor: '#fafafa', flex: 1 }}>
      <View style={{ flex: 0.5, padding: 8 }}>{getStory()}</View>
    </View>
  )
  .add('Default', () =>
    <Card>
      <Text>Default</Text>
    </Card>
  )
  .add('Rounded', () =>
    <Card rounded>
      <Text>Rounded</Text>
    </Card>
  )
  .add('Rounded without shadow', () =>
    <Card rounded shadowed={false}>
      <Text>Rounded without shadow</Text>
    </Card>
  )
  .add('With title', () =>
    <Card title={'Title'}>
      <Text>Rounded with title</Text>
    </Card>
  )
  .add('Rounded with title', () =>
    <Card rounded title={'Title'}>
      <Text>Rounded with title</Text>
    </Card>
  )
  .add('Rounded with title', () =>
    <Card rounded title={'Title'}>
      <Text>Rounded with title</Text>
    </Card>
  )
  .add('Rounded with title and close button', () =>
    <Card rounded title={'Title'} onClosePress={() => {}}>
      <Text>Rounded with title and close button.</Text>
    </Card>
  )
