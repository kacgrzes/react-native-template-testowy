import React from 'react'
import { storiesOf } from '@storybook/react-native'
import CenterView from 'utils/CenterView'
import ChannelButton from './'

storiesOf('Molecule / ShoploChannelButton', module)
  .addDecorator(getStory =>
    <CenterView>{getStory()}</CenterView>
  )
  .add('Default', () =>
    <ChannelButton />
  )
  .add('With title', () =>
    <ChannelButton>Channel button</ChannelButton>
  )
