import React from 'react'
import { storiesOf } from '@storybook/react-native'
import CenterView from 'utils/CenterView'
import Title from './'

storiesOf('Atom / Title', module)
  .addDecorator(getStory =>
    <CenterView>{getStory()}</CenterView>
  )
  .add('With simple Title', () =>
    <Title>Simple Title</Title>
  )
  .add('With different Title', () =>
    <Title>Hello world!</Title>
  )
  .add('With emoji', () =>
    <Title>😀 😎 👍 💯</Title>
  )
  .add('With very long Title', () =>
    <Title>Instantly break out into full speed gallop across the house for no reason chew foot pet right here, no not there, here</Title>
  )
