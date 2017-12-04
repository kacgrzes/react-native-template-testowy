import React from 'react'
import { storiesOf } from '@storybook/react-native'
import CenterView from 'utils/CenterView'
import Status from './'

storiesOf('Atom / Status', module)
  .addDecorator(getStory =>
    <CenterView>{getStory()}</CenterView>
  )
  .add('Online', () =>
    <Status online />
  )
  .add('Offline', () =>
    <Status />
  )
