import React, { Component } from 'react'
import { storiesOf } from '@storybook/react-native'
import CenterView from 'utils/CenterView'
import RadioButton from './'

export default class RadioButtonStory extends Component {
  state = {
    selected: this.props.selected
  }

  onPress = () => {
    this.setState({ selected: !this.state.selected })
  }

  render () {
    return (
      <CenterView>
        <RadioButton
          {...this.props}
          onPress={this.onPress}
          selected={this.state.selected}
        />
      </CenterView>
    )
  }
}

storiesOf('Atom / Radio Button', module)
  .addDecorator(getStory =>
    <CenterView>{getStory()}</CenterView>
  )
  .add('Selected', () =>
    <RadioButtonStory selected />
  )
  .add('Unselected', () =>
    <RadioButtonStory />
  )
  .add('Disabled', () =>
    <RadioButtonStory disabled />
  )
  .add('Disabled and selected', () =>
    <RadioButtonStory selected disabled />
  )
  .add('Small selected', () =>
    <RadioButtonStory selected small />
)
