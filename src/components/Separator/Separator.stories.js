import React from 'react'
import { storiesOf } from '@storybook/react-native'
import CenterView from 'utils/CenterView'
import Separator from './'

storiesOf('Atom / Separator', module)
  .addDecorator(getStory =>
    <CenterView>{getStory()}</CenterView>
  )
  .add('Default', () =>
    <Separator style={{ width: 300 }} />
  )
  .add('Different color', () =>
    <Separator style={{ width: 300, backgroundColor: '#fa562f' }} />
  )
