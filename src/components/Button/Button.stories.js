import React from 'react'
import { storiesOf } from '@storybook/react-native'
import CenterView from 'utils/CenterView'
import Button from './'

// TODO: add more stories like: disabled button state, check onPress event, try to set custom styles for button, etc.

storiesOf('Atom / Button', module)
  .addDecorator(getStory =>
    <CenterView>{getStory()}</CenterView>
  )
  .add('With text', () =>
    <Button>Text</Button>
  )
  .add('With different text', () =>
    <Button>Hello world!</Button>
  )
  .add('With emoji', () =>
    <Button>😀 😎 👍 💯</Button>
  )
  .add('With very long text', () =>
    <Button>Instantly break out into full speed gallop across the house for no reason chew foot pet right here, no not there, here</Button>
  )
