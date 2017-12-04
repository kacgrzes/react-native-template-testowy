import React, { Component } from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import Menu from './'
import Button from 'components/Button'

class MenuStory extends Component {
  state = {
    isMenuOpen: false
  }

  onPress = () => {
    setTimeout(() => {
      this.setState({ isMenuOpen: !this.state.isMenuOpen })
    }, 2000)

    this.setState({ isMenuOpen: !this.state.isMenuOpen })
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center' }} >
          <Button onPress={this.onPress}>Tap me!</Button>
        </View>
        <Menu isOpen={this.state.isMenuOpen} />
      </View>
    )
  }
}

storiesOf('Atom / Menu', module)
  .add('Default', () =>
    <MenuStory />
  )
