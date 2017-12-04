import React from 'react'
import { storiesOf } from '@storybook/react-native'
import CenterView from 'utils/CenterView'
import Link from './'

storiesOf('Atom / Link', module)
  .addDecorator(getStory =>
    <CenterView>{getStory()}</CenterView>
  )
  .add('Basic link', () =>
    <Link>This is a link</Link>
  )
  .add('Basic link', () =>
    <Link>This is another link</Link>
  )
