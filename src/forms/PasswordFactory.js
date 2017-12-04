import t from 'tcomb-form-native'
import React from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { TextInput } from 'components'

const { Textbox } = t.form

const iconPadlock = require('assets/images/icon-padlock.png')

// extend the base Component
class PasswordFactory extends Textbox {
  state = {
    isPasswordVisible: false
  }

  shouldComponentUpdate (nextProps, nextState) {
    const should = (
      nextState.value !== this.state.value ||
      nextState.hasError !== this.state.hasError ||
      nextState.isPasswordVisible !== this.state.isPasswordVisible ||
      nextProps.options !== this.props.options ||
      nextProps.type !== this.props.type
    )

    return should
  }

  renderPasswordVisibilityIcon = () => {
    const source = this.state.isPasswordVisible ? require('assets/images/icon-hide.png') : require('assets/images/icon-show.png')

    return (
      <TouchableOpacity testID='Login:eye' style={{ height: 24, width: 24, justifyContent: 'center', alignItems: 'center' }} onPress={this.togglePasswordVisibility}>
        <Image source={source} width={20} height={20} />
      </TouchableOpacity>
    )
  }

  togglePasswordVisibility = () => {
    this.setState({ isPasswordVisible: !this.state.isPasswordVisible })
  }

  getTemplate () {
    return (locals) => {
      return (
        <TextInput
          {...locals}
          inputRef={ref => { this.ref = ref }}
          secureTextEntry={!this.state.isPasswordVisible}
          imageUrl={iconPadlock}
          renderAccessory={this.renderPasswordVisibilityIcon}
        />
      )
    }
  }

  getLocals () {
    const locals = super.getLocals()

    return locals
  }
}

export default PasswordFactory
