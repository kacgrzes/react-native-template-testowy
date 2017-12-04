import React from 'react'
import { storiesOf } from '@storybook/react-native'
import CenterView from 'utils/CenterView'
import Tag from './'
import colors from 'theme'

storiesOf('Atom / Tag', module)
  .addDecorator(getStory =>
    <CenterView>{getStory()}</CenterView>
  )
  .add('Silver', () =>
    <Tag text={'Fulfilled'} color={colors.silver} />
  )
  .add('Orange', () =>
    <Tag text={'Pending'} color={colors.orange} />
  )
  .add('Very long text', () =>
    <Tag text={'This is very long text just to check what happens when we put it as tag\'s text'} color={colors.silver} />
  )
