import React, { Component } from 'react'
import { storiesOf } from '@storybook/react-native'
import CenterView from 'utils/CenterView'
import ProductImage from './'

export default class ProductImageStory extends Component {
  state = {
    selected: this.props.selected
  }

  onPress = () => {
    this.setState({ selected: !this.state.selected })
  }

  render () {
    return (
      <CenterView>
        {this.props.withoutOnPress
          ? <ProductImage
            {...this.props}
            selected={this.state.selected}
            />
          : <ProductImage
            {...this.props}
            onPress={this.onPress}
            selected={this.state.selected}
        />}
      </CenterView>
    )
  }
}

storiesOf('Atom / Product Image', module)
  .addDecorator(getStory =>
    <CenterView>{getStory()}</CenterView>
  )
  .add('Selected', () =>
    <ProductImageStory selected />
  )
  .add('Unselected', () =>
    <ProductImageStory />
  )
  .add('Not selectable', () =>
    <ProductImageStory withoutOnPress />
  )
