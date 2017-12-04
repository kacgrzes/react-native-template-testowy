import React from 'react'
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import t from 'tcomb-form-native'
import { Text, Separator } from 'components'
import colors, { ACTIVE_OPACITY } from 'theme'

const { Component } = t.form

class StepperFactory extends Component {
  state = {
    quantity: this.props.options.value,
    label: this.props.options.label
  }

  shouldComponentUpdate (nextProps, nextState) {
    return nextState.quantity !== this.state.quantity
  }

  getTemplate () {
    return (locals) => {
      return (
        <View style={{ marginTop: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
            <Text style={{ color: colors.silver }}>{this.state.label ? this.state.label : 'Quantity'}</Text>
            {this.renderStepper()}
          </View>
          <Separator style={{ backgroundColor: colors.silver }} />
        </View>
      )
    }
  }

  increaseQuantity = () => {
    this.setState({ quantity: this.state.quantity + 1 }, () => this.props.onChange(this.state.quantity))
  }

  decreaseQuantity = () => {
    if (this.state.quantity === 0) {
      return
    }

    this.setState({ quantity: this.state.quantity - 1 }, () => this.props.onChange(this.state.quantity))
  }

  renderStepper = () => {
    return (
      <View style={styles.lineView}>
        <TouchableOpacity hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} style={{ marginRight: 12 }} activeOpacity={ACTIVE_OPACITY} onPress={this.decreaseQuantity}>
          <View style={styles.roundButtonBackground}>
            <Image style={styles.icon} source={require('assets/images/icon-substract.png')} />
          </View>
        </TouchableOpacity>
        <Text>{this.state.quantity}</Text>
        <TouchableOpacity hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} style={{ marginLeft: 12 }} activeOpacity={ACTIVE_OPACITY} onPress={this.increaseQuantity}>
          <View style={styles.roundButtonBackground}>
            <Image style={styles.icon} source={require('assets/images/icon-add.png')} />
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  getLocals () {
    const locals = super.getLocals()

    return locals
  }
}

const styles = StyleSheet.create({
  lineView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  roundButtonBackground: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.silver,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: 14,
    height: 14,
    tintColor: colors.white
  }
})

export default StepperFactory
