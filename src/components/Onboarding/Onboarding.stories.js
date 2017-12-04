import React from 'react'
import { storiesOf } from '@storybook/react-native'
import Onboarding from './'

storiesOf('Molecule / Onboarding', module)
  .add('default', () =>
    <Onboarding />
  )
  .add('Add Channel', () =>
    <Onboarding
      imageSource={require('assets/images/onboarding-add-channel.png')}
      title='Add Channel'
    />
  )
  .add('Add Product', () =>
    <Onboarding
      imageSource={require('assets/images/onboarding-addproduct.png')}
      title='Add Product'
    />
  )
  .add('Overview', () =>
    <Onboarding
      imageSource={require('assets/images/onboarding-overview.png')}
      title='Overview'
    />
)
