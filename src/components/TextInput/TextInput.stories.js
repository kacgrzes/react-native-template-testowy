import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import TextInput from './'

storiesOf('Atom / TextInput', module)
  .add('Empty state', () =>
    <TextInput label={'name'} />
  )
  .add('Some value', () =>
    <TextInput label={'name'} value={'John'} />
  )
  .add('With image', () =>
    <TextInput label={'name'} imageUrl={require('assets/images/icon-mail.png')} />
  )
  .add('Focus state', () =>
    <TextInput label={'name'} value={'John'} autoFocus />
  )
  .add('Error state', () =>
    <TextInput label={'name'} error={'Cannot be empty'} />
  )
  .add('Hint state', () =>
    <TextInput label={'name'} title={'Names are longer, aren\'t they?'} value={'John'} />
  )
  .add('Few text inputs', () =>
    <View>
      <TextInput label={'First name'} title={'Names are longer, aren\'t they?'} value={'John'} />
      <TextInput label={'Last name'} value={'Doe'} />
      <TextInput label={'Phone'} />
      <TextInput label={'Email'} imageUrl={require('assets/images/icon-mail.png')} />
    </View>
  )
