import React, { Component } from 'react'
import { storiesOf } from '@storybook/react-native'
import CenterView from 'utils/CenterView'
import Checkbox from './'

export default class CheckboxStory extends Component {
  state = {
    isChecked: this.props.isChecked
  }

  onPress = () => {
    this.setState({ isChecked: !this.state.isChecked })
  }

  render () {
    return (
      <CenterView>
        <Checkbox
          {...this.props}
          onPress={this.onPress}
          isChecked={this.state.isChecked}
        />
      </CenterView>
    )
  }
}

storiesOf('Atom / Checkbox', module)
  .addDecorator(getStory =>
    <CenterView>{getStory()}</CenterView>
  )
  .add('Checked', () =>
    <CheckboxStory isChecked />
  )
  .add('Unchecked', () =>
    <CheckboxStory />
  )
  .add('Disabled', () =>
    <CheckboxStory disabled />
  )
  .add('Disabled and checked', () =>
    <CheckboxStory isChecked disabled />
  )
