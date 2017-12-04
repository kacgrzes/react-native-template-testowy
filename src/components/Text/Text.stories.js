import React from 'react'
import { storiesOf } from '@storybook/react-native'
import CenterView from 'utils/CenterView'
import Text from './'

storiesOf('Atom / Text', module)
  .addDecorator(getStory =>
    <CenterView>{getStory()}</CenterView>
  )
  .add('With simple text', () =>
    <Text>Simple text</Text>
  )
  .add('With different text', () =>
    <Text>Hello world!</Text>
  )
  .add('With emoji', () =>
    <Text>😀 😎 👍 💯</Text>
  )
  .add('With very long text', () =>
    <Text>Instantly break out into full speed gallop across the house for no reason chew foot pet right here, no not there, here</Text>
  )
